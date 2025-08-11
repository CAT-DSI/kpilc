using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class RefDealers
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string Brand { get; set; }
        public string DealerCode { get; set; }
    }
}
