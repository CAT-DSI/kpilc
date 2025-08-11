using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class EmailWebFrequencies
    {
        public Guid Id { get; set; }
        public string FrequencyKey { get; set; }
        public string FrequencyLabel { get; set; }
    }
}
