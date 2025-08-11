using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class RefShipments
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string Brand { get; set; }
        public string ShipmentCode { get; set; }
    }
}
