using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class StsFrReturnCustomer
    {
        public double? ParcelUnique { get; set; }
        public string DayDelayCalculation { get; set; }
        public string Customer { get; set; }
        public string Flow { get; set; }
        public string CustomerOrder { get; set; }
        public string OrderDate { get; set; }
        public string DealerId { get; set; }
        public double? MaxDelay { get; set; }
        public string DestinationId { get; set; }
        public string Platform { get; set; }
        public int? OrderStatus { get; set; }
        public int? OrderMaxDelDate { get; set; }
        public double? ParcelId { get; set; }
        public string ParcelCab { get; set; }
        public double? NocNumber { get; set; }
        public string PcsStatusNoc { get; set; }
        public string ReasonIdNoc { get; set; }
        public string ReasonNameNoc { get; set; }
        public string EventDateNoc { get; set; }
        public string TypeReturn { get; set; }
        public string LastEventStatus { get; set; }
        public string LastEventReason { get; set; }
        public string LastEventName { get; set; }
        public string EventDate { get; set; }
        public double? RefNumberDays { get; set; }
        public string GroupStatus { get; set; }
        public double? CurrentDelay { get; set; }
        public string DelayResult { get; set; }
    }
}
