using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ViaTkpi2OpsMoto
    {
        public decimal Pk { get; set; }
        public string OpsTypeMoto { get; set; }
        public DateTime? OpsDatetimeMoto { get; set; }
        public string DelDateMoto { get; set; }
        public string DelTimeMoto { get; set; }
        public string CurrentPfMoto { get; set; }
    }
}
