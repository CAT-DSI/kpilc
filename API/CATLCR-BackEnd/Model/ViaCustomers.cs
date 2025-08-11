using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ViaCustomers
    {
        public Guid Id { get; set; }
        public string Brand { get; set; }
        public string CustomerGroup { get; set; }
        public string MarketLine { get; set; }
    }
}
