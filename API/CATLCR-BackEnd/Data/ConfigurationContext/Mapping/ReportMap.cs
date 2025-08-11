using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Mapping
{
    public class ReportMap : EntityConfiguration<Report>
    {
        public override void Configure(EntityTypeBuilder<Report> builder)
        {
            builder.ToTable("Reports");
            builder.HasKey(a => a.Id);

            builder.Property(a => a.ReportServer).IsRequired().HasMaxLength(100);
            builder.Property(a => a.ReportPath).IsRequired().HasMaxLength(400);
            builder.Property(a => a.Label).HasMaxLength(100);
            builder.Property(a => a.Scheduled).IsRequired().HasDefaultValue(false);
            builder.Property(a => a.Status).IsRequired().HasDefaultValue(0);
            builder.Property(a => a.Name).HasMaxLength(100).IsRequired();
            builder.Property(a => a.UpdatedOn).IsRequired();
            builder.Property(a => a.Timestamp).IsRowVersion();
            builder.Property(a => a.Subreport).IsRequired().HasDefaultValue(false);
            builder.Property(a => a.Order);
            builder.Property(a => a.MenuSeq);

            builder.HasMany(a => a.Criterias).WithOne(a => a.Report).HasForeignKey(a => a.ReportID);
            builder.HasOne(a => a.Category).WithMany(a => a.Reports).HasForeignKey(a => a.CategoryID);

            builder.HasMany(a => a.Subreports).WithOne(a => a.ParentReport).HasForeignKey(a => a.ParentReportID);

            base.Configure(builder);
        }
    }
}
