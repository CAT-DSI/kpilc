using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi8DafTaxations
    {
        public decimal? RatingPk { get; set; }
        public decimal? OrderPk { get; set; }
        public string OrdId { get; set; }
        public string OrdStatus { get; set; }
        public string XaccountId { get; set; }
        public DateTime? EstTimeDep { get; set; }
        public string SndId { get; set; }
        public string SndName { get; set; }
        public string SndZip { get; set; }
        public string SndCity { get; set; }
        public string CgnId { get; set; }
        public string CgnName { get; set; }
        public string CgnZip { get; set; }
        public string CgnCity { get; set; }
        public string ImpArrPlatformId { get; set; }
        public int? HuQty { get; set; }
        public double? GrsWgt { get; set; }
        public string ChargedTpaId { get; set; }
        public DateTime? RefDate { get; set; }
        public string SprId { get; set; }
        public string SerId { get; set; }
        public decimal? TrfRangeVal { get; set; }
        public decimal? TrfRate { get; set; }
        public int? TrfRateBasis { get; set; }
        public decimal? TrfResultTrfval { get; set; }
        public decimal? IndexTaxCurval { get; set; }
        public decimal? ForcCurval { get; set; }
        public string CusInvoiceNo { get; set; }
        public string ExtOrdId { get; set; }
        public Guid? IdUser { get; set; }
    }
}
