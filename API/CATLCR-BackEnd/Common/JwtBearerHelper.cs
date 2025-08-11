using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Common
{
    public static class JwtBearerHelper
    {
        private const string SecurityKeyConfigPath = "JWT:Issuer";
        private const string IssuerConfigPath = "JWT:Issuer";
        private const string AudienceConfigPath = "JWT:Audience";
        private const string ExpirationTimeInMinutesConfigPath = "JWT:ExpirationTimeInMinutes";

        /// <summary>
        /// Adds the JWT bearer authentication.
        /// </summary>
        /// <param name="services">The services.</param>
        /// <param name="_configuration">The configuration.</param>
        internal static void AddJwtBearerAuthentication(this IServiceCollection services, IConfiguration _configuration)
        {
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration[SecurityKeyConfigPath]));
            var validationParams = new TokenValidationParameters
            {
                RequireExpirationTime = true,
                RequireSignedTokens = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = signingKey,
                ValidateIssuer = true,
                ValidIssuer = _configuration[IssuerConfigPath],
                ValidateAudience = true,
                ValidAudience = _configuration[AudienceConfigPath],
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            };

            services.AddAuthentication(options =>
            {
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(opts =>
            {
                opts.TokenValidationParameters = validationParams;
            });

            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser()
                    .Build());
            });
        }

        /// <summary>
        /// Creates the token.
        /// </summary>
        /// <param name="claims">The claims.</param>
        /// <param name="configuration">The configuration.</param>
        /// <returns>Created token.</returns>
        /// 

        internal static string CreateToken(Claim[] claims, IConfiguration _configuration)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration[SecurityKeyConfigPath]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration[IssuerConfigPath],
                audience: _configuration[AudienceConfigPath],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(Convert.ToInt32(_configuration[ExpirationTimeInMinutesConfigPath])),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }



        internal static string CreateOrederToken(Claim[] claims, IConfiguration _configuration)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration[SecurityKeyConfigPath]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken token = new JwtSecurityToken();
            token = new JwtSecurityToken(
               issuer: _configuration[IssuerConfigPath],
               audience: _configuration[AudienceConfigPath],
               claims: claims,
               expires: DateTime.UtcNow.AddMinutes(Convert.ToInt32(_configuration[ExpirationTimeInMinutesConfigPath])),
               signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
