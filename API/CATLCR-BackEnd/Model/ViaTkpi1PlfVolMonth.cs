using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ViaTkpi1PlfVolMonth
    {
        public DateTime? EstTimeDep { get; set; }
        public string DepOperAreaId { get; set; }
        public string ArrOperAreaId { get; set; }
        public string XaccountId { get; set; }
        public string SprId { get; set; }
        public decimal? HuQty { get; set; }
        public decimal? OrdgrsWgt { get; set; }
        public decimal? Pk { get; set; }
        public decimal? PcsgrsWgt { get; set; }
        public string XaccountFk { get; set; }
        public string SprFk { get; set; }
        public string OrdStatus { get; set; }
        public string CreatorId { get; set; }
    }
}
