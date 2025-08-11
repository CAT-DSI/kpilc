using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ViaTkpi2DailyPerfDelay
    {
        public decimal Pk { get; set; }
        public string OrdId { get; set; }
        public string OrdStatus { get; set; }
        public DateTime? ShipmentDate { get; set; }
        public string Brand { get; set; }
        public string ShipmentId { get; set; }
        public string DealerCode { get; set; }
        public string DealerName { get; set; }
        public string DealerZip { get; set; }
        public string City { get; set; }
        public string Pf { get; set; }
        public string MaxDelDate { get; set; }
        public string MaxDelTime { get; set; }
        public DateTime? MaxDelDatetime { get; set; }
        public string ParcelNumber { get; set; }
        public string SoldProd { get; set; }
        public string CntHuType { get; set; }
        public double? GrsWgt { get; set; }
        public string OwnerCountry { get; set; }
        public string ConsigneeCountry { get; set; }
        public string TrStatus { get; set; }
        public string TrReasonCode { get; set; }
        public string TrDescription { get; set; }
        public string TrTourne { get; set; }
        public DateTime? TrEventdatetime { get; set; }
        public string TrEventDate { get; set; }
        public string TrEventTime { get; set; }
        public string TrResponsability { get; set; }
        public DateTime? OpDatetime { get; set; }
        public string OpsWb { get; set; }
        public string OpsType { get; set; }
        public string TrEventDate2 { get; set; }
        public string TrEventTime2 { get; set; }
        public string LastEventPlatform { get; set; }
        public string LastEventStatus { get; set; }
        public string LastEventReason { get; set; }
        public string LastEventDate { get; set; }
        public string LastEventHour { get; set; }
        public string LastEventDescription { get; set; }
        public string TrTourne3 { get; set; }
        public string TrTourne4 { get; set; }
        public string Grp { get; set; }
        public string Lg { get; set; }
        public string ForcedStatus { get; set; }
        public string ForcedReasonCode { get; set; }
        public string ForcedDate { get; set; }
        public string ForcedTime { get; set; }
        public string ForcedTraceOriginKind { get; set; }
        public string ForcedGrp { get; set; }
    }
}
