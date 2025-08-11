using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi20FrControlePerfPf
    {
        public Guid Id { get; set; }
        public string Pf { get; set; }
        public string PlatformCountry { get; set; }
        public string NumTournée { get; set; }
        public string NumVoyage { get; set; }
        public string Fournisseur { get; set; }
        public string Do { get; set; }
        public string Produit { get; set; }
        public string NumCompte { get; set; }
        public string RsClient { get; set; }
        public string Ville { get; set; }
        public string NumRécépissé { get; set; }
        public long? NbrColis { get; set; }
        public decimal? PoidsColis { get; set; }
        public string DateHeureLivraisonMax { get; set; }
        public string DateHeureLivraisonReelle { get; set; }
        public string CodeRaison { get; set; }
        public string NomDeLaRaison { get; set; }
        public DateTime? PlannedStartDateTime { get; set; }
    }
}
