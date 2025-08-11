using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi6FinanceSalesClosingSum
    {
        public Guid IdTkpi6sum { get; set; }
        public string InvoiceNo { get; set; }
        public string InvoiceTempNo { get; set; }
        public string InvoiceRefNo { get; set; }
        public string RefNo { get; set; }
        public string RatingStatus { get; set; }
        public string NoSapClt { get; set; }
        public string IdClient { get; set; }
        public DateTime? CostingDate { get; set; }
        public string CostingMonth { get; set; }
        public string OrgUnit { get; set; }
        public string OrdId { get; set; }
        public string Country { get; set; }
        public string SprFamilyId { get; set; }
        public string SprId { get; set; }
        public string SerId1 { get; set; }
        public string WorkUnit { get; set; }
        public decimal? TrfRangeVal { get; set; }
        public decimal? TrfRate { get; set; }
        public decimal? TrfResultTrfval { get; set; }
        public decimal? IndexTaxCurval { get; set; }
        public decimal? ForcCurval1 { get; set; }
        public long? Num { get; set; }
    }
}
