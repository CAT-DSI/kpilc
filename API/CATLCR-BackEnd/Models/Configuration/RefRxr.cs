using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CATLCR_BackEnd.Data.Entities
{
    /// <summary>
    /// The RXR entity.
    /// </summary>
    [Table("Ref_Rxr")]
    public class RefRxr : IdentifiableEntity<long>, IParsedEntity
    {
        /// <summary>
        /// Gets or sets the RXR value reference tiers transco.
        /// </summary>
        /// <value>
        /// The RXR value reference tiers transco.
        /// </value>
        [Column("Rxr_Val_Ref_Tiers_Transco")]
        [MaxLength(100)]
        public string ValRefTiersTransco { get; set; }

        /// <summary>
        /// Gets or sets the RXR library cod table reference.
        /// </summary>
        /// <value>
        /// The RXR library cod table reference.
        /// </value>
        [Column("Rxr_Lib_Cod_Table_Ref")]
        [MaxLength(100)]
        public string LibCodTableRef { get; set; }

        /// <summary>
        /// Gets or sets the RXR library referentiel.
        /// </summary>
        /// <value>
        /// The RXR library referentiel.
        /// </value>
        [Column("Rxr_Lib_Referentiel")]
        [MaxLength(100)]
        public string LibReferentiel { get; set; }

        /// <summary>
        /// Gets or sets the RXR DTE modif transco.
        /// </summary>
        /// <value>
        /// The RXR DTE modif transco.
        /// </value>
        [Column("Rxr_Dte_Modif_Transco")]
        public DateTime? DteModifTransco { get; set; }

        /// <summary>
        /// Gets or sets the RXR DTE creat transco.
        /// </summary>
        /// <value>
        /// The RXR DTE creat transco.
        /// </value>
        [Column("Rxr_Dte_Creat_Transco")]
        public DateTime? DteCreatTransco { get; set; }

        /// <summary>
        /// Gets or sets the RXR stat transco.
        /// </summary>
        /// <value>
        /// The RXR stat transco.
        /// </value>
        [Column("Rxr_Stat_Transco")]
        [MaxLength(100)]
        public string StatTransco { get; set; }

        /// <summary>
        /// Gets or sets the RXR value reference cat transco.
        /// </summary>
        /// <value>
        /// The RXR value reference cat transco.
        /// </value>
        [Column("Rxr_Val_Ref_Cat_Transco")]
        [MaxLength(50)]
        public string ValRefCatTransco { get; set; }

        /// <summary>
        /// Gets or sets the RXR cod reference tiers transco.
        /// </summary>
        /// <value>
        /// The RXR cod reference tiers transco.
        /// </value>
        [Column("Rxr_Cod_Ref_Tiers_Transco")]
        public int CodRefTiersTransco { get; set; }

        /// <summary>
        /// Gets or sets the RXR cod table transcodee.
        /// </summary>
        /// <value>
        /// The RXR cod table transcodee.
        /// </value>
        [Column("Rxr_Cod_Table_Transcodee")]
        public int CodTableTranscodee { get; set; }

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
