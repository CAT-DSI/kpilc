using AutoMapper;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Model;
using CATLCR_BackEnd.Models.KPILCModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using ServiceReference1;
using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Controllers
{
    public class UsersController : BaseController
    {
        private IUserRepo _userRepo;
        private ICATLCRReferentiel _CATLCRReferentiel;
        private readonly IMapper _mapper;
        public const string ReportsDirectory = "CATLCR";
        private readonly IConfiguration _configuration;
        private readonly DomainSettings _domainConfig;

        public UsersController(IUserRepo userRepo, ICATLCRReferentiel CATLCRReferentiel, IMapper mapper,
            IConfiguration configuration, IOptions<DomainSettings> domainOptions) : base(userRepo)
        {
            _userRepo = userRepo;
            _CATLCRReferentiel = CATLCRReferentiel;
            _mapper = mapper;
            _configuration = configuration;
            _domainConfig = domainOptions.Value; 
        }
        protected string BuildUrl(string reportName)
        {
            string urlWithoutParam = "";

            string customSetting = _configuration[reportServerUrl];

            if (customSetting != null)
            {
                urlWithoutParam = customSetting + "?%2f" + ReportsDirectory + "%2f" + reportName + "&rs%3aCommand=Render&rc%3aLinkTarget=main";
            }
            return urlWithoutParam;
        }
        [HttpGet("ExportClick")]
        public ActionResult ExportClick()
        {
            try
            {
                string userManagement = _configuration[WebUsersManagement];


                string url = "";
                url = BuildUrl(userManagement) + "&rc:Parameters=false&rc%3aDocMap=False" +
                    "&rs:Format=EXCELOPENXML&rs:ClearSession=true.xlsx";
                return Ok(url);
            }
            catch(Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        //[HttpGet]
        //public ActionResult GetAllUsers()
        //{
        //    try
        //    {
        //        var models = _mapper.Map<List<UserModel>>(_CATLCRReferentiel.GetAllUsers().ToList());

        //        return Ok(models);
        //    }
        //    catch (Exception)
        //    {

        //        return BadRequest("An unhandled error occured. Please ask for support !");
        //    }

        //}

        //[HttpGet("GetAllUsers")]
        //public ActionResult GetAllUsers(string AccessKey="sum",int type = 0)
        //{
        //    try
        //    {
        //        //var models = _mapper.Map<List<UserModel>>(_CATLCRReferentiel.GetAllUsers(page, pageSize,type, AccessKey).ToList());
        //        var models = _CATLCRReferentiel.GetAllUsers(type, AccessKey);
        //        return Ok(models);
        //    }
        //    catch (Exception ex)
        //    {

        //        return BadRequest("An unhandled error occured. Please ask for support !");
        //    }
        //}
        [HttpGet]
        public ActionResult GetAllUsers()
        {
            try
            {
                //var models = _mapper.Map<List<UserModel>>(_CATLCRReferentiel.GetAllUsers(page, pageSize,type, AccessKey).ToList());
                var models = _CATLCRReferentiel.GetAllUsers(0,"sm");
                return Ok(models);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }



        [Authorize]
        [HttpPost("UpdateUser")]
        [HttpPost("Users/UpdateUser")]
        public ActionResult UpdateUser(WebUsers newUser)
        {
            try
            {
                    var models = _CATLCRReferentiel.UpdateUser(newUser);
                return Ok(models);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }

        }
        [HttpPost("UpdateCountriesByUser")]
        public ActionResult UpdateCountriesByUser(CountriesByUserModel model)
        {
            CountryModel countryModel = new CountryModel();
            countryModel = _CATLCRReferentiel.UpdateCountriesByUser(model.ListToDelete, model.ListToAdd, model.UserId);
            return Ok(countryModel);
        }


        [HttpPost]
        [Route(nameof(UpdatePlateformesByUser))]
        public ActionResult UpdatePlateformesByUser([FromBody] PlatformsByUserModel model)
        {
            PlatformModel platformModel = new PlatformModel();
            platformModel = _CATLCRReferentiel.UpdatePlateformesByUser(model.ListToDelete, model.ListToAdd, model.UserId);
            return Ok(platformModel);
        }

        [HttpGet("GetPlatformByUser/{userID}")]
        public ActionResult GetPlatformByUser(Guid userID)
        {
            try
            {
                var results = _CATLCRReferentiel.GetPlatformsByUserId(userID);
                return Ok(results);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [Authorize]
        [HttpGet("DeleteUser/{userID}")]
        public ActionResult DeleteUser(Guid userID)
        {
            try
            {
                var results = _CATLCRReferentiel.DeleteUser(userID);
                return Ok(results);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("SaveUser")]
        public async Task<ActionResult> AddUser(WebUsersModel user)
        {
            try
            {
                Guid _id = Guid.NewGuid();
                user.ServiceId = _CATLCRReferentiel.GetServiceId(user.UserID);

                WebUsers _existedUser = new WebUsers();
                _existedUser = _CATLCRReferentiel.FindByAccesKey(user.AccessKey);
                if (_existedUser != null)
                {
                    return BadRequest("User already existed");
                }
                else
                {
                    string result = "4";
                    string reportingGroup = _configuration[_reportingGroup];
                    intranetPortTypeClient service = new intranetPortTypeClient();
                    result = await service.manageAccountAsync("add", user.AccessKey, reportingGroup);
                    if (result == "0" || result == "68")
                    {
                        _id = _CATLCRReferentiel.AddUser(user);
                        if (_id.ToString() == "00000000-0000-0000-0000-000000000000")
                        {
                            return BadRequest("CAT Windows ID is not valid");
                        }
                        else
                            return Ok("Usere Created Successfully");
                    }
                    else
                    {
                        return BadRequest("CAT Windows ID is not valid");
                    }



                }
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }

        }


        [HttpGet("GetCountryByUser/{userID}")]
        public ActionResult GetCountryByUser( Guid userID)
        {
            try
            {
                var results = _CATLCRReferentiel.GetCountriesByUserId(userID);
                return Ok(results);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAccessKey/{username}")]
        public IActionResult GetAccessKey(string username)
        {
            try
            {
                using PrincipalContext context1 = new PrincipalContext(ContextType.Domain, _domainConfig.Name);
                using (var context = new PrincipalContext(ContextType.Domain, _domainConfig.Name))
                {
                    if (context == null)
                        return StatusCode(500, "Failed to create PrincipalContext.");

                    var user = UserPrincipal.FindByIdentity(context, IdentityType.UserPrincipalName, username);
                    if (user == null)
                        return NotFound("Unable to retrieve the Windows access key for the given email ID. Please contact the administrator.");

                    return Ok(new
                    {
                        user.DisplayName,
                        user.EmailAddress,
                        user.SamAccountName,
                        user.DistinguishedName
                    });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Exception: {ex.Message}");
            }
        }

    }
}
