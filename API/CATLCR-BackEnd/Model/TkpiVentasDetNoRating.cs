using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiVentasDetNoRating
    {
        public Guid Id { get; set; }
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
        public string DepPf { get; set; }
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
        public string Product { get; set; }
        public DateTime? OrderCreationDate { get; set; }
        public DateTime? OrderDepartureDate { get; set; }
        public string CreatorId { get; set; }
    }
}
