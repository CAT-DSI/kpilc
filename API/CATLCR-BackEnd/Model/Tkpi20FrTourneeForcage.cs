using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi20FrTourneeForcage
    {
        public Guid Id { get; set; }
        public string Marque { get; set; }
        public string Produit { get; set; }
        public string NumColis { get; set; }
        public string DesDefDeo { get; set; }
        public DateTime? DateEvenement { get; set; }
        public string IdLigne { get; set; }
        public string Ville { get; set; }
        public string PlatformCountry { get; set; }
        public string OperAreaId { get; set; }
    }
}
