using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebMajorCustomers
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public byte[] Logo { get; set; }
    }
}
