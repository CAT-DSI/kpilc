using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportOpenDays
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string Month { get; set; }
        public int Nbr { get; set; }
        public int? OpenDays { get; set; }
    }
}
