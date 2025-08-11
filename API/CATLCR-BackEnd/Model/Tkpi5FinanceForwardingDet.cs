using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi5FinanceForwardingDet
    {
        public Guid IdTkpi5det { get; set; }
        public decimal? Pktrip { get; set; }
        public decimal? Pkord { get; set; }
        public decimal? Pkops { get; set; }
        public decimal? Pkrat { get; set; }
        public string TripFileId { get; set; }
        public DateTime? EstTimeDep { get; set; }
        public string TripLineId { get; set; }
        public string RatingType { get; set; }
        public string Service { get; set; }
        public decimal? Amount { get; set; }
        public string Currency { get; set; }
        public string Ordernum { get; set; }
        public string Product { get; set; }
        public string CreatedBy { get; set; }
        public string Supplier { get; set; }
        public string Brand { get; set; }
        public string Platform { get; set; }
        public string Country { get; set; }
        public string Means { get; set; }
        public decimal? Lm { get; set; }
        public decimal? Km { get; set; }
        public string OpsType { get; set; }
        public string Departure { get; set; }
        public string Arrival { get; set; }
        public string Trafictype { get; set; }
    }
}
