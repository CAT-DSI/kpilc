/*
 * Copyright (c) 2019, TopCoder, Inc. All rights reserved.
 */
using CATLCR_BackEnd.Data.Entities;
using CATLCR_BackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CATLCR_BackEnd.Data.Repositories
{
    /// <summary>
    /// This repository interface defines methods to manage <typeparamref name="T" /> entities.
    /// </summary>
    /// <typeparam name="T">The type of the managed entities.</typeparam>
    /// <typeparam name="S">The type of the entities search criteria.</typeparam>
    public interface IGenericRepository<T, S> : IRepository<T>
        where T : IEntity
        where S : BaseSearchCriteria
    {
        /// <summary>
        /// Creates given entity.
        /// </summary>
        ///
        /// <param name="entity">The entity to create.</param>
        /// <returns>The created entity.</returns>
        ///
        /// <exception cref="ArgumentNullException">
        /// If <paramref name="entity"/> is <c>null</c>.
        /// </exception>
        /// <exception cref="ArgumentException">
        /// If <paramref name="entity"/> is invalid.
        /// </exception>
        /// <exception cref="PersistenceException">
        /// If a DB-based error occurs.
        /// </exception>
        /// <exception cref="ServiceException">
        /// If any other errors occur while performing this operation.
        /// </exception>
        T Create(T entity);

        /// <summary>
        /// Updates given entity.
        /// </summary>
        ///
        /// <param name="entity">The entity to update.</param>
        /// <returns>The updated entity.</returns>
        ///
        /// <exception cref="ArgumentNullException">
        /// If <paramref name="entity"/> is <c>null</c>.
        /// </exception>
        /// <exception cref="ArgumentException">
        /// If <paramref name="entity"/> is invalid.
        /// </exception>
        /// <exception cref="EntityNotFoundException">
        /// If entity with the given Id doesn't exist in DB.
        /// </exception>
        /// <exception cref="PersistenceException">
        /// If a DB-based error occurs.
        /// </exception>
        /// <exception cref="ServiceException">
        /// If any other errors occur while performing this operation.
        /// </exception>
        void Update(T entity);

        /// <summary>
        /// Retrieves entity with the given Id.
        /// </summary>
        ///
        /// <param name="id">The id of the entity to retrieve.</param>
        /// <returns>The retrieved entity.</returns>
        ///
        /// <exception cref="ArgumentException">
        /// If <paramref name="id"/> is not positive.
        /// </exception>
        /// <exception cref="EntityNotFoundException">
        /// If entity with the given Id doesn't exist in DB.
        /// </exception>
        /// <exception cref="PersistenceException">
        /// If a DB-based error occurs.
        /// </exception>
        /// <exception cref="ServiceException">
        /// If any other errors occur while performing this operation.
        /// </exception>
        T Get(object id);

        /// <summary>
        /// Retrieves entity with the given Id without navigational properties.
        /// </summary>
        ///
        /// <param name="id">The id of the entity to retrieve.</param>
        /// <returns>The retrieved entity.</returns>
        T GetShallow(object id);

        /// <summary>
        /// Retrieves list of all entities.
        /// </summary>
        ///
        /// <returns>The list of all entities.</returns>
        ///
        /// <exception cref="PersistenceException">
        /// If a DB-based error occurs.
        /// </exception>
        /// <exception cref="ServiceException">
        /// If any other errors occur while performing this operation.
        /// </exception>
        IList<T> GetAll();

        /// <summary>
        /// Deletes entity with the given Id.
        /// </summary>
        ///
        /// <param name="id">The id of the entity to delete.</param>
        ///
        /// <exception cref="ArgumentException">
        /// If <paramref name="id"/> is not positive.
        /// </exception>
        /// <exception cref="EntityNotFoundException">
        /// If entity with the given Id doesn't exist in DB.
        /// </exception>
        /// <exception cref="PersistenceException">
        /// If a DB-based error occurs.
        /// </exception>
        /// <exception cref="ServiceException">
        /// If any other errors occur while performing this operation.
        /// </exception>
        void Delete(object id);

        /// <summary>
        /// Retrieves entities matching given search criteria.
        /// </summary>
        ///
        /// <param name="criteria">The search criteria.</param>
        /// <returns>The matched entities.</returns>
        ///
        /// <exception cref="ArgumentNullException">If the <paramref name="criteria"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentException">If the <paramref name="criteria"/> is incorrect,
        /// e.g. PageNumber is negative, or PageNumber is positive and PageSize is not positive.</exception>
        /// <exception cref="PersistenceException">
        /// If a DB-based error occurs.
        /// </exception>
        /// <exception cref="ServiceException">
        /// If any other errors occur while performing this operation.
        /// </exception>
        SearchResult<T> Search(S criteria);

        /// <summary>
        /// Retrieves count of entities matching given search criteria.
        /// </summary>
        ///
        /// <param name="criteria">The search criteria.</param>
        /// <returns>The count of matched entities.</returns>
        ///
        /// <exception cref="ArgumentNullException">If the <paramref name="criteria"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentException">If the <paramref name="criteria"/> is incorrect,
        /// e.g. PageNumber is negative, or PageNumber is positive and PageSize is not positive.</exception>
        /// <exception cref="PersistenceException">
        /// If a DB-based error occurs.
        /// </exception>
        /// <exception cref="ServiceException">
        /// If any other errors occur while performing this operation.
        /// </exception>
        int GetCount(S criteria);

        /// <summary>
        /// Gets the Queryable for entities with included navigation properties.
        /// </summary>
        /// <returns>
        /// The Queryable for entities with included navigation properties.
        /// </returns>
        IQueryable<T> QueryFull();
    }
}
