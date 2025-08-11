using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Mapping
{
    public class CategoryMap : EntityConfiguration<Category>
    {
        public override void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.ToTable("Categories");
            builder.HasKey(a => a.Id);

            builder.Property(a => a.Label).HasMaxLength(100);
            builder.Property(a => a.Name).HasMaxLength(100).IsRequired();
            builder.Property(a => a.UpdatedOn).IsRequired();
            builder.Property(a => a.Timestamp).IsRowVersion();

            builder.HasMany(a => a.Reports).WithOne(a => a.Category).HasForeignKey(a => a.CategoryID);

            base.Configure(builder);
        }
    }
}
