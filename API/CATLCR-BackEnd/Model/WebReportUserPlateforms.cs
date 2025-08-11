using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebReportUserPlateforms
    {
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public string Country { get; set; }
        public string Pf { get; set; }
    }
}
