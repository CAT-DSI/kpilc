using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebPagesRoles
    {
        public int PageId { get; set; }
        public int RoleId { get; set; }

        public virtual WebPages Page { get; set; }
        public virtual WebRoles Role { get; set; }
    }
}
