using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportSuiviPdaspot
    {
        public Guid Id { get; set; }
        public Guid? UserId { get; set; }
        public string DvcId { get; set; }
        public string DvcGroup { get; set; }
        public string DvcLogin { get; set; }
        public string DvcType { get; set; }
        public int? Nbdayspot { get; set; }
        public string Isspot { get; set; }
        public string Isharmonie { get; set; }
    }
}
