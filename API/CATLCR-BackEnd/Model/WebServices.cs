using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebServices
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateCreation { get; set; }
    }
}
