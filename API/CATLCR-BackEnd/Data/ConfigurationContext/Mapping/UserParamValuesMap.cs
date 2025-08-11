using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Mapping
{
    public class UserParamValuesMap : EntityConfiguration<UserParamValues>
    {
        public override void Configure(EntityTypeBuilder<UserParamValues> builder)
        {
            builder.ToTable("UserParamValues");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.UserId).HasColumnName("UserID");
            builder.Property(a => a.CriteriaId).HasColumnName("CriteriaID");
            builder.Property(a => a.Scheduler).IsRequired(false).HasDefaultValue(false);

            builder.HasOne(a => a.User).WithMany(a => a.ParamValues).HasForeignKey(a => a.UserId);
            builder.HasOne(a => a.Criteria).WithMany(a => a.ParamValues).HasForeignKey(a => a.CriteriaId);

            base.Configure(builder);
        }
    }
}
