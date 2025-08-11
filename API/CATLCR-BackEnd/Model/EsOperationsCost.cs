using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class EsOperationsCost
    {
        public string RefNumber { get; set; }
        public string OrderId { get; set; }
        public string CustomerRef { get; set; }
        public string Brand { get; set; }
        public string SenderId { get; set; }
        public string SenderName { get; set; }
        public string SenderAddress { get; set; }
        public string SenderZip { get; set; }
        public string ConsigneeId { get; set; }
        public string ConsigneeName { get; set; }
        public string ConsigneeAddress { get; set; }
        public string ConsigneeZip { get; set; }
        public decimal? Parcels { get; set; }
        public decimal? GrossWeight { get; set; }
        public decimal? ChargeableWeight { get; set; }
        public decimal? Volume { get; set; }
        public string Operation { get; set; }
        public string Milkrun { get; set; }
        public string Trip { get; set; }
        public string Supplier { get; set; }
        public DateTime? RefDate { get; set; }
        public string Service { get; set; }
        public decimal? QttyRated { get; set; }
        public decimal? TariffAmount { get; set; }
        public decimal? FuelSurcharge { get; set; }
        public decimal? TotalAmount { get; set; }
        public string Pf { get; set; }
        public string Country { get; set; }
        public string Concatenate { get; set; }
    }
}
