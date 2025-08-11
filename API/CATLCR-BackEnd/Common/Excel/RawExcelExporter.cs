using System;
using System.Collections.Generic;
using System.IO;
using OfficeOpenXml;
using OfficeOpenXml.Style;

namespace CATLCR_BackEnd.Common.Excel
{
    /// <summary>
    /// The wrapper around Excel lib for exporting files.
    /// </summary>
    public class RawExcelExporter : IDisposable
    {
        private readonly ExcelPackage _package;

        /// <summary>
        /// Initializes a new instance of the <see cref="ExcelExporter"/> class.
        /// </summary>
        /// <param name="stream">The stream.</param>
        public RawExcelExporter(Stream stream)
        {
            _package = new ExcelPackage(stream);
        }

        /// <summary>
        /// Adds the worksheet.
        /// </summary>
        /// <param name="worksheetName">Name of the worksheet.</param>
        /// <param name="headers">The headers.</param>
        /// <param name="items">The items.</param>
        public void AddWorksheet(string worksheetName, IList<string> headers, IList<IList<object>> items)
        {
            // add a new worksheet to the empty workbook
            ExcelWorksheet worksheet = _package.Workbook.Worksheets.Add(worksheetName);

            // add headers
            int rowNum = 1;
            for (int i = 0; i < headers.Count; i++)
            {
                var cell = worksheet.Cells[rowNum, i + 1];
                cell.Value = headers[i];
                cell.Style.Font.Bold = true;
            }

            worksheet.Cells[1, 1, 1, headers.Count].AutoFilter = true;
            worksheet.Cells[1, 1, 1, headers.Count].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;

            // add data
            foreach (var item in items)
            {
                rowNum++;
                for (int i = 0; i < headers.Count; i++)
                {
                    object value= item[i];
                    worksheet.Cells[rowNum, i + 1].Value = value;

                    if (value is string stringValue && stringValue.Contains("\n"))
                    {
                        worksheet.Cells[rowNum, i + 1].Style.WrapText = true;
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
