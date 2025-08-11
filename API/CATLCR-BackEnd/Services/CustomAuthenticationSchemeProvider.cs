using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Services
{
    /// <summary>
    /// The custom Authentication Scheme provider.
    /// </summary>
    public class CustomAuthenticationSchemeProvider : AuthenticationSchemeProvider
    {
        /// <summary>
        /// The HTTP context accessor
        /// </summary>
        private readonly IHttpContextAccessor _httpContextAccessor;

        /// <summary>
        /// Initializes a new instance of the <see cref="CustomAuthenticationSchemeProvider"/> class.
        /// </summary>
        /// <param name="httpContextAccessor">The HTTP context accessor.</param>
        /// <param name="options">The options.</param>
        public CustomAuthenticationSchemeProvider(
            IHttpContextAccessor httpContextAccessor,
            IOptions<AuthenticationOptions> options)
            : base(options)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        /// <summary>
        /// Gets the request scheme asynchronous.
        /// </summary>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException">The HTTP request cannot be retrieved.</exception>
        private async Task<AuthenticationScheme> GetRequestSchemeAsync()
        {
            var request = _httpContextAccessor.HttpContext?.Request;
            if (request == null)
            {
                throw new ArgumentNullException("The HTTP request cannot be retrieved.");
            }

            // For API requests, use authentication tokens.
            if (request.Path.StartsWithSegments("/api"))
            {
                return await GetSchemeAsync(JwtBearerDefaults.AuthenticationScheme);
            }

            // For the other requests, return null to let the base methods
            // decide what's the best scheme based on the default schemes
            // configured in the global authentication options.
            return null;
        }

        /// <summary>
        /// Returns the scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.AuthenticateAsync(Microsoft.AspNetCore.Http.HttpContext,System.String)" />.
        /// This is typically specified via <see cref="P:Microsoft.AspNetCore.Authentication.AuthenticationOptions.DefaultAuthenticateScheme" />.
        /// Otherwise, this will fallback to <see cref="P:Microsoft.AspNetCore.Authentication.AuthenticationOptions.DefaultScheme" />.
        /// </summary>
        /// <returns>
        /// The scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.AuthenticateAsync(Microsoft.AspNetCore.Http.HttpContext,System.String)" />.
        /// </returns>
        public override async Task<AuthenticationScheme> GetDefaultAuthenticateSchemeAsync() =>
            await GetRequestSchemeAsync() ??
            await base.GetDefaultAuthenticateSchemeAsync();

        /// <summary>
        /// Returns the scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.ChallengeAsync(Microsoft.AspNetCore.Http.HttpContext,System.String,Microsoft.AspNetCore.Authentication.AuthenticationProperties)" />.
        /// This is typically specified via <see cref="P:Microsoft.AspNetCore.Authentication.AuthenticationOptions.DefaultChallengeScheme" />.
        /// Otherwise, this will fallback to <see cref="P:Microsoft.AspNetCore.Authentication.AuthenticationOptions.DefaultScheme" />.
        /// </summary>
        /// <returns>
        /// The scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.ChallengeAsync(Microsoft.AspNetCore.Http.HttpContext,System.String,Microsoft.AspNetCore.Authentication.AuthenticationProperties)" />.
        /// </returns>
        public override async Task<AuthenticationScheme> GetDefaultChallengeSchemeAsync() =>
            await GetRequestSchemeAsync() ??
            await base.GetDefaultChallengeSchemeAsync();

        /// <summary>
        /// Returns the scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.ForbidAsync(Microsoft.AspNetCore.Http.HttpContext,System.String,Microsoft.AspNetCore.Authentication.AuthenticationProperties)" />.
        /// This is typically specified via <see cref="P:Microsoft.AspNetCore.Authentication.AuthenticationOptions.DefaultForbidScheme" />.
        /// Otherwise, this will fallback to <see cref="M:Microsoft.AspNetCore.Authentication.AuthenticationSchemeProvider.GetDefaultChallengeSchemeAsync" /> .
        /// </summary>
        /// <returns>
        /// The scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.ForbidAsync(Microsoft.AspNetCore.Http.HttpContext,System.String,Microsoft.AspNetCore.Authentication.AuthenticationProperties)" />.
        /// </returns>
        public override async Task<AuthenticationScheme> GetDefaultForbidSchemeAsync() =>
            await GetRequestSchemeAsync() ??
            await base.GetDefaultForbidSchemeAsync();

        /// <summary>
        /// Returns the scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.SignInAsync(Microsoft.AspNetCore.Http.HttpContext,System.String,System.Security.Claims.ClaimsPrincipal,Microsoft.AspNetCore.Authentication.AuthenticationProperties)" />.
        /// This is typically specified via <see cref="P:Microsoft.AspNetCore.Authentication.AuthenticationOptions.DefaultSignInScheme" />.
        /// Otherwise, this will fallback to <see cref="P:Microsoft.AspNetCore.Authentication.AuthenticationOptions.DefaultScheme" />.
        /// </summary>
        /// <returns>
        /// The scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.SignInAsync(Microsoft.AspNetCore.Http.HttpContext,System.String,System.Security.Claims.ClaimsPrincipal,Microsoft.AspNetCore.Authentication.AuthenticationProperties)" />.
        /// </returns>
        public override async Task<AuthenticationScheme> GetDefaultSignInSchemeAsync() =>
            await GetRequestSchemeAsync() ??
            await base.GetDefaultSignInSchemeAsync();

        /// <summary>
        /// Returns the scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.SignOutAsync(Microsoft.AspNetCore.Http.HttpContext,System.String,Microsoft.AspNetCore.Authentication.AuthenticationProperties)" />.
        /// This is typically specified via <see cref="P:Microsoft.AspNetCore.Authentication.AuthenticationOptions.DefaultSignOutScheme" />.
        /// Otherwise this will fallback to <see cref="M:Microsoft.AspNetCore.Authentication.AuthenticationSchemeProvider.GetDefaultSignInSchemeAsync" /> if that supports sign out.
        /// </summary>
        /// <returns>
        /// The scheme that will be used by default for <see cref="M:Microsoft.AspNetCore.Authentication.IAuthenticationService.SignOutAsync(Microsoft.AspNetCore.Http.HttpContext,System.String,Microsoft.AspNetCore.Authentication.AuthenticationProperties)" />.
        /// </returns>
        public override async Task<AuthenticationScheme> GetDefaultSignOutSchemeAsync() =>
            await GetRequestSchemeAsync() ??
            await base.GetDefaultSignOutSchemeAsync();
    }
}
