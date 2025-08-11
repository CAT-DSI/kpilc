using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportUserCountries
    {
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public string Country { get; set; }
    }
}
