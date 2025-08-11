using System;
using System.Collections.Generic;

#nullable disable

namespace CATLCR_BackEnd.Data.BILCO2
{
    public partial class Co2emission
    {
        public int IdCo2emission { get; set; }
        public string OrdCode { get; set; }
        public int? OrdStartDate { get; set; }
        public string OpeCode { get; set; }
        public string PerformerId { get; set; }
        public string TripLineId { get; set; }
        public string TripId { get; set; }
        public string OpeStatus { get; set; }
        public string OpeType { get; set; }
        public decimal? GrossWeight { get; set; }
        public int? PlannedStartDate { get; set; }
        public int? ExecutedStartDate { get; set; }
        public int? PlannedEndDate { get; set; }
        public int? ExecutedEndDate { get; set; }
        public string RoadType { get; set; }
        public double? DepLongitude { get; set; }
        public double? DepLatitude { get; set; }
        public double? ArrLongitude { get; set; }
        public double? ArrLatitude { get; set; }
        public decimal? KmNumber { get; set; }
        public int? Co2level { get; set; }
        public decimal? Co2rate { get; set; }
        public DateTime? Co2validFrom { get; set; }
        public DateTime? Co2validUntil { get; set; }
        public double? Co2emission1 { get; set; }
        public int? IdOrdProduct { get; set; }
        public int? IdCustomer { get; set; }
        public int? IdSupplier { get; set; }
        public int? IdDep { get; set; }
        public int? IdArr { get; set; }
        public string IdSender { get; set; }
        public int? IdConsignee { get; set; }
        public int? IdMeans { get; set; }
        public int? IdMeansType { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int? ParcelQty { get; set; }
        public DateTime? EstTimeDep { get; set; }
        public string ExtOrdId { get; set; }
    }
}
