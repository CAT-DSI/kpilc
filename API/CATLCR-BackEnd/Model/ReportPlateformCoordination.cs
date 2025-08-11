using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportPlateformCoordination
    {
        public string UserId { get; set; }
        public string OrderId { get; set; }
        public string CustomerRef { get; set; }
        public string AtdRef { get; set; }
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
        public string DeparturePlatform { get; set; }
        public string ConsigneeId { get; set; }
        public string ConsigneeName { get; set; }
        public string ConsigneeZip { get; set; }
        public string ConsigneeCity { get; set; }
        public string ConsigneeCountry { get; set; }
        public string ArrivalPlatform { get; set; }
        public string OrderId1 { get; set; }
        public string Performer { get; set; }
        public string Requester { get; set; }
        public string ParcelQtty { get; set; }
        public string HuType { get; set; }
        public string GrossWeight { get; set; }
        public string ChargeableWeight { get; set; }
        public string Volume { get; set; }
        public string Operation { get; set; }
        public string OperationStatus { get; set; }
        public string Milkrun { get; set; }
        public string Trip { get; set; }
        public string DepartureDate { get; set; }
        public string RealDeparture { get; set; }
        public string ArrivalDate { get; set; }
        public string ExecutionDate { get; set; }
        public string OperationPoint { get; set; }
        public string Customer { get; set; }
        public string Charging { get; set; }
        public string TaxationType { get; set; }
        public string InvoiceType { get; set; }
        public string RefNumber { get; set; }
        public string RefDate { get; set; }
        public string ClosureDate { get; set; }
        public string Product { get; set; }
        public string Service { get; set; }
        public string TariffType { get; set; }
        public string QttyRated { get; set; }
        public string RangeUnit { get; set; }
        public string UnitPrice { get; set; }
        public string Divisor { get; set; }
        public string RangeType { get; set; }
        public string TariffAmount { get; set; }
        public string FuelSurcharge { get; set; }
        public string TotalAmount { get; set; }
        public string Status { get; set; }
        public string InvoiceNo { get; set; }
    }
}
