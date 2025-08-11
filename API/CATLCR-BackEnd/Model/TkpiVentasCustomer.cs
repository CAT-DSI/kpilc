using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkpiVentasCustomer
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string Pf { get; set; }
        public string ChargedTpaId { get; set; }
        public string Sap { get; set; }
        public string Sap2 { get; set; }
        public DateTime? RefDate { get; set; }
        public decimal? TotalAmount { get; set; }
        public int? InvoiceTp { get; set; }
        public string Service { get; set; }
        public string OrderId { get; set; }
        public string RtPk { get; set; }
    }
}
