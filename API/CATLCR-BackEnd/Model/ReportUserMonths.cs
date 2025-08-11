using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportUserMonths
    {
        public Guid UserId { get; set; }
        public Guid ReportId { get; set; }
        public int Month { get; set; }
    }
}
