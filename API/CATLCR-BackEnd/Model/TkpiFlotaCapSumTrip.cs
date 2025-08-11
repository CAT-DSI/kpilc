using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiFlotaCapSumTrip
    {
        public Guid Id { get; set; }
        public string CenterId { get; set; }
        public DateTime? ArrTripDate { get; set; }
        public DateTime? DepTripDate { get; set; }
        public int? NumDiasArr { get; set; }
        public int? NumDiasDep { get; set; }
        public int? NumTrips { get; set; }
        public string TripLine { get; set; }
        public string Trip { get; set; }
        public string SupplierId { get; set; }
        public string Sap1 { get; set; }
        public string Sap2 { get; set; }
        public string BprId { get; set; }
        public int? NbPiecesTrip { get; set; }
        public int? NbOfPkpStopsTrip { get; set; }
        public int? NbOfDelStopsTrip { get; set; }
        public int? NbPfPosTrip { get; set; }
        public decimal? TotalWeightTrip { get; set; }
        public decimal? OpGwDel { get; set; }
        public decimal? OpGwPkp { get; set; }
        public decimal? TmfxAmount { get; set; }
        public decimal? AgazAmount { get; set; }
        public decimal? VariosAmount { get; set; }
        public decimal? Tmtp2Amount { get; set; }
        public decimal? TmtpAmount { get; set; }
        public decimal? PkpGwCoAmount { get; set; }
        public decimal? DelGwCoAmount { get; set; }
        public decimal? PkpGwCoKgrs { get; set; }
        public decimal? DelGwCoKgrs { get; set; }
        public decimal? PkpGwCoPcs { get; set; }
        public decimal? DelGwCoPcs { get; set; }
        public DateTime? ReportDate { get; set; }
    }
}
