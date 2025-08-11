using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebCountries
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public bool? DisplayInMajorCustomerReport { get; set; }
        public byte[] BinaryImage { get; set; }
    }
}
