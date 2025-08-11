using CATLCR_BackEnd.Data.Security.Entities;
using CATLCR_BackEnd.Data.Security.Repository.Contract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data.Security.Repository.Impl
{
    public class UserRepo : IUserRepo
    {
        private SecurityContext _context;
        public UserRepo(SecurityContext context)
        {
            _context = context;
        }

        public void ResetPassword(Guid ID, string token)
        {
            var _user = _context.Users.FirstOrDefault(s => s.Id.Equals(ID));
            if (_user != null)
            {
                _user.PasswordHash = token;
                _context.SaveChanges();
            }
        }

        public User UserByID(Guid userId)
        {
            var _user = _context.Users.FirstOrDefault(s => s.Id.Equals(userId));
            _context.Entry(_user).Collection(b => b.Roles)
                .Query().Include(s => s.Role).Load();

            return _user;
        }

        public User UserByLogin(string login)
        {
            var _user = _context.Users.FirstOrDefault(s => s.AccessKey.Equals(login));
            if(_user != null)
            _context.Entry(_user).Collection(b => b.Roles).Load();

            return _user;
        }

        public User UserByMail(string mail)
        {
            var _user = _context.Users.FirstOrDefault(s => s.Email.Equals(mail));
            return _user;
        }

        public User UserByToken(string token)
        {
            var _user = _context.Users.FirstOrDefault(s => s.PasswordHash.Equals(token));
            return _user;
        }
    }
}
