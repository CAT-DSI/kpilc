using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.Configuration
{
    public class CriteriaModel
    {
        public string Name { get; set; }
        public string country { get; set; }
        public string Label { get; set; }
        public Guid ID { get; set; }
        public DateTime UpdatedOn { get; set; }
        public Guid UpdatedBy { get; set; }

        public Guid ReportID { get; set; }

        public ReportModel Report { get; set; }

        public bool Hidden { get; set; }

        public string DataType { get; set; }

        public int ControlType { get; set; }

        public int SourceType { get; set; }

        public Guid Referential { get; set; }

        public IEnumerable<CriteriaModel> DependsOnCriteria { get; set; }

        public CriteriaModel RelatedCriteria { get; set; }

        public byte[] Timestamp { get; set; }

        public string DefaultValue { get; set; }

        public string DefaultKey { get; set; }

        public List<OptionModel> Options { get; set; }

        public bool Required { get; set; }

        public bool Multiple { get; set; }

        public int Order { get; set; }
    }
}
