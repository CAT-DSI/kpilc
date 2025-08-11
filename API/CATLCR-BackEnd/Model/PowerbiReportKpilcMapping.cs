using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class PowerbiReportKpilcMapping
    {
        public int RowNumber1 { get; set; }
        public string Country { get; set; }
        public string CodePlf { get; set; }
        public int Sysdate { get; set; }
        public Guid ReportId { get; set; }
        public Guid Id { get; set; }
        public DateTime? Createdate { get; set; }
    }
}
