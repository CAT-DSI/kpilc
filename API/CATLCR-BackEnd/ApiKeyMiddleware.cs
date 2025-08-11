using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace CATLCR_BackEnd
{
    public class ApiKeyMiddleware
    {
        private readonly RequestDelegate _next;
        private
        const string APIKEY = "ApiKey";
        public ApiKeyMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            if (!context.Request.Headers.TryGetValue(APIKEY, out
                    var extractedApiKey))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Api Key was not provided ");
                return;
            }
            var appSettings = context.RequestServices.GetRequiredService<IConfiguration>();
            var apiKey = appSettings.GetValue<string>(APIKEY);
            if (!apiKey.Equals(extractedApiKey))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Unauthorized client");
                return;
            }
            await _next(context);
        }
    }

    //public interface IGenericResult<T>
    //{
    //    bool IsSuccess { get; set; }
    //    string Message { get; set; }
    //    T Data { get; set; }
    //}

    //public class GenericResult<T>: IGenericResult<T>
    //{
    //    private StringBuilder _message;
    //    public bool IsSuccess { get; set; }
    //    public string Message
    //    {
    //        get { return (_message ?? new StringBuilder(string.Empty)).ToString(); }
    //        set { _message = new StringBuilder(value); }
    //    }           
    //    public T Data { get; set; }
    //}

}
