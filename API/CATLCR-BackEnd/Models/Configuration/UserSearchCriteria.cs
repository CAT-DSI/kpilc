namespace CATLCR_BackEnd.Models
{
    /// <summary>
    /// The User search criteria.
    /// </summary>
    public class UserSearchCriteria : BaseSearchCriteria
    {
        /// <summary>
        /// Gets or sets the status.
        /// </summary>
        /// <value>
        /// The status.
        /// </value>
        public int? Status { get; set; }

        /// <summary>
        /// Gets or sets the region identifier.
        /// </summary>
        /// <value>
        /// The region identifier.
        /// </value>
        public long? RegionId { get; set; }

        /// <summary>
        /// Gets or sets the pgeo.
        /// </summary>
        /// <value>
        /// The pgeo.
        /// </value>
        public string PGEO { get; set; }

        /// <summary>
        /// Gets or sets the role identifier.
        /// </summary>
        /// <value>
        /// The role identifier.
        /// </value>
        public int? RoleId { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        /// <value>
        /// The name.
        /// </value>
        public string Name { get; set; }
    }
}
