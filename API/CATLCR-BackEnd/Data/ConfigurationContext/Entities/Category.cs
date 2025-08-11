using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Entities
{
    public class Category : ConfigEntityBase
    {
        public ICollection<Report> Reports { get; set; }
    }
}
