using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Configuration
{
    public class AutoCompleteModel
    {
        public string Predicate { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string CountryCode { get; set; }
        public Guid? reportId { get; set; }
        public string chargingType { get; set; }
        public string majorCustomer { get; set; }
        public string brand { get; set; }
    }
}
