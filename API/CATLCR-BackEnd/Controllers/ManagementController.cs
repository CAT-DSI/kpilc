using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.KPILC;
using CATLCR_BackEnd.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagementController : BaseController
    {
        private IUserRepo _userRepo;
        private ICATLCRReferentiel _CATLCRReferentiel;
        private readonly IConfiguration _configuration;
        public ManagementController(IUserRepo userRepo, ICATLCRReferentiel CATLCRReferentiel, IConfiguration configuration) : base(userRepo)
        {
            _userRepo = userRepo;
            _CATLCRReferentiel = CATLCRReferentiel;
            _configuration = configuration;
        }
        [HttpGet("GetAllUplet")]
        public ActionResult GetAllUplet()
        {
            try
            {
                List<RefTranscoFpWex> models = _CATLCRReferentiel.GetAllUplet();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }

        [HttpGet("GetAllRegimes")]
        public ActionResult GetAllRegimes()
        {
            try
            {
                List<RefRegimes> models = _CATLCRReferentiel.getAllRegimes();
                return Ok(models);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
        [HttpPost("UpdateRefTranscoFpWex")]
        public ActionResult UpdateREFTRANSCOFPWEX(RefTranscoFpWex model)
        {
            try
            {
                var result = _CATLCRReferentiel.UpdateREF_TRANSCO_FP_WEX(model);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }
        }
    }
}
