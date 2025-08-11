using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi14DafAdvalorem
    {
        public string UserId { get; set; }
        public string Country { get; set; }
        public string CreatorId { get; set; }
        public string ClaimsNo { get; set; }
        public DateTime? DiscrepancyDatetime { get; set; }
        public string ClaimsExtNo { get; set; }
        public string InsuranceApplicationNo { get; set; }
        public string BarcodeExtNo { get; set; }
        public string XaccountId { get; set; }
        public string OrdCgnId { get; set; }
        public string OrdCgnName { get; set; }
        public string DepPlatformId { get; set; }
        public string ArrPlatformId { get; set; }
        public string RootCauseAnalysis { get; set; }
        public string DiscrepancyStatus { get; set; }
        public string ClaimsRefusalReasonName { get; set; }
        public decimal? CommercialValue { get; set; }
        public decimal? InsuredValue { get; set; }
        public decimal? ClaimedValue { get; set; }
        public string ResponsibleTpaId { get; set; }
        public string IsDirectInsRefund { get; set; }
        public decimal? Ventes { get; set; }
        public decimal? Achats { get; set; }
        public double? GdsValPos { get; set; }
        public double? GdsValNeg { get; set; }
    }
}
