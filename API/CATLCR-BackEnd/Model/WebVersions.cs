using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebVersions
    {
        public int VersionKey { get; set; }
        public string VersionName { get; set; }
        public DateTime Date { get; set; }
        public bool Running { get; set; }
    }
}
