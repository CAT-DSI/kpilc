using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Models.KPILCModel
{
   
    public class ProductKpiModel
    {
        public int? Id { get; set; }
        public string? Product { get; set; }
        public double Kpi { get; set; }
        public Guid? RegimeId { get; set; }
        public string? Regime { get; set; }
        public ProductKpiModel()
        {
            Id = -1;
        }
    }

    public class ProductRegimeModel
    {
        public Guid? Id { get; set; }
        public string Regime { get; set; }
    }

    public class KpiSettingModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Kpi { get; set; }

    }

    public class UserMarquesModel
    {
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public List<string> Marques { get; set; }
    }

    public class WebReportsModel
    {
        public int UserAction { get; set; }

        public Guid UserId { get; set; }

        public Guid ReportId { get; set; }

    }

    public class UserCountriesModel
    {
        public string Countries { get; set; }
        public Guid userId { get; set; }
        public Guid reportId { get; set; }
        public int type { get; set; }
    }
    public class UserRegimesModel
    {
        public Guid UserId { get; set; }
        public Guid ReportId { get; set; }
        public List<string> Regime { get; set; }
    }
}
