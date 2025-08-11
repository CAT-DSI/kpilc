using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiVentasDetRating
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string Pf { get; set; }
        public string Customer { get; set; }
        public string Sap { get; set; }
        public string Sap2 { get; set; }
        public string FkCustomer { get; set; }
        public string ExtOrdId { get; set; }
        public string ExtOrdId2 { get; set; }
        public string OrderId { get; set; }
        public string CustomerRef { get; set; }
        public string Incoterm { get; set; }
        public string OrderStatus { get; set; }
        public string Creation { get; set; }
        public string OrgUnit { get; set; }
        public string Brand { get; set; }
        public string SenderId { get; set; }
        public string Sender { get; set; }
        public string SenderZip { get; set; }
        public string SenderCity { get; set; }
        public string SenderCountry { get; set; }
        public string DeparturePf { get; set; }
        public string DepPfArea { get; set; }
        public string ConsigneeId { get; set; }
        public string Consignee { get; set; }
        public string ConsigneeZip { get; set; }
        public string ConsigneeCity { get; set; }
        public string ConsigneeCountry { get; set; }
        public string ArrPf { get; set; }
        public string ArrPfArea { get; set; }
        public int? ParcelQty { get; set; }
        public decimal? ChargeableWeight { get; set; }
        public decimal? OrderWeight { get; set; }
        public decimal? OrderVolume { get; set; }
        public string TaxationType { get; set; }
        public string RefNumber { get; set; }
        public string InvoiceType { get; set; }
        public DateTime? RefDate { get; set; }
        public DateTime? ClosureDate { get; set; }
        public string Product { get; set; }
        public string Service { get; set; }
        public int? QtyRated { get; set; }
        public string RangeCode { get; set; }
        public decimal? UnitPrice { get; set; }
        public int? Divisore { get; set; }
        public string RangeType { get; set; }
        public decimal? TariffAmount { get; set; }
        public decimal? FuelSurcharge { get; set; }
        public decimal? TotalAmount { get; set; }
        public string Contract { get; set; }
        public DateTime? OrderCreationDate { get; set; }
        public DateTime? OrderDepartureDate { get; set; }
        public string InvoiceNr { get; set; }
        public string ServiceType { get; set; }
        public string RtPk { get; set; }
        public string Error { get; set; }
        public string RangeDescription { get; set; }
    }
}
