using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi5FinanceForwardingSum
    {
        public DateTime? EstTimeDep { get; set; }
        public string CreatedBy { get; set; }
        public string TripFileId { get; set; }
        public string TripLineId { get; set; }
        public string Ordernum { get; set; }
        public string Product { get; set; }
        public string Departure { get; set; }
        public string Arrival { get; set; }
        public string Brand { get; set; }
        public string Platform { get; set; }
        public string Country { get; set; }
        public string Supplier { get; set; }
        public string Means { get; set; }
        public decimal? Km { get; set; }
        public decimal? Lm { get; set; }
        public string Currency { get; set; }
        public decimal? AmountHa { get; set; }
        public decimal? AmountHaGo { get; set; }
        public decimal? AmountV { get; set; }
        public decimal? AmountVGo { get; set; }
        public decimal? AmountVAadr { get; set; }
        public string TraficType { get; set; }
    }
}
