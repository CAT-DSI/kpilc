using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportFinancialWithoutParam2
    {
        public string RefId { get; set; }
        public string Company { get; set; }
        public DateTime? RefDate { get; set; }
        public string CostingClosingDate { get; set; }
        public string Brand { get; set; }
        public string ChargedTpa { get; set; }
        public string SapCode { get; set; }
        public string SapCode2 { get; set; }
        public string SapName { get; set; }
        public string ChargingTpa { get; set; }
        public string Lineid { get; set; }
        public string ChargeableWeight { get; set; }
        public string GrossWeight { get; set; }
        public string HuQty { get; set; }
        public string Volume { get; set; }
        public string Operation { get; set; }
        public string Service { get; set; }
        public string KindId { get; set; }
        public string DepPf { get; set; }
        public string ArrPf { get; set; }
        public string Boughtproduct { get; set; }
        public string Soldproduct { get; set; }
        public string RatingType { get; set; }
        public string InvoiceType { get; set; }
        public string QuantityRated { get; set; }
        public string TrfRangeBasis { get; set; }
        public string UnitPrice { get; set; }
        public string TariffAmount { get; set; }
        public string FuelSurcharge { get; set; }
        public string SupInvoiceNo { get; set; }
        public string InvoiceInternalNo { get; set; }
        public string CusInvoiceNo { get; set; }
        public string InvoiceTempNo { get; set; }
        public string TripFileId { get; set; }
        public string IsManuallyUpdated { get; set; }
        public string RatingStatus { get; set; }
        public string ForcFlowPostingDate { get; set; }
        public string RealFlowPostingDate { get; set; }
        public string Currency { get; set; }
        public string TrfCurrency { get; set; }
        public string CgnCountry { get; set; }
        public string TrfCurrRate { get; set; }
        public string LocalValue { get; set; }
        public string ForcCurrRate { get; set; }
        public string LocalValueFk { get; set; }
    }
}
