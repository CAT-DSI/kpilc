using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Model;
using CATLCR_BackEnd.Models.KPILCModel;
using CATLCR_BackEnd.Referentiel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Policy;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DelayReportController : BaseController
    {
        private IUserRepo _userRepo;
        private ICATLCRReferentiel _CATLCRReferentiel;
        private readonly IConfiguration _configuration;
        public DelayReportController(IUserRepo userRepo, ICATLCRReferentiel CATLCRReferentiel, IConfiguration configuration) : base(userRepo)
        {
            _userRepo = userRepo;
            _CATLCRReferentiel = CATLCRReferentiel;
            _configuration = configuration;
        }
        #region Brand shipments-dealer management
        [HttpGet("GetAllDealerShipmentCodes")]
        public ActionResult GetAllDealerShipmentCodes()
        {
            try
            {
                List<WebReportDealerShipmentsParams> models = _CATLCRReferentiel.GetAllDealerShipmentCodes();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetRefSupplierForDelayReports")]
        public ActionResult GetRefSupplierForDelayReports(string country)
        {
            try
            {
                var result = _CATLCRReferentiel.GetRefSupplierForDelayReports(country);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetRefDealerCodes")]
        public ActionResult GetRefDealerCodes(string country, string brand)
        {
            try
            {
                var result = _CATLCRReferentiel.GetRefDealerCodes(country, brand);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("InsertDealerShipmentParam")]
        public ActionResult InsertDealerShipmentParam(WebReportDealerShipmentsParams model)
        {
            try
            {
                var result = _CATLCRReferentiel.InsertDealerShipmentParam(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("DeleteDealerShipmentParam/{paramId}")]
        public ActionResult DeleteDealerShipmentParam(Guid paramId)
        {
            try
            {
                var results = _CATLCRReferentiel.DeleteDealerShipmentParam(paramId);
                return Ok(results);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        #endregion

        [HttpGet("GetAllReportParamsByReport/{type}")]
        public ActionResult GetAllReportParamsByReport(int type)
        {
            try
            {
                Guid CategoryId = Guid.Empty;
                string _key = null;
                if (type == 1)
                {
                    _key = _configuration[TwoKPINewDailyPerformanceDelay];
                    CategoryId = _CATLCRReferentiel.GetReportByKey(_key);
                }
                else if (type == 2)
                {
                    CategoryId = new Guid(_configuration[ToSetUpForDelivery]);
                }
                else if (type == 3)
                {
                    CategoryId = Guid.Parse(_configuration[ToExcludeCustomers]);
                }
                List<WebReportsParamsModel> models = _CATLCRReferentiel.GetAllReportParamsByReport(CategoryId);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }


        [HttpGet("GetAllCountriesEx")]
        public ActionResult GetAllCountriesEx()
        {
            try
            {
                List<Country> models = _CATLCRReferentiel.GetAllCountriesEx();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("UpdateKpiSetting")]
        public ActionResult UpdateKpiSetting(KpiSettingModel model)
        {
            try
            {
                var result = _CATLCRReferentiel.UpdateKpiSetting(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllKpiSetting")]
        public ActionResult GetAllKpiSetting()
        {
            try
            {
                List<KpiSettingModel> models = _CATLCRReferentiel.GetAllKpiSetting();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllUpletByCountry/{country}")]
        public ActionResult GetAllUpletByCountry(string country)
        {
            try
            {
                string _key = _configuration[TwoKPINewDailyPerformanceDelay];
                Guid categoryId = _CATLCRReferentiel.GetReportByKey(_key);
                List<RefTranscoFpWex> models = _CATLCRReferentiel.GetAllUpletByCountry(country, categoryId, true);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [HttpGet("GetAllUpletByCountry")]
        public ActionResult GetAllUpletByCountry(string country, int type)
        {
            try
            {
                Guid CategoryId = Guid.Empty;
                string _key = null;
                if (type == 1)
                {
                    _key = _configuration[TwoKPINewDailyPerformanceDelay];
                    CategoryId = _CATLCRReferentiel.GetReportByKey(_key);
                }
                else if (type == 2)
                {
                    CategoryId = new Guid(_configuration[ToSetUpForDelivery]);
                }
                else if (type == 3)
                {
                    CategoryId = Guid.Parse(_configuration[ToExcludeCustomers]);
                }
                List<RefTranscoFpWex> models = _CATLCRReferentiel.GetAllUpletByCountry(country, CategoryId, true);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }



        [HttpGet("DeleteReportParams/{paramId}")]
        public ActionResult DeleteReportParams(Guid paramId)
        {
            try
            {
                var results = _CATLCRReferentiel.DeleteReportParams(paramId);
                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }






        [HttpGet("GetAllUpletByCountryForBrands")]

        public ActionResult GetAllUpletByCountryForBrands(string country, int type)

        {

            try

            {

                Guid categoryId = Guid.Empty;

                string _key = null;

                if (type == 1)

                {

                    _key = _configuration[TwoKPINewDailyPerformanceDelay];

                    categoryId = _CATLCRReferentiel.GetReportByKey(_key);

                }

                else if (type == 2)

                {

                    categoryId = new Guid(_configuration[ToSetUpForDelivery]);

                }

                else if (type == 3)

                {

                    categoryId = Guid.Parse(_configuration[ToExcludeCustomers]);

                }

                List<RefTranscoFpWex> models = _CATLCRReferentiel.GetAllUpletByCountryForBrands(country, categoryId);

                return Ok(models);

            }

            catch (Exception ex)

            {

                return BadRequest("An unhandled error occured. Please ask for support !");

            }

        }
        [HttpPost("AddUpdateReportParams")]
        public ActionResult AddUpdateReportParams(WebReportsParamsModel model)
        {
            try
            {
                model.CategoryId = Guid.Empty;
                string _key = null;
                if (model.type == 1)
                {
                    _key = _configuration[TwoKPINewDailyPerformanceDelay];
                    model.CategoryId = _CATLCRReferentiel.GetReportByKey(_key);
                }
                else if (model.type == 2)
                {
                    model.CategoryId = new Guid(_configuration[ToSetUpForDelivery]);
                }
                else if (model.type == 3)
                {
                    model.CategoryId = Guid.Parse(_configuration[ToExcludeCustomers]);
                }
                var result = _CATLCRReferentiel.AddReportParams(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllProductWithKpi")]
        public ActionResult GetAllProductWithKpi()
        {
            try
            {
                List<ProductKpiModel> models = _CATLCRReferentiel.GetAllProductWithKpi();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }


        [HttpGet("DeleteProductRegime/{paramId}")]
        public ActionResult DeleteProductRegime(Guid paramId)
        {
            try
            {
                var results = _CATLCRReferentiel.DeleteProductRegime(paramId);
                return Ok(results);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetPendingProductsToParams")]
        public ActionResult GetPendingProductsToParams()
        {
            try
            {
                var result = _CATLCRReferentiel.GetPendingProductsToParams();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetRegimes")]
        public ActionResult GetRegimes()
        {
            try
            {

                var result = _CATLCRReferentiel.GetRegimes();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [HttpPost("InsertPRoductRegime")]
        public ActionResult InsertPRoductRegime(ProductRegimeModel model)
        {
            try
            {
                var result = _CATLCRReferentiel.InsertPRoductRegime(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("UpdateProductRegime")]
        public ActionResult UpdateProductRegime(ProductRegimeModel model)
        {
            try
            {
                var result = _CATLCRReferentiel.UpdateProductRegime(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }


        [HttpPost("AddUpdateProductWithKpi")]
        public ActionResult AddUpdateProductWithKpi(ProductKpiModel model)
        {
            try
            {
                var result = _CATLCRReferentiel.InsertProductWithKpi(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        #region ViaCustomers
        [HttpGet("GetAllGetAllViaCustomers")]
        public ActionResult GetAllGetAllViaCustomers()
        {
            try
            {
                List<ViaCustomerModel> models = _CATLCRReferentiel.GetAllViaCustomers();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        #endregion


        #region Countries-Major customer reports
        [HttpGet("GetMajorCustomerCountries")]
        public ActionResult GetMajorCustomerCountries()
        {
            try
            {
                List<CustomerCountries> models = _CATLCRReferentiel.GetMajorCustomerCountries();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("UpdateMajorCustomerCountry")]
        public ActionResult UpdateMajorCustomerCountry(CustomerCountries model)
        {
            try
            {
                var result = _CATLCRReferentiel.UpdateMajorCustomerCountry(model);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        #endregion

        #region Open days management

        [HttpGet("GetAllYears")]
        public ActionResult GetAllYears()
        {
            try
            {
                List<WebYears> models = _CATLCRReferentiel.GetAllYears();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetOpenDaysDetByCountryAndYear")]
        public ActionResult GetOpenDaysDetByCountryAndYear(string codeCountry, int year)
        {
            try
            {
                List<WebOpenDaysDet> models = _CATLCRReferentiel.GetOpenDaysDetByCountryAndYear(codeCountry, year);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetPlateformesUCountry")]
        public ActionResult GetPlateformesUCountry(string codeCountry)
        {
            try
            {
                List<RefPlateformes> models = _CATLCRReferentiel.GetPlateformesUCountry(codeCountry);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("DeleteFromWeb_OpenDaysDet/{id}")]
        public ActionResult DeleteFromWeb_OpenDaysDet(Guid id)
        {
            try
            {
                var results = _CATLCRReferentiel.DeleteFromWeb_OpenDaysDet(id);
                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("InsertOpenDaysDet")]
        public ActionResult InsertOpenDaysDet(WebOpenDaysDet model)
        {
            try
            {
                var result = _CATLCRReferentiel.InsertOpenDaysDet(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        #endregion

        #region Attribution PF aux rapports délais
        [HttpGet("GetAllCategoriesPFByCategory")]
        public ActionResult GetAllCategoriesPFByCategory(int type)
        {
            try
            {
                Guid categoryId = Guid.Empty;
                string _key = null;
                if (type == 1)
                {
                    _key = _configuration[TwoKPINewDailyPerformanceDelay];
                    categoryId = _CATLCRReferentiel.GetReportByKey(_key);
                }
                List<ReportWebCategoriesPfs> models = _CATLCRReferentiel.GetAllCategoriesPFByCategory(categoryId);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("DeleteReportWeb_CategoryPF")]
        public ActionResult DeleteReportWeb_CategoryPF(ReportWebCategoriesPfs oldItem)
        {
            try
            {
                var results = _CATLCRReferentiel.DeleteReportWeb_CategoryPF(oldItem);
                return Ok(results);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("AddReportWeb_CategoryPF")]
        public ActionResult AddReportWeb_CategoryPF(ReportWebCategoriesPfs model)
        {
            try
            {

                string _key = null;
                _key = _configuration[TwoKPINewDailyPerformanceDelay];
                model.CatagoryId = _CATLCRReferentiel.GetReportByKey(_key);

                var result = _CATLCRReferentiel.AddReportWeb_CategoryPF(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllPlateformesWithoutName")]
        public ActionResult GetAllPlateformesWithoutName(int type, string country)
        {
            try
            {
                Guid categoryId = Guid.Empty;
                string _key = null;
                if (type == 1)
                {
                    _key = _configuration[TwoKPINewDailyPerformanceDelay];
                    categoryId = _CATLCRReferentiel.GetReportByKey(_key);
                }
                List<RefPlateformes> models = _CATLCRReferentiel.GetAllPlateformesWithoutName(categoryId, country);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        #endregion

        #region Major Customer administration

        [HttpGet("GetMajorCustomers")]
        public ActionResult GetMajorCustomers()
        {
            try
            {
                List<ReportMajorCustomerForVolume> models = _CATLCRReferentiel.GetMajorCustomers();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllMajorMarqueByCountryOutOfTable")]
        public ActionResult GetAllMajorMarqueByCountryOutOfTable(string country)
        {
            try
            {
                List<RefMarques> models = _CATLCRReferentiel.getAllMajorMarqueByCountryOutOfTable(country);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("AddMajorCustomer")]
        public ActionResult AddMajorCustomer(ReportMajorCustomerForVolume model)
        {
            try
            {
                var result = _CATLCRReferentiel.AddMajorCustomer(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("DeleteMajorCustomer/{customer}")]
        public ActionResult DeleteMajorCustomer(string customer)
        {
            try
            {
                var results = _CATLCRReferentiel.DeleteMajorCustomer(customer);
                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        #endregion

        #region Gestion des jours fériés pour les volumes

        [HttpGet("GetOpenDaysByCountryAndYear")]
        public ActionResult GetOpenDaysByCountryAndYear(string CodeCountry, int Year)
        {
            try
            {
                List<ReportOpenDays> models = _CATLCRReferentiel.GetOpenDaysByCountryAndYear(CodeCountry, Year);
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("UpdateOpenDays")]
        public ActionResult UpdateOpenDays(ReportOpenDays model)
        {
            try
            {
                var result = _CATLCRReferentiel.UpdateOpenDaysById(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetOpenDayById")]
        public ActionResult GetOpenDayById(Guid Id)
        {
            try
            {
                var result = _CATLCRReferentiel.GetOpenDayById(Id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        #endregion

        [HttpGet("GetAllReportParamsByCountryReport/{country}")]
        public ActionResult GetAllReportParamsByCountryReport(string country)
        {
            try
            {
                Guid categoryId = Guid.Empty;
                string _key = _configuration[TwoKPINewDailyPerformanceDelay];
                categoryId = _CATLCRReferentiel.GetReportByKey(_key);

                var models = _CATLCRReferentiel.GetAllReportParamsByCountryReport(country, categoryId);
                return Ok(models);
            }
            catch (Exception)
            {
                return BadRequest("an unhandled error occured. please ask for support !");
            }

        }

        #region Goal by PF

        [HttpPost("UpdatePlateForme")]
        public ActionResult UpdatePlateForme(RefPlateformes model)
        {
            try
            {
                var result = _CATLCRReferentiel.UpdatePlateForme(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

       
        #endregion
    }
}
