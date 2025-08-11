using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi7FinanceTripTaxation
    {
        public Guid? IdTkpi7det { get; set; }
        public string Gestionnaire { get; set; }
        public string Country { get; set; }
        public string Numerovoyage { get; set; }
        public string Programme { get; set; }
        public decimal? Kms { get; set; }
        public decimal? KilometresReel { get; set; }
        public string Typevoyage { get; set; }
        public string BoughtProduct { get; set; }
        public string Fournisseur { get; set; }
        public string PointDepart { get; set; }
        public string CpDepart { get; set; }
        public string PaysDepart { get; set; }
        public string VilleDepart { get; set; }
        public string PointArrivee { get; set; }
        public string CpArrivee { get; set; }
        public string PaysArrivee { get; set; }
        public string VilleArrivee { get; set; }
        public DateTime? Etd { get; set; }
        public DateTime? Eta { get; set; }
        public string HArrivee { get; set; }
        public string Service { get; set; }
        public string Status { get; set; }
        public decimal? Coutassocie { get; set; }
        public decimal? QuantiteTaxee { get; set; }
        public string UniteTaxee { get; set; }
    }
}
