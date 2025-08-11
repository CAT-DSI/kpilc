using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiFlotaCapCostDetail
    {
        public Guid Id { get; set; }
        public DateTime? RefDate { get; set; }
        public DateTime? ClosingCostDate { get; set; }
        public string CenterId { get; set; }
        public string TripLine { get; set; }
        public string Trip { get; set; }
        public string SupplierId { get; set; }
        public string SupplierFk { get; set; }
        public int? Repes { get; set; }
        public string Service { get; set; }
        public int? ServiceSeq { get; set; }
        public string OpsType { get; set; }
        public string SoldProduct { get; set; }
        public string RefAgg { get; set; }
        public string Operation { get; set; }
        public decimal? TotalWeight { get; set; }
        public int? NbPieces { get; set; }
        public decimal? TotalVolume { get; set; }
        public int? RealisedKms { get; set; }
        public int? NbOfPos { get; set; }
        public int? NbOfPkp { get; set; }
        public int? NbOfPkpStops { get; set; }
        public int? NbOfDel { get; set; }
        public int? NbOfDelStops { get; set; }
        public decimal? TotalAmount { get; set; }
    }
}
