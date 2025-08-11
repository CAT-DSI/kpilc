using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.KPILCModel
{
    public class ProfileModel
    {
        public string ProfileName { get; set; }
        public List<Guid> ReportId { get; set; }
        public Guid ProfileId { get; set; }
    }       
}
