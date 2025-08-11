using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Orders
{
    public class OrderModel
    {
        public string ORDID { get; set; }
        public string EXTORDID { get; set; }
        public string XACCOUNTID { get; set; }
        public string SPRID { get; set; }       
        public decimal GRSWGT { get; set; }
        public decimal NBKMS { get; set; }
        public string OPSTYPE { get; set; }
        public string PLANNEDSTARTDATETIME { get; set; }
        public string EXECUTEDSTARTDATETIME { get; set; }
        public string PLANNEDENDDATETIME { get; set; }
        public string EXECUTEDENDDATETIME { get; set; }
        public string SNDNAME { get; set; }
        public string SNDCITY { get; set; }
        public string SNDZIP { get; set; }
        public string SNDCOUNTRY { get; set; }
        public string CGNNAME { get; set; }
        public string CGNCITY { get; set; }
        public string CGNZIP { get; set; }
        public string CGNCOUNTRY { get; set; }
        public string TRIPID { get; set; }
        public string TRIPLINEID { get; set; }
        public string CO2MEANSTYPE { get; set; }
        public float DEPLONG { get; set; }
        public float DEPLAT { get; set; }
        public float ARRLONG { get; set; }
        public float ARRLAT { get; set; }
        public string SUPPLIERID { get; set; }
        public string PERFORMERID { get; set; }
        public float CO2EMISSION { get; set; }

    }

    public class GroupOrderModel
    {
        //public string OPSTYPE { get; set; }
        public List<OrderModel> Operation { get; set; }
    }

    public class Root
    {        
        public GroupOrderModel Operations { get; set; }
    }

    public class RequiredOrderModel
    {
        public string EXTORDID { get; set; }
        public string ORDID { get; set; }
        public string XACCOUNTID { get; set; }
        public DateTime? ESTTIMEDEPFROM { get; set; }
        public DateTime? ESTTIMEDEPTO { get; set; }
    }
}
