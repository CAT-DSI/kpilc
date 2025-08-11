using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi3DailyDamageSum
    {
        public DateTime? ShipmentDate { get; set; }
        public string Country { get; set; }
        public string Pf { get; set; }
        public int? TotalParcel { get; set; }
        public int? TotalDmgPf { get; set; }
        public int? TotalDmgMr { get; set; }
        public int? TotalDmgLh { get; set; }
    }
}
