using CATLCR_BackEnd.Data.Entities;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Reflection;

namespace CATLCR_BackEnd.Common.Excel
{
    /// <summary>
    /// Wrapper over Excel lib for exporting Excel files.
    /// </summary>
    public class ExcelImporter : IDisposable
    {
        private readonly ExcelPackage _package;

        /// <summary>
        /// Initializes a new instance of the <see cref="ExcelImporter"/> class.
        /// </summary>
        /// <param name="package">The package.</param>
        private ExcelImporter(ExcelPackage package)
        {
            _package = package;
        }

        /// <summary>
        /// Creates the instance of importer for specified file path.
        /// </summary>
        /// <param name="filePath">The file path.</param>
        /// <returns>The importer instance.</returns>
        public static ExcelImporter Create(string filePath)
        {
            var fileInfo = new FileInfo(filePath);
            var package = new ExcelPackage(fileInfo);
            return new ExcelImporter(package);
        }

        /// <summary>
        /// Imports items of given type from Excel.
        /// </summary>
        /// <typeparam name="T">Type of items to import.</typeparam>
        /// <param name="tableName">Name of the Excel worksheet.</param>
        /// <param name="mapping">The column mapping.</param>
        /// <param name="skipRows">The number of rows to skip.</param>
        /// <returns>
        /// The imported items.
        /// </returns>
        public ParsedList<T> ToList<T>(string tableName = null, IList<ExcelColumnMap> mapping = null, int skipRows = 0)
            where T : IParsedEntity, new()
        {
            var worksheet = tableName != null
                ? GetWorksheet(tableName)
                : _package.Workbook.Worksheets.First();

            var convertDateTime = new Func<double, DateTime>(excelDate =>
            {
                if (excelDate < 1)
                    throw new ArgumentException("Excel dates cannot be smaller than 0.");

                var dateOfReference = new DateTime(1900, 1, 1);

                if (excelDate > 60d)
                    excelDate = excelDate - 2;
                else
                    excelDate = excelDate - 1;
                return dateOfReference.AddDays(excelDate);
            });

            var props = typeof(T).GetProperties()
                .Select(prop =>
                {
                    var displayAttribute = prop.GetCustomAttribute<DisplayAttribute>();

                    int maxLength = 0;
                    if (prop.PropertyType == typeof(string))
                    {
                        var maxLengthAttribute = prop.GetCustomAttribute<MaxLengthAttribute>();
                        maxLength = maxLengthAttribute?.Length ?? 0;
                    }

                    return new
                    {
                        Name = prop.Name,
                        DisplayName = displayAttribute == null ? prop.Name : displayAttribute.Name,
                        Order = displayAttribute == null || !displayAttribute.GetOrder().HasValue ? 999 : displayAttribute.Order,
                        PropertyInfo = prop,
                        PropertyType = prop.PropertyType,
                        HasDisplayName = displayAttribute != null,
                        MaxLength = maxLength
                    };
                })
            .Where(prop => !string.IsNullOrWhiteSpace(prop.DisplayName))
            .ToList();

            var result = new ParsedList<T>();
            var columns = new List<ExcelColumnMap>();

            if (worksheet.Dimension == null)
            {
                result.Errors.Add("File is empty.");
                return result;
            }

            var start = worksheet.Dimension.Start;
            var end = worksheet.Dimension.End;
            var startCol = start.Column;
            var startRow = start.Row;
            var endCol = end.Column;
            var endRow = end.Row;

            // Assume first row has column names
            for (int col = startCol; col <= endCol; col++)
            {
                var cellValue = (worksheet.Cells[startRow, col].Value ?? string.Empty).ToString().Trim();
                if (!string.IsNullOrWhiteSpace(cellValue))
                {
                    var map = mapping?.FirstOrDefault(x => x.ColumnName.ToLowerInvariant() == cellValue.ToLowerInvariant());
                    columns.Add(new ExcelColumnMap
                    {
                        ColumnName = cellValue,
                        PropertyName = map?.PropertyName ?? cellValue,
                        Index = col
                    });
                }
            }

            // check that all columns are provided
            if (mapping != null)
            {
                foreach (var map in mapping)
                {
                    if (!columns.Any(x => x.ColumnName.IsCaseInsensitiveEqual(map.ColumnName)))
                    {
                        result.Errors.Add($"Missing column '{map.ColumnName}'.");
                    }
                }
            }

            if (result.Errors.Count > 0)
            {
                // do not proceed in case there are validation errors
                return result;
            }

            // Now iterate over all the rows
            for (int rowIndex = startRow + 1 + skipRows; rowIndex <= endRow; rowIndex++)
            {
                bool isEmptyRow = true;
                var item = new T { RecordIndex = rowIndex };
                columns.ForEach(column =>
                {
                    var value = worksheet.Cells[rowIndex, column.Index].Value;
                    var valueStr = value == null ? string.Empty : value.ToString().Trim();
                    string propName = column.PropertyName?.ToLowerInvariant();
                    var prop = string.IsNullOrWhiteSpace(propName)
                        ? null
                        : props.FirstOrDefault(p => p.Name.ToLowerInvariant() == propName);

                    // Excel stores all numbers as doubles, but we're relying on the object's property types
                    if (prop != null)
                    {
                        if (!string.IsNullOrWhiteSpace(valueStr))
                        {
                            isEmptyRow = false;
                        }

                        var propertyType = prop.PropertyType;
                        object parsedValue = null;

                        if (propertyType == typeof(int?) || propertyType == typeof(int))
                        {
                            if (string.IsNullOrWhiteSpace(valueStr))
                            {
                                if (propertyType == typeof(int))
                                {
                                    // add error and continue to next property
                                    AddError(item, $"Required value is missing. Line #{item.RecordIndex} Column [{column.ColumnName}].");
                                }
                                return;
                            }
                            else
                            {
                                // if not empty and failed to parse - add error
                                if (!int.TryParse(valueStr, out var val))
                                {
                                    AddError(item, $"Cannot parse integer number. Line #{item.RecordIndex} Column [{column.ColumnName}]. Value '{valueStr}'.");
                                    return;
                                }

                                parsedValue = val;
                            }
                        }
                        else if (propertyType == typeof(DateTime?) || propertyType == typeof(DateTime))
                        {
                            //added to handle null date values on excel
                            if (value == null)
                            {
                                if (propertyType == typeof(DateTime))
                                {
                                    // add error and continue to next property
                                    AddError(item, $"Required value is missing. Line #{item.RecordIndex} Column [{column.ColumnName}].");
                                    return;
                                }
                            }
                            else if (value.GetType() == typeof(DateTime))
                            {
                                parsedValue = value;
                            }
                            else
                            {
                                try
                                {
                                    parsedValue = convertDateTime((double)value);
                                }
                                catch (Exception)
                                {
                                    // add error and continue to next property
                                    AddError(item, $"Cannot parse Date/Time value. Line #{item.RecordIndex} Column [{column.ColumnName}]. Value '{value}'.");
                                    return;
                                }
                            }
                        }
                        else if (propertyType == typeof(string))
                        {
                            if (prop.MaxLength > 0 && valueStr?.Length > prop.MaxLength)
                            {
                                // add Max Length error
                                AddError(item, $"Max length exceeded for column [{column.ColumnName}]. Max length is [{prop.MaxLength}]. Provided length is [{valueStr.Length}]. Line #{item.RecordIndex}.");
                            }
                            parsedValue = string.IsNullOrEmpty(valueStr) ? null : valueStr;
                        }
                        else
                        {
                            try
                            {
                                parsedValue = Convert.ChangeType(value, propertyType);
                            }
                            catch
                            {
                                parsedValue = valueStr;
                            }
                        }

                        try
                        {
                            prop.PropertyInfo.SetValue(item, parsedValue);
                        }
                        catch (Exception)
                        {
                            // ignore
                        }
                    }
                });

                // ignore empty rows
                if (!isEmptyRow)
                {
                    result.Items.Add(item);
                }
            }

            return result;
        }

        /// <summary>
        /// Reads the first column values.
        /// </summary>
        /// <param name="skipRows">The number of rows to skip.</param>
        /// <returns>First column values.</returns>
        public IList<string> ReadFirstColumnValues(int skipRows)
        {
            var result = new List<string>();

            var worksheet = _package.Workbook.Worksheets.First();
            var dimension = worksheet.Dimension;
            if (dimension == null)
            {
                // empty file
                return result;
            }

            var startRow = dimension.Start.Row;
            var endRow = dimension.End.Row;

            // iterate over all the rows
            for (int rowIndex = startRow + skipRows; rowIndex <= endRow; rowIndex++)
            {
                var value = worksheet.Cells[rowIndex, 1].Value;
                var valueStr = value == null ? string.Empty : value.ToString().Trim();
                result.Add(valueStr);
            }

            return result;
        }

        /// <summary>
        /// Gets the worksheet.
        /// </summary>
        /// <param name="worksheetName">Name of the worksheet.</param>
        /// <returns>The worksheet.</returns>
        private ExcelWorksheet GetWorksheet(string worksheetName)
        {
            ExcelWorksheet worksheet = _package.Workbook.Worksheets.FirstOrDefault(x => x.Name.IsCaseInsensitiveEqual(worksheetName));
            if (worksheet == null)
            {
                throw new ArgumentException($"'{worksheetName}' worksheet is missing.");
            }

            return worksheet;
        }

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        public void Dispose()
        {
            _package.Dispose();
        }

        /// <summary>
        /// Adds the error to the item in case it is IParsedEntity object.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <param name="errorMessage">The error message.</param>
        private static void AddError(object item, string errorMessage)
        {
            var parsedEntity = item as IParsedEntity;
            if (parsedEntity != null)
            {
                parsedEntity.ParseErrors.Add(errorMessage);
            }
        }
    }
}
