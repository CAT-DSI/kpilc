using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using AutoMapper;
using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Models.Configuration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CATLCR_BackEnd.Controllers
{
    public class ReportController : BaseController
    {
        private IConfigurationRepoWrapper _repoWrapper;
        private IUserRepo _userRepo;
        private ICATLCRReferentiel _CATLCRReferentiel;
        private readonly IMapper _mapper;
        public ReportController(IConfigurationRepoWrapper repoWrapper, IMapper mapper, IUserRepo userRepo,ICATLCRReferentiel CATLCRReferentiel)
            : base(userRepo)
        {
            _repoWrapper = repoWrapper;
            _mapper = mapper;
            _userRepo = userRepo;
            _CATLCRReferentiel = CATLCRReferentiel;
        }
      

        [HttpGet("ID/{reportID}/UserId/{userid}/country/{country}/ChargingType/{ChargingType}/majorCustomer/{majorCustomer}/brand/{brand}/forConfig/{forConfig}")]
        public ActionResult<ReportModel> GetReport(Guid reportID, Guid userId, string country,string ChargingType, string majorCustomer, string brand, string type, bool forConfig = false)
        {
            try
            {
                
                ReportModel model = _mapper.Map<ReportModel>(_repoWrapper.Report.FindByCondition(s => s.Id == reportID, true).FirstOrDefault());

                if (model == null) return NotFound("Report not found");

                if (!forConfig)
                    foreach (var criteria in model.Criterias.Where(s => s.ControlType == 3 && s.ReportID==reportID)) // add enum for control type 1 texbox 2 date 3 drop down
                    {
                        country = country.ToString();
                        criteria.Options = _repoWrapper.Referential.GetOptions(criteria.Referential, userId, country, reportID, ChargingType, majorCustomer, brand);
                    }
                return Ok(model);

            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }


        [HttpGet("GetAllSupportedReportsall/{userId}")]
        //[HttpGet]
        public ActionResult<List<ReportModel>> GetAllSupportedReportsall(Guid userId)
        {
           
            try
            {
                //var models = _mapper.Map<List<ReportModel>>(_repoWrapper.Report.FindByCondition(s => s.Subreport == false, true).ToList());

                //if (models == null || models.Count() == 0) return NotFound("No report found");
                //return Ok(models);
                var allReports = _mapper.Map<List<ReportModel>>(_repoWrapper.Report.FindByCondition(s => s.Subreport == false, true).OrderBy(x => x.Label).ToList());
              //  var reports = _mapper.Map<List<ReportModel>>(_CATLCRReferentiel.GetUserReportsByProfile(userId).ToList());
                //var models = _mapper.Map<List<ReportModel>>(_CATLCRReferentiel.GetUserReportsByProfile(userId).ToList());

                //var models = allReports
                //   .Where(x => reports.Any(y => y.ID == x.ID));
                return Ok(allReports);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [HttpGet("GetAllSupportedReports/{userId}")]
        //[HttpGet]
        public ActionResult<List<ReportModel>> GetAllSupportedReports(Guid userId)
        {

            try
            {
                //var models = _mapper.Map<List<ReportModel>>(_repoWrapper.Report.FindByCondition(s => s.Subreport == false, true).ToList());

                ////var models = _mapper.Map<List<ReportModel>>(_CATLCRReferentiel.GetUserReportsByProfile(userId).ToList());
                //if (models == null || models.Count() == 0) return NotFound("No report found");
                //return Ok(models);
                var allReports = _mapper.Map<List<ReportModel>>(_repoWrapper.Report.FindByCondition(s => s.Subreport == false, true).ToList());
                var reports = _mapper.Map<List<ReportModel>>(_CATLCRReferentiel.GetUserReportsByProfile(userId).ToList());

                var models = allReports
                   .Where(x => reports.Any(y => y.ID == x.ID));
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [HttpGet("ShowmenuOnProfile/{userId}")]
        //[HttpGet]
        public ActionResult<List<ReportModel>> ShowmenuOnProfile(Guid userId)
        {
            //userId = new Guid("5CFCBC59-3B08-4B25-BE8B-F8806D1AFDEC");
            try
            {
                //var models = _mapper.Map<List<ReportModel>>(_repoWrapper.Report.FindByCondition(s => s.Subreport == false, true).ToList());

                var models = _mapper.Map<List<ReportModel>>(_CATLCRReferentiel.GetUserReportsByProfile(userId).ToList());
                if (models == null || models.Count() == 0) return NotFound("No report found");
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("Categories")]
        public ActionResult<List<CategoryModel>> GetCategories()
        {
            try
            {
                List<CategoryModel> cats = _mapper.Map<List<CategoryModel>>(_repoWrapper.Category.FindAll().ToList());
                if (cats == null || cats.Count() == 0) return NotFound("No category found !");
                return Ok(cats);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }

        }

        [HttpPost("update")]
        public ActionResult<ReportModel> BulkUpdate([FromBody] ReportModel report)
        {
            try
            {
                _repoWrapper.Report.Update(_mapper.Map<Report>(report));
                _repoWrapper.Report.BulkUpdate(_mapper.Map<List<Report>>(report.Subreports));
                _repoWrapper.Criteria.BulkUpdate(_mapper.Map<List<Criteria>>(report.Criterias));

                _repoWrapper.Save();

                return Ok(_mapper.Map<ReportModel>(_repoWrapper.Report
                    .FindByCondition(s => s.Id == report.ID, true).FirstOrDefault()));
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }

        }
    }
}