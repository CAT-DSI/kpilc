
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.ConfigurationContext.Repository.Contracts
{
    public abstract class Repo<T> : IRepo<T> where T : class
    {
        protected ConfigurationContext RepositoryContext { get; set; }
       
        public Repo(ConfigurationContext configContext)
        {
            this.RepositoryContext = configContext;
        }
        
        public IQueryable<T> FindAll()
        {
            return this.RepositoryContext.Set<T>().AsNoTracking();
        }
        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression, bool eager = false)
        {
            var query = this.RepositoryContext.Set<T>().Where(expression).AsNoTracking();
            if (eager)
            {
                var navigations = this.RepositoryContext.Model.FindEntityType(typeof(T))
                    .GetConcreteDerivedTypesInclusive()
                    .SelectMany(type => type.GetNavigations())
                    .Distinct();

                foreach (var property in navigations)
                    query = query.Include(property.Name);
            }
            return query;
        }
        public void Create(T entity)
        {
            this.RepositoryContext.Set<T>().Add(entity);
        }
        public void Update(T entity)
        {
            this.RepositoryContext.Entry(entity).State = EntityState.Modified;
            this.RepositoryContext.Set<T>().Update(entity);
        }
        public void Delete(T entity)
        {
            this.RepositoryContext.Set<T>().Remove(entity);
        }

        public void BulkUpdate(IEnumerable<T> entities)
        {

            foreach (var item in entities)
                this.RepositoryContext.Entry(item).State = EntityState.Modified;
            this.RepositoryContext.Set<T>().UpdateRange(entities);
        }
        public void BulkCreate(IEnumerable<T> entities)
        {
            this.RepositoryContext.Set<T>().AddRange(entities);
        }
        public void BulkDelete(IEnumerable<T> entities)
        {
            this.RepositoryContext.Set<T>().RemoveRange(entities);
        }
    }
}
