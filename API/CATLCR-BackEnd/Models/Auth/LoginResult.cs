
using CATLCR_BackEnd.Data.Security.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Auth
{
    public class LoginResult
    {
        public string Name { get; set; }

        public Guid Id { get; set; }

        public bool IsAuthenticated { get; set; }

        public bool IsAdmin { get; set; }

        public string Token { get; set; }
    }
}
