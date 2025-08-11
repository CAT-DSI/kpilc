using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.Security.Entities
{
    [Table("RoleReportAccess")]
    public class RoleAccess
    {
        public Guid Id { get; set; }
        public Role Role { get; set; }

        public Guid RoleID { get; set; }

        public Guid ReportID { get; set; }
        public Report Report { get; set; }
    }
}
