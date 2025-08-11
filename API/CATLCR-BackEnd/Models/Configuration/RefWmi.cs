using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// The WMI entity.
    /// </summary>
    [Table("Ref_WMI")]
    public class RefWmi : IdentifiableEntity<long>, IParsedEntity
    {
        /// <summary>
        /// Gets or sets the code WMI.
        /// </summary>
        /// <value>
        /// The code WMI.
        /// </value>
        [Column("CODE_WMI")]
        [MaxLength(3)]
        public string CodeWMI { get; set; }

        /// <summary>
        /// Gets or sets the rapport.
        /// </summary>
        /// <value>
        /// The rapport.
        /// </value>
        [Column("RAPPORT")]
        [MaxLength(50)]
        public string Rapport { get; set; }

        /// <summary>
        /// Gets or sets the constructeur.
        /// </summary>
        /// <value>
        /// The constructeur.
        /// </value>
        [Column("Constructeur")]
        public string Constructeur { get; set; }

        /// <summary>
        /// Gets or sets the code donneur ordre.
        /// </summary>
        /// <value>
        /// The code donneur ordre.
        /// </value>
        [Column("CODE_DONNEUR_D_ORDRE")]
        [MaxLength(50)]
        public string CodeDonneurOrdre { get; set; }

        /// <summary>
        /// Gets or sets the libelle donneur ordre.
        /// </summary>
        /// <value>
        /// The libelle donneur ordre.
        /// </value>
        [Column("LIBELLE_DONNEUR_D_ORDRE")]
        public string LibelleDonneurOrdre { get; set; }

        /// <summary>
        /// Gets or sets the code marque.
        /// </summary>
        /// <value>
        /// The code marque.
        /// </value>
        [Column("CODE_MARQUE")]
        [MaxLength(10)]
        public string CodeMarque { get; set; }

        /// <summary>
        /// Gets or sets the libelle de la marque.
        /// </summary>
        /// <value>
        /// The libelle de la marque.
        /// </value>
        [Column("LIBELLE_DE_LA_MARQUE")]
        public string LibelleDeLaMarque { get; set; }

        /// <summary>
        /// Gets or sets the code marque CLV.
        /// </summary>
        /// <value>
        /// The code marque CLV.
        /// </value>
        [Column("CODE_MARQUE_CLV")]
        [MaxLength(10)]
        public string CodeMarqueClv { get; set; }

        /// <summary>
        /// Gets the record parse errors.
        /// </summary>
        /// <value>
        /// The record parse errors.
        /// </value>
        [NotMapped]
        [JsonIgnore]
        public IList<string> ParseErrors { get; private set; } = new List<string>();

        /// <summary>
        /// Gets or sets the index of the record.
        /// </summary>
        /// <value>
        /// The index of the record.
        /// </value>
        [NotMapped]
        [JsonIgnore]
        public int RecordIndex { get; set; }
    }
}
