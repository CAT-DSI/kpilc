namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// The interface for all identifiable entities.
    /// </summary>
    public interface IEntity
    {
        /// <summary>
        /// Gets or sets the entity identifier.
        /// </summary>
        /// <value>
        /// The entity identifier.
        /// </value>
        object Id { get; set; }
    }
}
