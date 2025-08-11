using CATLCR_BackEnd.Data.Entities;
using CATLCR_BackEnd.Data.Repositories;
using CATLCR_BackEnd.Models;
using System;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository
{
    /// <summary>
    /// The user repository.
    /// </summary>
    public interface IUserRepository : IGenericRepository<RefUser, UserSearchCriteria>
    {
        /// <summary>
        /// Gets user by login.
        /// </summary>
        ///
        /// <param name="login">The user login.</param>
        /// <returns>The found User entity.</returns>
        ///
        /// <exception cref="ArgumentNullException">
        /// If <paramref name="login"/> is <c>null</c>.
        /// </exception>
        /// <exception cref="ArgumentException">
        /// If <paramref name="login"/> is empty.
        /// </exception>
        /// <exception cref="EntityNotFoundException">
        /// If user with given login is not found.
        /// </exception>
        RefUser GetByLogin(string login);
    }
}
