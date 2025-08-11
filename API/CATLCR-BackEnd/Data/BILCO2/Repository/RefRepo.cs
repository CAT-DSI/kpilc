using CATLCR_BackEnd.Data.BILCO2.Repository.Contracts;
using CATLCR_BackEnd.Models.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CATLCR_BackEnd.Data.BILCO2.Repository
{
    public class RefRepo : IRefRepo
    {
        private ConfigurationContext.ConfigurationContext _configContext;
        private BILC_CO2Context _bilcContext;

        public RefRepo(ConfigurationContext.ConfigurationContext configContext, BILC_CO2Context BILCContext)
        {
            _configContext = configContext;
            _bilcContext = BILCContext;
        }

        public List<OptionModel> GetDataRefs(Guid refId, string predicate, int take, int skip)
        {
            var referential = _configContext.Referentials.FirstOrDefault(s => s.Id == refId);
            if (referential != null)
            {
                switch (referential.Table)
                {

                    case "ThirdParty":
                        if (!string.IsNullOrEmpty(predicate))
                            return _bilcContext.ThirdParties
                                .Where(s => s.IsPrincipal == 1
                                 && (s.ThirdPartyCode.ToLower().Contains(predicate) || s.ThirdPartyName.ToLower().Contains(predicate)))
                                .Skip(skip).Take(take)
                                .Select(x => new OptionModel { Value = x.IdThirdParty, Key = x.ThirdPartyCode, Source = x })
                                .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();
                        else
                            return _bilcContext.ThirdParties.Where(s => s.IsPrincipal == 1).Skip(skip).Take(take)
                                .Select(x => new OptionModel { Value = x.IdThirdParty, Key = x.ThirdPartyCode, Source = x })
                                .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();

                    case "Product":
                        if (!string.IsNullOrEmpty(predicate))
                            return _bilcContext.Products
                                .Where(s => s.ProductCode.ToLower().Contains(predicate) || s.ProductName.ToLower().Contains(predicate))
                                .Skip(skip).Take(take)
                                .Select(x => new OptionModel { Value = x.IdProduct, Key = x.ProductCode, Source = x })
                                .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();
                        else
                            return _bilcContext.Products.Where(s => s.ProductCode.Contains("day") || s.ProductCode.Contains("night"))
                                    .Select(x => new OptionModel { Key = x.ProductCode, Value = x.IdProduct, Source = x })
                                    .Distinct().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();
                                    
                            //return _bilcContext.Products.Skip(skip).Take(take)
                            //    .Select(x => new OptionModel { Value = x.IdProduct, Key = x.ProductCode, Source = x })
                            //    .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();
                    case "Web_Country":
                        if (!string.IsNullOrEmpty(predicate))
                            return _bilcContext.WebCountries
                                .Where(s => s.Code.ToLower().Contains(predicate))
                                .Skip(skip).Take(take)
                                .Select(x => new OptionModel { Value = x.Id, Key = x.Code, Source = x })
                                .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();
                        else
                            return _bilcContext.WebCountries.Skip(skip).Take(take)
                                .Select(x => new OptionModel { Value = x.Id, Key = x.Code, Source = x })
                                .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();

                    default: return new List<OptionModel>();
                }
            }
            else return new List<OptionModel>();
        }

        public List<OptionModel> GetTop10Refs(Guid refId)
        {
                    var referential = _configContext.Referentials.FirstOrDefault(s => s.Id == refId);
                    if (referential != null)
                    {
                        switch (referential.Table)
                        {
                            case "ThirdParty":
                                return _bilcContext.ThirdParties.Where(s => s.IsPrincipal == 1).Skip(0).Take(10)
                                    .Select(x => new OptionModel { Value = x.IdThirdParty, Key = x.ThirdPartyCode, Source = x })
                                    .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();

                            case "Product":

                        return _bilcContext.Products.Where(s => s.ProductCode.Contains("day") || s.ProductCode.Contains("night"))
                                    .Select(x => new OptionModel { Key = x.ProductCode, Value = x.IdProduct, Source = x })
                                    .Distinct().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();

                        //return _bilcContext.Products.Skip(0).Take(10)
                        //            .Select(x => new OptionModel { Value = x.IdProduct, Key = x.ProductCode, Source = x })
                        //            .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();
                            case "Web_Country":
                                return _bilcContext.WebCountries.Skip(0).Take(10)
                                    .Select(x => new OptionModel { Value = x.Id, Key = x.Code, Source = x })
                                    .Distinct().ToList().OrderBy(s => s.Key).ThenBy(s => s.Value).ToList();

                            default: return new List<OptionModel>();
                        }
                    }
                    else return new List<OptionModel>();
        }
    }
}
