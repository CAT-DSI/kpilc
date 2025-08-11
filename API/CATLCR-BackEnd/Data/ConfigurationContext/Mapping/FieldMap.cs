using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Mapping
{
    public class FieldMap : EntityConfiguration<Field>
    {
        public override void Configure(EntityTypeBuilder<Field> builder)
        {
            builder.ToTable("Fields");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Label).HasMaxLength(100).IsRequired();
            builder.Property(a => a.FunctionalField).IsRequired().HasDefaultValue(0);
            builder.Property(a => a.Name).HasMaxLength(100).IsRequired();
            builder.Property(a => a.UpdatedOn).IsRequired();
            builder.Property(a => a.Timestamp).IsRowVersion();

            builder.HasOne(a => a.Referential).WithMany(a => a.Fields).HasForeignKey(a => a.ReferentialID);

            base.Configure(builder);
        }
    }
}
