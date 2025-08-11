using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Entities
{
    public class Field : ConfigEntityBase
    {
        public Guid ReferentialID { get; set; }

        public Referential Referential { get; set; }
        public bool FunctionalField { get; set; }
    }
}
