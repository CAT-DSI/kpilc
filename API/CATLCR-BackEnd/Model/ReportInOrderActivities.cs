using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportInOrderActivities
    {
        public string UserId { get; set; }
        public string OrderNumber { get; set; }
        public string SenderId { get; set; }
        public string ZipConsignee { get; set; }
        public string CreatedOn { get; set; }
        public string ConsigneeName { get; set; }
        public string Adress { get; set; }
        public string City { get; set; }
        public string HandlyUnitQty { get; set; }
        public string ChWeight { get; set; }
        public string Gwgt { get; set; }
        public string RevenueTotalValue { get; set; }
        public string DeliveryTerminal { get; set; }
        public string CodgoodValue { get; set; }
        public string InsureValue { get; set; }
        public string ObjectCreationType { get; set; }
        public string Ingresos { get; set; }
        public string Incoterm { get; set; }
        public string CreatedBy { get; set; }
        public string Instructions { get; set; }
        public string Costes { get; set; }
        public string Product { get; set; }
        public string ArrivalDateHour { get; set; }
        public string Brand { get; set; }
        public string Reference { get; set; }
        public string ConsigneeId { get; set; }
        public string OperacionInstruction { get; set; }
    }
}
