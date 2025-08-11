using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebReportsProductsParamsxx
    {
        public int Id { get; set; }
        public string Product { get; set; }
        public double Kpi { get; set; }
        public Guid? ProductRangeId { get; set; }
    }
}
