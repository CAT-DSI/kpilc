using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts
{
    public abstract class CO2Repo<T> : ICO2Repo<T> where T : class
    {
        protected BILC_CO2Context NewRepositoryContext { get; set; }

        public CO2Repo(BILC_CO2Context CO2Context)
        {
            this.NewRepositoryContext = CO2Context;
        }
    }
}
