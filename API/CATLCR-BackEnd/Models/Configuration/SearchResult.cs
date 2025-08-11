using System.Collections.Generic;

namespace CATLCR_BackEnd.Models
{
    /// <summary>
    /// An entity class that represents search result.
    /// </summary>
    ///
    /// <typeparam name="T">The type of the items in the search result.</typeparam>
    public class SearchResult<T>
    {
        /// <summary>
        /// The total records count.
        /// </summary>
        /// <value>
        /// The total records count.
        /// </value>
        public int TotalCount { get; set; }

        /// <summary>
        /// The items.
        /// </summary>
        /// <value>
        /// The items.
        /// </value>
        public IList<T> Items { get; set; }
    }
}
