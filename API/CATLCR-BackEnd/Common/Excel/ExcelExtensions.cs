using CATLCR_BackEnd.Data.Entities;
using System.Collections.Generic;
using System.IO;

namespace CATLCR_BackEnd.Common.Excel
{
    /// <summary>
    /// The helper methods for operations with excel files.
    /// </summary>
    public static class ExcelExtensions
    {
        /// <summary>
        /// Parses the items.
        /// </summary>
        /// <typeparam name="T">Type of the items to parse.</typeparam>
        /// <param name="filePath">The file path.</param>
        /// <param name="mapping">The mapping.</param>
        /// <param name="skipRows">The number of rows to skip.</param>
        /// <returns>List of parsed items.</returns>
        public static ParsedList<T> ParseItems<T>(string filePath, IList<ExcelColumnMap> mapping = null, int skipRows = 0)
            where T : IParsedEntity, new()
        {
            using (var importer = ExcelImporter.Create(filePath))
            {
                return importer.ToList<T>(null, mapping, skipRows);
            }
        }

        /// <summary>
        /// Parses the first column strings.
        /// </summary>
        /// <param name="filePath">The file path.</param>
        /// <param name="skipRows">The number of rows to skip.</param>
        /// <returns>Parsed values.</returns>
        public static IList<string> ParseFirstColumnStrings(string filePath, int skipRows)
        {
            using (var importer = ExcelImporter.Create(filePath))
            {
                return importer.ReadFirstColumnValues(skipRows);
            }
        }

        /// <summary>
        /// Exports items to excel.
        /// </summary>
        /// <typeparam name="T">Type of items to export.</typeparam>
        /// <param name="items">The items.</param>
        /// <param name="worksheetName">Name of the worksheet.</param>
        /// <param name="mapping">The mapping.</param>
        /// <param name="stream">The output stream.</param>
        public static void ExportToExcel<T>(this IEnumerable<T> items, string worksheetName, IList<ExcelColumnMap> mapping, Stream stream)
        {
            using (var exporter = new ExcelExporter(stream))
            {
                exporter.AddWorksheet(worksheetName, items, mapping);
            }
        }
    }
}
