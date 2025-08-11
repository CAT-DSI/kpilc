using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebPages
    {
        public WebPages()
        {
            InverseParent = new HashSet<WebPages>();
            WebPagesRoles = new HashSet<WebPagesRoles>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int? ParentId { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public DateTime DateCreation { get; set; }
        public string KeyReport { get; set; }
        public int PageType { get; set; }

        public virtual WebPages Parent { get; set; }
        public virtual ICollection<WebPages> InverseParent { get; set; }
        public virtual ICollection<WebPagesRoles> WebPagesRoles { get; set; }
    }
}
