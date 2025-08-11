using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.Security.Entities
{
    [Table("Roles")]
    public class Role : IdentityRole<Guid>
    {
        public ICollection<UserRoles> Users { get; set; }

        public ICollection<RoleAccess> RoleAccess { get; set; }
    }
}
