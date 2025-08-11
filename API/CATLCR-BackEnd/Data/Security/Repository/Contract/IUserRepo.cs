using CATLCR_BackEnd.Data.Security.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.Security.Repository.Contract
{
    public interface IUserRepo
    {
        User UserByLogin(string login);
        User UserByID(Guid userId);
        User UserByMail(string mail);
        void ResetPassword(Guid iD, string token);
        User UserByToken(string token);
    }
}
