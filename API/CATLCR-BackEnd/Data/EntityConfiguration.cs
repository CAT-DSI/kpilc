using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data
{
    public class EntityConfiguration<T> : IMappingConfiguration, IEntityTypeConfiguration<T> where T : EntityBase
    {

        protected virtual void PostConfigure(EntityTypeBuilder<T> builder)
        {
        }

        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            PostConfigure(builder);
        }
        public virtual void ApplyConfiguration(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(this);
        }
    }

}
