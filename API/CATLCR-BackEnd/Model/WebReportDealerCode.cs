using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebReportDealerCode
    {
        public Guid Id { get; set; }
        public Guid ReportId { get; set; }
        public string DealerCode { get; set; }
    }
}
