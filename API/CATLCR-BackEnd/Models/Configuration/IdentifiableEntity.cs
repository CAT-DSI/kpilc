using System;

namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// The base identifiable entity.
    /// </summary>
    /// <typeparam name="T">Type of the primary key.</typeparam>
    public abstract class IdentifiableEntity<T> : IEntity
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        public virtual T Id { get; set; }

        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        object IEntity.Id { get => Id; set => Id = (T)Convert.ChangeType(value, typeof(T)); }


        /// <summary>
        /// Returns a value indicating whether Id should be serialized.
        /// </summary>
        /// <returns>Value indicating whether Id should be serialized.</returns>
        public virtual bool ShouldSerializeId()
        {
            return true;
        }
    }
}