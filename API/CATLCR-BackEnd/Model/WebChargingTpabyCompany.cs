using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebChargingTpabyCompany
    {
        public string Company { get; set; }
        public string ChargingTpa { get; set; }
        public bool? Plfcosts { get; set; }
        public bool Coordination { get; set; }
        public string ChargingType { get; set; }
    }
}
