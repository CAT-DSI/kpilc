using System;

namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// The base entity for all audited entities.
    /// </summary>
    /// <typeparam name="T">Type of the entity Id.</typeparam>
    public abstract class BaseEntity<T> : IdentifiableEntity<T>, IBaseEntity
    {
        /// <summary>
        /// Gets or sets the last update timestamp.
        /// </summary>
        /// <value>
        /// The last update timestamp.
        /// </value>
        public DateTime? LastUpdate { get; set; }

        /// <summary>
        /// Gets or sets the Id of last updated user.
        /// </summary>
        /// <value>
        /// The Id of last updated user.
        /// </value>
        public long? LastUpdateUserId { get; set; }
    }
}
