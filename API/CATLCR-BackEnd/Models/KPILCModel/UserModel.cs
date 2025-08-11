using CATLCR_BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Permissions;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.KPILCModel
{

    public class UserModel
    {
        public Guid? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AccessKey { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public int? RoleId { get; set; }
        public bool? IsActive { get; set; }
        public string Email { get; set; }
        public Guid ServiceId { get; set; }
        
        public string Role { get; set; }

        public Guid? ProfileId { get; set; }
        public string ProfileName { get; set; }

        public int TotalUser { get; set; }
        public int TotalUsers { get; set; }
        public string USERTYPE { get; set; }


    }
    public class CountriesByUserModel
    {
        public List<string> ListToDelete { get; set; }
        public List<string> ListToAdd { get; set; }
        public Guid UserId { get; set; }
    }
    public class BasicparamsModel
    {
        public int pageSize { get; set; }
        public int pageIndex { get; set; } = 10;
        public string sortBy { get; set; } 
        public string sortType { get; set; }


    }
    public class ViaCustomerModel
    {
        public Guid Id { get; set; }
        public string Brand { get; set; }
        public string CustomerGroup { get; set; }
        public string MarketLine { get; set; }
    }

    public class VersionModel
    {
        public int VersionKey { get; set; }
        public string VersionName { get; set; }
        public string Date { get; set; }
        public bool Running { get; set; }
        public Version version { get; set; }
        public string KPILCRefreshDate { get; set; }
    }

    public class CO2KPICLModel
    {
        public int ROWID { get; set; }
        public Guid ID { get; set; }
        public string FIRSTNAME { get; set; }
        public string LASTNAME { get; set; }
        public string ACCESSKEY { get; set; }
        public int ROLEID { get; set; }
        public Guid SERVICEID { get; set; }
        public string USERTYPE { get; set; }
    }

    public class ReportParamExModel
    {
        public Guid Id { get; set; }
        public Guid? CategoryID { get; set; }
        public string CategoryName { get; set; }
        public Guid IdTranscoWex { get; set; }
        public string Country { get; set; }
        public string Brand { get; set; }
        public string Product { get; set; }
    }

    public class EmailReport_EmailEx
    {
        public Guid ID { get; set; }
        public Guid ReportId { get; set; }
        public string Country { get; set; }
        public int Sysdate { get; set; }
        public int? Sysdate1 { get; set; }
        public string Emails { get; set; }
        public List<EmailWeb_EmailFrequencyEx> Frequencies { get; set; }
        public List<Marque_Country_User> Marques { get; set; }
        public string Brand { get; set; }
        public List<Product_Brand_User> Products { get; set; }
        public List<ReportUserParam> Regimes { get; set; }
        public bool EachMonth { get; set; }
        public bool EachDay { get; set; }
        public string SelectedMonths { get; set; }
        public string SelectedDays { get; set; }
        public string DatesRange { get; set; }
        public string ReportName { get; set; }
        public string ReportKey { get; set; }
        public RefPlateformes Platform { get; set; }
        public string Plateform { get; set; }
        public string Groups { get; set; }
        public string Updatedby { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDateRange { get; set; }

        public EmailReport_EmailEx()
        {
            Marques = new List<Marque_Country_User>();
            Products = new List<Product_Brand_User>();
            Frequencies = new List<EmailWeb_EmailFrequencyEx>();
            Regimes = new List<ReportUserParam>();
        }
    }
    public class Marque_Country_User
    {
        public string Country { get; set; }
        public string Brand { get; set; }
        public bool isSelected { get; set; }
    }
    public class Product_Brand_User
    {
        public string Country { get; set; }
        public string Brand { get; set; }
        public string Product { get; set; }
        public bool isSelected { get; set; }
    }
    public class EmailWeb_EmailFrequencyEx
    {
        public Guid MainItemID { get; set; } 
        public Guid FrequencyID { get; set; }
        public string FrequencyKey { get; set; }
        public string FrequencyLabel { get; set; }
        public bool isSelected { get; set; }
    }
    public class ReportUserParam
    {
        public Guid? Id { get; set; }
        public string Regime { get; set; }
    }

    public enum FieldParam : int
    {
        Pf = 1,
        Supplier = 2,
        LineId = 3,
        Customer = 4,

        Regime = 5,
        ArrivalCountry = 6,
        DepartureCountry = 7
    }
}
