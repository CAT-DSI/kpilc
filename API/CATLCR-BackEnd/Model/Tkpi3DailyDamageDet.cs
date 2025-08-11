using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi3DailyDamageDet
    {
        public Guid IdTkpi3det { get; set; }
        public DateTime? ShipmentDate { get; set; }
        public string Country { get; set; }
        public decimal ParcelId { get; set; }
        public string ParcelNumber { get; set; }
        public string Pf { get; set; }
        public string LhMr { get; set; }
        public string Status { get; set; }
        public string ReasonId { get; set; }
        public string ReasonName { get; set; }
        public string CreatedDate { get; set; }
        public string UserCreator { get; set; }
        public string LineType { get; set; }
    }
}
