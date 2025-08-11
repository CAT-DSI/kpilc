using System;
using System.Collections.Generic;

#nullable disable

namespace CATLCR_BackEnd.Data.BILCO2
{
    public partial class Product
    {
        public int IdProduct { get; set; }
        public string ProductCode { get; set; }
        public string ProductName { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
