using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Emailings
    {
        public Guid Id { get; set; }
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public string Country { get; set; }
        public int SysN { get; set; }
        public string Emails { get; set; }
        public bool EachMonth { get; set; }
        public string SelectedMonths { get; set; }
        public bool EachDay { get; set; }
        public string SelectedDays { get; set; }
        public string RecurrentDays { get; set; }
        public string CodePlf { get; set; }
        public bool? IsDateRange { get; set; }
    }
}
