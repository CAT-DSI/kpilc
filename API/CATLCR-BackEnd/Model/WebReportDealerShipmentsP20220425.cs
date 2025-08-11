using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebReportDealerShipmentsP20220425
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string Brand { get; set; }
        public string Code { get; set; }
        public bool IsDealer { get; set; }
    }
}
