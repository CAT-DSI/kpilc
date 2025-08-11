using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using OfficeOpenXml;
using OfficeOpenXml.Style;

namespace CATLCR_BackEnd.Common.Excel
{
    /// <summary>
    /// The wrapper around Excel lib for exporting files.
    /// </summary>
    public class ExcelExporter : IDisposable
    {
        private readonly ExcelPackage _package;

        /// <summary>
        /// Initializes a new instance of the <see cref="ExcelExporter"/> class.
        /// </summary>
        /// <param name="stream">The stream.</param>
        public ExcelExporter(Stream stream)
        {
            _package = new ExcelPackage(stream);
        }

        /// <summary>
        /// Adds the worksheet.
        /// </summary>
        /// <typeparam name="T">Type of items to export.</typeparam>
        /// <param name="worksheetName">Name of the worksheet.</param>
        /// <param name="items">The items.</param>
        /// <param name="mapping">The column mapping.</param>
        public void AddWorksheet<T>(string worksheetName, IEnumerable<T> items, IList<ExcelColumnMap> mapping)
        {
            // add a new worksheet to the empty workbook
            ExcelWorksheet worksheet = _package.Workbook.Worksheets.Add(worksheetName);

            if (mapping.Count > 0)
            {
                // add headers
                int rowNum = 1;
                for (int i = 0; i < mapping.Count; i++)
                {
                    var cell = worksheet.Cells[rowNum, i + 1];
                    cell.Value = mapping[i].ColumnName;
                    cell.Style.Font.Bold = true;
                }

                worksheet.Cells[1, 1, 1, mapping.Count].AutoFilter = true;
                worksheet.Cells[1, 1, 1, mapping.Count].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;

                // add data
                var props = typeof(T).GetProperties();
                foreach (var item in items)
                {
                    rowNum++;
                    for (int i = 0; i < mapping.Count; i++)
                    {
                        var property = props.FirstOrDefault(x => x.Name.IsCaseInsensitiveEqual(mapping[i].PropertyName));
                        if (property != null)
                        {
                            var value = property.GetValue(item);
                            worksheet.Cells[rowNum, i + 1].Value = value;
                            if (value is string strValue && strValue.Contains("\n"))
                            {
                                worksheet.Cells[rowNum, i + 1].Style.WrapText = true;
                            }
                            else if (value is DateTime)
                            {
                                worksheet.Cells[rowNum, i + 1].Style.Numberformat.Format = "MM/dd/yyyy hh:mm:ss AM/PM";
                            }
                        }
                    }
                }
            }
            worksheet.Cells.AutoFitColumns(0);
        }

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        public void Dispose()
        {
            _package.Save();
        }
    }
}
