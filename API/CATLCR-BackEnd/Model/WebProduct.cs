using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebProduct
    {
        public Guid Id { get; set; }
        public string ProductRange { get; set; }
        public string Product { get; set; }
        public Guid? ProductRangeId { get; set; }
    }
}
