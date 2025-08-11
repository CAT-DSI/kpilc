using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.Security.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Configuration
{
    public class ParamValue
    {
        public Guid CriteriaId { get; set; }
        public string Value { get; set; }

        public string Key { get; set; }

        public bool Scheduler { get; set; }

        public Guid UserId { get; set; }


      
    }
}
