using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiFlotaCapVarios
    {
        public Guid Id { get; set; }
        public DateTime? RefDate { get; set; }
        public DateTime? ClosingCostDate { get; set; }
        public string OwnerForwarderIdCenterId { get; set; }
        public string Trip { get; set; }
        public string RefNo { get; set; }
        public string PkTrip { get; set; }
        public string PkRt { get; set; }
        public string TripOpsStatus { get; set; }
        public DateTime? ArrPlannedDt { get; set; }
        public string RoadTripType { get; set; }
        public string TripFileId { get; set; }
        public string TripLineId { get; set; }
        public decimal? TotalWeight { get; set; }
        public int? NbPieces { get; set; }
        public decimal? TotalVolume { get; set; }
        public int? RealisedKms { get; set; }
        public int? NbOfPos { get; set; }
        public int? NbOfPkp { get; set; }
        public int? NbOfStops { get; set; }
        public int? NbOfDel { get; set; }
        public int? NbOfDelStops { get; set; }
        public string TariffType { get; set; }
        public string Service { get; set; }
        public string BprId { get; set; }
        public string TaxationType { get; set; }
        public string SupplierId { get; set; }
        public string SupplierName { get; set; }
        public string ChargingTpaId { get; set; }
        public string QtyRated { get; set; }
        public string RangeUnit { get; set; }
        public decimal? UnitPrice { get; set; }
        public decimal? TotalAmount { get; set; }
        public decimal? FuelSurcharge { get; set; }
        public int? Divisor { get; set; }
        public string RangeType { get; set; }
        public decimal? TarifAmount { get; set; }
        public string StatusRt { get; set; }
        public string InvoiceNr { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public string ChargingCompanyId { get; set; }
        public int? ManualTrf { get; set; }
        public string AutomaticTrf { get; set; }
    }
}
