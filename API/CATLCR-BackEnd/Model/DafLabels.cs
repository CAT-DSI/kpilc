using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class DafLabels
    {
        public int Id { get; set; }
        public string IsoCodeLanguage { get; set; }
        public string Value { get; set; }
        public string LabelSelect { get; set; }
    }
}
