using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TblViaVsRatingAgg
    {
        public int Id { get; set; }
        public string RefId { get; set; }
        public string Company { get; set; }
        public DateTime? RefDate { get; set; }
        public DateTime? CostingClosingDate { get; set; }
        public string ChargedTpa { get; set; }
        public string ChargingTpa { get; set; }
        public decimal? ChargeableWeight { get; set; }
        public decimal? GrossWeight { get; set; }
        public int? HuQty { get; set; }
        public decimal? Volume { get; set; }
        public string Operation { get; set; }
        public string Service { get; set; }
        public decimal? QuantityRated { get; set; }
        public string TrfRangeBasis { get; set; }
        public decimal? UnitPrice { get; set; }
        public decimal? TarifAmount { get; set; }
        public decimal? FuelSurcharge { get; set; }
    }
}
