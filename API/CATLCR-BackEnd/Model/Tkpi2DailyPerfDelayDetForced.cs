using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi2DailyPerfDelayDetForced
    {
        public string UserId { get; set; }
        public Guid? IdTkpi2det { get; set; }
        public string Country { get; set; }
        public string ParcelNumber { get; set; }
        public string Brand { get; set; }
        public string ShipmentCode { get; set; }
        public string DealerCode { get; set; }
        public string DealerName { get; set; }
        public string DealerZip { get; set; }
        public string DealerCity { get; set; }
        public string PfDistri { get; set; }
        public string MrNumber { get; set; }
        public DateTime? ShipmentDate { get; set; }
        public string DeliveryDate { get; set; }
        public string DeliveryTime { get; set; }
        public string MaxDeliveryDate { get; set; }
        public string MaxDeliveryTime { get; set; }
        public string Responsible { get; set; }
        public string LastEventReason { get; set; }
        public string LastEventName { get; set; }
        public string LastEventStatus { get; set; }
        public string LastEventDate { get; set; }
        public string LastEventHour { get; set; }
        public string PcsGroup { get; set; }
        public string IdEventOp { get; set; }
        public string SoldProduct { get; set; }
        public string OrdId { get; set; }
        public string DelStatusMoto { get; set; }
        public int? DaysTotalDelayOrder { get; set; }
        public string CurrentPf { get; set; }
        public string CntHuType { get; set; }
        public double? GrsWgt { get; set; }
        public bool? Doublon { get; set; }
        public string MaxDelDate { get; set; }
        public string ForcedStatus { get; set; }
        public string ForcedReasonCode { get; set; }
        public string ForcedDate { get; set; }
        public string ForcedTime { get; set; }
        public string ForcedTraceOriginKind { get; set; }
        public string ForcedGrp { get; set; }
    }
}
