using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi4CountryDailyMrCostPerformance
    {
        public DateTime? MrDay { get; set; }
        public string Status { get; set; }
        public string Platform { get; set; }
        public string Country { get; set; }
        public string MrNumber { get; set; }
        public string MrTripFile { get; set; }
        public string MrType { get; set; }
        public string SupplierId { get; set; }
        public string MrBusiness { get; set; }
        public decimal? TotalKm { get; set; }
        public decimal? TotalWeight { get; set; }
        public decimal? TotalNumberPiece { get; set; }
        public int? NumberTouchPoints { get; set; }
        public int? NumberDeliveryPoints { get; set; }
        public decimal? TotalCost { get; set; }
    }
}
