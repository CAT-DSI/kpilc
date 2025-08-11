using CATLCR_BackEnd.Common;
using CATLCR_BackEnd.Common.Exceptions;
using CATLCR_BackEnd.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Services
{
    internal static class ExceptionMiddlware
    {
        /// <summary>
        /// Configures the exception handler.
        /// </summary>
        /// <param name="app">The application.</param>
        /// <param name="logger">The logger.</param>
        internal static void ConfigureExceptionHandler(this IApplicationBuilder app, ILogger<Startup> logger)
        {
            app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                    string message;
                    HttpStatusCode statusCode;
                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (contextFeature != null)
                    {
                        string actionName = context.Request.Method + " " + context.Request.Path;
                        bool isError = true;
                        if (contextFeature.Error is ArgumentException)
                        {
                            isError = false;
                            statusCode = HttpStatusCode.BadRequest;
                        }
                        else if (contextFeature.Error is AuthorizationException)
                        {
                            isError = false;
                            statusCode = HttpStatusCode.Forbidden;
                        }
                        else if (contextFeature.Error is AuthenticationException)
                        {
                            isError = false;
                            statusCode = HttpStatusCode.Unauthorized;
                        }
                        else if (contextFeature.Error is EntityNotFoundException)
                        {
                            statusCode = HttpStatusCode.NotFound;
                        }
                        else
                        {
                            statusCode = HttpStatusCode.InternalServerError;
                        }

                        message = contextFeature.Error.Message;
                        string logMessage = $"Error when requesting '{actionName}'. Details: {contextFeature.Error}";
                        if (isError)
                        {
                            logger.LogError(logMessage);
                        }
                        else
                        {
                            logger.LogWarning(logMessage);
                        }
                    }
                    else
                    {
                        message = "Error on server.";
                        statusCode = HttpStatusCode.InternalServerError;
                    }

                    var error = new ErrorModel
                    {
                        Error = contextFeature.Error.Message
                    };

                    context.Response.StatusCode = (int)statusCode;
                    context.Response.ContentType = "application/json";
                    await context.Response.WriteAsync(JsonConvert.SerializeObject(error, Util.SerializerSettings));
                });
            });
        }
    }
}
