using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Entities
{
    public abstract class ConfigEntityBase : EntityBase
    {
        public string Name { get; set; }
        public string Label { get; set; }
       
        public DateTime UpdatedOn { get; set; }
        public Guid? UpdatedBy { get; set; }
    }
}
