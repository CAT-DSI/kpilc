using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Configuration
{
    public class ReportingServiceModel
    {
        public string Name { get; set; }
        public string Server { get; set; }
        public Guid ID { get; set; }
        public DateTime UpdatedOn { get; set; }
        public Guid UpdatedBy { get; set; }
    }
}
