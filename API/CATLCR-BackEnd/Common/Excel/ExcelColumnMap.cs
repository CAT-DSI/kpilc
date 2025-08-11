namespace CATLCR_BackEnd.Common.Excel
{
    /// <summary>
    /// The mapping for excel columns.
    /// </summary>
    public class ExcelColumnMap
    {
        /// <summary>
        /// Gets or sets the column index.
        /// </summary>
        /// <value>
        /// The column index.
        /// </value>
        public int Index { get; set; }

        /// <summary>
        /// Gets or sets the name of the column.
        /// </summary>
        /// <value>
        /// The name of the column.
        /// </value>
        public string ColumnName { get; set; }

        /// <summary>
        /// Gets or sets the name of the property.
        /// </summary>
        /// <value>
        /// The name of the property.
        /// </value>
        public string PropertyName { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="ExcelColumnMap"/> class.
        /// </summary>
        public ExcelColumnMap()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ExcelColumnMap"/> class.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        public ExcelColumnMap(string propertyName)
        {
            PropertyName = propertyName;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ExcelColumnMap"/> class.
        /// </summary>
        /// <param name="columnName">Name of the column.</param>
        /// <param name="propertyName">Name of the property.</param>
        public ExcelColumnMap(string columnName, string propertyName)
        {
            ColumnName = columnName;
            PropertyName = propertyName ?? columnName;
        }
    }
}
