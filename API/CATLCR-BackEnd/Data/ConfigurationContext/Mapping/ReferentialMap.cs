using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Mapping
{
    public class ReferentialMap : EntityConfiguration<Referential>
    {
        public override void Configure(EntityTypeBuilder<Referential> builder)
        {
            builder.ToTable("Referentials");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Name).HasMaxLength(100).IsRequired();
            builder.Property(a => a.Table).HasMaxLength(100).IsRequired();
            builder.Property(a => a.UpdatedOn).IsRequired();
            builder.Property(a => a.Timestamp).IsRowVersion();

            builder.HasMany(a => a.Fields).WithOne(a => a.Referential).HasForeignKey(a => a.ReferentialID);

            base.Configure(builder);
        }
    }
}
