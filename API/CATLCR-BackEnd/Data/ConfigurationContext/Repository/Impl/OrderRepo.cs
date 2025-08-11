using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using CATLCR_BackEnd.Models.Orders;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Impl
{
    public class OrderRepo : CO2Repo<Referential>, IOrderRepo
    {
        //private ConfigurationContext _configContext;
        private BILC_CO2Context _CO2Context;
        public OrderRepo(/*ConfigurationContext configContext,*/ BILC_CO2Context CO2Context)
           : base(CO2Context)
        {
            // _configContext = configContext;
            _CO2Context = CO2Context;
        }

        public List<OrderModel> GetAllOrders(int? EXTORDID, int? ORDID, int? XACCOUNTID, int? ESTTIMEDEP)
        {
            return null;
        }



        List<OrderModel> order = new List<OrderModel>()
        {
               new OrderModel { ORDID = "1", EXTORDID = "12", XACCOUNTID = "25454", SPRID = "hgddfg",  OPSTYPE = "1" },
               new OrderModel { ORDID = "2", EXTORDID = "13", XACCOUNTID = "34334", SPRID = "zxcv", OPSTYPE = "2"},
               new OrderModel { ORDID = "3", EXTORDID = "14", XACCOUNTID = "35555", SPRID = "fghj", OPSTYPE = "3" },
               new OrderModel { ORDID = "4", EXTORDID = "15", XACCOUNTID = "33333", SPRID = "rgbnj",OPSTYPE = "2"}
        };

        public List<GroupOrderModel> GetAll(int? EXTORDID, int? ORDID, int? XACCOUNTID, int? ESTTIMEDEP)
        {
            List<GroupOrderModel> orderList = new List<GroupOrderModel>();
            List<OrderModel> orders = order.ToList();
            //orderList = orders.GroupBy(x => x.OPSTYPE).Select(s => new GroupOrderModel()
            //{
            //    Operation = s.Select(c =>
            //    {
            //        var result = c;
            //        return result;
            //    })
            //}).ToList();
            return orderList;
        }

        public List<GroupOrderModel> NewGetAll(string EXTORDID, string ORDID, string XACCOUNTID, DateTime? ESTTIMEDEPFROM , DateTime? ESTTIMEDEPTO )
        {
            List<GroupOrderModel> orderList = new List<GroupOrderModel>();
            List<OrderModel> orders = order.ToList();
            using (var cmd = _CO2Context.Database.GetDbConnection().CreateCommand())
            {
                cmd.CommandText = "REPORT_CO2_DETAILS_API";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                if (cmd.Connection.State != System.Data.ConnectionState.Open) cmd.Connection.Open();
                cmd.Parameters.Add(new SqlParameter("EXT_ORD_ID", EXTORDID));
                cmd.Parameters.Add(new SqlParameter("ORD_ID", ORDID));
                cmd.Parameters.Add(new SqlParameter("XACCOUNT_ID", XACCOUNTID));
                cmd.Parameters.Add(new SqlParameter("EST_TIME_DEP_FROM", ESTTIMEDEPFROM ?? (object)DBNull.Value));
                cmd.Parameters.Add(new SqlParameter("EST_TIME_DEP_TO", ESTTIMEDEPTO ?? (object)DBNull.Value));

                DataTable dt = new DataTable();
                dt.Load(cmd.ExecuteReader());
                orders = dt.AsEnumerable().Select(x => new OrderModel
                {
                    ORDID = !string.IsNullOrEmpty(x["OrdCode"].ToString()) ? x["OrdCode"].ToString() : string.Empty,                    
                    EXTORDID = !string.IsNullOrEmpty(x["Exit Order Id"].ToString()) ? x["Exit Order Id"].ToString() : string.Empty,
                    XACCOUNTID = !string.IsNullOrEmpty(x["Customer"].ToString()) ? x["Customer"].ToString() : string.Empty,
                    SPRID = !string.IsNullOrEmpty(x["ProductCode"].ToString()) ? x["ProductCode"].ToString() : string.Empty,
                    GRSWGT = !string.IsNullOrEmpty(x["GrossWeight"].ToString()) ? (decimal)(x["GrossWeight"]) : 0,
                    NBKMS = !string.IsNullOrEmpty(x["KmNumber"].ToString()) ? (decimal)(x["KmNumber"]) : 0,
                    OPSTYPE = !string.IsNullOrEmpty(x["OpeType"].ToString()) ? (string)(x["OpeType"]) : string.Empty,
                    PLANNEDSTARTDATETIME = !string.IsNullOrEmpty(x["PlannedStartDate"].ToString()) ? (x["PlannedStartDate"].ToString()) : string.Empty,
                    EXECUTEDSTARTDATETIME = !string.IsNullOrEmpty(x["ExecutedStartDate"].ToString()) ? (x["ExecutedStartDate"].ToString()) : string.Empty,
                    PLANNEDENDDATETIME = !string.IsNullOrEmpty(x["PlannedEndDate"].ToString()) ? (x["PlannedEndDate"].ToString()) : string.Empty,
                    EXECUTEDENDDATETIME = !string.IsNullOrEmpty(x["ExecutedEndDate"].ToString()) ? (x["ExecutedEndDate"].ToString()) : string.Empty,
                    SNDNAME = !string.IsNullOrEmpty(x["Name sender"].ToString()) ? (string)(x["Name sender"]): string.Empty,
                    SNDCITY = !string.IsNullOrEmpty(x["City sender"].ToString()) ? (string)(x["City sender"]) : string.Empty,
                    SNDZIP = !string.IsNullOrEmpty(x["ZipCode sender"].ToString()) ? (string)(x["ZipCode sender"]) : string.Empty,
                    SNDCOUNTRY = !string.IsNullOrEmpty(x["Country Sender"].ToString()) ? (string)(x["Country Sender"]) : string.Empty,
                    CGNNAME = !string.IsNullOrEmpty(x["Name consignee"].ToString()) ? x["Name consignee"].ToString() : string.Empty,
                    CGNCITY = !string.IsNullOrEmpty(x["City consignee"].ToString()) ? x["City consignee"].ToString() : string.Empty,
                    CGNZIP = !string.IsNullOrEmpty(x["ZipCode consignee"].ToString()) ? x["ZipCode consignee"].ToString() : string.Empty,
                    CGNCOUNTRY = !string.IsNullOrEmpty(x["Country consignee"].ToString()) ? x["Country consignee"].ToString() : string.Empty,
                    SUPPLIERID = !string.IsNullOrEmpty(x["SupplierId"].ToString()) ? x["SupplierId"].ToString() : string.Empty,
                    PERFORMERID = !string.IsNullOrEmpty(x["Performercountry"].ToString()) ? x["Performercountry"].ToString() : string.Empty,
                    CO2EMISSION = !string.IsNullOrEmpty(x["CO2Emission"].ToString()) ? Convert.ToSingle(x["CO2Emission"]) : 0,
                    TRIPID = !string.IsNullOrEmpty(x["TripId"].ToString()) ? x["TripId"].ToString() : string.Empty,
                    TRIPLINEID = !string.IsNullOrEmpty(x["TripLineId"].ToString()) ? x["TripLineId"].ToString() : string.Empty,
                    CO2MEANSTYPE = !string.IsNullOrEmpty(x["MeansType"].ToString()) ? x["MeansType"].ToString() : string.Empty,
                    DEPLONG = !string.IsNullOrEmpty(x["DepLongitude"].ToString()) ? Convert.ToSingle(x["DepLongitude"]) : 0,
                    DEPLAT = !string.IsNullOrEmpty(x["DepLatitude"].ToString()) ? Convert.ToSingle(x["DepLatitude"]) : 0,
                    ARRLONG = !string.IsNullOrEmpty(x["ArrLongitude"].ToString()) ? Convert.ToSingle(x["ArrLongitude"]) : 0,
                    ARRLAT = !string.IsNullOrEmpty(x["ArrLatitude"].ToString()) ? Convert.ToSingle(x["ArrLatitude"]) : 0,
                }).ToList();
            }
            orderList = orders.GroupBy(x => x.ORDID).Select(s => new GroupOrderModel()
            {
                Operation = s.Select(c =>
                {
                    var result = c;
                    return result;
                }).ToList()
            }).ToList();
            return orderList;
        }
    }
}
