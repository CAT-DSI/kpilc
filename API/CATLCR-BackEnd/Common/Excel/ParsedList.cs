using System.Collections.Generic;

namespace CATLCR_BackEnd.Common.Excel
{
    /// <summary>
    /// Represents list of parsed entities along with parse errors.
    /// </summary>
    /// <typeparam name="T">Type of parsed items.</typeparam>
    public class ParsedList<T>
    {
        /// <summary>
        /// Gets the parsed items.
        /// </summary>
        public IList<T> Items { get; private set; }

        /// <summary>
        /// Gets the parsing errors.
        /// </summary>
        public IList<string> Errors { get; private set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="ParsedList{T}"/> class.
        /// </summary>
        public ParsedList()
        {
            Items = new List<T>();
            Errors = new List<string>();
        }
    }
}
