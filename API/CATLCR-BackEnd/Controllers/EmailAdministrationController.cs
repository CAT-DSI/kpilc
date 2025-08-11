using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Models.KPILCModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Controllers
{  
    public class EmailAdministrationController : BaseController
    {
        private IUserRepo _userRepo;
        private readonly ICATLCRReferentiel _CATLCRReferentiel;
        public EmailAdministrationController(IUserRepo userRepo, ICATLCRReferentiel referentiel) : base(userRepo)
        {
            this._userRepo = userRepo;
            this._CATLCRReferentiel = referentiel;
        }

        [HttpGet("GetAllProductRegimes")]
        public ActionResult GetAllProductRegimes()
        {
            try
            {

                var result = _CATLCRReferentiel.GetAllProductRegimes();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllEmailtemForListing")]
        public ActionResult GetAllEmailtemForListing()
        {
            try
            {

                var result = _CATLCRReferentiel.GetAllEmailtemForListing();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllReportForEmails")]
        public ActionResult GetAllReportForEmails()
        {
            try
            {
                var result = _CATLCRReferentiel.getAllReportForEmails();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllCountriesRes")]
        public ActionResult GetAllCountriesRes()
        {
            try
            {
                var result = _CATLCRReferentiel.GetAllCountriesRes();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllWebFrequencies")]
        public ActionResult GetAllWebFrequencies()
        {
            try
            {
                var result = _CATLCRReferentiel.GetAllWebFrequencies();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("InsertEmailItem")]
        public ActionResult InsertEmailItem(EmailReport_EmailEx model)
        {
            try
            {
                var result = _CATLCRReferentiel.InsertEmailItem(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpPost("UpdateEmailItem")]
        public ActionResult UpdateEmailItem(EmailReport_EmailEx model)
        {
            try
            {               
                var result = _CATLCRReferentiel.UpdateEmailItem(model);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetUserProductsByCountryForInserting")]
        public ActionResult GetUserProductsByCountryForInserting(string country)
        {
            try
            {
                var result = _CATLCRReferentiel.GetUserProductsByCountryForInserting(country);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetUserMarqueByCountryForInserting")]
        public ActionResult GetUserMarqueByCountryForInserting(string country)
        {
            try
            {
                var result = _CATLCRReferentiel.GetUserMarqueByCountryForInserting(country);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetUserProductsByCountryBrandForInserting")]
        public ActionResult GetUserProductsByCountryBrandForInserting(string country, string marque)
        {
            try
            {
                var result = _CATLCRReferentiel.GetUserProductsByCountryBrandForInserting(country, marque);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllEmailsReportsItemByIDForEditing")]
        public ActionResult GetAllEmailsReportsItemByIDForEditing(Guid id)
        {
            try
            {
                var result = _CATLCRReferentiel.GetAllEmailsReportsItemByIDForEditing(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("DeleteEmailById/{id}")]
        public ActionResult DeleteEmailById(Guid id)
        {
            try
            {
                var results = _CATLCRReferentiel.DeleteEmailById(id);
                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
    }
}
