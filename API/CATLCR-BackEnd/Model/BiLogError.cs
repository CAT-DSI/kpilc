using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class BiLogError
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? Date { get; set; }
    }
}
