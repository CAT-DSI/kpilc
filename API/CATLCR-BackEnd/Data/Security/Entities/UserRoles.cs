using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.Security.Entities
{
    public class UserRoles
    {
        public Guid RoleId { get; set; }

        public Guid UserId { get; set; }

        public Role Role { get; set; }

        public User User { get; set; }
    }
}
