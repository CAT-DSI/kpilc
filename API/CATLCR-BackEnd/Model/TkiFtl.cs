using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class TkiFtl
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string NumOrder { get; set; }
        public string Brand { get; set; }
        public string Product { get; set; }
        public DateTime? Etd { get; set; }
        public DateTime? Eta { get; set; }
        public DateTime? Ata { get; set; }
        public DateTime? ImperativeDate { get; set; }
        public string Sender { get; set; }
        public string SenderCountry { get; set; }
        public string SenderZip { get; set; }
        public string SenderCity { get; set; }
        public string Consignee { get; set; }
        public string ConsigneeCountry { get; set; }
        public string ConsigneeZip { get; set; }
        public string ConsigneeCity { get; set; }
        public string OrderStatus { get; set; }
        public string Creator { get; set; }
    }
}
