using CATLCR_BackEnd.Data.Security.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Entities
{
    public class UserParamValues : EntityBase
    {
        public string Value { get; set; }
        public Guid UserId { get; set; }

        public User User { get; set; }

        public Criteria Criteria { get; set; }

        public Nullable<bool> Scheduler { get; set; }

        public Guid CriteriaId { get; set; }
    }
}
