using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebUserCountry
    {
        public Guid UserId { get; set; }
        public string CountryCode { get; set; }
    }
}
