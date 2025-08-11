using AutoMapper;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using CATLCR_BackEnd.Models.Orders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;

namespace CATLCR_BackEnd.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailController : ControllerBase
    {        
        private IConfigurationRepoWrapper _repoWrapper;
        private IOrderRepo _order;
        private readonly IMapper _mapper;
        private IConfiguration _configuration;
       
        public OrderDetailController(IConfigurationRepoWrapper repoWrapper, IOrderRepo order,IMapper mapper, IConfiguration configuration)
        {
            _repoWrapper = repoWrapper;
            _order = order;
            _mapper = mapper;
            _configuration = configuration;
        }

        public const string APIKEY = "ApiKey";

        [HttpGet]
        [Route(nameof(GetAllOrders))]
        public ActionResult<List<GroupOrderModel>> GetAllOrders([FromBody]RequiredOrderModel model)
        {
            var orders = _order.NewGetAll(model.EXTORDID, model.ORDID, model.XACCOUNTID, model.ESTTIMEDEPFROM, model.ESTTIMEDEPTO);
            if (orders.Count() > 0) return Ok(orders);
            else return Ok(new List<GroupOrderModel>());
        }

        //[HttpGet]
        //[Route(nameof(NewGetAllOrders))]
        //public ActionResult<List<GroupOrderModel>> NewGetAllOrders([FromBody] RequiredOrderModel model)
        //{
        //    var apiKey = ApiKeyValue();
        //    //if (apiKey != _configuration.GetValue<string>(APIKEY))
        //    //{
        //    //    return BadRequest("Please provide valid Key");
        //    //}

        //    var orders = _order.GetAll(model.EXTORDID, model.ORDID, model.XACCOUNTID, model.ESTTIMEDEP);
        //    if (orders.Count() > 0) return Ok(orders);
        //    else return Ok(new List<GroupOrderModel>());
        //}

        private string ApiKeyValue()
        {            
            string apiKey = HttpContext.Request.Headers.Where(x => x.Key.ToLower() == APIKEY.ToLower()).Select(x => x.Value).FirstOrDefault();          
            return apiKey;
        }
              
    }


}
