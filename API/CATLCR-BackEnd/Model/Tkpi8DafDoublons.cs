using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi8DafDoublons
    {
        public decimal? IdPcs { get; set; }
        public decimal? IdOrd { get; set; }
        public string BarcodeId { get; set; }
        public string BarcodeExtId { get; set; }
        public string HuType { get; set; }
        public string CreateType { get; set; }
        public string OrdStatus { get; set; }
        public string IncId { get; set; }
        public string SprId { get; set; }
        public DateTime? EstTimeDep { get; set; }
        public string SndId { get; set; }
        public string SndCity { get; set; }
        public string CgnId { get; set; }
        public string CgnCity { get; set; }
        public double? GrsWgt { get; set; }
        public string OrdId { get; set; }
        public string XaccountId { get; set; }
        public decimal? Amount { get; set; }
        public string OpsStatus { get; set; }
        public Guid? IdUser { get; set; }
    }
}
