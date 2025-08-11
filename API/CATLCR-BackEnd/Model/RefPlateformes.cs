using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class RefPlateformes
    {
        public string CodePlf { get; set; }
        public string Plateform { get; set; }
        public string Country { get; set; }
        public bool IsCat { get; set; }
        public decimal? Nbr { get; set; }
        public decimal? Euro { get; set; }
        public bool Display { get; set; }
        public int Id { get; set; }
    }
}
