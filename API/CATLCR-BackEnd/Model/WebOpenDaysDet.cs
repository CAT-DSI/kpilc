using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebOpenDaysDet
    {
        public Guid Id { get; set; }
        public DateTime Day { get; set; }
        public string Country { get; set; }
    }
}
