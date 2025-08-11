using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi4DailyMrCostSum
    {
        public DateTime? MrDay { get; set; }
        public string Country { get; set; }
        public string Platform { get; set; }
        public int? Regular { get; set; }
        public int? Spot { get; set; }
        public int? Mensagerie { get; set; }
        public int? Taxi { get; set; }
        public int? MilkrunInbound { get; set; }
        public int? NoClose { get; set; }
        public double? DistriCost { get; set; }
        public double? InboundCost { get; set; }
    }
}
