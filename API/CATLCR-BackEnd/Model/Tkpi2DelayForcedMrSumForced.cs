using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi2DelayForcedMrSumForced
    {
        public string UserId { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public string Country { get; set; }
        public string PfDistri { get; set; }
        public string MrNumber { get; set; }
        public string Brand { get; set; }
        public string SoldProduct { get; set; }
        public int? TotalPcs { get; set; }
        public int? Scanned { get; set; }
        public int? ForcedDriver { get; set; }
        public int? UpdatedPf { get; set; }
        public int? NoDeliveryDate { get; set; }
        public int? NotReceived { get; set; }
    }
}
