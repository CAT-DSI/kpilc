using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportSuiviPdadetail
    {
        public string UserId { get; set; }
        public int? DvcId { get; set; }
        public string DvcGroup { get; set; }
        public string DvcLogin { get; set; }
        public string IsSpot { get; set; }
        public string NbDaySpot { get; set; }
        public string IsHarmonie { get; set; }
        public string IsMdm { get; set; }
    }
}
