using CATLCR_BackEnd.Referentiel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.KPILCModel
{
   

    public class WebUserEx
    {
        public System.Guid Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string AccessKey { get; set; }      
    }

    public class WebUsersModel : UserModel
    {
        public Guid? UserID { get; set; }
        public List<string> Country { get; set; }
        public List<string> Pf { get; set; }

    }

   

    public partial class UserPlateformModel
    {
        public string Plateform { get; set; }
        public Guid UserId { get; set; }
    }
}
