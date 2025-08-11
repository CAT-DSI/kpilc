using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportSpainTrips
    {
        public string UserId { get; set; }
        public string TriplineId { get; set; }
        public string SupplierId { get; set; }
        public string TrifileId { get; set; }
        public string Etd { get; set; }
        public string Ata { get; set; }
        public string TotalWeight { get; set; }
        public string Delivery { get; set; }
        public string Pickup { get; set; }
        public string OthersOps { get; set; }
        public string Replaned { get; set; }
        public string NombreOrdres { get; set; }
        public string NombreColis { get; set; }
        public string TotalVolume { get; set; }
        public string NombreDelAdress { get; set; }
        public string NombrePkpAdress { get; set; }
        public string DepPlatformId { get; set; }
        public string ArrPlatformId { get; set; }
        public string TripProduct { get; set; }
        public string RoadTripType { get; set; }
    }
}
