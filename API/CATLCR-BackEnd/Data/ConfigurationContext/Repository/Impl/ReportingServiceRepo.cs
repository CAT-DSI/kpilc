using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Impl
{
    public class ReportingServiceRepo : Repo<ReportingService>, IReportingServiceRepo
    {
        public ReportingServiceRepo(ConfigurationContext configContext)
        : base(configContext)
        {
        }
    }
}
