using Microsoft.AspNetCore.Hosting;
using Microsoft.VisualBasic.FileIO;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Common
{
    public static class Util
    {
        /// <summary>
        /// Validates that <paramref name="param"/> is not <c>null</c>.
        /// </summary>
        ///
        /// <typeparam name="T">The type of the parameter, must be reference type.</typeparam>
        ///
        /// <param name="param">The parameter to validate.</param>
        /// <param name="paramName">The name of the parameter.</param>
        public static void ValidateArgumentNotNull<T>(T param, string paramName)
            where T : class
        {
            if (param == null)
            {
                throw new ArgumentNullException(paramName, $"{paramName} cannot be null.");
            }
        }


        /// <summary>
        /// The email templates path.
        /// </summary>
        internal const string EmailTemplatesPath = @"Common/EmailTemplate";
        /// <summary>
        /// Gets the email body template.
        /// </summary>
        /// <param name="hostingEnvironment">The hosting environment.</param>
        /// <param name="bodyFilename">The email body template filename.</param>
        /// <returns>Content of the email template path.</returns>
        internal static string GetEmailBodyTemplate(string bodyFilename)
        {
            var fileSubPath = EmailTemplatesPath + "/" + bodyFilename;
            if (File.Exists(fileSubPath))
            {
                var fileInfo = FileSystem.GetFileInfo(fileSubPath);

                if (!fileInfo.Exists)
                {
                    throw new Exception($"Email template '{bodyFilename}' was not found." +
                        $"{Environment.NewLine}Searched path 1: {fileSubPath}");
                }

                using (var reader = new StreamReader(fileInfo.OpenRead()))
                {
                    return reader.ReadToEnd();
                }
            }

            return null;
        }

        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        /// <summary>
        /// Determines whether this instance and another specified System.String object have the same value.
        /// </summary>
        /// <param name="value">The string to check equality.</param>
        /// <param name="comparing">The comparing with string.</param>
        /// <returns>
        /// <c>true</c> if the value of the comparing parameter is the same as this string; otherwise, <c>false</c>.
        /// </returns>
        [DebuggerStepThrough]
        public static bool IsCaseInsensitiveEqual(this string value, string comparing)
        {
            return string.Compare(value, comparing, StringComparison.OrdinalIgnoreCase) == 0;
        }

        /// <summary>
        /// Represents the JSON serializer settings.
        /// </summary>
        public static readonly JsonSerializerSettings SerializerSettings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
            ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
            DateFormatString = "MM/dd/yyyy HH:mm:ss",
            DateTimeZoneHandling = DateTimeZoneHandling.Utc,
            Converters = new List<JsonConverter> { new StringEnumConverter() }
        };
    }
}
