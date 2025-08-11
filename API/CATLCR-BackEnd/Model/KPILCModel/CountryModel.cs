using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.KPILCModel
{
    public class CountryModel
    {
        public List<UserCountryModel> userCountries { get; set; }
        public List<UserNorCountryModel> userNorCountries { get; set; }
    }

    public class UserCountryModel
    {
        public Guid UserId { get; set; }
        public string CountryCode { get; set; }
        public Guid CountryId { get; set; }
    }

    public class UserNorCountryModel
    {
        public Guid UserId { get; set; }
        public Guid CountryId { get; set; }
        public string CountryCode { get; set; }
    }

    public class CustomerCountries
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public bool? EnabledForMajorCustomerReport { get; set; }
        public byte[] BinaryImage { get; set; }
    }
}
