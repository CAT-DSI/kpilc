using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ViaTripLines
    {
        public long Pk { get; set; }
        public string TripLineId { get; set; }
        public string Name { get; set; }
        public string SupplierId { get; set; }
    }
}
