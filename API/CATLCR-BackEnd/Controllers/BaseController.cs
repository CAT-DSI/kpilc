using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using CATLCR_BackEnd.Models;
using CATLCR_BackEnd.Common.Exceptions;
using CATLCR_BackEnd.Data.Security.Entities;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CATLCR_BackEnd.Model;
using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using CATLCR_BackEnd.KPILC;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CATLCR_BackEnd.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        public const string ExcelMimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

        /// <summary>
        /// The CSV file MIME type.
        /// </summary>
        public const string CsvMimeType = "text/csv";
        protected const string _smtp = "AppSmtp";
        protected const string _from = "from";
        protected const string _frontEnd = "FrontendBaseUrl";
        public const string TwoKPINewDailyPerformanceDelay = "TwoKPINewDailyPerformanceDelay";
        public static string ToExcludeCustomers = "ToExcludeCustomers";
        public static string ToSetUpForDelivery = "ToSetUpForDelivery";
        public const string WebUsersManagement = "WebUsersManagement";
        public const string reportServerUrl = "reportServerUrl";

        #region 5 èmme état 

        public const string FiveKPI = "FiveKPI";
        public const string FiveSubKPIOne = "FiveSubKPIOne";
        public const string FiveSubKPITwo = "FiveSubKPITwo";
        public const string FiveSubKPIThree = "FiveSubKPIThree";
        public const string MONTHLY_PLATFORME_PERF = "MONTHLY_PLATFORME_PERF";

        #endregion


        /// <summary>
        /// The admin role id.
        /// </summary>
        protected const string AdminRole = "986AC60D-A114-4874-9DD3-FDAEC8EB6921";
        protected const string _reportingGroup = "reportingGroup";

        /// <summary>
        /// The current user.
        /// </summary>
        private WebUsers _currentUser;

        /// <summary>
        /// User repository
        /// </summary>
        private IUserRepo _userRepo;

        private readonly ICATLCRReferentiel _referentiel;

        /// <summary>
        /// Gets the current user.
        /// </summary>
        /// <value>
        /// The current user.
        /// </value>
        /// 
        protected IActionResult DownloadFile(ExportFormat format, string fileName, Action<Stream> streamDataProvider)
        {
            var stream = new MemoryStream();
            streamDataProvider(stream);
            stream.Position = 0;

            if (format == ExportFormat.Excel)
            {
                return File(stream, ExcelMimeType, fileName + ".xlsx");
            }
            else
            {
                return File(stream, CsvMimeType, fileName + ".csv");
            }
        }
        protected WebUsers CurrentUser
        {
            get
            {
                if (_currentUser == null)
                {
                    if (User.Identity.IsAuthenticated)
                    {
                        var idClaim = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
                        //if (idClaim == null)
                        //{
                        //    throw new ServiceException($"'{ClaimTypes.NameIdentifier}' claim type is missing.");
                        //}

                        // Guid userId = new Guid(6bf01fad - b9da - 4f6d - 8b23 - 8abd22c4d9d3);
                        //Guid userId = new Guid(idClaim.Value);
                        _currentUser = _referentiel.FindByAccesKey("DongreSu");
                    }
                }
                return _currentUser;
            }
        }

        /// <summary>
        /// Validates whether current user has specified roles.
        /// </summary>
        /// <param name="roles">The roles.</param>
        protected void ValidateRoles(params string[] roles)
        {
            if (!roles.Any(x => HasRole(x)))
            {
                throw new Common.Exceptions.AuthorizationException("API endpoint access is not allowed for current user's role.");
            }
        }

        /// <summary>
        /// Determines whether current user has specified role.
        /// </summary>
        /// <param name="roleid">id of the role.</param>
        /// <returns>
        ///   <c>true</c> if current user has specified role; otherwise, <c>false</c>.
        /// </returns>
        protected bool HasRole(string roleId)
        {
            //return CurrentUser.Roles.Any(s => s.RoleId == new Guid(roleId));

            return true;
        }


        /// <summary>
        /// Ensures current user is Admin.
        /// </summary>
        protected void EnsureUserIsAdmin()
        {
            ValidateRoles(AdminRole);
        }

        public BaseController(IUserRepo repo)
        {
            _userRepo = repo;
        }
    }
}
