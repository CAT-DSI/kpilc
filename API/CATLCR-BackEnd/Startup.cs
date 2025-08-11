using AutoMapper;
using CATLCR_BackEnd.Common;
using CATLCR_BackEnd.Data.ConfigurationContext;
using CATLCR_BackEnd.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;
using CATLCR_BackEnd.Data.Security;
using CATLCR_BackEnd.Data.Security.Entities;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.Data.Security.Repository.Impl;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Impl;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using Swashbuckle.AspNetCore.SwaggerUI;
using CATLCR_BackEnd.Model;
using Microsoft.AspNetCore.Server.IISIntegration;
using CATLCR_BackEnd.KPILC;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using CATLCR_BackEnd.Models.KPILCModel;
using System.Collections.Generic;

namespace CATLCR_BackEnd
{   
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        private readonly string corsPolicy = "defaultPolicy";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;
            });
            services.AddAuthentication(IISDefaults.AuthenticationScheme);
            services.AddMvc(config =>
            {
                var policy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .Build();
                config.Filters.Add(new AuthorizeFilter(policy));
            }
            );
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddCors(options =>
            {
                options.AddPolicy(corsPolicy,
                    builder =>
                    {   
                        builder.WithOrigins(
                            "http://localhost:4200", "http://113.96.6.90", "https://kpilc.groupecat.com", "http://kpilc.groupecat.com",
                          "https://kpilc.groupecat.com/kpilc/api", "http://kpilc.groupecat.com/kpilc/api", "https://kpilc.groupecat.com/CATLCR/api",
                          "http://kpilc.groupecat.com/CATLCR/api", "http://freqxwsqlr7.cat.groupecat.com/CATLCR/api", "http://freqxwsql04.cat.groupecat.com/CATLCR/api",
                          "http://frgnbbir01.cat.groupecat.com:88/co2api/api", "*"
                            )
                                            .AllowAnyHeader()
                                            .AllowAnyMethod()
                                            .SetIsOriginAllowedToAllowWildcardSubdomains()
                                            .AllowCredentials();

                    });
                //services.AddCors(corsPolicy =>
                //{
                //    options.AddPolicy("Policy1",
                //        builder => builder.WithOrigins("http://localhost:4200", "http://freqxwsqlr7.cat.groupecat.com:88/co2api")
                //    .AllowAnyHeader()
                //    .AllowAnyMethod()
                //    .AllowCredentials());
                //    options.AddPolicy("Policy2",
                //        builder => builder.WithOrigins("http://freqxwsqlr7.cat.groupecat.com:82", "http://yourwebsite.com")
                //    .AllowAnyHeader()
                //    .AllowAnyMethod());
                //});
            });
                        
            // For a single domain configuration (assuming you're using the "FR" domain):
            services.Configure<DomainSettings>(Configuration.GetSection("Domains:FR"));



            // IHttpContextAccessor is not registered by default
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<IAuthenticationSchemeProvider, CustomAuthenticationSchemeProvider>();

            services.AddJwtBearerAuthentication(Configuration);
            services.AddAutoMapper(typeof(Startup));

            services.AddDbContext<SecurityContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, Role>(options => options.User.RequireUniqueEmail = false)
                .AddEntityFrameworkStores<SecurityContext>();

            string connectionString = Configuration.GetConnectionString("DefaultConnection");
            string BILCO2Connection = Configuration.GetConnectionString("BILCO2Connection");
            string KPILCO2Connection = Configuration.GetConnectionString("KPILCO2Connection");
            
            services.AddDbContext<ConfigurationContext>(options => options.UseSqlServer(connectionString));
            services.AddDbContext<BILC_CO2Context>(options => options.UseSqlServer(BILCO2Connection));
            services.AddDbContext<CATLCRContext>(options => options.UseSqlServer(KPILCO2Connection));
            //services.AddDbContext<SecurityContext>(options => options.UseSqlServer(connectionString));

            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IConfigurationRepoWrapper, ConfigurationRepoWrapper>();

            services.AddScoped<IOrderRepo, OrderRepo>();
            services.AddScoped<ICATLCRReferentiel, CATLCRReferentiel>();
            services.AddCors();
            services.AddControllers();

            services.AddControllersWithViews().AddNewtonsoftJson(options =>
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            //services.AddAuthentication();
            services.AddAuthentication(IISDefaults.AuthenticationScheme);
            services.AddMvc(options => options.EnableEndpointRouting = false);
            services.AddSwaggerGen();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Implement Swagger UI",
                    Description = "A simple example to Implement Swagger UI",
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env,  ILogger<Startup> logger)
        {
            DefaultFilesOptions options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("index.html");

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            })
            .UseDefaultFiles(options) 
            .UseStaticFiles();

            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<SecurityContext>();
                context.Database.Migrate();
            }

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseRouting();

            //app.UseMiddleware<ApiKeyMiddleware>();

            app.UseAuthentication();

            app.UseCors(corsPolicy);

            app.ConfigureExceptionHandler(logger);

            //app.UseHttpsRedirection();

            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Showing API V1");
            });

        }
    }
}
