using System;
using System.Collections.Generic;

#nullable disable

namespace CATLCR_BackEnd.Data.BILCO2
{
    public partial class ThirdParty
    {
        public int IdThirdParty { get; set; }
        public int? IdThirdPartyDwh { get; set; }
        public string ThirdPartyCode { get; set; }
        public string Bu { get; set; }
        public string Company { get; set; }
        public string ThirdPartyName { get; set; }
        public string CountryCode { get; set; }
        public string CountryName { get; set; }
        public string Cee { get; set; }
        public string ZipCode { get; set; }
        public string CityName { get; set; }
        public string State { get; set; }
        public decimal? Longitude { get; set; }
        public decimal? Latitude { get; set; }
        public string IsCustomer { get; set; }
        public string IsSupplier { get; set; }
        public string IsPlatform { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int? IsPrincipal { get;  set; }
    }
}
