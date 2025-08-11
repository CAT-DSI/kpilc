using AutoMapper;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Model;
using CATLCR_BackEnd.Models.KPILCModel;
using CATLCR_BackEnd.Referentiel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CATLCR_BackEnd.Controllers
{    
    public class MasterController : BaseController
    {
        private IUserRepo _userRepo;
        private readonly ICATLCRReferentiel _referentiel;
        private readonly IMapper _mapper;
        public MasterController(IUserRepo userRepo, ICATLCRReferentiel referentiel, IMapper mapper) : base(userRepo)
        {
            _userRepo = userRepo;
            this._referentiel = referentiel;
            _mapper = mapper;
        }

        [HttpPost]
        [Route(nameof(Log))]
        public ActionResult Log([FromBody] WebReportsModel userParams)
        {
            try
            {
                var models = _referentiel.Log(userParams);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost]
        [Route(nameof(UpdateUserParamCountries))]
        public ActionResult UpdateUserParamCountries([FromBody] UserCountriesModel userParams)
        {
            try
            {

                var models = _referentiel.UpdateUserParamCountries(userParams);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [HttpPost]
        [Route(nameof(UpdateUserRegimes))]
        public ActionResult UpdateUserRegimes([FromBody] UserRegimesModel userParams)
        {
            try
            {

                var models = _referentiel.UpdateUserRegimes(userParams);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [HttpPost]
        [Route(nameof(UpdateUserMarques))]
        public ActionResult UpdateUserMarques([FromBody] UserMarquesModel userParams)
        {
            try
            {

                var models = _referentiel.UpdateUserMarques(userParams);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }


        [HttpGet]
        public ActionResult GetAllWebCountries()
        {
            try
            {
                var models = _mapper.Map<List<WebCountries>>(_referentiel.GetAllWebCountries().ToList());
                return Ok(models);
            }
            catch (Exception)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }

        }

        [HttpPost("getAllPlatformesByListOfCountries")]
       // [Route(nameof(getAllPlatformesByListOfCountries))]
        public ActionResult getAllPlatformesByListOfCountries([FromBody] List<Country> countries)
        {
            try
            {                
                var models = _mapper.Map<List<RefPlateformes>>(_referentiel.getAllPlatformesByListOfCountries(countries).ToList());
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }

        }
        [HttpPost]
        [Route(nameof(UpdateUserParams))]
        public ActionResult UpdateUserParams([FromBody] ReportUserParamsModel userParams)
        {
            try
            {

                var models = _referentiel.UpdateUserParams(userParams);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [HttpPost]
        [Route(nameof(UpdateProductUser))]
        public ActionResult UpdateProductUser([FromBody] ReportUserProductsModel products)
        {
            try
            {

                var models = _referentiel.UpdateProductUser(products);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }


      }

        [HttpPost]
        [Route(nameof(UpdateBrandsForCurrentUser))]
        public ActionResult UpdateBrandsForCurrentUser([FromBody] BrandModel brands)
        {
            try
            {
                var models = _referentiel.UpdateBrandsUser(brands);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }




        [HttpPost]
        [Route(nameof(UpdateMrNumberForCurrentUser))]
        public ActionResult UpdateMrNumberForCurrentUser([FromBody] ReportUserMrNumbersModel mrNumbers)
        {
            try
            {
                var models = _referentiel.UpdateMrNumbersUser(mrNumbers);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetVersion")]
        public ActionResult GetVersion()
        {
            try
            {
                var result = _referentiel.GetVersion();
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("LoadDataToGraphe")]
        public ActionResult LoadDataToGraphe(string country, DateTime start, DateTime end, Guid idReport)
        {
            try
            {
                var result = _referentiel.GetReport_2_DailyPerfDelayEx(country, start, end, idReport);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

       
    }
}
