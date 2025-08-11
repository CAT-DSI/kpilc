using AutoMapper;
using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Model;
using CATLCR_BackEnd.Models.Configuration;
using CATLCR_BackEnd.Models.KPILCModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministrationController : BaseController
    {
        private IUserRepo _userRepo;
        private ICATLCRReferentiel _CATLCRReferentiel;
        private readonly IMapper _mapper;
        public AdministrationController(IUserRepo userRepo, ICATLCRReferentiel CATLCRReferentiel, IMapper mapper) : base(userRepo)
        {
            _userRepo = userRepo;
            _CATLCRReferentiel = CATLCRReferentiel;
            _mapper = mapper;
        }

        [HttpGet("GetReportsNorService/{userID}")]
        public ActionResult GetReportsNorUser(Guid serviceId)
        {
            try
            {
                var models = _mapper.Map<List<WebReportRed>>(_CATLCRReferentiel.GetReportsByNorService(serviceId).ToList());
                return Ok(models);
            }
            catch (Exception ex)
            {

                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("CreateProfile")]
        public ActionResult CreateProfile(ProfileModel model)
        {
            try
            {
                var result = _CATLCRReferentiel.CreateProfile(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllProfiles")]
        public ActionResult GetAllProfiles( string model)
        {
            try
            {
               
                var models = _mapper.Map<List<WebProfile>>(_CATLCRReferentiel.GetAllProfile(model).ToList());
                return Ok(models);
            }   
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        //This api is created for find checked report.
        [HttpGet("GetProfileReports/{profileId}")]
        public ActionResult GetProfileReports(Guid profileId)
        {
            try
            {
                var models = _mapper.Map<List<ReportModel>>(_CATLCRReferentiel.GetprofileReport(profileId).ToList());
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

       

        //This api is created for find unchecked report.
        [HttpGet("GetReportsNorProfile/{profileId}")]
        public ActionResult GetReportsNorProfile(Guid profileId)
        {
            try
            {
                var models = _mapper.Map<List<ReportModel>>(_CATLCRReferentiel.GetprofileNorReport(profileId).ToList());
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

    }
}
