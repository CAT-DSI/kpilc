using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Referentiel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MonthlyPlatformReportController : BaseController
    {
        private IUserRepo _userRepo;
        private readonly ICATLCRReferentiel _referentiel;
        private readonly IConfiguration _configuration;
        public MonthlyPlatformReportController(IUserRepo userRepo, ICATLCRReferentiel referentiel, IConfiguration configuration) : base(userRepo)
        {
            _userRepo = userRepo;
            this._referentiel = referentiel;
            this._configuration = configuration;
        }

        [HttpGet("GetAllCountry")]
        public ActionResult<List<Country>> GetAllCountry(string name, int indexStart, int number, Guid userId, bool useUser)
        {
            var countries = _referentiel.GetAllCountries(name, indexStart, number, userId, useUser);
            if (countries.Count() > 0) return Ok(countries);
            else return Ok(new List<Country>());
        }

        [HttpGet("GetPlateformesByUserCategoryReport")]
        public ActionResult<List<PF_Country_User>> GetPlateformesByUserCategoryReport(Guid categoryID, string country, Guid userId)
        {
            try
            {
                Guid categoryId = Guid.Empty;
                string _key = null;
                _key = _configuration[TwoKPINewDailyPerformanceDelay];
                categoryId = _referentiel.GetReportByKey(_key);

                var countries = _referentiel.GetPlateformesByUserCategoryReport(categoryId, country, userId);
                if (countries.Count() > 0) return Ok(countries);
                else return Ok(new List<PF_Country_User>());
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
