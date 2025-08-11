using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiVentasSumDay
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string Pf { get; set; }
        public string ChargedTpaId { get; set; }
        public DateTime RefDate { get; set; }
        public decimal? CCoes { get; set; }
        public decimal? SBultos { get; set; }
        public decimal? SChWgt { get; set; }
        public decimal? SOrdWgt { get; set; }
        public decimal? SOrdVol { get; set; }
        public decimal? SPortes { get; set; }
        public decimal? SOtros { get; set; }
        public decimal? SFuel { get; set; }
    }
}
