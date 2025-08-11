using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Models.KPILCModel
{
    public class PlatformModel
    {
        public List<UserPlatformModel> userPlatforms { get; set; }
        public List<UserNorPlatformModel> userNorPlatforms { get; set; }
    }
    public class UserPlatformModel
    {
        public Guid UserId { get; set; }
        public string PlatformCode { get; set; }
        public int PlatformId { get; set; }
    }
    public class UserNorPlatformModel
    {
        public Guid UserId { get; set; }
        public int PlatformId { get; set; }
        public string PlatformCode { get; set; }
    }

    public class PlatformsByUserModel
    {
        public List<string> ListToDelete { get; set; }
        public List<string> ListToAdd { get; set; }
        public Guid UserId { get; set; }
    }

    public class DomainSettings
    {
        public string Name { get; set; }
        public string Path { get; set; }
    }
}
