using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.KPILCModel
{
    public class KPILCLoginModel
    {
        public string Url { get; set; } = null!;
        public string UserName { get; set; }

        public int roleId { get; set; }

        public string Name { get; set; }

        public Guid Id { get; set; }

        public bool IsAuthenticated { get; set; } = false;

        public bool IsAdmin { get; set; }

        public string Token { get; set; }
    }
}
