using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi13Lhl
    {
        public string UserId { get; set; }
        public string Ata { get; set; }
        public string LineId { get; set; }
        public string TripId { get; set; }
        public double? NbParcels { get; set; }
        public double? LoadingHuQty { get; set; }
        public double? LoadedHuQty { get; set; }
        public double? UnloadingHuQty { get; set; }
        public string Pf { get; set; }
        public bool? IsLoading { get; set; }
        public double? HuToCahrge { get; set; }
        public bool? Trace { get; set; }
        public double? FinalHu { get; set; }
        public bool? RealTrace { get; set; }
    }
}
