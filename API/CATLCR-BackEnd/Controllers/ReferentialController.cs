using AutoMapper;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using CATLCR_BackEnd.Models.Configuration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Controllers
{
    public class ReferentialController : BaseController
    {
        private IConfigurationRepoWrapper _repoWrapper;
        private readonly IMapper _mapper;
        public ReferentialController(IConfigurationRepoWrapper repoWrapper, IMapper mapper, IUserRepo userRepo)
            : base(userRepo)
        {
            _repoWrapper = repoWrapper;
            _mapper = mapper;
        }


        [HttpGet("")]
        public List<ReferentialModel> GetAll()
        {
            return _mapper.Map<List<ReferentialModel>>(_repoWrapper.Referential.FindAll());
        }


        [HttpPost("options")]
        public ActionResult<List<OptionModel>> GetOptions([FromBody] AutoCompleteModel model)
        {
          var options = _repoWrapper.Referential.GetOptions(model.Id, model.UserId, model.Predicate?.ToLower(), model.Take, model.Skip, model.CountryCode, model.reportId,model.chargingType,model.majorCustomer,model.brand);
            if (options.Count() > 0) return Ok(options);
            else return Ok(new List<OptionModel>());
        }
    }
}
