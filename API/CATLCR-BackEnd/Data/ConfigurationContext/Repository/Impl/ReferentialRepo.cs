using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts;
using CATLCR_BackEnd.Models.Configuration;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Impl
{
    public class ReferentialRepo : Repo<Referential>, IReferentialRepo
    {
        private ConfigurationContext _configContext;
        public ReferentialRepo(ConfigurationContext configContext)
        : base(configContext)
        {
            _configContext = configContext;
        }

        public List<OptionModel> GetOptions(Guid refId, string predicate, int take, int skip)
        {
            string command = $"EXECUTE_Referential_Query @ID = '{refId}', @SKIP = {skip}, @TAKE = {take}, @PREDICATE = {(string.IsNullOrEmpty(predicate) ? "null" : predicate)}";
            return _configContext.Options.FromSqlRaw(command).ToList();
        }

        public List<OptionModel> GetOptions(Guid refId, Guid userId, string predicate, int take, int skip, string countryCode, Guid? reportId, string chargingType, string majorCustomer, string brand)
        {
            string command = $"EXECUTE_Referential_Query @ID = '{refId}', @SKIP = {skip}, @TAKE = {take}, @PREDICATE = {(string.IsNullOrEmpty(predicate) ? "null" : predicate)}, @userID = '{userId}', @countryCode = {(string.IsNullOrEmpty(countryCode) ? "null" : countryCode)}, @ReportID = '{reportId}', @Charging_Type = '{chargingType}', @majorCustomer = '{majorCustomer}', @Brand = '{brand}'";
            return _configContext.Options.FromSqlRaw(command).ToList();
        }

        public List<OptionModel> GetOptions(Guid refId, Guid userId, string countryCode, Guid? reportId, string chargingType, string majorCustomer, string brand)
        {
            string command = $"EXECUTE_Referential_Query @ID = '{refId}', @SKIP = {0}, @TAKE = {700}, @PREDICATE = null, @userID = '{userId}', @countryCode = {(string.IsNullOrEmpty(countryCode) ? "null" : countryCode)}, @ReportID = '{reportId}', @Charging_Type = '{chargingType}', @majorCustomer = '{majorCustomer}', @Brand = '{brand}'";
            return _configContext.Options.FromSqlRaw(command).ToList();
        }
    }
}
