using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportUserStatus
    {
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public string StatusCode { get; set; }
    }
}
