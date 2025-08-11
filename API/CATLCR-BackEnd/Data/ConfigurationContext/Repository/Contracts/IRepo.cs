using CATLCR_BackEnd.Data.ConfigurationContext.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts
{
    public interface IRepo<T>
    {
        IQueryable<T> FindAll();
        IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression, bool eager = false);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);

        void BulkUpdate(IEnumerable<T> entities);
        void BulkCreate(IEnumerable<T> entities);
        void BulkDelete(IEnumerable<T> entities);

    }
}
