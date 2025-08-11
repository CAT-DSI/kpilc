using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebReports
    {
        public WebReports()
        {
            UserTrack = new HashSet<UserTrack>();
            UserTrackTemp = new HashSet<UserTrackTemp>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateCreation { get; set; }
        public DateTime? DateUpdate { get; set; }
        public string ReportKey { get; set; }
        public Guid CategoryId { get; set; }
        public int PageId { get; set; }
        public bool? IsForEmail { get; set; }
        public string ReportServer { get; set; }
        public string ReportPath { get; set; }
        public Guid? ParentReportId { get; set; }
        public string Label { get; set; }
        public int? Order { get; set; }
        public int? Subreport { get; set; }
        public bool? IsShow { get; set; }

        public virtual ICollection<UserTrack> UserTrack { get; set; }
        public virtual ICollection<UserTrackTemp> UserTrackTemp { get; set; }
    }
}
