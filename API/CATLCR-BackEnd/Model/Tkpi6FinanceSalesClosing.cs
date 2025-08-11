using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi6FinanceSalesClosing
    {
        public Guid? IdTkpi6det { get; set; }
        public string Country { get; set; }
        public string InvoiceNo { get; set; }
        public string InvoiceTempNo { get; set; }
        public string InvoiceRefNo { get; set; }
        public string RatingStatus { get; set; }
        public string NoSapClt { get; set; }
        public string IdClient { get; set; }
        public DateTime? CostingDate { get; set; }
        public string CostingMonth { get; set; }
        public string TotalHt { get; set; }
        public string MontantTtc { get; set; }
        public string Status { get; set; }
        public DateTime? TransferDate { get; set; }
        public string TransferMonth { get; set; }
        public string RefNo { get; set; }
        public string ManualLine { get; set; }
        public string SerId1 { get; set; }
        public string InvoiceType { get; set; }
        public decimal? ForcCurval1 { get; set; }
        public string WorkUnit { get; set; }
        public decimal? TrfRangeVal { get; set; }
        public decimal? TrfRate { get; set; }
        public decimal? TrfRateBasis { get; set; }
        public decimal? TrfResultTrfval { get; set; }
        public decimal? IndexTaxCurval { get; set; }
        public string Currency { get; set; }
        public decimal? ExchangeRate { get; set; }
        public string OrdId { get; set; }
        public string SprId { get; set; }
        public string SprFamilyId { get; set; }
        public DateTime? EstTimeDep { get; set; }
        public string DepPlatformId { get; set; }
        public string DepTpaId { get; set; }
        public string DepName { get; set; }
        public string DepCity { get; set; }
        public string ArrPlatformId { get; set; }
        public string ArrTpaId { get; set; }
        public string ArrName { get; set; }
        public string ArrCity { get; set; }
        public string Typ { get; set; }
        public string Produit { get; set; }
        public string Cpte { get; set; }
        public string Pa { get; set; }
        public string Cc { get; set; }
        public string Toc { get; set; }
        public string OrgUnit { get; set; }
        public string Cle { get; set; }
        public string IsDistribution { get; set; }
    }
}
