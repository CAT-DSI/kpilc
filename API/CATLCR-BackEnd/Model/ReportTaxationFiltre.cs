using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportTaxationFiltre
    {
        public string Type { get; set; }
        public string ParentType { get; set; }
        public string EurOrNbr { get; set; }
        public string ServiceName { get; set; }
    }
}
