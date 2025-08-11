using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi20FrCertifJourDateToutClient
    {
        public Guid Id { get; set; }
        public DateTime? DateDexpédition { get; set; }
        public string Marque { get; set; }
        public string PlateformeLivraison { get; set; }
        public string Destinataire { get; set; }
        public string Nom { get; set; }
        public string Cp { get; set; }
        public string Ville { get; set; }
        public string ReasonId { get; set; }
        public string Tournée { get; set; }
        public DateTime? DateDep { get; set; }
        public string SprId { get; set; }
    }
}
