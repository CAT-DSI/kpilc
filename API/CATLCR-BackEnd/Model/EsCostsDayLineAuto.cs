using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class EsCostsDayLineAuto
    {
        public DateTime? RefDate { get; set; }
        public string LineId { get; set; }
        public string TripNo { get; set; }
        public string RefId { get; set; }
        public decimal? ChargeableWeight { get; set; }
        public string Supplier { get; set; }
        public decimal? GrossWeight { get; set; }
        public decimal? HuQuantity { get; set; }
        public decimal? Volume { get; set; }
        public decimal? Kms { get; set; }
        public decimal? NbrOfDeliveryAddress { get; set; }
        public decimal? NbrOfPickupAddress { get; set; }
        public string Operation { get; set; }
        public string SerId { get; set; }
        public string Service { get; set; }
        public decimal? QuantityRated { get; set; }
        public string TrfRangeBasis { get; set; }
        public decimal? UnitPrice { get; set; }
        public decimal? TariffAmount { get; set; }
        public decimal? FuelSurcharge { get; set; }
        public string Status { get; set; }
        public string Company { get; set; }
        public string Pf { get; set; }
        public string Country { get; set; }
        public string Scope { get; set; }
        public string Tot { get; set; }
        public string Month { get; set; }
        public decimal? TarifDefinitif { get; set; }
        public string Concatenate { get; set; }
    }
}
