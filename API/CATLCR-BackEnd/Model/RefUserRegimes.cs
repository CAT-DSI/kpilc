using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class RefUserRegimes
    {
        public Guid UserId { get; set; }
        public Guid ReportId { get; set; }
        public string Regime { get; set; }
    }
}
