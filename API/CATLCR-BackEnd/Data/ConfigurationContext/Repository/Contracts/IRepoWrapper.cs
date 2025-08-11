using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts
{
    public interface IConfigurationRepoWrapper
    {
        IReportRepo Report { get; }
        ICriteriaRepo Criteria { get; }
        ICategoryRepo Category { get; }
        IFieldRepo Field { get; }
        IReferentialRepo Referential { get; }
        IReportingServiceRepo ReportingService { get; }
        IParamValuesRepo ParamValues { get; }

        void Save();
    }
}
