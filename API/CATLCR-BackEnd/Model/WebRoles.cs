using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebRoles
    {
        public WebRoles()
        {
            WebPagesRoles = new HashSet<WebPagesRoles>();
            WebUsers = new HashSet<WebUsers>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<WebPagesRoles> WebPagesRoles { get; set; }
        public virtual ICollection<WebUsers> WebUsers { get; set; }
    }
}
