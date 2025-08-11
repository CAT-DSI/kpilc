using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiDelayPerfFtlSum
    {
        public Guid Id { get; set; }
        public DateTime? Etd { get; set; }
        public string Country { get; set; }
        public string PfDepart { get; set; }
        public string Marque { get; set; }
        public string Produit { get; set; }
        public double? Groupe1 { get; set; }
        public double? Groupe2 { get; set; }
        public double? Groupe6 { get; set; }
        public double? Groupe5 { get; set; }
    }
}
