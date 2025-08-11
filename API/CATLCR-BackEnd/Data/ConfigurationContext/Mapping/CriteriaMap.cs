using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Mapping
{
    public class CriteriaMap : EntityConfiguration<Criteria>
    {
        public override void Configure(EntityTypeBuilder<Criteria> builder)
        {
            builder.ToTable("Parameters");
            builder.HasKey(a => a.Id);

            builder.Property(a => a.DefaultValue).HasMaxLength(400);
            builder.Property(a => a.Label).HasMaxLength(100);
            builder.Property(a => a.Hidden).HasDefaultValue(false);
            builder.Property(a => a.DataType).HasMaxLength(100).IsRequired();
            builder.Property(a => a.Name).HasMaxLength(100).IsRequired();
            builder.Property(a => a.UpdatedOn).IsRequired();
           
            builder.Property(a => a.ControlType).HasDefaultValue(0);
            builder.Property(a => a.SourceType).HasDefaultValue(0);
            builder.Property(a => a.Referential);
            builder.Property(a => a.Order);
            builder.Property(a => a.Required);
            builder.Property(a => a.Multiple);
            builder.Property(a => a.Timestamp).IsRowVersion();

            builder.HasOne(a => a.Report).WithMany(a => a.Criterias).HasForeignKey(a => a.ReportID);
            builder.HasMany(a => a.DependsOnCriteria).WithOne(a => a.RelatedCriteria).HasForeignKey(a => a.CriteriaID);
        }
    }
}
