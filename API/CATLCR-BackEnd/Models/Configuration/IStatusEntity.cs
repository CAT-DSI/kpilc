namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// The interface for all entities with a Record Status.
    /// </summary>
    public interface IStatusEntity : IBaseEntity
    {
        /// <summary>
        /// Gets or sets the entity status Id.
        /// </summary>
        /// <value>
        /// The entity status Id.
        /// </value>
        int Status { get; set; }
    }
}
