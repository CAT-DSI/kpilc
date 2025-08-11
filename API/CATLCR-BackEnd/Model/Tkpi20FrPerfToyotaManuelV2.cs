using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi20FrPerfToyotaManuelV2
    {
        public Guid Id { get; set; }
        public string Shipper { get; set; }
        public string DealerCode { get; set; }
        public string DealerName { get; set; }
        public string Adress { get; set; }
        public string Zipcode { get; set; }
        public string City { get; set; }
        public string CatPf { get; set; }
        public string DeliveryDate { get; set; }
        public string DeliveryTime { get; set; }
        public string HeureMax { get; set; }
        public string MilkRun { get; set; }
        public string HeureLivraisonEstimee { get; set; }
        public string Raison { get; set; }
        public string ColisResteAQuai { get; set; }
        public string WithoutLabel { get; set; }
        public DateTime? DateDep { get; set; }
    }
}
