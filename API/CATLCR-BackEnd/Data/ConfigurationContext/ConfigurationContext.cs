using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.Security.Entities;
using CATLCR_BackEnd.Models.Configuration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext
{
    public class ConfigurationContext : DbContext
    {
        public ConfigurationContext(DbContextOptions<ConfigurationContext> options) : base(options)
        {
            this.Database.SetCommandTimeout(300);

        }

        public ConfigurationContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var typesToRegister = Assembly.GetExecutingAssembly().GetTypes()
            .Where(type => !String.IsNullOrEmpty(type.Namespace))
            .Where(type => type.BaseType != null && type.BaseType.IsGenericType &&
                type.BaseType.GetGenericTypeDefinition() == typeof(EntityConfiguration<>));
            foreach (var type in typesToRegister)
            {
                var configuration = (IMappingConfiguration)Activator.CreateInstance(type);
                configuration.ApplyConfiguration(modelBuilder);
            }

            modelBuilder.Entity<UserRoles>().HasKey(p => new { p.UserId, p.RoleId });
            modelBuilder.Entity<OptionModel>().HasNoKey();
        }

        public virtual DbSet<Report> Reports { get; set; }
        public virtual DbSet<Criteria> Criterias { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<ReportingService> ReportingServices { get; set; }
        public virtual DbSet<Referential> Referentials { get; set; }
        public virtual DbSet<Field> Fields { get; set; }
        public virtual DbSet<UserParamValues> ParamValues { get; set; }

        public DbSet<OptionModel> Options { get; set; }
    }
}
