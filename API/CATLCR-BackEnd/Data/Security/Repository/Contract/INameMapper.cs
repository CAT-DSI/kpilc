using System;

namespace CATLCR_BackEnd.Data
{
    /// <summary>
    /// Provide mapping from entities and properties to Database tables and columns.
    /// </summary>
    public interface INameMapper
    {
        /// <summary>
        /// Gets the name of the table for given entity type.
        /// </summary>
        /// <typeparam name="TEntity">The type of the entity.</typeparam>
        /// <returns>Name of the table.</returns>
        string GetTableName<TEntity>()
            where TEntity : class;

        /// <summary>
        /// Gets the name of the column for a given entity type and column name.
        /// </summary>
        /// <typeparam name="TEntity">The entity type.</typeparam>
        /// <param name="propertyName">Name of the property.</param>
        /// <returns>Name of column.</returns>
        string GetColumnName<TEntity>(string propertyName)
            where TEntity : class;

        /// <summary>
        /// Gets the underlying entity type of the given table name.
        /// </summary>
        /// <param name="tableName">The table name.</param>
        /// <returns>The entity type.</returns>
        Type GetTableEntity(string tableName);
    }
}
