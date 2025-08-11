using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class EmailReportEmails
    {
        public Guid Id { get; set; }
        public Guid ReportId { get; set; }
        public string Country { get; set; }
        public int Sysdate { get; set; }
        public string Emails { get; set; }
        public string Frequencies { get; set; }
        public int? Sysdate1 { get; set; }
        public string CodePlf { get; set; }
        public string Groups { get; set; }
        public string Updatedby { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
