using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportUserOrgUnits
    {
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public string OrgUnit { get; set; }
    }
}
