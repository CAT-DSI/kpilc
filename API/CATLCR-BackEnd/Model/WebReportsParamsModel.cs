using System;

namespace CATLCR_BackEnd.Model
{
    public class WebReportsParamsModel
    {
        public Guid? Id { get; set; }
        public Guid IdTranscoWex { get; set; }
        public Guid? CategoryId { get; set; }
        public double? Kpi { get; set; }
        public bool? IsDelayReport { get; set; }
        public string CategoryName { get; set; }
        public string Country { get; set; }
        public string Brand { get; set; }
        public string Product { get; set; }
        public int type { get; set; }
    }
}
