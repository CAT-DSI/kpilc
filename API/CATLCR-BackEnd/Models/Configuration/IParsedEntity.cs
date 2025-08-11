using System.Collections.Generic;

namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// The interface for entities that are parsed from Excel file and can contain parse errors.
    /// </summary>
    public interface IParsedEntity
    {
        /// <summary>
        /// Gets the record parse errors.
        /// </summary>
        /// <value>
        /// The record parse errors.
        /// </value>
        IList<string> ParseErrors { get; }

        /// <summary>
        /// Gets or sets the index of the record.
        /// </summary>
        /// <value>
        /// The index of the record.
        /// </value>
        int RecordIndex { get; set; }
    }
}
