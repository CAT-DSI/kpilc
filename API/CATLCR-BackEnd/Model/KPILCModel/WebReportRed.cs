using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.KPILCModel
{
    public class WebReportRed
    {
        public System.Guid Id { get; set; }

        public string Name { get; set; }

        public System.Nullable<System.DateTime> DateCreation { get; set; }

        public System.Nullable<System.DateTime> DateUpdate { get; set; }

        public string ReportKey { get; set; }

        public System.Guid CategoryID { get; set; }
        public bool? IS_FOR_EMAIL { get; set; }
        public WebReportRed()
        {
            IS_FOR_EMAIL = false;
        }
    }
}
