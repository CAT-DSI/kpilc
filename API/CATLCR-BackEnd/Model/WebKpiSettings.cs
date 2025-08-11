using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebKpiSettings
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Kpi { get; set; }
    }
}
