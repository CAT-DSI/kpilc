using Newtonsoft.Json;

namespace CATLCR_BackEnd.Models
{
    /// <summary>
    /// A DTO class that represents base search criteria.
    /// </summary>
    public class BaseSearchCriteria
    {
        /// <summary>
        /// The size of the page.
        /// </summary>
        /// <value>
        /// The size of the page.
        /// </value>
        public int PageSize { get; set; }

        /// <summary>
        /// The page index.
        /// </summary>
        /// <value>
        /// The page index.
        /// </value>
        public int PageIndex { get; set; }

        /// <summary>
        /// The sort by property.
        /// </summary>
        /// <value>
        /// The sort by property.
        /// </value>
        public string SortBy { get; set; }

        /// <summary>
        /// The type of the sort.
        /// </summary>
        /// <value>
        /// The type of the sort.
        /// </value>
       // public SortType SortType { get; set; }

        /// <summary>
        /// Gets or sets the excluded status Id.
        /// </summary>
        /// <value>
        /// The excluded status Id.
        /// </value>
        [JsonIgnore]
        public int? ExcludedStatus { get; set; }
    }
}
