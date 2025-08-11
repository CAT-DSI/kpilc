using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Referentiel
{
    public class PF_Country_User
    {
        public string Country { get; set; }
        public string CodePlf { get; set; }
        public string Plateform { get; set; }
        public bool isSelected { get; set; }
    }
   
      

    public class PF_Country_User_Model
    {
        public Guid categoryID { get; set; }
        public Guid reportID { get; set; }
        public string country { get; set; }
        public string label { get; set; }
        public int indexStart { get; set; }
        public int number { get; set; }
        public Guid userId { get; set; }
    }
}
