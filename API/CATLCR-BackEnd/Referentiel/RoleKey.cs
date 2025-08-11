using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Referentiel
{
    public enum RoleKey:int
    {
        Admin = 1,
        Reader = 2,
        NotAllowed = 4
    }
}
