using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Impl
{
    public class ConfigurationRepoWrapper : IConfigurationRepoWrapper
    {
        private ConfigurationContext _configContext;
        private BILC_CO2Context _CO2Context;
        private IReportRepo _report;
        private ICriteriaRepo _criteria;
        private ICategoryRepo _category;
        private IReferentialRepo _referential;
        private IFieldRepo _field;
        private IReportingServiceRepo _reportingService;
        private IParamValuesRepo _paramValues;
        private IOrderRepo _orderRepo;

        public IReportingServiceRepo ReportingService
        {
            get
            {
                if (_reportingService == null)
                {
                    _reportingService = new ReportingServiceRepo(_configContext);
                }
                return _reportingService;
            }
        }

        public IFieldRepo Field
        {
            get
            {
                if (_field == null)
                {
                    _field = new FieldRepo(_configContext);
                }
                return _field;
            }
        }

        public IParamValuesRepo ParamValues
        {
            get
            {
                if(_paramValues == null)
                {
                    _paramValues = new ParamValuesRepo(_configContext);
                }
                return _paramValues;
            }
        }

        public IReferentialRepo Referential
        {
            get
            {
                if(_referential == null)
                {
                    _referential = new ReferentialRepo(_configContext);
                }
                return _referential;
            }
        }
        public ICategoryRepo Category
        {
            get
            {
                if (_category == null)
                {
                    _category = new CategoryRepo(_configContext);
                }
                return _category;
            }
        }
        public ICriteriaRepo Criteria
        {
            get
            {
                if (_criteria == null)
                {
                    _criteria = new CriteriaRepo(_configContext);
                }
                return _criteria;
            }
        }
        public IReportRepo Report
        {
            get
            {
                if (_report == null)
                {
                    _report = new ReportRepo(_configContext);
                }
                return _report;
            }
        }

        public IOrderRepo OrderRepo
        {
            get
            {
                if (_orderRepo == null)
                {
                    _orderRepo = new OrderRepo(_CO2Context);
                }
                return _orderRepo;
            }
        }

        public ConfigurationRepoWrapper(ConfigurationContext configContext)
        {
            _configContext = configContext;
        }
        public void Save()
        {
            _configContext.SaveChanges();
        }
    }
}
