
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Impl;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Services
{
    public static class ServiceExtensions
    {
        public static void ConfigureConfigurationRepoWrapper(this IServiceCollection services)
        {
            
        }

        public static void ConfigureSecurityRepoWrapper(this IServiceCollection services)
        {
            //services.AddScoped<ISecurityRepoWrapper, SecurityRepoWrapper>();
        }


    }
}
