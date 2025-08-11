using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Entities
{
    public class Referential : ConfigEntityBase
    {
        public string Table { get; set; }

        public ICollection<Field> Fields { get; set; }


    }
}
