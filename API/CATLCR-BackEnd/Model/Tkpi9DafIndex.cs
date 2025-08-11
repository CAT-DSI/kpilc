using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class Tkpi9DafIndex
    {
        public string Country { get; set; }
        public string TpaId { get; set; }
        public string CttId { get; set; }
        public string SprId { get; set; }
        public long? IndexFk { get; set; }
        public string IndexId { get; set; }
        public string Name { get; set; }
        public string IndexType { get; set; }
        public decimal? IndexStartValue { get; set; }
        public decimal? IndexRate { get; set; }
        public decimal? IndexThreshold { get; set; }
    }
}
