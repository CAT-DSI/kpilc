using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebServiceRoleUser
    {
        public Guid ServiceId { get; set; }
        public Guid UserId { get; set; }
        public int RoleId { get; set; }
        public long Id { get; set; }
    }
}
