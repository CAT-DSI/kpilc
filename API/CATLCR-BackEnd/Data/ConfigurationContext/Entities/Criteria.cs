using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Entities
{
    public class Criteria : ConfigEntityBase
    {
        public string DefaultValue { get; set; }
        public string DefaultKey { get; set; }
        public Guid ReportID { get; set; }

        public Report Report { get; set; }

        public bool Hidden { get; set; }

        public string DataType { get; set; }
        
        public int ControlType { get; set; }

        public int SourceType { get; set; }

        public Guid Referential { get; set; }

        public bool Required { get; set; }

        public bool Multiple { get; set; }

        public int Order { get; set; }

        public ICollection<Criteria> DependsOnCriteria { get; set; }
        public ICollection<UserParamValues> ParamValues { get; set; }

        public virtual Criteria RelatedCriteria { get; set; }


        public Guid? CriteriaID { get; set; }
    }
}
