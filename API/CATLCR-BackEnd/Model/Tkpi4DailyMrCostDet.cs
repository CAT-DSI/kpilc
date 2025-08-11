using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi4DailyMrCostDet
    {
        public DateTime? MrDay { get; set; }
        public string Country { get; set; }
        public string Status { get; set; }
        public string Platform { get; set; }
        public string Mr { get; set; }
        public string MrType { get; set; }
        public string MrBusiness { get; set; }
        public string MrTransco { get; set; }
        public double? Km { get; set; }
        public double? Weight { get; set; }
        public double? TouchPoints { get; set; }
        public double? DeliveryPoints { get; set; }
        public double? Cost { get; set; }
    }
}
