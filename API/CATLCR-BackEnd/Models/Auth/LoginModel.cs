using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Auth
{
    public class LoginModel
    {
        public bool IsAuthenticated { get; set; }
        public string Name { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }
    }
}
