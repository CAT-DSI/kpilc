using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Referentiel
{
    public class ReportKeyValue
    {
        public string Key { get; set; }
        public decimal? Value1 { get; set; }

        public decimal? Value2 { get; set; }
        public decimal? Value3 { get; set; }
        public decimal? Value4 { get; set; }
        public decimal? Value5 { get; set; }
        public decimal? Value6 { get; set; }
        public decimal? Value7 { get; set; }
        public decimal? Value8 { get; set; }
        public ReportKeyValue()
        {
            Value1 = 0;
            Value2 = 0;
            Value3 = 0;
            Value4 = 0;
            Value5 = 0;
            Value6 = 0;
            Value7 = 0;
            Value8 = 0;
        }
    }
}
