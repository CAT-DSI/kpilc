using CATLCR_BackEnd.Models.Orders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts
{
    public interface IOrderRepo
    {
        List<GroupOrderModel> GetAll(int? EXTORDID, int? ORDID, int? XACCOUNTID, int? ESTTIMEDEP);
        List<GroupOrderModel> NewGetAll(string EXTORDID, string ORDID, string XACCOUNTID, DateTime? ESTTIMEDEPFROM, DateTime? ESTTIMEDEPTO);
        
    }
}
