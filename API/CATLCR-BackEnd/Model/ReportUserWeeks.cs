using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportUserWeeks
    {
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public int Week { get; set; }
    }
}
