using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.Security.Entities
{
    [Table("Users")]
    public class User : IdentityUser<Guid>
    {
        public string AccessKey { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string UserType { get; set; }
        public Guid? ProfileId { get; set; }
        public int? Roleid { get; set; }

        public ICollection<UserRoles> Roles { get; set; }

        public ICollection<UserParamValues> ParamValues {get;set;}
    }
}
