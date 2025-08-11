using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Impl
{
    public class ParamValuesRepo : Repo<UserParamValues>, IParamValuesRepo
    {
        private ConfigurationContext _configContext;
        public ParamValuesRepo(ConfigurationContext configContext)
            : base(configContext)
        {
            _configContext = configContext;
        }

        public void CreateOrUpdate(UserParamValues value)
        {
            var existingItem = _configContext.ParamValues.FirstOrDefault(s => s.UserId == value.UserId
                                                                            && s.CriteriaId == value.CriteriaId
                                                                            && s.Scheduler == false);

            if (existingItem != null)
            {
                existingItem.Value = value.Value;
                _configContext.SaveChanges();
            }
            else
            {
                value.Id = Guid.NewGuid();
                _configContext.ParamValues.Add(value);
                _configContext.SaveChanges();
            }
        }
    }
}
