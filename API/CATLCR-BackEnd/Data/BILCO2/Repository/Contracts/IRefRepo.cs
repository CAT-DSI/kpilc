using CATLCR_BackEnd.Models.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.BILCO2.Repository.Contracts
{
    public interface IRefRepo
    {
        List<OptionModel> GetDataRefs(Guid refId, string predicate, int take, int skip);
        List<OptionModel> GetTop10Refs(Guid refId);
    }
}
