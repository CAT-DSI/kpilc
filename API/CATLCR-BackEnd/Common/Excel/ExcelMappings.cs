using CATLCR_BackEnd.Data;
using CATLCR_BackEnd.Data.Entities;
using System.Collections.Generic;
using System.Linq;

namespace CATLCR_BackEnd.Common.Excel
{
    /// <summary>
    /// Provides mappings for Excel columns.
    /// </summary>
    public static class ExcelMappings
    {
        /// <summary>
        /// Mappings for exporting <see cref="InventoryCentralIT"/> items.
        /// </summary>
        internal static readonly IList<ExcelColumnMap> InventoryCentralITFields = new List<ExcelColumnMap>
        {
            //new ExcelColumnMap(nameof(InventoryCentralIT.VinNumber)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.Supplier)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.PGEO)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.PGEOOrigin)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.PGEODest)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.BegDate)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.DCDCZ)),
            //new ExcelColumnMap("VN/VO/VA", nameof(InventoryCentralIT.VnVova)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.ANO)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.DOO)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.FD)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.Modele)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.Proprietaire)),
            //new ExcelColumnMap("CODE CENTRE", nameof(InventoryCentralIT.CodeCenter)),
            //new ExcelColumnMap("DATE LIVRAISON", nameof(InventoryCentralIT.DateLivraison)),
            //new ExcelColumnMap("CODE CAT DESTINATAIRE", nameof(InventoryCentralIT.CodeCatDestinataire)),
            //new ExcelColumnMap("Raison de desockage", nameof(InventoryCentralIT.RaisonDeDesockage)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.IMMAT)),
            //new ExcelColumnMap("CODE MARQUE", nameof(InventoryCentralIT.CodeMarque)),
            //new ExcelColumnMap("CODE CONSTRUCTEUR", nameof(InventoryCentralIT.CodeConstructeur)),
            //new ExcelColumnMap("VIN d'origine", nameof(InventoryCentralIT.VinOrigine)),
            //new ExcelColumnMap("NUVEH SI CENTRAL", nameof(InventoryCentralIT.NuvehSiCentral)),
            //new ExcelColumnMap(nameof(InventoryCentralIT.Source))
        };

        /// <summary>
        /// Mappings for exporting <see cref="RefRxr"/> items.
        /// </summary>
        internal static readonly IList<ExcelColumnMap> RxrFields = new List<ExcelColumnMap>
        {
            new ExcelColumnMap("Rxr Val Réf Tiers Transco", nameof(RefRxr.ValRefTiersTransco)),
            new ExcelColumnMap("Rxr Lib Cod Table Réf", nameof(RefRxr.LibCodTableRef)),
            new ExcelColumnMap("Rxr Lib Référentiel", nameof(RefRxr.LibReferentiel)),
            new ExcelColumnMap("Rxr Dte Modif Transco", nameof(RefRxr.DteModifTransco)),
            new ExcelColumnMap("Rxr Dte Créat Transco", nameof(RefRxr.DteCreatTransco)),
            new ExcelColumnMap("Rxr Stat Transco", nameof(RefRxr.StatTransco)),
            new ExcelColumnMap("Rxr Val Réf Cat Transco", nameof(RefRxr.ValRefCatTransco)),
            new ExcelColumnMap("Rxr Cod Réf Tiers Transco", nameof(RefRxr.CodRefTiersTransco)),
            new ExcelColumnMap("Rxr Cod Table Transcodée", nameof(RefRxr.CodTableTranscodee))
        };

        /// <summary>
        /// Mappings for exporting <see cref="RefWmi"/> items.
        /// </summary>
        internal static readonly IList<ExcelColumnMap> WmiFields = new List<ExcelColumnMap>
        {
            new ExcelColumnMap("CODE WMI", nameof(RefWmi.CodeWMI)),
            new ExcelColumnMap(nameof(RefWmi.Rapport)),
            new ExcelColumnMap(nameof(RefWmi.Constructeur)),
            new ExcelColumnMap("CODE DONNEUR D'ORDRE", nameof(RefWmi.CodeDonneurOrdre)),
            new ExcelColumnMap("LIBELLE DONNEUR D'ORDRE", nameof(RefWmi.LibelleDonneurOrdre)),
            new ExcelColumnMap("CODE MARQUE", nameof(RefWmi.CodeMarque)),
            new ExcelColumnMap("LIBELLE DE LA MARQUE", nameof(RefWmi.LibelleDeLaMarque)),
            new ExcelColumnMap("CODE MARQUE CLV", nameof(RefWmi.CodeMarqueClv))
        };

        /// <summary>
        /// Provides default column mapping.
        /// </summary>
        /// <typeparam name="TEntity">The type of the entity.</typeparam>
        /// <param name="nameMapper">The name mapper.</param>
        /// <returns>The default column mapping.</returns>
        public static IList<ExcelColumnMap> Default<TEntity>(INameMapper nameMapper)
            where TEntity : class
        {
            var mapping = typeof(TEntity).GetProperties()
                .Select(x => new ExcelColumnMap(nameMapper.GetColumnName<TEntity>(x.Name), x.Name))
                .ToList();
            return mapping;
        }

        /// <summary>
        /// Provides default column mapping.
        /// </summary>
        /// <typeparam name="TEntity">The type of the entity.</typeparam>
        /// <param name="mappings">The mappings.</param>
        /// <param name="nameMapper">The name mapper.</param>
        /// <returns>
        /// The default column mapping.
        /// </returns>
        public static IList<ExcelColumnMap> DefaultColumnNames<TEntity>(IList<ExcelColumnMap> mappings, INameMapper nameMapper)
            where TEntity : class
        {
            var mapping = mappings.Select(x => new ExcelColumnMap(x.ColumnName ?? nameMapper.GetColumnName<TEntity>(x.PropertyName), x.PropertyName))
                .ToList();
            return mapping;
        }
    }
}
