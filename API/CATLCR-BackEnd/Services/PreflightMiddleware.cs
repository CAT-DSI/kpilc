using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Services
{
    public class PreflightRequestMiddleware
    {
        private readonly RequestDelegate Next;

        public PreflightRequestMiddleware(RequestDelegate next)
        {
            Next = next;
        }

        public Task Invoke(HttpContext context)
        {
            return BeginInvoke(context);
        }

        private Task BeginInvoke(HttpContext context)
        {
            context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
            context.Response.Headers.Add("Access-Control-Allow-Methods",  "GET, POST, PUT, DELETE, OPTIONS");
            // Do stuff here
            return Next.Invoke(context);
        }
    }

    public static class PreflightRequestExtensions
    {
        public static IApplicationBuilder UsePreflightRequestHandler(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<PreflightRequestMiddleware>();
        }
    }
}
