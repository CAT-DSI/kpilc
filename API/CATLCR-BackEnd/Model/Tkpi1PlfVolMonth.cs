using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi1PlfVolMonth
    {
        public Guid IdTkpi1 { get; set; }
        public string Mois { get; set; }
        public DateTime? Jour { get; set; }
        public string Pf { get; set; }
        public string Regime { get; set; }
        public string Marque { get; set; }
        public string Produit { get; set; }
        public string Pays { get; set; }
        public int? Colis { get; set; }
        public decimal? Poids { get; set; }
        public string Libelle { get; set; }
        public string Cle { get; set; }
        public decimal? Synthese { get; set; }
        public string PaysDep { get; set; }
    }
}
