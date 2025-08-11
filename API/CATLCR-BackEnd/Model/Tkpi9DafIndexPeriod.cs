using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi9DafIndexPeriod
    {
        public long Pk { get; set; }
        public long? IndexFk { get; set; }
        public string IndexId { get; set; }
        public string PeriodYear { get; set; }
        public string PeriodMonth { get; set; }
        public decimal? IndexValue { get; set; }
    }
}
