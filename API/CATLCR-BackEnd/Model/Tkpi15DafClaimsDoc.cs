using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi15DafClaimsDoc
    {
        public Guid? UserId { get; set; }
        public string Country { get; set; }
        public string Pf { get; set; }
        public string CreatorId { get; set; }
        public string ClaimsNo { get; set; }
        public string ForwarderId { get; set; }
        public DateTime? DiscrepancyDatetime { get; set; }
        public string SupplierStatus { get; set; }
        public string IsSurveyorRequested { get; set; }
        public string XaccountId { get; set; }
        public string DiscrepancyStatus { get; set; }
        public string ClaimsRefusalReasonName { get; set; }
        public decimal? CommercialValue { get; set; }
        public decimal? InsuredValue { get; set; }
        public decimal? ClaimedValue { get; set; }
        public string ResponsibleTpaId { get; set; }
        public string IsDirectInsRefund { get; set; }
        public string SupInvoiceNo { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public decimal? Ventes { get; set; }
        public decimal? Achats { get; set; }
        public bool? ReclamationClient { get; set; }
        public bool? RecepisseLivraisonClient { get; set; }
        public bool? RecepisseOriginalCat { get; set; }
        public bool? Devis { get; set; }
        public bool? EmailsInfos { get; set; }
        public bool? FrMiseEnCause { get; set; }
        public bool? FrLitigeLoti { get; set; }
        public bool? FrLitigeLotiAdValorem { get; set; }
        public bool? FrLettreRefus { get; set; }
    }
}
