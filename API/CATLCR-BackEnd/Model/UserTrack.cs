using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class UserTrack
    {
        public Guid Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public Guid UserId { get; set; }
        public int Action { get; set; }
        public Guid ReportId { get; set; }

        public virtual WebReports Report { get; set; }
        public virtual WebUsers User { get; set; }
    }
}
