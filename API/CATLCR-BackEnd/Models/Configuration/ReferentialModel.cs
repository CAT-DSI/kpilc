using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Configuration
{
    public class ReferentialModel
    {
        public string Name { get; set; }
        
        public string Label { get; set; }
        public Guid ID { get; set; }

        public List<FieldModel> Fields { get; set; }
    }
}
