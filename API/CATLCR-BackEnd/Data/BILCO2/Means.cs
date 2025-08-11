using System;
using System.Collections.Generic;

#nullable disable

namespace CATLCR_BackEnd.Data.BILCO2
{
    public partial class Means
    {
        public int IdMeans { get; set; }
        public string MeansCode { get; set; }
        public string MeansName { get; set; }
        public string MeansType { get; set; }
        public string TruckPlateNo { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
