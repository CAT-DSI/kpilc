using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi2DailyPerfDelaySumMaxDeliveryDate2
    {
        public DateTime? MaxDeliveryDate { get; set; }
        public DateTime? Etd { get; set; }
        public string Country { get; set; }
        public string PfDistri { get; set; }
        public string Brand { get; set; }
        public string ShipmentCode { get; set; }
        public string DealerCode { get; set; }
        public string SoldProduct { get; set; }
        public int? TotalPcs { get; set; }
        public int? OnTime { get; set; }
        public int? DelayNoCat { get; set; }
        public int? DelayCat { get; set; }
        public int? NoReasonDelay { get; set; }
        public int? NoTrace { get; set; }
        public int? NoReceived { get; set; }
        public int? NoTraceDelBeforeMaxDelDate { get; set; }
    }
}
