
using CATLCR_BackEnd.Data.Security.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Entities
{
    public class Report : ConfigEntityBase
    {
        public string ReportServer {get;set;}
        public bool Scheduled { get; set; }
        public int Status { get; set; }

        public string ReportPath { get; set; }
        public Category Category { get; set; }

        public Guid? CategoryID {get;set;}
        public ICollection<Criteria> Criterias { get; set; }
        public ICollection<Report> Subreports { get; set; }
        public Report ParentReport { get; set; }
        public Guid? ParentReportID { get; set; }
        public bool Subreport { get; set; }

        public int Order { get; set; }
        public int? MenuSeq { get; set; }

        public ICollection<RoleAccess> ReportPrivilleges { get; set; }
    }
}
