using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Configuration
{
    public class ReportModel
    {
        public string ReportServer { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }

        

        public string ReportPath { get; set; }
        public Guid ID { get; set; }
        public DateTime UpdatedOn { get; set; }
        public Guid UpdatedBy { get; set; }
        public bool Scheduled { get; set; }
        public int Status { get; set; }

        public CategoryModel Category { get; set; }

        public Guid? CategoryID { get; set; }
        public bool IsChecked { get; set; }

        public IEnumerable<CriteriaModel> Criterias { get; set; }
        public IEnumerable<ReportModel> Subreports { get; set; }
        public byte[] Timestamp { get; set; }

        public Guid? ParentReportID { get; set; }

        public bool Subreport { get; set; }

        public int Order { get; set; }

        public int? MenuSeq { get; set; }
    }
}
