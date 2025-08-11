using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CATLCR_BackEnd.Data.Security.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CATLCR_BackEnd.Data.Security
{
    public class SecurityContext : IdentityDbContext<User, Role,  Guid>
    {
        public SecurityContext(DbContextOptions<SecurityContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>().ToTable("LCRUsers", "dbo").Property(p => p.Id).HasColumnName("ID");
            builder.Entity<Role>().ToTable("LCRRoles", "dbo").Property(p => p.Id).HasColumnName("ID");
            builder.Entity<UserRoles>().ToTable("UserRoles", "dbo");
            builder.Entity<UserRoles>().HasKey(a => new { a.UserId, a.RoleId });
            builder.Entity<RoleAccess>().ToTable("RoleReportAccess", "dbo");
            builder.Entity<RoleAccess>().HasKey(p => p.Id).HasName("ID");
            builder.Entity<RoleAccess>().Property(p => p.RoleID).HasColumnName("RoleId");
            builder.Entity<RoleAccess>().Property(p => p.ReportID).HasColumnName("ReportId");
            builder.Entity<RoleAccess>().HasOne(p => p.Role).WithMany(p => p.RoleAccess).HasForeignKey(p => p.RoleID);
            builder.Entity<RoleAccess>().HasOne(p => p.Report).WithMany(p => p.ReportPrivilleges).HasForeignKey(p => p.ReportID);
            builder.Entity<User>().HasMany(a => a.Roles).WithOne(a => a.User).HasForeignKey(a => a.UserId);
            builder.Entity<Role>().HasMany(a => a.Users).WithOne(a => a.Role).HasForeignKey(a => a.RoleId);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
