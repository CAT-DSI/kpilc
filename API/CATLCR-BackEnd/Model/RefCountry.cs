using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class RefCountry
    {
        public decimal Pk { get; set; }
        public string Country { get; set; }
        public string VatCountry { get; set; }
        public decimal? CountryN2 { get; set; }
        public decimal? CountryN3 { get; set; }
        public string DefaultLanguage { get; set; }
        public string Name { get; set; }
        public string IsZipChecked { get; set; }
        public string IsStateChecked { get; set; }
        public string IsCityChecked { get; set; }
        public string IsEec { get; set; }
        public string IsDomecticDaaExemption { get; set; }
        public string HouseNoPosType { get; set; }
        public string CustomsAmsType { get; set; }
        public decimal? CustomsAmsRecipientFk { get; set; }
        public string CustomsAmsRecipientId { get; set; }
        public string IsIsfRequired { get; set; }
        public string VatNoCheckType { get; set; }
        public string TimeZone { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string DeletedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
        public decimal? Version { get; set; }
        public string FirstWeekDay { get; set; }
        public string IsCustomsCodeMandatory { get; set; }
    }
}
