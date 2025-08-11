using AutoMapper;
using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Configuration
{
    public class ConfigurationProfile : Profile
    {
        public ConfigurationProfile()
        {
            CreateMap<Report, ReportModel>().ReverseMap();
            CreateMap<Criteria, CriteriaModel>().ReverseMap();
            CreateMap<Field, FieldModel>().ReverseMap();
            CreateMap<Referential, ReferentialModel>().ReverseMap();
            CreateMap<ReportingService, ReportingServiceModel>().ReverseMap();
            CreateMap<Category, CategoryModel>().ReverseMap();
            CreateMap<UserParamValues, ParamValue>().ReverseMap();
        }
    }
}
