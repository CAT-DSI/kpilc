using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class WebUsers
    {
        public WebUsers()
        {
            UserTrack = new HashSet<UserTrack>();
            UserTrackTemp = new HashSet<UserTrackTemp>();
        }

        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AccessKey { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public int? RoleId { get; set; }
        public bool? IsActive { get; set; }
        public string Email { get; set; }
        public Guid ServiceId { get; set; }
        public bool Restricted { get; set; }
        public Guid? ProfileId { get; set; }
        public bool? IsDelete { get; set; }
        public string UserType { get; set; }

        public virtual WebProfile Profile { get; set; }
        public virtual WebRoles Role { get; set; }
        public virtual ICollection<UserTrack> UserTrack { get; set; }
        public virtual ICollection<UserTrackTemp> UserTrackTemp { get; set; }
    }
}
