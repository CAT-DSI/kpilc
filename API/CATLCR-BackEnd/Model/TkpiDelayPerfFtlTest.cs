using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiDelayPerfFtlTest
    {
        public string NoOrder { get; set; }
        public string Marque { get; set; }
        public string Produit { get; set; }
        public string Circuit { get; set; }
        public DateTime? Etd { get; set; }
        public string PfDepart { get; set; }
        public string Expediteur { get; set; }
        public string ExpAdresse { get; set; }
        public string ExpAdresse2 { get; set; }
        public string ExpPays { get; set; }
        public string ExpCp { get; set; }
        public string ExpVille { get; set; }
        public string PfArrivee { get; set; }
        public string Destinataire { get; set; }
        public string DestAdresse { get; set; }
        public string DestAdresse2 { get; set; }
        public string DestPays { get; set; }
        public string DestCp { get; set; }
        public string DestVille { get; set; }
        public double? NbKms { get; set; }
        public string Transporteur { get; set; }
        public DateTime? PlannedStartDatetime { get; set; }
        public DateTime? PlannedEndDatetime { get; set; }
        public DateTime? ExecutedEndDatetime { get; set; }
        public string LoginCreation { get; set; }
    }
}
