using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebProfile
    {
        public WebProfile()
        {
            WebUsers = new HashSet<WebUsers>();
        }

        public Guid Id { get; set; }
        public string ProfileName { get; set; }

        public virtual ICollection<WebUsers> WebUsers { get; set; }
    }
}
