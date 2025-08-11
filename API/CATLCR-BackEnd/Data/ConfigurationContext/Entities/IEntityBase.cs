using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Entities
{
    public interface IEntityBase
    {
        string Name { get; set; }
        string Label { get; set; }
        Guid ID { get; set; }
        DateTime UpdatedOn { get; set; }
        Guid? UpdatedBy { get; set; }
        public byte[] Timestamp { get; set; }

    }
}
