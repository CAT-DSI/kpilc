using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class RefTranscoFpWex
    {
        public Guid IdTranscoWex { get; set; }
        public string FamilyPk { get; set; }
        public string Family { get; set; }
        public string XaccountId { get; set; }
        public string XaccountFk { get; set; }
        public string SprId { get; set; }
        public string SprFk { get; set; }
        public string Label { get; set; }
        public string Country { get; set; }
        public string ArrCountry { get; set; }
    }
}
