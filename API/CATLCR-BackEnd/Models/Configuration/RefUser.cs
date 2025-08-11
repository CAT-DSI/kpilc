using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// The user entity.
    /// </summary>
    [Table("Ref_User")]
    public class RefUser : BaseEntity<long>, IStatusEntity
    {
        /// <summary>
        /// Gets or sets the entity status Id.
        /// </summary>
        /// <value>
        /// The entity status Id.
        /// </value>
        [ForeignKey("StatusNav")]
        public int Status { get; set; }

        /// <summary>
        /// Gets or sets the record status.
        /// </summary>
        /// <value>
        /// The record status.
        ///// </value>
        //[JsonIgnore]
        //public CCRecordStatus StatusNav { get; set; }

        /// <summary>
        /// Gets or sets the login.
        /// </summary>
        /// <value>
        /// The login.
        /// </value>
        [Required]
        [MaxLength(50)]
        public string Login { get; set; }

        /// <summary>
        /// Gets or sets the first name.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        [Required]
        [MaxLength(250)]
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the last name.
        /// </summary>
        /// <value>
        /// The last name.
        /// </value>
        [Required]
        [MaxLength(250)]
        public string LastName { get; set; }

        /// <summary>
        /// Gets or sets the email.
        /// </summary>
        /// <value>
        /// The email.
        /// </value>
        [Required]
        [MaxLength(100)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the fix phone.
        /// </summary>
        /// <value>
        /// The fix phone.
        /// </value>
        [MaxLength(50)]
        public string FixPhone { get; set; }

        /// <summary>
        /// Gets or sets the cell phone.
        /// </summary>
        /// <value>
        /// The cell phone.
        /// </value>
        [MaxLength(250)]
        public string CellPhone { get; set; }

        /// <summary>
        /// Gets or sets the password hash.
        /// </summary>
        /// <value>
        /// The password hash.
        /// </value>
        [JsonIgnore]
        [Column("Password")]
        public string PasswordHash { get; set; }

        /// <summary>
        /// Gets or sets the role identifier.
        /// </summary>
        /// <value>
        /// The role identifier.
        /// </value>
        [ForeignKey("Role")]
        public int RoleId { get; set; }

        /// <summary>
        /// Gets or sets the role.
        /// </summary>
        /// <value>
        /// The role.
        ///// </value>
        //[JsonIgnore]
        //public CCUserRole Role { get; set; }

        /// <summary>
        /// Gets or sets the PGEO.
        /// </summary>
        /// <value>
        /// The PGEO.
        /// </value>
        [ForeignKey("Center")]
        public string PGEO { get; set; }

        /// <summary>
        /// Gets or sets the center.
        /// </summary>
        /// <value>
        /// The center.
        /// </value>
        //[JsonIgnore]
        //public RefCenter Center { get; set; }

        /// <summary>
        /// Gets the name of the center.
        /// </summary>
        /// <value>
        /// The name of the center.
        ///// </value>
        //public string CenterName { get => Center?.Name; }

        /// <summary>
        /// Gets the name of the country.
        /// </summary>
        /// <value>
        /// The name of the country.
        /// </value>
        //public string CountryName { get => Center?.Country?.Name; }

        /// <summary>
        /// Gets or sets the Geo Pole identifier.
        /// </summary>
        /// <value>
        /// The Geo Pole identifier.
        /// </value>
        [ForeignKey("GeoPole")]
        public long? GeoPoleId { get; set; }

        /// <summary>
        /// Gets or sets the Geo Pole.
        /// </summary>
        /// <value>
        /// The Geo Pole.
        /// </value>
        //[JsonIgnore]
        //public RefGeoPole GeoPole { get; set; }

        /// <summary>
        /// Gets the name of the Geo Pole.
        /// </summary>
        /// <value>
        /// The name of the Geo Pole.
        /// </value>
        //public string GeoPoleName { get => GeoPole?.Name; }

        /// <summary>
        /// Gets or sets the reset password code.
        /// </summary>
        /// <value>
        /// The reset password code.
        /// </value>
        [JsonIgnore]
        [MaxLength(36)]
        public string ResetPasswordCode { get; set; }
    }
}
