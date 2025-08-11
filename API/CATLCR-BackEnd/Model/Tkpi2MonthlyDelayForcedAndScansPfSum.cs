using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi2MonthlyDelayForcedAndScansPfSum
    {
        public DateTime? ShipmentDate { get; set; }
        public string FormattedShipmentDate { get; set; }
        public string Country { get; set; }
        public int? ParcelTotal { get; set; }
        public int? ParcelNotReceivedExcludedTotal { get; set; }
        public int? DeliveredScannedParcelTotal { get; set; }
        public int? ForcedByDriverParcelTotal { get; set; }
        public int? ScannedForcedParcelTotal { get; set; }
        public int? UpdatedByPlatformParcelTotal { get; set; }
        public int? NotDeliveredParcelTotal { get; set; }
        public int? NotReceivedParcelTotal { get; set; }
        public int? OnDelay { get; set; }
        public int? NoReasonDelay { get; set; }
        public string ProductRange { get; set; }
    }
}
