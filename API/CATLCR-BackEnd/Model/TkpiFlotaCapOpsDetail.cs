using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiFlotaCapOpsDetail
    {
        public Guid Id { get; set; }
        public DateTime? RefDate { get; set; }
        public DateTime? ClosingCostDate { get; set; }
        public DateTime? ArrTripDate { get; set; }
        public DateTime? DepTripDate { get; set; }
        public string TripLineId { get; set; }
        public string Trip { get; set; }
        public string TripPk { get; set; }
        public string Operation { get; set; }
        public string RowType { get; set; }
        public int? Repes { get; set; }
        public string OpsXTrip { get; set; }
        public string OpsXTrip2 { get; set; }
        public string OpsTrfXTrip2 { get; set; }
        public string OpsSinTrfXTrip2 { get; set; }
        public string WbNo { get; set; }
        public string CusorId { get; set; }
        public string RefNo { get; set; }
        public string TrfXOp { get; set; }
        public string Service { get; set; }
        public string OpsType { get; set; }
        public string TripOpsStatus { get; set; }
        public string WbMasterNo { get; set; }
        public string PkOps { get; set; }
        public string PkRt { get; set; }
        public string PkAgg { get; set; }
        public string PkAgop { get; set; }
        public DateTime? ArrPlannedDt { get; set; }
        public string RoadTripType { get; set; }
        public decimal? TotalWeight { get; set; }
        public int? NbPieces { get; set; }
        public decimal? TotalVolume { get; set; }
        public int? RealisedKms { get; set; }
        public int? NbOfPos { get; set; }
        public int? NbOfPkp { get; set; }
        public int? NbOfPkpStops { get; set; }
        public int? NbOfDel { get; set; }
        public int? NbDelStops { get; set; }
        public string TariffType { get; set; }
        public string BprId { get; set; }
        public string TaxationType { get; set; }
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string ChargingTpaId { get; set; }
        public decimal? QtyRated { get; set; }
        public string RangeUnit { get; set; }
        public decimal? UnitPrice { get; set; }
        public decimal? TotalAmount { get; set; }
        public decimal? FuelSurcharge { get; set; }
        public int? Divisor { get; set; }
        public decimal? OpChargeableWeight { get; set; }
        public decimal? TotalAmount2 { get; set; }
        public decimal? OpGw { get; set; }
        public decimal? OpVol { get; set; }
        public decimal? OpHuQty { get; set; }
        public string RangeType { get; set; }
        public decimal? TariffAmount { get; set; }
        public string StatusRt { get; set; }
        public string InvoiceNr { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public string ChargingCompanyId { get; set; }
        public string ManuelUpdated { get; set; }
        public string AutomaticTrf { get; set; }
        public string OwnerForwaredIdCenterId { get; set; }
        public string OwnerForwarderId { get; set; }
        public int? TakeOwner { get; set; }
    }
}
