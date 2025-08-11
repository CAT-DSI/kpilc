using System;
using System.Collections.Generic;

#nullable disable

namespace CATLCR_BackEnd.Data.BILCO2
{
    public partial class MeansType
    {
        public int IdMeansType { get; set; }
        public string MeansTypeCode { get; set; }
        public string MeansTypeName { get; set; }
        public string Co2meansTypeId { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
