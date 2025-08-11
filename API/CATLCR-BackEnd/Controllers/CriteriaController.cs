using AutoMapper;
using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.Models.Configuration;
using CATLCR_BackEnd.Models.KPILCModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Controllers
{
    public class CriteriaController : BaseController
    {
        private IConfigurationRepoWrapper _repoWrapper;
        private readonly IMapper _mapper;

        public CriteriaController(IConfigurationRepoWrapper repoWrapper, IMapper mapper, IUserRepo userRepo)
           : base(userRepo)
        {
            _repoWrapper = repoWrapper;
            _mapper = mapper;
        }

        [HttpPost("saveValues")]
        public ActionResult<bool> SaveParamValues([FromBody] List<ParamValue> paramValues)
        {
            try
             {

                foreach(var item in paramValues)
                {
                    var param = _mapper.Map<UserParamValues>(item);
                    //param.UserId = Guid.Parse("8309F1AA-673D-4D67-809C-2840FDECA5E7");
                     //param.UserId = item.UserID;
                    _repoWrapper.ParamValues.CreateOrUpdate(param);
                }

                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest("An unhandled error occured. Please ask for support !");
            }

        }
    }
}
