using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext
{
    public class BILC_CO2Context : DbContext
    {
        public BILC_CO2Context(DbContextOptions<BILC_CO2Context> options) : base(options)
        {
            this.Database.SetCommandTimeout(10000);
        }

        public BILC_CO2Context()
        {
        }
    }
}
