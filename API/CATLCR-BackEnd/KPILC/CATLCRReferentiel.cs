using CATLCR_BackEnd.Data.ConfigurationContext;
using CATLCR_BackEnd.Data.Security;
using CATLCR_BackEnd.Data.Security.Entities;
using CATLCR_BackEnd.Model;
using CATLCR_BackEnd.Models.Configuration;
using CATLCR_BackEnd.Models.KPILCModel;
using CATLCR_BackEnd.Referentiel;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Security.Policy;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.KPILC
{
    public class CATLCRReferentiel : ICATLCRReferentiel
    {
        private readonly CATLCRContext context;
        private readonly SecurityContext Configuration;
        private readonly IConfiguration _configuration;
        public CATLCRReferentiel(CATLCRContext _context, SecurityContext _SecurityContext, IConfiguration configuration)
        {
            this.context = _context;
            this.Configuration = _SecurityContext;
            this._configuration = configuration;
        }

        public const string FiveKPI = "FiveKPI";
        public const string SevenKPI = "SevenKPI";
        public const string WeeklyEuropeDelayKpi = "WeeklyEuropeDelayKpi";
        public const string MonthlyEuropeDelayKpi = "MonthlyEuropeDelayKpi";
        public const string TwoKPINewDailyPerformanceDelay = "TwoKPINewDailyPerformanceDelay";

        public WebUsers FindByAccesKey(string accesKey)
        {
            WebUsers _user = new WebUsers();
            _user = context.WebUsers.Where(a => a.AccessKey == accesKey && a.IsActive == true && a.IsDelete != true).FirstOrDefault();
            return _user;
        }
        public bool Log(WebReportsModel report)
        {
            bool result = false;
            try
            {
                UserTrack userTrack = new UserTrack();
                userTrack.CreatedOn = DateTime.Now;
                userTrack.Action = report.UserAction;
                //userTrack.ActionSpecified = true;
                //userTrack.CreatedOnSpecified = true;
                userTrack.Id = Guid.NewGuid();
                userTrack.UserId = report.UserId;
                userTrack.ReportId = report.ReportId;
                context.UserTrack.Add(userTrack);
                context.SaveChanges();
                result = true;
            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }

        public WebPages GetDefaultPage(WebUsers user)
        {
            WebPages page = new WebPages();
            page.Id = 0;

            List<WebPages> pages = GetPagesByUser(user.Id);
            if (pages.Where(a => a.PageType
             != (int)PageType.Parent && a.Id != 6).Count() != 0)
            {
                page = pages.Where(a => a.PageType
               != (int)PageType.Parent && a.Id != 6).First();
            }
            //}

            return page;
        }
        public CO2KPICLModel GetCo2KPILCUsers(string AccessKey)
        {
            CO2KPICLModel model = new CO2KPICLModel();
            using (var cmd = context.Database.GetDbConnection().CreateCommand())
            {
                cmd.CommandText = "sp_GetCO2_KPILC_AllUsers";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                if (cmd.Connection.State != System.Data.ConnectionState.Open) cmd.Connection.Open();
                cmd.Parameters.Add(new SqlParameter("ACCESSKEY", AccessKey));
                using (SqlDataReader reader = (SqlDataReader)cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        model.ROWID = Convert.ToInt32(reader["ROWID"]);
                        model.ID = (Guid)reader["ID"];
                        model.FIRSTNAME = reader["FIRSTNAME"].ToString();
                        model.LASTNAME = reader["LASTNAME"].ToString();
                        model.ACCESSKEY = reader["ACCESSKEY"].ToString();
                        model.SERVICEID = (Guid)reader["SERVICEID"];
                        model.USERTYPE = reader["USERTYPE"].ToString();
                        model.ROLEID = Convert.ToInt32(reader["ROLEID"]);
                    }
                }
            }
            return model;
        }
        public bool HasUrl(WebUsers _usr, string _url)
        {
            bool _isVisible = false;
            WebRoles role = new WebRoles();
            role = context.WebRoles.Where(a => a.Id == _usr.RoleId).FirstOrDefault();

            WebPages page = context.WebPages.Where(a => a.Url == _url).FirstOrDefault();
            if (page != null && role != null)
                _isVisible = ArePageUserLinked(page, _usr);

            return _isVisible;
        }
        public List<RefPlateformes> GetPlatformsNorUser(Guid UserId)
        {
            List<RefPlateformes> _AllCountries = new List<RefPlateformes>();

            var result = from wr in context.RefPlateformes
                         where !(from wur in context.WebUserPlateform where wur.UserId == UserId select wur.Plateform).Contains(wr.CodePlf)
                         select wr;
            _AllCountries = result.Where(x => x.Display == true).ToList();
            return _AllCountries;
        }
        #region Families management
        public List<RefTranscoFpWex> GetAllUplet()
        {
            List<RefTranscoFpWex> _tranco = new List<RefTranscoFpWex>();
            _tranco = context.RefTranscoFpWex.Where(a => a.XaccountId != null && a.Country != null && a.SprId != null).OrderBy(a => a.Country).OrderBy(a => a.XaccountId).OrderBy(a => a.SprId).ToList();
            return _tranco;
        }

        public bool UpdateREF_TRANSCO_FP_WEX(RefTranscoFpWex _item)
        {
            bool _isOk = false;
            try
            {
                RefTranscoFpWex _newRef = context.RefTranscoFpWex.Where(a => a.IdTranscoWex == _item.IdTranscoWex).FirstOrDefault();
                _newRef.Family = _item.Family;
                _newRef.FamilyPk = _item.FamilyPk;
                _newRef.Label = _item.Label;
                context.SaveChanges();
                _isOk = true;
            }
            catch
            {
                _isOk = false;
            }
            return _isOk;
        }

        public List<RefRegimes> getAllRegimes()
        {
            List<RefRegimes> _list = new List<RefRegimes>();
            _list = context.RefRegimes.OrderBy(a => a.Order).ToList();
            return _list;
        }
        #endregion
        public PlatformModel GetPlatformsByUserId(Guid UserId)
        {
            PlatformModel models = new PlatformModel();
            List<WebUserPlateform> _AllUserCountries = GetPlatformsByUser(UserId);
            List<RefPlateformes> _AllNorUserCountries = GetPlatformsNorUser(UserId);
            models.userPlatforms = _AllUserCountries.Select(s => new UserPlatformModel()
            {
                UserId = s.UserId,
                PlatformCode = s.Plateform,
                //PlatformId = context.RefPlateformes.Where(x => x.Plateform.ToLower() == s.Plateform.ToLower()).FirstOrDefault().Id
                PlatformId = context.RefPlateformes.Where(x => x.CodePlf.ToLower() == s.Plateform.ToLower()).FirstOrDefault().Id
            }).ToList();
            models.userNorPlatforms = _AllNorUserCountries.Select(s => new UserNorPlatformModel()
            {
                PlatformCode = s.CodePlf,
                //CountryId = s.Id,
                UserId = UserId,
                PlatformId = s.Id
            }).ToList();
            return models;
        }
        public List<WebUserCountry> GetCountriesByUser(Guid UserId)
        {
            List<WebUserCountry> _AllCountries = context.WebUserCountry.Where(x => x.UserId == UserId).ToList();
            return _AllCountries;
        }

        public List<WebCountries> GetCountriesNorUser(Guid UserId)
        {
            List<WebCountries> _AllCountries = new List<WebCountries>();

            List<WebUserCountry> _HistList = new List<WebUserCountry>();
            var result = from wr in context.WebCountries
                         where !(from wur in context.WebUserCountry where wur.UserId == UserId select wur.CountryCode).Contains(wr.Code)
                         select wr;
            _AllCountries = result.ToList();
            return _AllCountries;
        }


        public CountryModel GetCountriesByUserId(Guid UserId)
        {
            CountryModel models = new CountryModel();
            List<WebUserCountry> _AllUserCountries = GetCountriesByUser(UserId);
            List<WebCountries> _AllNorUserCountries = GetCountriesNorUser(UserId);
            models.userCountries = _AllUserCountries.Select(s => new UserCountryModel()
            {
                UserId = s.UserId,
                CountryCode = s.CountryCode,
                CountryId = context.WebCountries.Where(x => x.Code.ToLower() == s.CountryCode.ToLower()).FirstOrDefault().Id
            }).ToList();
            models.userNorCountries = _AllNorUserCountries.Select(s => new UserNorCountryModel()
            {
                CountryCode = s.Code,
                CountryId = s.Id,
                UserId = UserId
            }).ToList();
            return models;
        }
        public List<WebCountries> GetAllWebCountries()
        {
            List<WebCountries> _countries = new List<WebCountries>();
            _countries = context.WebCountries.OrderBy(a => a.Code).ToList();
            return _countries;
        }

        public List<RefPlateformes> getAllPlatformesByListOfCountries(List<Country> _countries)
        {
            List<RefPlateformes> _resultantPFs = new List<RefPlateformes>();

            foreach (var _v in _countries)
                foreach (var _pf in context.RefPlateformes.Where(a => a.Country == _v.Code))
                    if (!_resultantPFs.Contains(_pf))
                        _resultantPFs.Add(_pf);

            return _resultantPFs.OrderBy(a => a.Plateform).ToList();
        }

        public bool ArePageUserLinked(WebPages _page, WebUsers _user)
        {
            bool _Ok = false;

            List<WebServiceRoleUser> _list = new List<WebServiceRoleUser>();
            _list = context.WebServiceRoleUser.Where(a => a.UserId == _user.Id).ToList();
            List<WebPages> _listPages = new List<WebPages>();
            if (_page.PageType != (int)PageType.Parent)
                foreach (var _serviceUsrRole in _list)
                {
                    WebRoles _role = new WebRoles();
                    _role = context.WebRoles.Where(a => a.Id == _serviceUsrRole.RoleId).FirstOrDefault();
                    WebServices _service = new WebServices();
                    _service = context.WebServices.Where(a => a.Id == _serviceUsrRole.ServiceId).FirstOrDefault();
                    if (context.WebServicePages.Where(a => a.PageId == _page.Id && a.ServiceId == _service.Id).Count() != 0)
                        if (context.WebPagesRoles.Where(a => a.PageId == _page.Id && a.RoleId == _role.Id).Count() != 0)
                        {
                            _Ok = true;
                            break;
                        }
                }
            else
            {
                List<WebPages> _childs = new List<WebPages>();
                _childs = getchildsByParents(_page);
                foreach (var _var in _list)
                {
                    WebRoles _role = new WebRoles();
                    _role = context.WebRoles.Where(a => a.Id == _var.RoleId).FirstOrDefault();
                    WebServices _service = new WebServices();
                    _service = context.WebServices.Where(a => a.Id == _var.ServiceId).FirstOrDefault();
                    if (context.WebServicePages.Where(a => _childs.Where(b => b.Id == a.PageId).Count() != 0
                           && a.ServiceId == _var.ServiceId).Count() != 0)
                        if (context.WebPagesRoles.Where(a => _childs.Where(b => b.Id == a.PageId).Count() != 0 &&
                        a.RoleId == _role.Id).Count() != 0)
                        {
                            _Ok = true;
                            break;
                        }

                }
            }
            return _Ok;
        }
        public List<WebPages> getchildsByParents(WebPages _page)
        {
            List<WebPages> _childs = new List<WebPages>();
            foreach (var _var in context.WebPages.Where(a => a.ParentId == _page.Id))
            {
                if (_var.PageType == (int)PageType.Parent)
                    foreach (var _varVar in context.WebPages.Where(a => a.ParentId == _var.Id))
                    {
                        if (_varVar.PageType == (int)PageType.Parent)
                        {
                            foreach (var _varVarVar in context.WebPages.Where(a => a.ParentId == _varVar.Id))
                            {
                                if (_varVarVar.PageType != (int)PageType.Parent)
                                    if (!_childs.Contains(_varVarVar))
                                        _childs.Add(_varVarVar);
                            }

                        }
                        else
                            if (!_childs.Contains(_varVar))
                            _childs.Add(_varVar);
                    }
                else
                    if (!_childs.Contains(_var))
                    _childs.Add(_var);
            }
            return _childs;
        }
        public List<WebPages> GetPagesByUser(Guid userId)
        {
            List<WebPages> pagesByUser = new List<WebPages>();
            List<WebReports> reportsByUser = new List<WebReports>();
            reportsByUser = GetReportsByUser(userId);
            foreach (var report in reportsByUser)
            {
                var user = context.WebPages.Where(p => p.Id == report.PageId).FirstOrDefault();
                if (!pagesByUser.Contains(user))
                    pagesByUser.Add(user);
                WebPages parentPage = context.WebPages.Where(p => p.Id == user.ParentId).FirstOrDefault();

                if (parentPage != null)
                    if (!pagesByUser.Contains(parentPage))
                    {
                        pagesByUser.Add(parentPage);
                        WebPages parentPage2 = context.WebPages.Where(p => p.Id == parentPage.ParentId).FirstOrDefault();
                        if (parentPage2 != null)
                            if (!pagesByUser.Contains(parentPage2))
                            {
                                pagesByUser.Add(parentPage2);
                                WebPages parentPage21 = context.WebPages.Where(p => p.Id == parentPage2.ParentId).FirstOrDefault();
                                if (parentPage21 != null)
                                    if (!pagesByUser.Contains(parentPage21))
                                        pagesByUser.Add(parentPage21);
                            }

                    }
            }

            return pagesByUser;
        }

        public List<WebReports> GetReportsByUser(Guid userId)
        {
            List<WebReports> reportsByUser = new List<WebReports>();

            foreach (var report in context.WebUserReports.Where(a => a.UserId == userId))
                reportsByUser = context.WebReports.Where(a => a.Id == report.ReportId).ToList();

            return reportsByUser;
        }
        public List<RefPlateformes> GetAllPlateforme()
        {
            List<RefPlateformes> _list = new List<RefPlateformes>();
            _list = context.RefPlateformes.Where(a => a.CodePlf != null && a.Display == true).OrderBy(a => a.CodePlf).ToList();
            return _list;
        }
        //public bool UpdateProductUser(List<ReportUserProducts> _newList)
        //{
        //    bool result = false;
        //    List<ReportUserProducts> _listToDelet = new List<ReportUserProducts>();
        //    Guid _userId = _newList.FirstOrDefault().UserId;
        //    Guid _reportId = _newList.FirstOrDefault().ReportId;
        //    // Deleting The List



        //    _listToDelet = context.ReportUserProducts.Where(a => a.ReportId == _reportId && a.UserId == _userId).ToList();
        //    context.ReportUserProducts.RemoveRange(_listToDelet);
        //    //Inserting New Items 
        //    context.ReportUserProducts.AddRange(_newList);
        //    context.SaveChanges();
        //    result = true;
        //    return result;
        //}
        public List<WebReportRed> GetReportsByNorService(Guid ServiceId)
        {
            List<WebReportRed> _list = new List<WebReportRed>();
            List<WebReportRed> _All = new List<WebReportRed>();
            _All = context.WebReports.Select(s => new WebReportRed()
            {
                CategoryID = s.CategoryId,
                DateCreation = s.DateCreation,
                DateUpdate = s.DateUpdate,
                Id = s.Id,
                IS_FOR_EMAIL = s.IsForEmail,
                Name = s.Name.Trim(' '),
                ReportKey = s.ReportKey
            }).ToList();
            List<WebReportRed> _AlRed = new List<WebReportRed>();
            _AlRed = GetReportsByService(ServiceId);
            foreach (var _var in _All)
            {
                if (_AlRed.Where(a => a.Id == _var.Id).Count() == 0)
                    _list.Add(_var);
            }
            return _list.OrderBy(x => x.Name).ToList();
        }

        public List<WebReportRed> GetReportsByService(Guid ServiceId)
        {
            List<WebReportRed> Reports = new List<WebReportRed>();
            Reports = (from x in context.WebReports
                       join y in context.WebServiceReport
                       on x.Id equals y.ReportId
                       where y.ServiceId == ServiceId
                       select new WebReportRed
                       {
                           CategoryID = x.CategoryId,
                           Id = x.Id,
                           DateCreation = x.DateCreation,
                           DateUpdate = x.DateUpdate,
                           Name = x.Name,
                           ReportKey = x.ReportKey
                       }).ToList();
            return Reports;
        }



        public string CreateProfile(ProfileModel model)
        {
            string IsCreate = "";
            try
            {                
                var IsAvailable = context.WebProfile.Where(x => x.ProfileName.ToUpper() == model.ProfileName.ToUpper()).FirstOrDefault();

                if (model.ProfileId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    if (IsAvailable != null)
                    {
                        IsCreate = "Profile already exist.";
                    }
                    else
                    {
                        WebProfile profile = new WebProfile();
                        profile.Id = Guid.NewGuid();
                        profile.ProfileName = model.ProfileName;
                        context.WebProfile.Add(profile);

                        List<WebProfileReport> profileReports = new List<WebProfileReport>();
                        foreach (var item in model.ReportId)
                        {
                            WebProfileReport profileReport = new WebProfileReport();
                            profileReport.ReportId = item;
                            profileReport.ProfileId = profile.Id;
                            if (!profileReports.Contains(profileReport)) profileReports.Add(profileReport);
                        }
                        context.WebProfileReport.AddRange(profileReports);
                        context.SaveChanges();
                        IsCreate = "Profile Created successfully";
                    }
                }
                else
                {
                    if (!string.IsNullOrEmpty(model.ProfileName))
                    {                        
                       WebProfile profile = context.WebProfile.Where(x => x.Id == model.ProfileId).FirstOrDefault();

                        if ((IsAvailable.Id == model.ProfileId) && (IsAvailable.ProfileName != model.ProfileName))
                        {
                            IsCreate = "Profile already exist.";
                        }
                        else
                        {
                            profile.ProfileName = model.ProfileName;
                            context.Entry(profile).State = EntityState.Modified;
                        }
                    }

                    List<WebProfileReport> profileReports = new List<WebProfileReport>();
                    List<WebProfileReport> ProfileReportstoDelete = new List<WebProfileReport>();
                    ProfileReportstoDelete = context.WebProfileReport.Where(x => x.ProfileId == model.ProfileId).ToList();
                    context.WebProfileReport.RemoveRange(ProfileReportstoDelete);

                    foreach (var item in model.ReportId)
                    {
                        WebProfileReport profileReport = new WebProfileReport();
                        profileReport.ReportId = item;
                        profileReport.ProfileId = model.ProfileId;
                        if (!profileReports.Contains(profileReport)) profileReports.Add(profileReport);
                    }
                    context.WebProfileReport.AddRange(profileReports);
                    context.SaveChanges();
                    IsCreate = "Profile Updated successfully";
                }
            }
            catch (Exception ex)
            {
                IsCreate = "Profile does not Create.";
            }
            return IsCreate;
        }

        public List<WebProfile> GetAllProfile(string keyWord)
        {
            List<WebProfile> profiles = !string.IsNullOrEmpty(keyWord) ? context.WebProfile.Where(x => x.ProfileName.ToUpper().Contains(keyWord.Trim(' ').ToUpper())).ToList() : context.WebProfile.ToList();
            return profiles;
        }

        public CountryModel UpdateCountriesByUser(List<string> _listToDelete, List<string> _listToAdd, Guid _userId)
        {
            List<WebUserCountry> _UserCountryToDelete = new List<WebUserCountry>();
            List<WebUserCountry> _UserCountryToAdd = new List<WebUserCountry>();
            if (_listToDelete != null)
            {
                foreach (var _var in _listToDelete)
                {
                    WebUserCountry _userCountry = context.WebUserCountry.Where(a =>
                    a.CountryCode == _var && a.UserId == _userId).FirstOrDefault();
                    if (_userCountry != null)
                        _UserCountryToDelete.Add(_userCountry);
                }
                context.WebUserCountry.RemoveRange(_UserCountryToDelete);
            }


            if (_listToAdd != null)
            {
                foreach (var _var in _listToAdd)
                {
                    WebUserCountry _userCountry = new WebUserCountry();
                    _userCountry.CountryCode = _var;
                    _userCountry.UserId = _userId;
                    if (!string.IsNullOrEmpty(_userCountry.CountryCode))
                        _UserCountryToAdd.Add(_userCountry);
                }
                context.WebUserCountry.AddRange(_UserCountryToAdd);
            }



            context.SaveChanges();



            return GetCountriesByUserId(_userId);
        }
        public List<WebUserPlateform> GetPlatformsByUser(Guid UserId)
        {
            List<WebUserPlateform> _AllPlatforms = context.WebUserPlateform.Where(x => x.UserId == UserId).ToList();
            return _AllPlatforms;
        }
        public PlatformModel UpdatePlateformesByUser(List<string> listToDelete, List<string> listToAdd, Guid userId)
        {
            List<WebUserPlateform> userPlateformeToAdd = new List<WebUserPlateform>();
            List<WebUserPlateform> userPlateformExisting = new List<WebUserPlateform>();

            userPlateformExisting = context.WebUserPlateform.Where(a => a.UserId == userId).ToList();

            if (listToDelete != null)
            {

                foreach (var var in userPlateformExisting.Where(a => listToDelete.Where(b => b == a.Plateform).Count() == 0))
                {
                    WebUserPlateform userPf = new WebUserPlateform();
                    userPf.Plateform = var.Plateform;
                    userPf.UserId = userId;
                    userPlateformeToAdd.Add(userPf);
                }
                context.WebUserPlateform.RemoveRange(userPlateformExisting);

            }

            if (listToAdd != null)
            {
                foreach (var var in listToAdd)
                {
                    WebUserPlateform userPf = new WebUserPlateform();
                    userPf.Plateform = var;
                    userPf.UserId = userId;
                    if (userPlateformeToAdd.Where(a => a.Plateform == var).Count() == 0)
                        userPlateformeToAdd.Add(userPf);
                }
            }
            context.WebUserPlateform.AddRange(userPlateformeToAdd);

            context.SaveChanges();
            return GetPlatformsByUserId(userId);
        }
        public bool AddReportParams(WebReportsParamsModel model)
        {
            bool result = false;
            try
            {
                if (model.Id != null)
                {
                    WebReportsParams _param = new WebReportsParams();
                    _param = context.WebReportsParams.Where(a => a.Id == model.Id).FirstOrDefault();
                    _param.Kpi = model.Kpi;
                    _param.IsDelayReport = model.IsDelayReport;
                }
                else
                {
                    WebReportsParams newToAdd = new WebReportsParams()
                    {
                        Id = Guid.NewGuid(),
                        CategoryId = model.CategoryId,
                        IdTranscoWex = model.IdTranscoWex,
                        IsDelayReport = model.IsDelayReport,
                        Kpi = model.Kpi
                    };
                    context.WebReportsParams.Add(newToAdd);
                }
                context.SaveChanges();
                result = true;
                return result;
            }
            catch (Exception ex)
            {
                return result = false;
            }
        }


        public List<WebReportDealerShipmentsParams> GetAllDealerShipmentCodes()

        {

            List<WebReportDealerShipmentsParams> list = new List<WebReportDealerShipmentsParams>();

            list = context.WebReportDealerShipmentsParams.ToList();

            return list;

        }
        public List<ViaCustomerModel> GetAllViaCustomers()
        {
            List<ViaCustomerModel> customers = new List<ViaCustomerModel>();

            customers = (from x in context.ViaCustomers
                         select new ViaCustomerModel
                         {
                             Id = x.Id,
                             Brand = x.Brand,
                             CustomerGroup = x.CustomerGroup,
                             MarketLine = x.MarketLine
                         }).ToList();
            return customers;
        }
        public bool UpdateUserParamCountries(UserCountriesModel model)
        {
            bool result = false;
            try
            {
                List<ReportUserParams> _countries = model.Countries.Split(',')
                                                    .Select(s => new ReportUserParams()
                                                    {
                                                        // FieldType = model.type, //(int)(s.StartsWith("D_") ? FieldParam.DepartureCountry : FieldParam.ArrivalCountry),
                                                        FieldType = (int)(s.StartsWith("D_") ? FieldParam.DepartureCountry : FieldParam.ArrivalCountry),
                                                        DirectFieldValue = s.Replace("D_", "").Replace("A_", ""),
                                                        ReportId = model.reportId,
                                                        UserId = model.userId
                                                    }).ToList();


                List<ReportUserParams> listToDelete = new List<ReportUserParams>();
                foreach (var item in _countries)
                {
                    listToDelete = context.ReportUserParams.Where(a => a.ReportId == item.ReportId
                                                                        && a.UserId == item.UserId
                                                                        &&
                                                                        (a.FieldType == item.FieldType)).ToList();

                    context.ReportUserParams.RemoveRange(listToDelete);
                }


                context.ReportUserParams.AddRange(_countries);
                context.SaveChanges();
                result = true;
            }
            catch (Exception ex)
            {
                result = false;
            }
            return result;
        }

        public bool UpdateUserRegimes(UserRegimesModel model)
        {
            bool result = false;
            try
            {
                List<RefUserRegimes> _listToDelet = new List<RefUserRegimes>();
                List<RefUserRegimes> listToInsert = new List<RefUserRegimes>();

                // Deleting The List 
                _listToDelet = context.RefUserRegimes.Where(a => a.ReportId == model.ReportId && a.UserId == model.UserId).ToList();
                context.RefUserRegimes.RemoveRange(_listToDelet);
                //Inserting New Items 

                foreach (var i in model.Regime)
                {
                    RefUserRegimes newItem = new RefUserRegimes();
                    newItem.Regime = i;
                    newItem.ReportId = model.ReportId;
                    newItem.UserId = model.UserId;
                    if (!listToInsert.Contains(newItem))
                        listToInsert.Add(newItem);
                }
                context.RefUserRegimes.AddRange(listToInsert);
                context.SaveChanges();
                result = true;
            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }

        public bool UpdateUserMarques(UserMarquesModel model)
        {
            bool result = false;
            try
            {
                List<RefUserMarques> _listToDelet = new List<RefUserMarques>();
                List<RefUserMarques> listToInsert = new List<RefUserMarques>();
                _listToDelet = context.RefUserMarques.Where(a => a.ReportId == model.ReportId && a.UserId == model.UserId).ToList();
                context.RefUserMarques.RemoveRange(_listToDelet);

                foreach (var i in model.Marques)
                {
                    RefUserMarques newItem = new RefUserMarques();
                    newItem.Marque = i;
                    newItem.ReportId = model.ReportId;
                    newItem.UserId = model.UserId;
                    if (!listToInsert.Contains(newItem))
                        listToInsert.Add(newItem);
                }
                context.RefUserMarques.AddRange(listToInsert);
                context.SaveChanges();
                result = true;
            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }

        public List<KeyValueDDL> GetRefSupplierForDelayReports(string country)

        {

            List<KeyValueDDL> list = new List<KeyValueDDL>();

            var data = (from x in context.RefShipments.

                                Where(a =>

                                    a.Country.ToUpper() == country)

                        select new KeyValueDDL

                        {

                            Key = x.Brand,

                            Value = x.Brand,

                        }).Distinct();

            list = data.ToList();

            return list;

        }

        public List<KeyValueDDL> GetRefDealerCodes(string country, string brand)

        {

            List<KeyValueDDL> list = new List<KeyValueDDL>();

            list = context.RefDealers.Where(a => a.Country.ToUpper() == country && a.Brand == brand).Select(x => new KeyValueDDL()

            {

                Key = x.Id.ToString(),

                Value = x.DealerCode,

            }).ToList();

            return list;

        }

        public bool InsertDealerShipmentParam(WebReportDealerShipmentsParams newItem)

        {

            bool _isOk = false;

            try

            {

                context.WebReportDealerShipmentsParams.Add(newItem);

                context.SaveChanges();

                _isOk = true;

            }

            catch

            {

                _isOk = false;

            }

            return _isOk;

        }

        public bool DeleteDealerShipmentParam(Guid itemId)

        {

            bool _isOk = false;

            try

            {

                WebReportDealerShipmentsParams item = context.WebReportDealerShipmentsParams.Where(a => a.Id == itemId).FirstOrDefault();

                context.WebReportDealerShipmentsParams.Remove(item);

                context.SaveChanges();

                _isOk = true;

            }

            catch

            {

                _isOk = false;

            }

            return _isOk;

        }
        public bool UpdateKpiSetting(KpiSettingModel kpiSetting)
        {
            WebKpiSettings kpiSettingDb = context.WebKpiSettings.FirstOrDefault(a => a.Id == kpiSetting.Id);
            if (kpiSettingDb != null)
            {
                kpiSettingDb.Kpi = kpiSetting.Kpi;
                context.SaveChanges();
                return true;
            }
            return false;
        }
        public List<KpiSettingModel> GetAllKpiSetting()
        {
            List<KpiSettingModel> kpiSetting = new List<KpiSettingModel>();

            kpiSetting = context.WebKpiSettings.Select(x => new KpiSettingModel
            {
                Id = x.Id,
                Kpi = x.Kpi,
                Name = x.Name
            }).ToList();

            return kpiSetting;
        }
        public List<RefTranscoFpWex> GetAllUpletByCountry(string _country, Guid _categoryId, bool? ArrCountry)
        {
            List<RefTranscoFpWex> _tranco = new List<RefTranscoFpWex>();
            var _countr = context.RefTranscoFpWex.
                Where(x => ((ArrCountry == true) ? x.ArrCountry == _country : (ArrCountry == false) ? x.Country == _country : (x.ArrCountry == _country || x.Country == _country))).
                Where(a => context.WebReportsParams.Where(b => b.IdTranscoWex == a.IdTranscoWex &&
                b.CategoryId == _categoryId).Count() == 0);
            _tranco = _countr.OrderByDescending(a => a.XaccountId).OrderByDescending(a => a.SprId).ToList();

            return _tranco;
        }
        public List<RefTranscoFpWex> GetAllUpletByCountryForBrands(string country, Guid categoryId)
        {
            List<RefTranscoFpWex> list = new List<RefTranscoFpWex>();
            var data = context.RefTranscoFpWex.
                Where(a => a.Country == country).
                Where(a => context.WebReportsParams.Where(b => b.IdTranscoWex == a.IdTranscoWex &&
                b.CategoryId == categoryId).Count() == 0).OrderByDescending(a => a.XaccountId).OrderByDescending(a => a.SprId).ToList();

            foreach (var transco in data)
            {
                if (list.Where(a => a.Country == transco.Country &&
                a.XaccountId == transco.XaccountId).Count() == 0)
                    list.Add(transco);
            }

            return list;
        }
        public Guid GetReportByKey(string _key)
        {
            try
            {
                Guid categoryId = context.WebReports.Where(x => x.ReportKey.ToLower() == _key.ToLower()).FirstOrDefault().CategoryId;
                return categoryId;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public bool DeleteReportParams(Guid _paramId)
        {
            bool _isOk = false;
            try
            {
                WebReportsParams _toUpdate = new WebReportsParams();
                _toUpdate = context.WebReportsParams.Where(a => a.Id == _paramId).FirstOrDefault();
                context.WebReportsParams.Remove(_toUpdate);
                context.SaveChanges();
                _isOk = true;
            }
            catch (Exception e)
            {
                _isOk = false;
            }
            return _isOk;
        }
        public List<WebReportsParamsModel> GetAllReportParamsByReport(Guid _CategoryID)
        {
            List<WebReportsParamsModel> _params = new List<WebReportsParamsModel>();

            _params = (from x in context.WebReportsParams
                       join tran in context.RefTranscoFpWex on x.IdTranscoWex equals tran.IdTranscoWex
                       where x.CategoryId == _CategoryID && tran.Country != null && tran.XaccountId != null && tran.SprId != null
                       select new WebReportsParamsModel
                       {
                           CategoryId = x.CategoryId,
                           CategoryName = context.WebCategories.Where(a => a.Id == x.CategoryId).FirstOrDefault().Name,
                           Id = x.Id,
                           IdTranscoWex = x.IdTranscoWex,
                           Brand = context.RefTranscoFpWex.Where(w => w.IdTranscoWex == x.IdTranscoWex).FirstOrDefault().XaccountId,
                           Country = context.RefTranscoFpWex.Where(w => w.IdTranscoWex == x.IdTranscoWex).FirstOrDefault().Country,
                           Product = context.RefTranscoFpWex.Where(w => w.IdTranscoWex == x.IdTranscoWex).FirstOrDefault().SprId,
                           Kpi = x.Kpi,
                           IsDelayReport = x.IsDelayReport,
                       }).OrderBy(a => a.Product).OrderBy(a => a.Brand).OrderBy(a => a.Country).ToList();

            return _params;
        }
        public string DeleteUser(Guid UserId)
        {
            try
            {
                string IsDeleted = "";

                using (var cmd = context.Database.GetDbConnection().CreateCommand())
                {
                    cmd.CommandText = "DeleteUsers";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    if (cmd.Connection.State != System.Data.ConnectionState.Open) cmd.Connection.Open();
                    cmd.Parameters.Add(new SqlParameter("UserID", UserId));
                    using (SqlDataReader reader = (SqlDataReader)cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {

                        }
                    }
                }

                IsDeleted = "User deleted successfully.";
                return IsDeleted;
            }
            catch (Exception)
            {

                return "Something wents wrong.";
            }
        }
        public bool UpdateMrNumbersUser(ReportUserMrNumbersModel newList)
        {
            bool result = false;
            List<ReportUserMrNumbers> listToDelet = new List<ReportUserMrNumbers>();
            List<ReportUserMrNumbers> listToInsert = new List<ReportUserMrNumbers>();
            Guid _userId = newList.UserId;
            Guid _reportId = newList.ReportId;

            foreach (var i in newList.MrNumber)
            {
                ReportUserMrNumbers newItem = new ReportUserMrNumbers();
                newItem.ReportId = _reportId;
                newItem.MrNumber = i;
                newItem.UserId = _userId;
                if (!listToInsert.Contains(newItem))
                    listToInsert.Add(newItem);
            }
            // Deleting The List 
            listToDelet = context.ReportUserMrNumbers.Where(a => a.ReportId == _reportId && a.UserId == _userId).ToList();
            context.ReportUserMrNumbers.RemoveRange(listToDelet);
            //Inserting New Items 
            context.ReportUserMrNumbers.AddRange(listToInsert);
            context.SaveChanges();
            result = true;
            return result;
        }



        #region User Management
        public int UpdateUser(WebUsers newUser)
        {
            int isSave = 0;
            if (newUser.UserType == "KPILC")
            {
                WebUsers oldUser = context.WebUsers.Where(a => a.Id == newUser.Id).FirstOrDefault();
                oldUser.AccessKey = newUser.AccessKey;
                oldUser.Email = newUser.Email;
                oldUser.FirstName = newUser.FirstName;
                oldUser.IsActive = newUser.IsActive;
                oldUser.LastName = newUser.LastName;
                oldUser.Restricted = newUser.Restricted;
                oldUser.ProfileId = newUser.ProfileId;
                oldUser.UpdateDate = DateTime.Now;
                oldUser.UserType = "KPILC";
                if (newUser.RoleId == (int)RoleKey.Admin)
                {
                    oldUser.RoleId = newUser.RoleId;
                }
                WebServiceRoleUser webServiceRoleUser = new WebServiceRoleUser();
                webServiceRoleUser = context.WebServiceRoleUser.Where(a => a.ServiceId ==
                oldUser.ServiceId && a.UserId == newUser.Id).FirstOrDefault();
                if (webServiceRoleUser != null)
                {
                    context.Entry(webServiceRoleUser).State = EntityState.Deleted;
                }

                WebServiceRoleUser webServiceRoleUserToAdd = new WebServiceRoleUser();
                webServiceRoleUserToAdd.UserId = newUser.Id;
                webServiceRoleUserToAdd.RoleId = (int)newUser.RoleId;
                webServiceRoleUserToAdd.ServiceId = oldUser.ServiceId;
                context.WebServiceRoleUser.Add(webServiceRoleUserToAdd);

                isSave = context.SaveChanges();
            }
            else
            {
                User cO2User = Configuration.Users.Where(x => x.UserType == newUser.UserType && x.Id == newUser.Id).FirstOrDefault();
                cO2User.FirstName = newUser.FirstName;
                cO2User.LastName = newUser.LastName;
                cO2User.AccessKey = newUser.AccessKey;
                cO2User.Email = newUser.Email;
                cO2User.UserType = "CO2";
                cO2User.ProfileId = newUser.ProfileId;
                if (newUser.RoleId == (int)RoleKey.Admin)
                {
                    cO2User.Roleid = newUser.RoleId;
                }
                isSave = Configuration.SaveChanges();
            }
            return isSave;
        }

        public List<ReportModel> GetprofileNorReport(Guid profileId)
        {
            List<ReportModel> _AllReports = new List<ReportModel>();
            using (var cmd = context.Database.GetDbConnection().CreateCommand())
            {
                cmd.CommandText = "Get_Associated_Reports_Profile";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                if (cmd.Connection.State != System.Data.ConnectionState.Open) cmd.Connection.Open();
                cmd.Parameters.Add(new SqlParameter("ProfileID", profileId));
                using (SqlDataReader reader = (SqlDataReader)cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        ReportModel report = new ReportModel
                        {
                            ID = (Guid)reader["ID"],
                            Label = reader["Label"].ToString(),
                            IsChecked = false
                        };
                        _AllReports.Add(report);
                    }
                }
            }
            return _AllReports.OrderBy(x => x.Label).ToList();
        }

        public List<ReportModel> GetprofileReport(Guid profileId)
        {
            List<ReportModel> _AllReports = new List<ReportModel>();
            using (var cmd = context.Database.GetDbConnection().CreateCommand())
            {
                cmd.CommandText = "GetProfileReports";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                if (cmd.Connection.State != System.Data.ConnectionState.Open) cmd.Connection.Open();
                cmd.Parameters.Add(new SqlParameter("ProfileID", profileId));
                using (SqlDataReader reader = (SqlDataReader)cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        ReportModel report = new ReportModel
                        {
                            ID = (Guid)reader["ID"],
                            Label = reader["Label"].ToString(),
                            IsChecked = false
                        };
                        _AllReports.Add(report);
                    }
                }
            }

            return _AllReports.OrderBy(x => x.Label).ToList();
        }

        public List<ReportModel> GetUserReportsByProfile(Guid userID)
        {
            List<ReportModel> _AllReports = new List<ReportModel>();
            using (var cmd = context.Database.GetDbConnection().CreateCommand())
            {
                cmd.CommandText = "GetUserReportsByProfile";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                if (cmd.Connection.State != System.Data.ConnectionState.Open) cmd.Connection.Open();
                cmd.Parameters.Add(new SqlParameter("UserID", userID));
                var dt = new DataTable();
                using (SqlDataReader reader = (SqlDataReader)cmd.ExecuteReader())
                {

                    dt.Load(reader);

                    //while (reader.Read())
                    //{
                    //    ReportModel report = new ReportModel
                    //    {
                    //        ID = (Guid)reader["ID"],
                    //        Name = reader["Label"].ToString(),
                    //        IsChecked = true
                    //    };
                    //    _AllReports.Add(report);
                    //}
                }
                if (dt != null)
                {
                    //Pass datatable from dataset to our Method.
                    _AllReports = CreateListFromTable<ReportModel>(dt);
                }

            }

            return _AllReports.OrderBy(x => x.Label).ToList();
        }
        public static List<T> CreateListFromTable<T>(DataTable tbl) where T : new()
        {
            // define return list
            List<T> lst = new List<T>();

            // go through each row
            foreach (DataRow r in tbl.Rows)
            {
                // add to the list
                lst.Add(CreateItemFromRow<T>(r));
            }

            // return the list
            return lst;
        }
        public static T CreateItemFromRow<T>(DataRow row) where T : new()
        {
            // create a new object
            T item = new T();

            // set the item
            SetItemFromRow(item, row);

            // return 
            return item;
        }
        public static void SetItemFromRow<T>(T item, DataRow row) where T : new()
        {
            // go through each column
            foreach (DataColumn c in row.Table.Columns)
            {
                // find the property for the column
                PropertyInfo p = item.GetType().GetProperty(c.ColumnName);

                // if exists, set the value
                if (p != null && row[c] != DBNull.Value)
                {
                    p.SetValue(item, row[c], null);
                }
            }
        }
        public Guid GetServiceId(Guid? userID)
        {
            Guid serviceID = context.WebUsers.Where(a => a.Id == userID).FirstOrDefault().ServiceId;
            return serviceID;
        }
        public Guid AddUser(WebUsersModel newUser)
        {
            try
            {
                WebUsers users = new WebUsers()
                {
                    Id = Guid.NewGuid(),
                    AccessKey = newUser.AccessKey,
                    CreationDate = DateTime.Now,
                    Email = newUser.Email,
                    FirstName = newUser.FirstName,
                    IsActive = true,
                    LastName = newUser.LastName,
                    //Restricted = newUser.Restricted,
                    RoleId = newUser.RoleId,
                    ServiceId = newUser.ServiceId,
                    UpdateDate = DateTime.Now,
                    ProfileId = newUser.ProfileId,
                    UserType = "KPILC"


                };
                context.WebUsers.Add(users);

                List<WebUserCountry> countries = new List<WebUserCountry>();
                foreach (var item in newUser.Country)
                {
                    WebUserCountry country = new WebUserCountry();
                    country.CountryCode = item;
                    country.UserId = users.Id;
                    if (!countries.Contains(country)) countries.Add(country);
                }
                context.WebUserCountry.AddRange(countries);

                List<WebUserPlateform> plateforms = new List<WebUserPlateform>();
                foreach (var item in newUser.Pf)
                {
                    WebUserPlateform plateform = new WebUserPlateform();
                    plateform.Plateform = item;
                    plateform.UserId = users.Id;
                    if (!plateforms.Contains(plateform)) plateforms.Add(plateform);
                }
                context.WebUserPlateform.AddRange(plateforms);
                List<WebServiceRoleUser> userRoleServices = new List<WebServiceRoleUser>();
                List<WebServices> Services = context.WebServices.ToList();

                foreach (var service in Services)
                {
                    WebServiceRoleUser userRoleService = new WebServiceRoleUser();

                    if (service.Id == newUser.ServiceId)
                        userRoleService.RoleId = (int)newUser.RoleId;
                    else
                        userRoleService.RoleId = (int)RoleKey.Reader;
                    userRoleService.ServiceId = service.Id;
                    userRoleService.UserId = users.Id;

                    if (!userRoleServices.Contains(userRoleService)) userRoleServices.Add(userRoleService);
                }
                context.WebServiceRoleUser.AddRange(userRoleServices);
                context.SaveChanges();
                return users.Id;
            }
            catch (Exception ex)
            {
                throw;
            }

        }




        public List<UserModel> GetAllUsers(int type, string AccessKey)
        {
            // List<UserModel> _users = new List<UserModel>();

            List<UserModel> _users = new List<UserModel>();
            using (var cmd = context.Database.GetDbConnection().CreateCommand())
            {
                cmd.CommandText = "sp_GetCO2_KPILC_AllUsers";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                if (cmd.Connection.State != System.Data.ConnectionState.Open) cmd.Connection.Open();
                cmd.Parameters.Add(new SqlParameter("ACCESSKEY", AccessKey));
                cmd.Parameters.Add(new SqlParameter("type", type));
                using (SqlDataReader reader = (SqlDataReader)cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        UserModel model = new UserModel
                        {
                            //ROWID = Convert.ToInt32(reader["ROWID"]),
                            Id = (Guid)reader["ID"],
                            FirstName = reader["FIRSTNAME"].ToString(),
                            LastName = reader["LASTNAME"].ToString(),
                            AccessKey = reader["ACCESSKEY"].ToString(),
                            ServiceId = (Guid)reader["SERVICEID"],
                            USERTYPE = reader["USERTYPE"].ToString(),
                            RoleId = Convert.ToInt32(reader["ROLEID"]),
                            Role = reader["Role"].ToString(),
                            ProfileId = reader["ProfileId"] == DBNull.Value ? Guid.Empty : (Guid)reader["ProfileId"],
                            ProfileName = reader["ProfileName"].ToString(),
                            Email = reader["Email"].ToString(),
                            TotalUsers = Convert.ToInt32(reader["TotalUsers"])
                        };
                        _users.Add(model);
                    }
                }
            }
            return _users;
        }
        public List<WebCountries> GetAllWebCountries(string _name)
        {
            List<WebCountries> _countries = new List<WebCountries>();
            _countries = context.WebCountries.OrderBy(a => a.Code).ToList();
            return _countries;
        }

        public bool HasUrl2(WebUsers user, string url)
        {
            bool isVisible = false;
            try
            {
                WebRoles role = new WebRoles();
                role = context.WebRoles.Where(a => a.Id == user.RoleId).
                    FirstOrDefault();
                WebPages page = context.WebPages.Where(a => a.Url == url).
                   FirstOrDefault();
                if (page != null && role != null)
                {
                    isVisible = ArePageUserLinked(page, user);
                }
                else
                {
                    List<WebPages> pagesByUser = new List<WebPages>();
                    pagesByUser = GetPagesByUser(user.Id);
                    if (pagesByUser.Where(a => a.Id == page.Id).Count() != 0)
                        isVisible = true;
                    else
                        isVisible = false;
                }
            }
            catch (Exception ex)
            {
            }
            return isVisible;
        }

        public List<Country> GetAllCountries(string _name, int indexStart, int number, Guid _userId, bool _useUser)
        {
            //_name = "";
            List<Country> _countries = GetAllCountriesEx();
            List<WebUserCountry> _listOfCountries = new List<WebUserCountry>();
            _listOfCountries = context.WebUserCountry.Where(a => a.UserId == _userId).ToList();
            var _countr = _countries.Where(a => _listOfCountries.Where(b => b.CountryCode == a.Code).Count() != 0
              && a.Name.ToLower().Trim().Contains(_name.ToLower().Trim())).ToList();
            if (!_useUser)
                _countr = _countries.Where(a => a.Name.ToLower().Trim().Contains(_name.ToLower().Trim())).ToList();

            _countries = _countr.Skip(indexStart).Take(number).ToList();

            int _resultCount = _countr.Count();
            return _countries;
        }

        public VersionModel GetVersion()
        {
            VersionModel model = new VersionModel();
            string date = string.Empty;
            using (var cmd = context.Database.GetDbConnection().CreateCommand())
            {
                cmd.CommandText = "Get_CO2_Reports_Refresh_Date";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                if (cmd.Connection.State != System.Data.ConnectionState.Open) cmd.Connection.Open();
                using (SqlDataReader reader = (SqlDataReader)cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        if (string.Equals(Convert.ToString(reader["ReportType"]), "KPILC", StringComparison.CurrentCultureIgnoreCase))
                            model.KPILCRefreshDate = Convert.ToDateTime(reader["UpdateDate"]).ToLongDateString() + " " + Convert.ToDateTime(reader["UpdateDate"]).ToShortTimeString();
                        else

                            model.Date = Convert.ToDateTime(reader["UpdateDate"]).ToLongDateString() + " " + Convert.ToDateTime(reader["UpdateDate"]).ToShortTimeString();
                    }
                }
            }
            return model;
        }
        public bool UpdateBrandsUser(BrandModel newList)
        {
            List<RefUserMarques> listToAdd = new List<RefUserMarques>();
            bool result = false;
            List<RefUserMarques> listToDelet = new List<RefUserMarques>();
            Guid _userId = newList.UserID;
            Guid _reportId = newList.ReportID;
            // Deleting The List 
            listToDelet = context.RefUserMarques.Where(a => a.ReportId ==
                _reportId && a.UserId == _userId).ToList();
            context.RefUserMarques.RemoveRange(listToDelet);
            foreach (var brand in newList.Brand)
            {
                RefUserMarques userSupplier = new RefUserMarques();
                userSupplier.UserId = _userId;
                userSupplier.ReportId = _reportId;
                userSupplier.Marque = brand;
                if (listToAdd.Where(a => a.Marque == brand).Count() == 0)
                    listToAdd.Add(userSupplier);
            }
            //Inserting New Items 
            context.RefUserMarques.AddRange(listToAdd);
            context.SaveChanges();
            result = true;
            return result;
        }

        public bool UpdateProductUser(ReportUserProductsModel newList)
        {
            bool result = false;
            List<ReportUserProducts> _listToDelet = new List<ReportUserProducts>();
            List<ReportUserProducts> listToInsert = new List<ReportUserProducts>();
            Guid _userId = newList.UserId;
            Guid _reportId = newList.ReportId;

            foreach (var i in newList.Product)
            {
                ReportUserProducts newItem = new ReportUserProducts();
                newItem.ReportId = _reportId;
                newItem.Product = i;
                newItem.UserId = _userId;
                if (!listToInsert.Contains(newItem))
                    listToInsert.Add(newItem);
            }
            // Deleting The List
            _listToDelet = context.ReportUserProducts.Where(a => a.ReportId == _reportId && a.UserId == _userId).ToList();
            context.ReportUserProducts.RemoveRange(_listToDelet);

            //Inserting New Items 
            context.ReportUserProducts.AddRange(listToInsert);
            context.SaveChanges();
            result = true;
            return result;
        }



        public bool UpdateUserParams(ReportUserParamsModel newList)
        {
            bool result = false;
            List<ReportUserParams> listToDelete = new List<ReportUserParams>();
            List<ReportUserParams> listToInsert = new List<ReportUserParams>();
            Guid userId = newList.UserId;
            Guid reportId = newList.ReportId;
            int fielType = newList.FieldType;
            foreach (var i in newList.FieldValue)
            {
                ReportUserParams newItem = new ReportUserParams();
                newItem.FieldType = fielType;
                newItem.FieldValue = i;
                newItem.ReportId = reportId;
                newItem.UserId = userId;
                if (!listToInsert.Contains(newItem))
                    listToInsert.Add(newItem);
            }

            // Deleting The List 

            listToDelete = context.ReportUserParams.Where(a => a.ReportId == reportId &&
            a.UserId == userId && a.FieldType == fielType).ToList();
            context.ReportUserParams.RemoveRange(listToDelete);

            //Inserting New Items 

            context.ReportUserParams.AddRange(listToInsert);
            context.SaveChanges();
            result = true;
            return result;
        }
        public List<Country> GetAllCountriesEx()
        {
            List<Country> _allCountries = new List<Country>();
            _allCountries = (from x in context.RefCountry.
                             Where(a => a.Country != null && a.Name != null)
                             select new Country
                             {
                                 Code = x.Country,
                                 Name = x.Name,
                             }).ToList();
            return _allCountries;
        }

        public List<ReportKeyValue> GetReport_2_DailyPerfDelayEx(string _country, DateTime _start, DateTime _end, Guid _IdReport)
        {
            List<ReportKeyValue> _list = new List<ReportKeyValue>();

            _list = (from x in context.Tkpi2DailyPerfDelaySum.Where(a => a.PfDistri != null &&
                     a.Country.ToLower() == _country.ToLower() && a.ShipmentDate.Value.Date >= _start.Date &&
                     a.ShipmentDate.Value.Date <= _end.Date)
                     group x by x.SoldProduct into groupedProduct
                     select new ReportKeyValue
                     {
                         Key = groupedProduct.Key,
                         Value1 = groupedProduct.Sum(a => a.DelayNoCat),
                         Value2 = groupedProduct.Sum(a => a.DelayCat),
                         Value3 = groupedProduct.Sum(a => a.NoReasonDelay),
                         Value4 = groupedProduct.Sum(a => a.NoReceived),
                         Value5 = groupedProduct.Sum(a => a.NoTrace),
                         Value6 = groupedProduct.Sum(a => a.TotalPcs)
                     }).OrderByDescending(a => a.Key).ToList();

            return _list;
        }

        public List<PF_Country_User> GetPlateformesByUserCategoryReport(Guid _categoryID, string _country, Guid _userId)
        {
            List<RefPlateformes> _list = new List<RefPlateformes>();
            List<PF_Country_User> _listOfPf = new List<PF_Country_User>();

            var _Pfs = (from x in context.RefPlateformes.Where(a => a.Display == true &&
                     a.Country.ToLower() == _country.ToLower())

                        join y in context.WebUserPlateform.Where(a => a.UserId == _userId)
                        on x.CodePlf equals y.Plateform

                        join z in context.ReportWebCategoriesPfs.Where(a => a.Country == _country &&
                        a.CatagoryId == _categoryID) on x.CodePlf equals z.Pf

                        //var _Pfs = (from x in context.RefPlateformes
                        //            join y in context.WebUserPlateform on x.CodePlf equals y.Plateform
                        //            join z in context.ReportWebCategoriesPfs on x.CodePlf equals z.Pf
                        //            where x.Display == true
                        //                  && x.CodePlf.ToLower().Contains(_label.ToLower()) string _label = ""; // Case insensitive search for _label
                        //                  && x.Country.ToLower() == _country.ToLower()    // Case insensitive country check
                        //                  && y.UserId == _userId
                        //                  && z.Country.ToLower() == _country.ToLower()
                        //                  && z.CatagoryId == _categoryID

                        select new PF_Country_User
                        {
                            //CodePlf = x.CodePlf.Substring(0, 5),
                            CodePlf = x.CodePlf,
                            Country = x.Country,
                            Plateform = x.Plateform,
                            isSelected = false
                        });
            var result = _Pfs.GroupBy(a => a.CodePlf)
                         .Select(x => new PF_Country_User
                         {
                             CodePlf = x.Key,
                             Plateform = string.Join(", ", x.Select(i => i.Plateform)),
                             isSelected = false
                         });

            _listOfPf = _Pfs.OrderByDescending(a => a.isSelected).ToList();

            return _listOfPf;
        }
        public List<KeyValueDDL> GetAllProductDelayReportByCountry
        (string _country, Guid _categoryID)
        {
            List<KeyValueDDL> _list = new List<KeyValueDDL>();
            var data = (from x in context.RefTranscoFpWex.Where(a => a.Country ==
                     _country && a.XaccountId != null && a.SprId != null)
                        join y in context.WebReportsParams.Where(a => a.CategoryId == _categoryID)
                        on x.IdTranscoWex equals y.IdTranscoWex
                        select new KeyValueDDL
                        {
                            Key = x.SprId,
                            Value = x.SprId
                        });
            _list = data.Distinct().OrderBy(a => a.Value).ToList();
            return _list;
        }
        public List<KeyValueDDL> GetAllBrandsByCountryEx(string _country, string _name,
           int indexStart, int number, out int _resultCount)
        {
            List<KeyValueDDL> _countries = new List<KeyValueDDL>();
            var _list = (from x in context.RefTranscoFpWex.Where(a => a.Country ==
                     _country && a.XaccountId != null && a.SprId != null &&
                     a.XaccountId.Contains(_name))
                         select new KeyValueDDL
                         {
                             Key = x.XaccountId,
                             Value = x.XaccountId,

                         }).Distinct().OrderBy(a => a.Key).ToList();
            _resultCount = _list.Count();
            _list = _list.Skip(indexStart).Take(number).OrderBy(a => a.Value).ToList();

            return _list;
        }
        #endregion
        #region Lot2Changes
        public List<ProductKpiModel> GetAllProductWithKpi()
        {
            List<ProductKpiModel> products = new List<ProductKpiModel>();

            products = context.WebReportsproductsparams.Select(s => new ProductKpiModel()
            {
                //Id = s.Id,
                Kpi = s.Kpi,
                RegimeId = s.ProductRangeId,
                Product = s.Product,
                Regime = context.WebProductRegimes.Where(w => w.Id == s.ProductRangeId).FirstOrDefault().Name
            }).OrderBy(a => a.Regime).ThenByDescending(a => a.Product).ToList();

            return products;
        }

        public bool DeleteProductRegime(Guid Id)
        {
            bool _isOk = false;
            try
            {
                int productHavingRegime = context.WebReportsproductsparams.Where(a => a.ProductRangeId == Id).Count();
                WebProductRegimes regimes = context.WebProductRegimes.Where(a => a.Id == Id).FirstOrDefault();
                if (productHavingRegime == 0 && regimes != null)
                {
                    context.WebProductRegimes.Remove(regimes);
                    context.SaveChanges();
                    _isOk = true;
                }

            }
            catch (Exception e)
            {
                _isOk = false;
            }
            return _isOk;
        }


        public List<KeyValueDDL> GetPendingProductsToParams()
        {
            List<KeyValueDDL> listOfProducts = new List<KeyValueDDL>();
            string name = "";
            listOfProducts = (from x in context.RefTranscoFpWex.Where(a => a.SprId.Contains(name)).
                Where(a => context.WebReportsproductsparams.Where(b => b.Product == a.SprId).Count() == 0).Select(a => a.SprId)
                              select new KeyValueDDL
                              {
                                  Key = x,
                                  Value = x
                              }).Distinct().ToList();

            listOfProducts = listOfProducts.OrderByDescending(a => a.Key).ToList();
            return listOfProducts;
        }

        public List<ProductRegimeModel> GetRegimes()
        {
            List<ProductRegimeModel> regimes = new List<ProductRegimeModel>();
            //string name = "";
            regimes = (from x in context.WebProductRegimes
                           //where x.Name.ToLower().Contains(name)
                       orderby x.Name
                       select new ProductRegimeModel
                       {
                           Id = x.Id,
                           Regime = x.Name
                       }).OrderByDescending(a => a.Regime).ToList();

            return regimes;
        }

        public bool InsertProductWithKpi(ProductKpiModel newProductKpi)
        {
            WebReportsproductsparams reportProduct = context.WebReportsproductsparams.
            Where(a => a.Product == newProductKpi.Product &&
            ((a.ProductRangeId == newProductKpi.RegimeId && newProductKpi.RegimeId != null) ||
            (newProductKpi.RegimeId == null && a.ProductRangeId == null))).FirstOrDefault();

            if (reportProduct == null)
            {
                WebReportsproductsparams newItem = new WebReportsproductsparams();
                newItem.Kpi = newProductKpi.Kpi;
                newItem.Product = newProductKpi.Product;
                newItem.ProductRangeId = newProductKpi.RegimeId;

                context.WebReportsproductsparams.Add(newItem);
                context.SaveChanges();
                return true;
            }
            return false;
        }
        public bool InsertPRoductRegime(ProductRegimeModel productRegime)
        {
            WebProductRegimes existingItem = context.WebProductRegimes.FirstOrDefault(a => a.Name == productRegime.Regime);
            if (existingItem == null)
            {
                WebProductRegimes web_productRegime = new WebProductRegimes();
                web_productRegime.Id = Guid.NewGuid();
                web_productRegime.Name = productRegime.Regime;
                context.WebProductRegimes.Add(web_productRegime);
                context.SaveChanges();
                return true;
            }
            return false;
        }

        public bool UpdateProductRegime(ProductRegimeModel productRegime)
        {
            WebProductRegimes productREgimeDb = context.WebProductRegimes.Where(a => a.Id == productRegime.Id).FirstOrDefault();
            if (productREgimeDb != null)
            {
                productREgimeDb.Name = productRegime.Regime;
                context.SaveChanges();
                return true;
            }
            return false;
        }
        #endregion

        #region Countries-Major customer reports
        public List<CustomerCountries> GetMajorCustomerCountries()
        {
            List<CustomerCountries> countries = new List<CustomerCountries>();
            countries = (from x in context.WebCountries
                         where x.Code != null
                         orderby x.Name
                         select new CustomerCountries
                         {
                             Id = x.Id,
                             Code = x.Code,
                             Name = x.Name,
                             EnabledForMajorCustomerReport = x.DisplayInMajorCustomerReport,
                             BinaryImage = x.BinaryImage
                         }).ToList();
            return countries;
        }

        public bool UpdateMajorCustomerCountry(CustomerCountries countryModel)
        {

            WebCountries countryDb = context.WebCountries.FirstOrDefault(a => a.Id == countryModel.Id);
            if (countryDb != null)
            {
                countryDb.DisplayInMajorCustomerReport = countryModel.EnabledForMajorCustomerReport;
                context.Entry(countryDb).State = EntityState.Modified;
                context.SaveChanges();
                return true;
            }
            return false;
        }
        #endregion

        #region Open days management
        public List<WebYears> GetAllYears()
        {
            List<WebYears> _list = new List<WebYears>();
            _list = context.WebYears.Distinct().ToList();
            return _list;
        }

        public List<WebOpenDaysDet> GetOpenDaysDetByCountryAndYear(string _CodeCountry, int _Year)
        {
            List<WebOpenDaysDet> _OpenDaysList = new List<WebOpenDaysDet>();

            _OpenDaysList = context.WebOpenDaysDet.Where(a => a.Country.ToLower().
                    Trim().Contains(_CodeCountry) && a.Day.Date.Year == _Year)
                    .OrderBy(a => a.Country).OrderByDescending(a => a.Day).Select(s => new WebOpenDaysDet()
                    {
                        Id = s.Id,
                        Day = s.Day,
                        Country = context.WebCountries.Where(x => x.Code == s.Country).FirstOrDefault().Name
                    }).ToList();
            return _OpenDaysList;
        }
        public bool InsertOpenDaysDet(WebOpenDaysDet _new)
        {
            bool result = false;
            try
            {
                WebOpenDaysDet _Old = new WebOpenDaysDet();
                _Old = context.WebOpenDaysDet.Where(a => a.Id == _new.Id).FirstOrDefault();
                if (_Old != null)
                {
                    context.WebOpenDaysDet.Remove(_Old);
                }

                WebOpenDaysDet _newtoInsert = new WebOpenDaysDet();
                _newtoInsert.Day = _new.Day;
                _newtoInsert.Country = context.WebCountries.Where(x => x.Name == _new.Country || x.Code == _new.Country).FirstOrDefault().Code;
                _newtoInsert.Id = Guid.NewGuid();

                context.WebOpenDaysDet.Add(_newtoInsert);

                context.SaveChanges();
                result = true;

            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }

        public bool DeleteFromWeb_OpenDaysDet(Guid _Id)
        {
            bool _isOk = false;
            try
            {
                WebOpenDaysDet _openDay = new WebOpenDaysDet();
                _openDay = context.WebOpenDaysDet.Where(a => a.Id == _Id).FirstOrDefault();
                context.WebOpenDaysDet.Remove(_openDay);
                context.SaveChanges();
                _isOk = true;
            }
            catch (Exception e)
            {
                _isOk = false;
            }
            return _isOk;
        }
        #endregion

        #region Attribution PF aux rapports délais

        public List<ReportWebCategoriesPfs> GetAllCategoriesPFByCategory(Guid _categoryId)
        {
            List<ReportWebCategoriesPfs> _list = new List<ReportWebCategoriesPfs>();
            _list = context.ReportWebCategoriesPfs.Where(a => a.CatagoryId == _categoryId).
                OrderBy(a => a.Pf).Distinct().OrderBy(a => a.Pf).ToList();
            return _list;
        }

        public bool DeleteReportWeb_CategoryPF(ReportWebCategoriesPfs _oldItem)
        {
            bool _isOk = false;
            try
            {
                ReportWebCategoriesPfs _toDelete = new ReportWebCategoriesPfs();

                _toDelete = context.ReportWebCategoriesPfs.Where(a => a.Pf == _oldItem.Pf &&
                a.CatagoryId == _oldItem.CatagoryId).FirstOrDefault();
                context.ReportWebCategoriesPfs.Remove(_toDelete);
                context.SaveChanges();
                _isOk = true;
            }
            catch (Exception e)
            {
                _isOk = false;
            }
            return _isOk;
        }

        public bool AddReportWeb_CategoryPF(ReportWebCategoriesPfs _newitem)
        {
            bool result = false;
            try
            {
                ReportWebCategoriesPfs _toInsert = new ReportWebCategoriesPfs();
                _toInsert.CatagoryId = _newitem.CatagoryId;
                _toInsert.Country = _newitem.Country;
                _toInsert.Pf = _newitem.Pf;
                context.ReportWebCategoriesPfs.Add(_toInsert);
                context.SaveChanges();
                result = true;
            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }

        public List<RefPlateformes> GetAllPlateformesWithoutName(Guid _categoryId, string _country)
        {
            List<RefPlateformes> _list = new List<RefPlateformes>();

            List<RefPlateformes> _listFinal = new List<RefPlateformes>();

            _list = context.RefPlateformes.Where(a => a.CodePlf != null && a.Country.ToLower()
            == _country.ToLower() && a.Display == true).Distinct().OrderBy(a => a.CodePlf).ToList();

            List<ReportWebCategoriesPfs> _listP = new List<ReportWebCategoriesPfs>();
            _listP = context.ReportWebCategoriesPfs.Where(a => a.CatagoryId == _categoryId)
                .OrderBy(a => a.Pf).Distinct().ToList();

            foreach (var _var in _list)
            {
                if (!_listFinal.Contains(_var) && _listP.Where(a => a.Pf == _var.CodePlf).Count() == 0)
                    _listFinal.Add(_var);
            }
            _listFinal = _listFinal.OrderBy(a => a.CodePlf).ToList();
            return _listFinal;

        }
        #endregion

        public List<ReportParamExModel> GetAllReportParamsByCountryReport(string _country, Guid _CategoryID)
        {
            List<ReportParamExModel> _params = new List<ReportParamExModel>();

            _params = (from x in context.WebReportsParams
                       join tran in context.RefTranscoFpWex on x.IdTranscoWex equals tran.IdTranscoWex
                       where x.CategoryId == _CategoryID && tran.Country == _country &&
                       tran.Country != null && tran.XaccountId != null && tran.SprId != null
                       select new ReportParamExModel
                       {

                           CategoryID = x.CategoryId,
                           CategoryName = context.WebReports.Where(a => a.Id == x.CategoryId).FirstOrDefault().Name,
                           Id = x.Id,
                           IdTranscoWex = x.IdTranscoWex,
                           Brand = tran.XaccountId,
                           Country = tran.Country,
                           Product = tran.SprId

                       }).OrderBy(a => a.Country).OrderBy(a => a.Brand).OrderBy(a => a.Product).ToList();

            return _params;
        }

        #region Email
        public List<ProductRegimeModel> GetAllProductRegimes()
        {
            List<ProductRegimeModel> regimes = new List<ProductRegimeModel>();

            regimes = (from x in context.WebProductRegimes
                       orderby x.Name
                       select new ProductRegimeModel
                       {
                           Id = x.Id,
                           Regime = x.Name
                       }).ToList();

            return regimes;
        }

        public List<EmailReport_EmailEx> GetAllEmailtemForListing()
        {
            List<EmailReport_EmailEx> _list = new List<EmailReport_EmailEx>();

            var _brutList = (from x in context.EmailReportEmails
                             from y in context.Emailings.Where(s => s.UserId == x.Id && s.ReportId == x.ReportId)
                             from z in context.WebReports.Where(s => s.Id == y.ReportId)
                             select new { x, y, z }).ToList();
            foreach (var i in _brutList)
            {
                EmailReport_EmailEx _itm = new EmailReport_EmailEx();
                _itm.ID = i.x.Id;
                _itm.ReportId = i.x.ReportId;
                _itm.ReportName = i.z.Name;
                _itm.ReportKey = i.z.ReportKey;
                // mail configuration
                _itm.EachDay = i.y.EachDay;
                _itm.EachMonth = i.y.EachMonth;
                _itm.SelectedDays = i.y.SelectedDays;
                _itm.DatesRange = i.y.RecurrentDays;
                _itm.SelectedMonths = i.y.SelectedMonths;
                _itm.Frequencies = GetEmailFrequenciesByEmailForListing(_itm.ID);
                _itm.Emails = i.x.Emails;
                _itm.Groups = i.x.Groups;
                _itm.Platform = context.RefPlateformes.Where(s => s.CodePlf == i.x.CodePlf).FirstOrDefault();
                _itm.Updatedby = i.x.Updatedby;
                _itm.UpdatedDate = i.x.UpdatedDate; //!= null? DateTime.Parse(i.x.UpdatedDate?.ToString("dd/MM/yyyy HH:mm")) : i.x.UpdatedDate; 
                // report params
                _itm.Country = i.x.Country;
                _itm.Sysdate = i.x.Sysdate;
                _itm.Sysdate1 = i.x.Sysdate1;

                _itm.Marques = GetUserMarqueByCountryForListing(i.x.ReportId, i.x.Country, i.x.Id);
                _itm.Products = GetUserProductsByCountryBrandForListing(i.x.ReportId, i.x.Country, (_itm.Marques.Count() != 0 ? _itm.Marques.FirstOrDefault().Brand : "?"), i.x.Id);
                _itm.Regimes = GetRegimesForListing(i.x.Id, i.x.ReportId);

                if (!_list.Contains(_itm))
                    _list.Add(_itm);
            }
            return _list.OrderByDescending(x => x.UpdatedDate.HasValue ? x.UpdatedDate : DateTime.MinValue).ToList();
        }

        public List<EmailWeb_EmailFrequencyEx> GetEmailFrequenciesByEmailForListing(Guid _EmailId)
        {
            List<EmailWeb_EmailFrequencyEx> _list = new List<EmailWeb_EmailFrequencyEx>();
            List<EmailWeb_EmailFrequencyEx> _newList = new List<EmailWeb_EmailFrequencyEx>();

            List<EmailWebEmailFrequencies> _firstFrequencies = new List<EmailWebEmailFrequencies>();

            _firstFrequencies = context.EmailWebEmailFrequencies.Where(a => a.EmailWebId == _EmailId).ToList();

            _list = (from x in context.EmailWebFrequencies
                     select new EmailWeb_EmailFrequencyEx
                     {
                         FrequencyID = x.Id,
                         FrequencyKey = x.FrequencyKey,
                         FrequencyLabel = x.FrequencyLabel,
                         isSelected = false,
                         MainItemID = _EmailId
                     }).ToList();
            foreach (var i in _firstFrequencies)
            {
                EmailWeb_EmailFrequencyEx _oldItem = _list.Where(a => a.FrequencyID == i.FrequencyId).FirstOrDefault();

                EmailWeb_EmailFrequencyEx _newItem = new EmailWeb_EmailFrequencyEx();
                _newItem.FrequencyID = _oldItem.FrequencyID;
                _newItem.FrequencyKey = _oldItem.FrequencyKey;
                _newItem.FrequencyLabel = _oldItem.FrequencyLabel;
                _newItem.isSelected = true;
                _newItem.MainItemID = _oldItem.MainItemID;
                _newList.Add(_newItem);
            }
            return _newList;
        }

        public List<Marque_Country_User> GetUserMarqueByCountryForListing(Guid _reportID, string _country, Guid _userId)
        {

            List<Marque_Country_User> _listOfMarque = new List<Marque_Country_User>();

            //Decorating the default Brand=being selected
            foreach (var i in context.RefUserMarques.Where(a => a.ReportId == _reportID && a.UserId == _userId))
            {
                Marque_Country_User _marque = new Marque_Country_User();
                _marque.Brand = i.Marque;
                _marque.isSelected = true;
                _marque.Country = _country;
                if (!_listOfMarque.Contains(_marque))
                    _listOfMarque.Add(_marque);
            }
            return _listOfMarque;
        }

        public List<Product_Brand_User> GetUserProductsByCountryBrandForListing(Guid _reportID,
        string _country, string _marque, Guid _userId)
        {

            List<Product_Brand_User> _listOfProduct = new List<Product_Brand_User>();

            var _listVar = context.ReportUserProducts.Where(a => a.ReportId == _reportID && a.UserId == _userId).ToList();
            foreach (var i in _listVar)
            {
                Product_Brand_User _prouct = new Product_Brand_User();
                _prouct.Brand = _marque;
                _prouct.Country = _country;
                _prouct.isSelected = true;
                _prouct.Product = i.Product;
                if (!_listOfProduct.Contains(_prouct))
                    _listOfProduct.Add(_prouct);
            }
            return _listOfProduct.Distinct().ToList();
        }

        public List<ReportUserParam> GetRegimesForListing(Guid userId, Guid reportId)
        {

            return (from x in context.ReportUserParams.Where(a => a.ReportId == reportId && a.UserId == userId && a.FieldType == (int)FieldParam.Regime)
                    from y in context.WebProductRegimes.Where(s => s.Id == x.FieldValue).DefaultIfEmpty()
                    select new ReportUserParam { Id = x.FieldValue, Regime = y.Name }).ToList();
        }

        public List<WebReports> getAllReportForEmails()
        {
            List<WebReports> _list = new List<WebReports>();
            _list = (from mailreports in context.EmailReports
                     from reports in context.WebReports.Where(s => s.Id == mailreports.ReportId)
                     select reports).ToList();

            return _list;
        }

        public List<Country> GetAllCountriesRes()
        {
            List<Country> _allCountries = new List<Country>();

            _allCountries = (from x in context.WebCountries
                             select new Country
                             {
                                 Code = x.Code,
                                 Name = x.Name
                             }).ToList();
            return _allCountries;

        }

        public List<EmailWeb_EmailFrequencyEx> GetAllWebFrequencies()
        {
            List<EmailWeb_EmailFrequencyEx> _list = new List<EmailWeb_EmailFrequencyEx>();
            _list = (from x in context.EmailWebFrequencies
                     select new EmailWeb_EmailFrequencyEx
                     {
                         FrequencyID = x.Id,
                         FrequencyKey = x.FrequencyKey,
                         FrequencyLabel = x.FrequencyLabel,
                         isSelected = false,

                     }).ToList();
            return _list;
        }


        public bool InsertEmailItem(EmailReport_EmailEx _newItem)
        {
            bool result = false;
            try
            {
                EmailReportEmails _newToInsert = new EmailReportEmails();
                context.EmailReportEmails.Add(_newToInsert);
                //Geenral Information 
                _newToInsert.Emails = _newItem.Emails;
                _newToInsert.ReportId = _newItem.ReportId;
                _newToInsert.Sysdate = _newItem.Sysdate;
                _newToInsert.Sysdate1 = _newItem.Sysdate1;
                _newToInsert.Country = _newItem.Country;
                _newToInsert.Id = Guid.NewGuid();
                _newToInsert.Updatedby = _newItem.Updatedby;
                _newToInsert.UpdatedDate = DateTime.Now;

                _newToInsert.CodePlf = _newItem.Platform?.CodePlf;
                _newToInsert.Groups = _newItem.Groups;

                //Update Mail Configuration
                Emailings _mailing = new Emailings();
                _mailing.Id = Guid.NewGuid();
                _mailing.EachMonth = _newItem.EachMonth;
                _mailing.EachDay = _newItem.EachDay;
                _mailing.SelectedMonths = _newItem.SelectedMonths;
                _mailing.SelectedDays = _newItem.SelectedDays;
                _mailing.RecurrentDays = _newItem.DatesRange;
                _mailing.Emails = _newItem.Emails;
                _mailing.ReportId = _newItem.ReportId;
                _mailing.UserId = _newToInsert.Id;
                _mailing.Country = _newItem.Country;

                context.Emailings.Add(_mailing);


                //Old ITems To Delete 
                List<EmailWebEmailFrequencies> _OldFrequencies = context.EmailWebEmailFrequencies.Where(a => a.EmailWebId == _newToInsert.Id).ToList();
                context.EmailWebEmailFrequencies.RemoveRange(_OldFrequencies);
                // New Items to insert 
                List<EmailWebEmailFrequencies> _newFrequencies = new List<EmailWebEmailFrequencies>();
                foreach (var _newFrcy in _newItem.Frequencies)
                {
                    EmailWebEmailFrequencies _newSubITem = new EmailWebEmailFrequencies();
                    _newSubITem.EmailWebId = _newToInsert.Id;
                    _newSubITem.FrequencyId = _newFrcy.FrequencyID;
                    if (!_newFrequencies.Contains(_newSubITem))
                        _newFrequencies.Add(_newSubITem);
                }
                context.EmailWebEmailFrequencies.AddRange(_newFrequencies);


                //Old Items To Delete
                WebReports _Report = context.WebReports.Where(a => a.Id == _newItem.ReportId).FirstOrDefault();

                switch (_Report.ReportKey)
                {
                    case FiveKPI:

                        List<ReportUserProducts> _OldProductsFiveKpi = context.ReportUserProducts.Where(a => a.ReportId == _newItem.ReportId && a.UserId == _newToInsert.Id).ToList();
                        context.ReportUserProducts.RemoveRange(_OldProductsFiveKpi);
                        // New Items to insert 
                        List<ReportUserProducts> _newProductsFiveKpi = new List<ReportUserProducts>();
                        foreach (var _productItem in _newItem.Products)
                        {
                            ReportUserProducts _newSubITemFiveKpi = new ReportUserProducts();
                            _newSubITemFiveKpi.UserId = _newToInsert.Id;
                            _newSubITemFiveKpi.ReportId = _newToInsert.ReportId;
                            _newSubITemFiveKpi.Product = _productItem.Product;
                            if (!_newProductsFiveKpi.Contains(_newSubITemFiveKpi))
                                _newProductsFiveKpi.Add(_newSubITemFiveKpi);
                        }
                        context.ReportUserProducts.AddRange(_newProductsFiveKpi);

                        break;


                    case SevenKPI:

                        List<RefUserMarques> _OldMarques = context.RefUserMarques.Where(a => a.ReportId == _newToInsert.ReportId && a.UserId == _newToInsert.Id).ToList();
                        context.RefUserMarques.RemoveRange(_OldMarques);
                        // New Items to insert 
                        List<RefUserMarques> _newMarques = new List<RefUserMarques>();
                        foreach (var _marqueITem in _newItem.Marques)
                        {
                            RefUserMarques _newSubITem = new RefUserMarques();
                            _newSubITem.UserId = _newToInsert.Id;
                            _newSubITem.ReportId = _newToInsert.ReportId;
                            _newSubITem.Marque = _marqueITem.Brand;
                            if (!_newMarques.Contains(_newSubITem))
                                _newMarques.Add(_newSubITem);
                        }
                        context.RefUserMarques.AddRange(_newMarques);

                        List<ReportUserProducts> _OldProducts = context.ReportUserProducts.Where(a => a.ReportId == _newItem.ReportId && a.UserId == _newToInsert.Id).ToList();
                        context.ReportUserProducts.RemoveRange(_OldProducts);
                        // New Items to insert 
                        List<ReportUserProducts> _newProducts = new List<ReportUserProducts>();
                        foreach (var _productItem in _newItem.Products)
                        {
                            ReportUserProducts _newSubITem = new ReportUserProducts();
                            _newSubITem.UserId = _newToInsert.Id;
                            _newSubITem.ReportId = _newToInsert.ReportId;
                            _newSubITem.Product = _productItem.Product;
                            if (!_newProducts.Contains(_newSubITem))
                                _newProducts.Add(_newSubITem);
                        }
                        context.ReportUserProducts.AddRange(_newProducts);

                        break;
                    case WeeklyEuropeDelayKpi:

                        List<ReportUserParams> listToDelete = new List<ReportUserParams>();
                        List<ReportUserParams> listToInsert = new List<ReportUserParams>();

                        foreach (var i in _newItem.Regimes)
                        {
                            ReportUserParams newItem = new ReportUserParams();
                            newItem.FieldType = (int)FieldParam.Regime;
                            newItem.FieldValue = i.Id;
                            newItem.ReportId = _Report.Id;
                            newItem.UserId = _newToInsert.Id;
                            if (!listToInsert.Contains(newItem))
                                listToInsert.Add(newItem);
                        }

                        // Deleting The List 
                        listToDelete = context.ReportUserParams.Where(a => a.ReportId == _newItem.ReportId &&
                        a.UserId == _newToInsert.Id && a.FieldType == (int)FieldParam.Regime).ToList();
                        context.ReportUserParams.RemoveRange(listToDelete);


                        //Inserting New Items 
                        context.ReportUserParams.AddRange(listToInsert);

                        break;
                    case MonthlyEuropeDelayKpi:

                        List<ReportUserParams> listToDeleteMonthly = new List<ReportUserParams>();
                        List<ReportUserParams> listToInsertMonthly = new List<ReportUserParams>();

                        foreach (var i in _newItem.Regimes)
                        {
                            ReportUserParams newItem = new ReportUserParams();
                            newItem.FieldType = (int)FieldParam.Regime;
                            newItem.FieldValue = i.Id;
                            newItem.ReportId = _Report.Id;
                            newItem.UserId = _newToInsert.Id;
                            if (!listToDeleteMonthly.Contains(newItem))
                                listToDeleteMonthly.Add(newItem);
                        }

                        // Deleting The List 
                        listToInsertMonthly = context.ReportUserParams.Where(a => a.ReportId == _newItem.ReportId &&
                        a.UserId == _newToInsert.Id && a.FieldType == (int)FieldParam.Regime).ToList();
                        context.ReportUserParams.RemoveRange(listToInsertMonthly);


                        //Inserting New Items 
                        context.ReportUserParams.AddRange(listToDeleteMonthly);

                        break;
                    case TwoKPINewDailyPerformanceDelay:

                        break;
                }

                context.SaveChanges();
                result = true;
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool UpdateEmailItem(EmailReport_EmailEx _newItem)
        {
            bool result = false;
            try
            {

                EmailReportEmails _toInsert = new EmailReportEmails();

                EmailReportEmails _oldItem = context.EmailReportEmails.Where(a => a.Id == _newItem.ID).FirstOrDefault();

                _toInsert = _oldItem;
                _toInsert.Emails = _newItem.Emails;
                _toInsert.Sysdate = _newItem.Sysdate;
                _toInsert.Sysdate1 = _newItem.Sysdate1;
                _toInsert.ReportId = _newItem.ReportId;
                _toInsert.Groups = _newItem.Groups;
                _toInsert.Country = _newItem.Country == null ? "" : _newItem.Country;
                _toInsert.Updatedby = _newItem.Updatedby;
                _toInsert.UpdatedDate = DateTime.Now;

                //_toInsert.CodePlf = _newItem.Platform?.CodePlf;
                _toInsert.CodePlf = _newItem.Plateform == null ? "" : _newItem.Plateform;

                List<Emailings> _oldmailing = context.Emailings.Where(s => s.UserId == _toInsert.Id && s.ReportId == s.ReportId).ToList();
                context.Emailings.RemoveRange(_oldmailing);
                context.SaveChanges();

                //Update Mail Configuration
                Emailings _mailing = new Emailings();
                _mailing.Id = Guid.NewGuid();
                _mailing.EachMonth = _newItem.EachMonth;
                _mailing.EachDay = _newItem.EachDay;
                _mailing.SelectedMonths = _newItem.SelectedMonths;
                _mailing.SelectedDays = _newItem.SelectedDays;
                _mailing.RecurrentDays = _newItem.DatesRange;
                _mailing.Emails = _newItem.Emails;
                _mailing.ReportId = _newItem.ReportId;
                _mailing.UserId = _newItem.ID;
                _mailing.Country = _newItem.Country == null ? "" : _newItem.Country;
                _mailing.IsDateRange = _newItem.IsDateRange;

                context.Emailings.Add(_mailing);
                context.SaveChanges();
                //Old ITems To Delete 
                List<EmailWebEmailFrequencies> _OldFrequencies = context.EmailWebEmailFrequencies.Where(a => a.EmailWebId == _toInsert.Id).ToList();
                context.EmailWebEmailFrequencies.RemoveRange(_OldFrequencies);
                // New Items to insert 
                List<EmailWebEmailFrequencies> _newFrequencies = new List<EmailWebEmailFrequencies>();
                foreach (var _newFrcy in _newItem.Frequencies)
                {
                    EmailWebEmailFrequencies _newSubITem = new EmailWebEmailFrequencies();
                    _newSubITem.EmailWebId = _toInsert.Id;
                    _newSubITem.FrequencyId = _newFrcy.FrequencyID;
                    //if (_newFrcy.isSelected && !_newFrequencies.Contains(_newSubITem))
                    if (!_newFrequencies.Contains(_newSubITem))
                        _newFrequencies.Add(_newSubITem);
                }
                context.EmailWebEmailFrequencies.AddRange(_newFrequencies);
                context.SaveChanges();

               
                WebReports _Report = context.WebReports.Where(a => a.Id == _newItem.ReportId).FirstOrDefault();
                switch (_Report.ReportKey)
                {
                    case FiveKPI:
                    case SevenKPI:

                        List<RefUserMarques> _OldMarques = context.RefUserMarques.Where(a => a.ReportId == _toInsert.ReportId && a.UserId == _toInsert.Id).ToList();
                        context.RefUserMarques.RemoveRange(_OldMarques);
                        //RefUserMarques _newSubITm = new RefUserMarques();
                        //_newSubITm.UserId = _toInsert.Id;
                        //_newSubITm.ReportId = _toInsert.ReportId;
                        //_newSubITm.Marque = _newItem.Brand;
                        //context.RefUserMarques.Add(_newSubITm);

                        // New Items to insert 
                        List<RefUserMarques> _newMarques = new List<RefUserMarques>();
                        foreach (var _marqueITem in _newItem.Marques)
                        {
                            RefUserMarques _newSubITem = new RefUserMarques();
                            _newSubITem.UserId = _toInsert.Id;
                            _newSubITem.ReportId = _toInsert.ReportId;
                            _newSubITem.Marque = _marqueITem.Brand;
                            if (!_newMarques.Contains(_newSubITem))
                                _newMarques.Add(_newSubITem);
                        }
                        context.RefUserMarques.AddRange(_newMarques);
                        context.SaveChanges();
                        List<ReportUserProducts> _OldProducts = context.ReportUserProducts.Where(a => a.ReportId == _newItem.ReportId && a.UserId == _toInsert.Id).ToList();
                        context.ReportUserProducts.RemoveRange(_OldProducts);
                        context.SaveChanges();
                        // New Items to insert 
                        List<ReportUserProducts> _newProducts = new List<ReportUserProducts>();
                        foreach (var _productItem in _newItem.Products)
                        {
                            ReportUserProducts _newSubITem = new ReportUserProducts();
                            _newSubITem.UserId = _toInsert.Id;
                            _newSubITem.ReportId = _toInsert.ReportId;
                            _newSubITem.Product = _productItem.Product;
                            if (!_newProducts.Contains(_newSubITem))
                                _newProducts.Add(_newSubITem);
                        }
                        context.ReportUserProducts.AddRange(_newProducts);
                        context.SaveChanges();
                        break;
                    case WeeklyEuropeDelayKpi:

                        List<ReportUserParams> listToDelete = new List<ReportUserParams>();
                        List<ReportUserParams> listToInsert = new List<ReportUserParams>();

                        foreach (var i in _newItem.Regimes)
                        {
                            ReportUserParams newItem = new ReportUserParams();
                            newItem.FieldType = (int)FieldParam.Regime;
                            newItem.FieldValue = i.Id;
                            newItem.ReportId = _Report.Id;
                            newItem.UserId = _newItem.ID;
                            if (!listToInsert.Contains(newItem))
                                listToInsert.Add(newItem);
                        }

                        // Deleting The List 
                        listToDelete = context.ReportUserParams.Where(a => a.ReportId == _newItem.ReportId &&
                        a.UserId == _newItem.ID && a.FieldType == (int)FieldParam.Regime).ToList();
                        context.ReportUserParams.RemoveRange(listToDelete);
                        context.SaveChanges();

                        //Inserting New Items 
                        context.ReportUserParams.AddRange(listToInsert);
                        context.SaveChanges();
                        break;
                    case MonthlyEuropeDelayKpi:

                        List<ReportUserParams> listToDeleteMonthly = new List<ReportUserParams>();
                        List<ReportUserParams> listToInsertMonthly = new List<ReportUserParams>();

                        foreach (var i in _newItem.Regimes)
                        {
                            ReportUserParams newItem = new ReportUserParams();
                            newItem.FieldType = (int)FieldParam.Regime;
                            newItem.FieldValue = i.Id;
                            newItem.ReportId = _Report.Id;
                            newItem.UserId = _newItem.ID;
                            if (!listToInsertMonthly.Contains(newItem))
                                listToInsertMonthly.Add(newItem);
                        }

                        // Deleting The List 
                        listToDeleteMonthly = context.ReportUserParams.Where(a => a.ReportId == _newItem.ReportId &&
                        a.UserId == _newItem.ID && a.FieldType == (int)FieldParam.Regime).ToList();
                        context.ReportUserParams.RemoveRange(listToDeleteMonthly);
                        context.SaveChanges();

                        //Inserting New Items 
                        context.ReportUserParams.AddRange(listToInsertMonthly);
                        context.SaveChanges();
                        break;
                    case TwoKPINewDailyPerformanceDelay:
                        break;
                }
                context.SaveChanges();
                result = true;
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Product_Brand_User> GetUserProductsByCountryForInserting(string country)
        {

            List<Product_Brand_User> _listOfProduct = new List<Product_Brand_User>();

            //Getting all the item from the DB
            _listOfProduct = (from x in context.RefTranscoFpWex.Where(a => a.XaccountId != null && a.Country.ToLower() ==
             country.ToLower() && a.SprId != null)
                              select new Product_Brand_User
                              {
                                  Product = x.SprId,
                                  isSelected = false,
                                  Country = x.Country,
                              }).Distinct().OrderByDescending(s => s.Product).ToList();

            return _listOfProduct;
        }

        public List<Marque_Country_User> GetUserMarqueByCountryForInserting(string _country)
        {
            List<Marque_Country_User> _list = new List<Marque_Country_User>();

            List<Marque_Country_User> _listOfMarque = new List<Marque_Country_User>();
            var _listVar = (from x in context.RefMarques.Where(a => a.Marque !=
                            null && a.Country.ToLower() ==
                            _country.ToLower()).Distinct()
                            select new Marque_Country_User
                            {
                                Brand = x.Marque,
                                Country = x.Country,
                                isSelected = false
                            });

            _listOfMarque = _listVar.OrderBy(a => a.Brand).ToList();
            return _listOfMarque;
        }

        public List<Product_Brand_User> GetUserProductsByCountryBrandForInserting(string _country, string _marque)
        {

            List<Product_Brand_User> _listOfProduct = new List<Product_Brand_User>();
            var name = "";
            //Getting all the item from the DB
            var _listVar = (from x in context.RefTranscoFpWex.Where(a => a.XaccountId != null && a.Country.ToLower() ==
             _country.ToLower() && a.XaccountId.ToLower() == (_marque ?? a.XaccountId.ToLower()) && a.SprId != null
             && a.SprId.ToLower().Contains(name))
                            select new Product_Brand_User
                            {
                                Brand = x.XaccountId,
                                Product = x.SprId,
                                isSelected = false,
                                Country = x.Country,
                            });

            if (_marque == null)
                _listVar = _listVar.Select(x => new Product_Brand_User { Product = x.Product, Country = x.Country, isSelected = false }).Distinct();


            _listOfProduct = _listVar.Distinct().OrderByDescending(a => a.Product).ToList();
            return _listOfProduct;
        }

        public EmailReport_EmailEx GetAllEmailsReportsItemByIDForEditing(Guid _itmID)
        {
            EmailReport_EmailEx _item = new EmailReport_EmailEx();
            _item = GetAllEmailtemForListing().Where(x => x.ID == _itmID).FirstOrDefault();
            return _item;
        }

        public List<EmailWeb_EmailFrequencyEx> GetEmailFrequenciesByEmailForEditing(Guid _EmailId)
        {
            List<EmailWeb_EmailFrequencyEx> _list = new List<EmailWeb_EmailFrequencyEx>();
            List<EmailWebEmailFrequencies> _firstFrequencies = new List<EmailWebEmailFrequencies>();

            _firstFrequencies = context.EmailWebEmailFrequencies.Where(a => a.EmailWebId == _EmailId).ToList();

            _list = (from x in context.EmailWebFrequencies
                     select new EmailWeb_EmailFrequencyEx
                     {
                         FrequencyID = x.Id,
                         FrequencyKey = x.FrequencyKey,
                         FrequencyLabel = x.FrequencyLabel,
                         isSelected = false,
                         MainItemID = _EmailId
                     }).ToList();
            foreach (var i in _firstFrequencies)
            {
                EmailWeb_EmailFrequencyEx _item = _list.Where(a => a.FrequencyID == i.FrequencyId).FirstOrDefault();
                _item.isSelected = true;
            }
            return _list;
        }

        public List<Marque_Country_User> GetUserMarqueByCountryForEditing(Guid _reportID, string _country, Guid _userId)
        {
            List<Marque_Country_User> _list = new List<Marque_Country_User>();

            List<Marque_Country_User> _listOfMarque = new List<Marque_Country_User>();

            List<Marque_Country_User> _finalList = new List<Marque_Country_User>();
            var _listVar = (from x in context.RefMarques.Where(a => a.Marque != null && a.Country.ToLower() ==
               _country.ToLower())
                            select new Marque_Country_User
                            {
                                Brand = x.Marque,
                                Country = x.Country,
                                isSelected = false
                            }).ToList();

            var _listTmp = context.RefUserMarques.Where(a => a.ReportId == _reportID && a.UserId == _userId);
            foreach (var i in _listTmp)
            {

                Marque_Country_User _marque = _listVar.Where(a => a.Brand == i.Marque).FirstOrDefault();
                _marque.isSelected = true;
            }
            _listOfMarque = _listVar.OrderByDescending(a => a.isSelected).ToList();
            return _listOfMarque;
        }

        public List<Product_Brand_User> GetUserProductsByCountryBrandForEditing(Guid _reportID,
          string _country, string _marque, Guid _userId)
        {
            List<Product_Brand_User> _list = new List<Product_Brand_User>();

            List<Product_Brand_User> _listOfProduct = new List<Product_Brand_User>();

            //Getting all the item from the DB
            _list = (from x in context.RefTranscoFpWex.Where(a => a.XaccountId != null && a.Country.ToLower() ==
             _country.ToLower() && a.XaccountId.ToLower() == _marque.ToLower() && a.SprId != null && a.XaccountId != "?")
                     select new Product_Brand_User
                     {
                         Brand = x.XaccountId,
                         Product = x.SprId,
                         isSelected = false,
                         Country = x.Country,
                     }).Distinct().ToList();
            //Decorating the default products=being selected
            var _listVar = context.ReportUserProducts.Where(a => a.ReportId == _reportID && a.UserId == _userId).ToList();
            foreach (var i in _listVar)
            {
                Product_Brand_User _prouct = _list.Where(a => a.Product == i.Product).FirstOrDefault();
                _prouct.isSelected = true;
            }


            _listOfProduct = _list.Distinct().OrderByDescending(a => a.isSelected).ToList();
            return _listOfProduct;
        }

        public bool DeleteEmailById(Guid _Id)
        {
            bool _isOk = false;
            try
            {
                EmailReportEmails _Olditm = context.EmailReportEmails.Where(a => a.Id == _Id).FirstOrDefault();

                List<EmailWebEmailFrequencies> _OldFrequencies = context.EmailWebEmailFrequencies.Where(a => a.EmailWebId ==
                _Olditm.Id).ToList();
                context.EmailWebEmailFrequencies.RemoveRange(_OldFrequencies);

                List<RefUserMarques> _OldMarques = context.RefUserMarques.Where(a => a.ReportId ==
                       _Olditm.ReportId && a.UserId == _Olditm.Id).ToList();
                context.RefUserMarques.RemoveRange(_OldMarques);


                List<ReportUserProducts> _OldProducts = context.ReportUserProducts.Where(a => a.ReportId
                        == _Olditm.ReportId && a.UserId == _Olditm.Id).ToList();
                context.ReportUserProducts.RemoveRange(_OldProducts);


                var _oldEmailings = context.Emailings.Where(s => s.ReportId == _Olditm.ReportId && s.UserId == _Olditm.Id);
                context.Emailings.RemoveRange(_oldEmailings);


                // Deleting The List 
                var listToDelete = context.ReportUserParams.Where(a => a.ReportId == _Olditm.ReportId &&
                a.UserId == _Olditm.Id && a.FieldType == (int)FieldParam.Regime);
                context.ReportUserParams.RemoveRange(listToDelete);

                context.SaveChanges();


                EmailReportEmails _oldItem = context.EmailReportEmails.Where(a => a.Id == _Id).FirstOrDefault();
                context.EmailReportEmails.Remove(_oldItem);
                context.SaveChanges();
                _isOk = true;
            }
            catch (Exception e)
            {
                _isOk = false;
            }
            return _isOk;
        }
        #endregion

        #region Major Customer administration
        public List<ReportMajorCustomerForVolume> GetMajorCustomers()
        {
            List<ReportMajorCustomerForVolume> _customerList = new List<ReportMajorCustomerForVolume>();

            _customerList = context.ReportMajorCustomerForVolume.OrderBy(a => a.Country).OrderBy(a => a.Customer).ToList();
            return _customerList;
        }

        public bool DeleteMajorCustomer(string customer)
        {
            bool result = false;
            try
            {
                ReportMajorCustomerForVolume _newCustomer = new ReportMajorCustomerForVolume();
                _newCustomer = context.ReportMajorCustomerForVolume.Where(a => a.Customer == customer).FirstOrDefault();
                context.ReportMajorCustomerForVolume.Remove(_newCustomer);
                context.SaveChanges();
                result = true;
            }
            catch (Exception)
            {

                result = false;
            }
            return result;
        }

        public bool AddMajorCustomer(ReportMajorCustomerForVolume _customer)
        {
            bool result = false;
            try
            {
                ReportMajorCustomerForVolume _newCustomer = new ReportMajorCustomerForVolume();
                _newCustomer.Customer = _customer.Customer;
                _newCustomer.Country = _customer.Country;
                context.ReportMajorCustomerForVolume.Add(_newCustomer);
                context.SaveChanges();
                result = true;
            }
            catch (Exception)
            {

                result = false;
            }
            return result;
        }

        public List<RefMarques> getAllMajorMarqueByCountryOutOfTable(string Country)
        {
            List<RefMarques> _list = new List<RefMarques>();

            _list = (from q in context.RefMarques.Where(a => a.Country.ToLower().Trim()
                     == Country.Trim().ToLower() &&
                     context.ReportMajorCustomerForVolume.Where(v => v.Customer == a.Marque.Trim()).Count() == 0)
                     select new RefMarques
                     {
                         Country = q.Country,
                         Marque = q.Marque
                     }).OrderBy(a => a.Marque).ToList();
            return _list;
        }
        #endregion

        public List<ReportOpenDays> GetOpenDaysByCountryAndYear(string _CodeCountry, int _Year)
        {

            List<ReportOpenDays> _OpenDaysList = new List<ReportOpenDays>();

            _OpenDaysList = context.ReportOpenDays.Where(a => a.Country.ToLower().
                    Trim().Contains(_CodeCountry) && a.Month.Contains(_Year.ToString()))
                    .OrderBy(a => a.Country).OrderBy(a => a.Month).ToList();

            return _OpenDaysList;
        }

        public bool UpdateOpenDaysById(ReportOpenDays _oldOpenDay)
        {
            bool result = false;
            try
            {
                ReportOpenDays _newOpenDay = new ReportOpenDays();
                _newOpenDay = context.ReportOpenDays.Where(a => a.Id == _oldOpenDay.Id).FirstOrDefault();
                context.ReportOpenDays.Remove(_newOpenDay);
                context.ReportOpenDays.Add(_oldOpenDay);
                context.SaveChanges();
                result = true;
            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }

        public ReportOpenDays GetOpenDayById(Guid Id)
        {
            ReportOpenDays _openDay = new ReportOpenDays();
            _openDay = context.ReportOpenDays.Where(a => a.Id == Id).FirstOrDefault();
            return _openDay;
        }

        public bool UpdatePlateForme(RefPlateformes _newPLF)
        {
            bool result = false;
            try
            {
                RefPlateformes _existingPLF = context.RefPlateformes.Where(a => a.CodePlf.Trim().ToLower() ==
           _newPLF.CodePlf && a.Country == _newPLF.Country).FirstOrDefault();

                context.RefPlateformes.Remove(_existingPLF);
                context.RefPlateformes.Add(_newPLF);
                context.SaveChanges();
                result = true;
            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }

        public List<RefPlateformes> GetPlateformesUCountry(string _country)
        {
            List<RefPlateformes> _ref = new List<RefPlateformes>();

            _ref = context.RefPlateformes.Where(a => a.Country.ToLower().Trim().Contains(_country)).ToList();

            return _ref;
        }
    }

}



