using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Configuration
{
    public class FieldModel
    {
        public string Name { get; set; }
        public string Label { get; set; }
        public Guid ID { get; set; }
        public DateTime UpdatedOn { get; set; }
        public Guid UpdatedBy { get; set; }

        public bool FunctionalField { get; set; }

        public ReferentialModel Referential { get; set; }
    }
}
