using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Mapping
{
    public class ReportingServiceMap : EntityConfiguration<ReportingService>
    {
        public override void Configure(EntityTypeBuilder<ReportingService> builder)
        {
            builder.ToTable("ReportingServices");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Server).IsRequired();
            builder.Property(a => a.Name).HasMaxLength(100).IsRequired();
            builder.Property(a => a.UpdatedOn).IsRequired();
            builder.Property(a => a.Timestamp).IsRowVersion();
        }
    }
}
