using CATLCR_BackEnd.Data.Entities;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Data.Repositories
{
    /// <summary>
    /// The transcoding repository.
    /// </summary>
    public interface ITranscodingRepository : IRepository<RefRxr>
    {
        /// <summary>
        /// Saves the RXR items.
        /// </summary>
        /// <param name="items">The items.</param>
        void SaveRxrItems(IList<RefRxr> items);

        /// <summary>
        /// Saves the WMI items.
        /// </summary>
        /// <param name="items">The items.</param>
        void SaveWmiItems(IList<RefWmi> items);
    }
}
