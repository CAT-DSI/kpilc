using System;

namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// Interface for audited entities.
    /// </summary>
    public interface IBaseEntity : IEntity
    {
        /// <summary>
        /// Gets or sets the last update timestamp.
        /// </summary>
        /// <value>
        /// The last update timestamp.
        /// </value>
        DateTime? LastUpdate { get; set; }

        /// <summary>
        /// Gets or sets the Id of last updated user.
        /// </summary>
        /// <value>
        /// The Id of last updated user.
        /// </value>
        long? LastUpdateUserId { get; set; }
    }
}