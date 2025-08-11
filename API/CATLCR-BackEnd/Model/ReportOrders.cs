using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportOrders
    {
        public string UserId { get; set; }
        public string OrdId { get; set; }
        public string CreatorId { get; set; }
        public string CreatedDate { get; set; }
        public string AgentAtOriginId { get; set; }
        public string AgentAtDestinationId { get; set; }
        public string XaccountId { get; set; }
        public string EstTimeDep { get; set; }
        public string SndId { get; set; }
        public string SndName { get; set; }
        public string GnId { get; set; }
        public string CgnName { get; set; }
        public string SprId { get; set; }
    }
}
