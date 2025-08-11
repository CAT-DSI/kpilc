using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebReportsParams
    {
        public Guid Id { get; set; }
        public Guid IdTranscoWex { get; set; }
        public Guid? CategoryId { get; set; }
        public double? Kpi { get; set; }
        public bool? IsDelayReport { get; set; }
    }
}
