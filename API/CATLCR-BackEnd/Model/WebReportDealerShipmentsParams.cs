using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebReportDealerShipmentsParams
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string Brand { get; set; }
        public string Code { get; set; }
        public bool IsDealer { get; set; }
    }
}
