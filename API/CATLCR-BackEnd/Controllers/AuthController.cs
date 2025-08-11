using CATLCR_BackEnd.Common;
using CATLCR_BackEnd.Common.Exceptions;
using CATLCR_BackEnd.Data.Security.Entities;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Models.Auth;
using CATLCR_BackEnd.Models.KPILCModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Mail;
using System.Security.Claims;

namespace CATLCR_BackEnd.Controllers
{
    public class AuthController : BaseController
    {

        /// <summary>
        /// The password hasher.
        /// </summary>
        private readonly IPasswordHasher<User> _hasher;

        private readonly IUserRepo _userRepo;
        /// <summary>
        /// The app configuration.
        /// </summary>
        private readonly IConfiguration _configuration;
        private readonly ICATLCRReferentiel _referentiel;
        public AuthController(
             IUserRepo userRepo
            , IPasswordHasher<User> passwordHasher
            , IConfiguration configuration, ICATLCRReferentiel referentiel)
            : base(userRepo)
        {
            _hasher = passwordHasher;
            _configuration = configuration;
            _userRepo = userRepo;
            _referentiel = referentiel;
        }

        //[AllowAnonymous]
        [HttpPost("Authenticate")]
        public ActionResult<LoginModel> AuthenticateUser(LoginModel login)
        {
            Util.ValidateArgumentNotNull(login, nameof(login));

            User user = _userRepo.UserByLogin(login.Login);
            if (user == null || user.PasswordHash == null)
            {
                throw new AuthenticationException($"Invalid credential (please check login or password)");
            }

            bool isValid = _hasher.VerifyHashedPassword(user, user.PasswordHash, login.Password) == PasswordVerificationResult.Success;
            if (!isValid)
            {
                throw new AuthenticationException($"Invalid credential (please check login or password)");
            }
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.AccessKey),
                new Claim(ClaimTypes.Role, user.Roles.First().RoleId.ToString())
            };

            var result = new LoginResult
            {
                Token = JwtBearerHelper.CreateToken(claims, _configuration),
                Name = user.FirstName,
                Id = user.Id,
                IsAdmin = user.Roles.Any(s => s.RoleId == new Guid(AdminRole)),
                IsAuthenticated = true
            };
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost("init")]
        public ActionResult<bool> InitPassword([FromBody] ResetModel reset)
        {
            Util.ValidateArgumentNotNull(reset, nameof(reset));


            User user = _userRepo.UserByToken(reset.Token);
            if (user == null || user.PasswordHash == null)
            {
                throw new AuthenticationException($"Invalid token");
            }

            reset.Password = _hasher.HashPassword(user, reset.Password);
            _userRepo.ResetPassword(user.Id, reset.Password);

            return Ok(true);
        }

        [AllowAnonymous]
        [HttpPost("send")]
        public ActionResult<bool> SendInitMail(RequestResetModel value)
        {
            Util.ValidateArgumentNotNull(value, nameof(value));

            User user = _userRepo.UserByMail(value.Mail);
            if (user == null)
            {
                throw new AuthenticationException($"Invalid Email");
            }

            var generator = System.Security.Cryptography.RandomNumberGenerator.Create();
            string token = Util.RandomString(32);
            string from = _configuration[_from];
            string smtp = _configuration[_smtp];
            string fromEnd = _configuration[_frontEnd];
            Convert.ToBase64String(user.Id.ToByteArray());
            string bodyTemplate = Util.GetEmailBodyTemplate("ResetPassword.html");
            string body = bodyTemplate
                .Replace("{User.FirstName}", user.FirstName)
                .Replace("{User.LastName}", user.LastName)
                .Replace("{activationCode}", token)
                .Replace("{frontend_base_url}", fromEnd)
                .Replace("{Login}", user.AccessKey);

            _userRepo.ResetPassword(user.Id, token);

            using (SmtpClient client = new SmtpClient(smtp))
            {
                MailMessage mail = new MailMessage();
                mail.To.Add(user.Email);
                mail.From = new MailAddress(from);
                mail.Subject = "Reset password";
                mail.Body = body;
                mail.IsBodyHtml = true;
                client.Send(mail);
            }
            return Ok(true);
        }



        [AllowAnonymous]
        [HttpPost("OrderAuthenticate")]
        public ActionResult OrderAuthenticate()
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var result = new LoginResult
            {
                Token = JwtBearerHelper.CreateOrederToken(claims, _configuration),
                IsAuthenticated = true
            };

            return Ok(result);
        }

         //[AllowAnonymous]
        [HttpPost("WindAuthenticate")]
        public ActionResult<KPILCLoginModel> WindAuthenticateUser()
        {
            try
            {
              
                string userName = HttpContext.User.Identity.Name;
                userName = userName.Substring(userName.IndexOf("\\") + 1);
               
                KPILCLoginModel model = new KPILCLoginModel();
               // WebUsers CurrentUser = new WebUsers();
                //User CurrentUser = new User();
                //CurrentUser = _referentiel.FindByAccesKey("DongreSu");
                CO2KPICLModel CurrentUser = new CO2KPICLModel();
                CurrentUser = _referentiel.GetCo2KPILCUsers("DongreSu");


                if (CurrentUser != null)
                    model.UserName = CurrentUser.FIRSTNAME + " " + CurrentUser.LASTNAME;
               

                var claims = new[]
               {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, CurrentUser.ID.ToString()),
                new Claim(ClaimTypes.Name, CurrentUser.ACCESSKEY),
               //new Claim(ClaimTypes.Role, CurrentUser.Role.First().RoleId.ToString())

            };
                var result = new KPILCLoginModel
                {
                    Token = JwtBearerHelper.CreateToken(claims, _configuration),
                    Name = CurrentUser.FIRSTNAME,
                    Id = CurrentUser.ID,
                    IsAdmin = true,
                    IsAuthenticated = true,
                    UserName = CurrentUser.FIRSTNAME + " " + CurrentUser.LASTNAME,
                    roleId = CurrentUser.ROLEID
                    // Url = model.Url,

                };
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }

        }
    }
}
