using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Models.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts
{
    public interface IReferentialRepo : IRepo<Referential>
    {
        List<OptionModel> GetOptions(Guid refId, Guid userId, string predicate, int take, int skip, string countryCode, Guid? reportId, string chargingType, string majorCustomer, string brand);
        List<OptionModel> GetOptions(Guid refId, Guid userId, string countryCode, Guid? reportId, string chargingType, string majorCustomer, string brand);
    }
}
