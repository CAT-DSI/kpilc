using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi20FrPfRecepissesGloba
    {
        public Guid Id { get; set; }
        public DateTime? DateExpedition { get; set; }
        public string Destinataire { get; set; }
        public string RsDestinataire { get; set; }
        public string Ville { get; set; }
        public string Cp { get; set; }
        public string Marque { get; set; }
        public string NumRecep { get; set; }
        public string DateEdition { get; set; }
        public string DateScan { get; set; }
        public string Flashage { get; set; }
        public string PfDistribution { get; set; }
        public string NumTournée { get; set; }
        public string PfArrivée { get; set; }
    }
}
