using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CATLCR_BackEnd.Model
{
    public partial class CATLCRContext : DbContext
    {
        public CATLCRContext()
        {
        }

        public CATLCRContext(DbContextOptions<CATLCRContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BiLogError> BiLogError { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<DafLabels> DafLabels { get; set; }
        public virtual DbSet<EmailEtds> EmailEtds { get; set; }
        public virtual DbSet<EmailGroupeAnomalies> EmailGroupeAnomalies { get; set; }
        public virtual DbSet<EmailReportCountry> EmailReportCountry { get; set; }
        public virtual DbSet<EmailReportCountryBrandProducts> EmailReportCountryBrandProducts { get; set; }
        public virtual DbSet<EmailReportCountryPf> EmailReportCountryPf { get; set; }
        public virtual DbSet<EmailReportEmails> EmailReportEmails { get; set; }
        public virtual DbSet<EmailReportEmails2511> EmailReportEmails2511 { get; set; }
        public virtual DbSet<EmailReports> EmailReports { get; set; }
        public virtual DbSet<EmailWebEmailFrequencies> EmailWebEmailFrequencies { get; set; }
        public virtual DbSet<EmailWebFrequencies> EmailWebFrequencies { get; set; }
        public virtual DbSet<Emailings> Emailings { get; set; }
        public virtual DbSet<EsCostsDayLineAuto> EsCostsDayLineAuto { get; set; }
        public virtual DbSet<EsOperationsCost> EsOperationsCost { get; set; }
        public virtual DbSet<FamiliesManagementAnomaly> FamiliesManagementAnomaly { get; set; }
        public virtual DbSet<Labels> Labels { get; set; }
        public virtual DbSet<ProdLabels> ProdLabels { get; set; }
        public virtual DbSet<RefChargedTpaId> RefChargedTpaId { get; set; }
        public virtual DbSet<RefChargingTpaId> RefChargingTpaId { get; set; }
        public virtual DbSet<RefCountry> RefCountry { get; set; }
        public virtual DbSet<RefCreators> RefCreators { get; set; }
        public virtual DbSet<RefDealers> RefDealers { get; set; }
        public virtual DbSet<RefIdClients> RefIdClients { get; set; }
        public virtual DbSet<RefLineId> RefLineId { get; set; }
        public virtual DbSet<RefMarques> RefMarques { get; set; }
        public virtual DbSet<RefMonths> RefMonths { get; set; }
        public virtual DbSet<RefMrNumbers> RefMrNumbers { get; set; }
        public virtual DbSet<RefOrgUnits> RefOrgUnits { get; set; }
        public virtual DbSet<RefPlateformes> RefPlateformes { get; set; }
        public virtual DbSet<RefPlateformes22Mar2022> RefPlateformes22Mar2022 { get; set; }
        public virtual DbSet<RefPlateformesBkp20240813> RefPlateformesBkp20240813 { get; set; }
        public virtual DbSet<RefProdutcsLinhaulMilkrun> RefProdutcsLinhaulMilkrun { get; set; }
        public virtual DbSet<RefRatingStatus> RefRatingStatus { get; set; }
        public virtual DbSet<RefRegimes> RefRegimes { get; set; }
        public virtual DbSet<RefShipments> RefShipments { get; set; }
        public virtual DbSet<RefSupplier> RefSupplier { get; set; }
        public virtual DbSet<RefSuppliers> RefSuppliers { get; set; }
        public virtual DbSet<RefTranscoFpWex> RefTranscoFpWex { get; set; }
        public virtual DbSet<RefTranscoFpWexBak160322bak> RefTranscoFpWexBak160322bak { get; set; }
        public virtual DbSet<RefTypeLineMilk> RefTypeLineMilk { get; set; }
        public virtual DbSet<RefTypes> RefTypes { get; set; }
        public virtual DbSet<RefUserMarques> RefUserMarques { get; set; }
        public virtual DbSet<RefUserRegimes> RefUserRegimes { get; set; }
        public virtual DbSet<RefWbNos> RefWbNos { get; set; }
        public virtual DbSet<RefWeeks> RefWeeks { get; set; }
        public virtual DbSet<RefWorkUnits> RefWorkUnits { get; set; }
        public virtual DbSet<ReportAdValoremStatus> ReportAdValoremStatus { get; set; }
        public virtual DbSet<ReportDays> ReportDays { get; set; }
        public virtual DbSet<ReportFinanceLabels> ReportFinanceLabels { get; set; }
        public virtual DbSet<ReportFinancial> ReportFinancial { get; set; }
        public virtual DbSet<ReportFinancialWithoutParam> ReportFinancialWithoutParam { get; set; }
        public virtual DbSet<ReportFinancialWithoutParamTemp> ReportFinancialWithoutParamTemp { get; set; }
        public virtual DbSet<ReportFinancialWithoutParamTemp1> ReportFinancialWithoutParamTemp1 { get; set; }
        public virtual DbSet<ReportHuTypes> ReportHuTypes { get; set; }
        public virtual DbSet<ReportInOrderActivities> ReportInOrderActivities { get; set; }
        public virtual DbSet<ReportMajorCustomerForVolume> ReportMajorCustomerForVolume { get; set; }
        public virtual DbSet<ReportOpenDays> ReportOpenDays { get; set; }
        public virtual DbSet<ReportOrders> ReportOrders { get; set; }
        public virtual DbSet<ReportOutOrderActivities> ReportOutOrderActivities { get; set; }
        public virtual DbSet<ReportPlateformCoordination> ReportPlateformCoordination { get; set; }
        public virtual DbSet<ReportSpainTrips> ReportSpainTrips { get; set; }
        public virtual DbSet<ReportSuiviPdadetail> ReportSuiviPdadetail { get; set; }
        public virtual DbSet<ReportSuiviPdaspot> ReportSuiviPdaspot { get; set; }
        public virtual DbSet<ReportTaxationFiltre> ReportTaxationFiltre { get; set; }
        public virtual DbSet<ReportUserCountries> ReportUserCountries { get; set; }
        public virtual DbSet<ReportUserMonths> ReportUserMonths { get; set; }
        public virtual DbSet<ReportUserMrNumbers> ReportUserMrNumbers { get; set; }
        public virtual DbSet<ReportUserOrgUnits> ReportUserOrgUnits { get; set; }
        public virtual DbSet<ReportUserParams> ReportUserParams { get; set; }
        public virtual DbSet<ReportUserProducts> ReportUserProducts { get; set; }
        public virtual DbSet<ReportUserStatus> ReportUserStatus { get; set; }
        public virtual DbSet<ReportUserSuppliers> ReportUserSuppliers { get; set; }
        public virtual DbSet<ReportUserWeeks> ReportUserWeeks { get; set; }
        public virtual DbSet<ReportUserproducts1601> ReportUserproducts1601 { get; set; }
        public virtual DbSet<ReportWebCategoriesPfs> ReportWebCategoriesPfs { get; set; }
        public virtual DbSet<ReportWebCategoriesPfsBkp20240813> ReportWebCategoriesPfsBkp20240813 { get; set; }
        public virtual DbSet<ReportwebCategoriespfs20220325> ReportwebCategoriespfs20220325 { get; set; }
        public virtual DbSet<StsFrReturnCustomer> StsFrReturnCustomer { get; set; }
        public virtual DbSet<TblViaVsRating> TblViaVsRating { get; set; }
        public virtual DbSet<TblViaVsRatingAgg> TblViaVsRatingAgg { get; set; }
        public virtual DbSet<TkiFtl> TkiFtl { get; set; }
        public virtual DbSet<Tkpi10ExploitReturnCustomer> Tkpi10ExploitReturnCustomer { get; set; }
        public virtual DbSet<Tkpi11ExploitReturnTracing> Tkpi11ExploitReturnTracing { get; set; }
        public virtual DbSet<Tkpi12ExploitDeconsigneRenault> Tkpi12ExploitDeconsigneRenault { get; set; }
        public virtual DbSet<Tkpi12ExploitDeconsigneRenaultUp> Tkpi12ExploitDeconsigneRenaultUp { get; set; }
        public virtual DbSet<Tkpi13ExploitationLhl> Tkpi13ExploitationLhl { get; set; }
        public virtual DbSet<Tkpi13ExploitationLhlNbr> Tkpi13ExploitationLhlNbr { get; set; }
        public virtual DbSet<Tkpi13Lhl> Tkpi13Lhl { get; set; }
        public virtual DbSet<Tkpi13Pcs> Tkpi13Pcs { get; set; }
        public virtual DbSet<Tkpi14DafAdvalorem> Tkpi14DafAdvalorem { get; set; }
        public virtual DbSet<Tkpi15DafClaimsDoc> Tkpi15DafClaimsDoc { get; set; }
        public virtual DbSet<Tkpi16ExploitationMkrFolowUpDay> Tkpi16ExploitationMkrFolowUpDay { get; set; }
        public virtual DbSet<Tkpi17Invoicingtcpe> Tkpi17Invoicingtcpe { get; set; }
        public virtual DbSet<Tkpi1PlfVolMonth> Tkpi1PlfVolMonth { get; set; }
        public virtual DbSet<Tkpi1PlfVolMonthOpendays> Tkpi1PlfVolMonthOpendays { get; set; }
        public virtual DbSet<Tkpi20FrCertifJourDateToutClient> Tkpi20FrCertifJourDateToutClient { get; set; }
        public virtual DbSet<Tkpi20FrControlePerfPf> Tkpi20FrControlePerfPf { get; set; }
        public virtual DbSet<Tkpi20FrPerfToyotaManuelV2> Tkpi20FrPerfToyotaManuelV2 { get; set; }
        public virtual DbSet<Tkpi20FrPfRecepissesGloba> Tkpi20FrPfRecepissesGloba { get; set; }
        public virtual DbSet<Tkpi20FrTourneeForcage> Tkpi20FrTourneeForcage { get; set; }
        public virtual DbSet<Tkpi2DailyPerfDelayDet> Tkpi2DailyPerfDelayDet { get; set; }
        public virtual DbSet<Tkpi2DailyPerfDelayDetForced> Tkpi2DailyPerfDelayDetForced { get; set; }
        public virtual DbSet<Tkpi2DailyPerfDelaySum> Tkpi2DailyPerfDelaySum { get; set; }
        public virtual DbSet<Tkpi2DailyPerfDelaySum2> Tkpi2DailyPerfDelaySum2 { get; set; }
        public virtual DbSet<Tkpi2DailyPerfDelaySumMaxDeliveryDate> Tkpi2DailyPerfDelaySumMaxDeliveryDate { get; set; }
        public virtual DbSet<Tkpi2DailyPerfDelaySumMaxDeliveryDate2> Tkpi2DailyPerfDelaySumMaxDeliveryDate2 { get; set; }
        public virtual DbSet<Tkpi2DelayForcedMrSum> Tkpi2DelayForcedMrSum { get; set; }
        public virtual DbSet<Tkpi2DelayForcedMrSumForced> Tkpi2DelayForcedMrSumForced { get; set; }
        public virtual DbSet<Tkpi2DelayForcedPfSum> Tkpi2DelayForcedPfSum { get; set; }
        public virtual DbSet<Tkpi2MonthlyDelayForcedAndScansPfSum> Tkpi2MonthlyDelayForcedAndScansPfSum { get; set; }
        public virtual DbSet<Tkpi2MonthlyDelayForcedPfSum> Tkpi2MonthlyDelayForcedPfSum { get; set; }
        public virtual DbSet<Tkpi2MonthlyPerfDelaySum> Tkpi2MonthlyPerfDelaySum { get; set; }
        public virtual DbSet<Tkpi3DailyDamageDet> Tkpi3DailyDamageDet { get; set; }
        public virtual DbSet<Tkpi3DailyDamageSum> Tkpi3DailyDamageSum { get; set; }
        public virtual DbSet<Tkpi4CountryDailyMrCostPerformance> Tkpi4CountryDailyMrCostPerformance { get; set; }
        public virtual DbSet<Tkpi4DailyMrCostDet> Tkpi4DailyMrCostDet { get; set; }
        public virtual DbSet<Tkpi4DailyMrCostSum> Tkpi4DailyMrCostSum { get; set; }
        public virtual DbSet<Tkpi5FinanceForwardingDet> Tkpi5FinanceForwardingDet { get; set; }
        public virtual DbSet<Tkpi5FinanceForwardingSum> Tkpi5FinanceForwardingSum { get; set; }
        public virtual DbSet<Tkpi6FinanceSalesClosing> Tkpi6FinanceSalesClosing { get; set; }
        public virtual DbSet<Tkpi6FinanceSalesClosingSum> Tkpi6FinanceSalesClosingSum { get; set; }
        public virtual DbSet<Tkpi7FinanceTripTaxation> Tkpi7FinanceTripTaxation { get; set; }
        public virtual DbSet<Tkpi8DafDoublons> Tkpi8DafDoublons { get; set; }
        public virtual DbSet<Tkpi8DafTaxations> Tkpi8DafTaxations { get; set; }
        public virtual DbSet<Tkpi9DafIndex> Tkpi9DafIndex { get; set; }
        public virtual DbSet<Tkpi9DafIndexPeriod> Tkpi9DafIndexPeriod { get; set; }
        public virtual DbSet<TkpiDelayPerfFtl> TkpiDelayPerfFtl { get; set; }
        public virtual DbSet<TkpiDelayPerfFtlSum> TkpiDelayPerfFtlSum { get; set; }
        public virtual DbSet<TkpiDelayPerfFtlTest> TkpiDelayPerfFtlTest { get; set; }
        public virtual DbSet<TkpiFlotaCapCostDetail> TkpiFlotaCapCostDetail { get; set; }
        public virtual DbSet<TkpiFlotaCapOpsDetail> TkpiFlotaCapOpsDetail { get; set; }
        public virtual DbSet<TkpiFlotaCapSum> TkpiFlotaCapSum { get; set; }
        public virtual DbSet<TkpiFlotaCapSumTrip> TkpiFlotaCapSumTrip { get; set; }
        public virtual DbSet<TkpiFlotaCapVarios> TkpiFlotaCapVarios { get; set; }
        public virtual DbSet<TkpiVentasCustomer> TkpiVentasCustomer { get; set; }
        public virtual DbSet<TkpiVentasDetNoRating> TkpiVentasDetNoRating { get; set; }
        public virtual DbSet<TkpiVentasDetRating> TkpiVentasDetRating { get; set; }
        public virtual DbSet<TkpiVentasSumDay> TkpiVentasSumDay { get; set; }
        public virtual DbSet<TmpAccessKey> TmpAccessKey { get; set; }
        public virtual DbSet<TmpCursor1> TmpCursor1 { get; set; }
        public virtual DbSet<TmpCursor2> TmpCursor2 { get; set; }
        public virtual DbSet<TmpTmpDateFromInjection> TmpTmpDateFromInjection { get; set; }
        public virtual DbSet<TmpVsTrace> TmpVsTrace { get; set; }
        public virtual DbSet<UserTrack> UserTrack { get; set; }
        public virtual DbSet<UserTrackTemp> UserTrackTemp { get; set; }
        public virtual DbSet<ViaCustomers> ViaCustomers { get; set; }
        public virtual DbSet<ViaTkpi1PlfVolMonth> ViaTkpi1PlfVolMonth { get; set; }
        public virtual DbSet<ViaTkpi2DailyPerfDelay> ViaTkpi2DailyPerfDelay { get; set; }
        public virtual DbSet<ViaTkpi2DailyPerfDelayForced> ViaTkpi2DailyPerfDelayForced { get; set; }
        public virtual DbSet<ViaTkpi2OpsMoto> ViaTkpi2OpsMoto { get; set; }
        public virtual DbSet<ViaTkpi3DailyDamage> ViaTkpi3DailyDamage { get; set; }
        public virtual DbSet<ViaTkpiDelayPerfFtl> ViaTkpiDelayPerfFtl { get; set; }
        public virtual DbSet<ViaTripLines> ViaTripLines { get; set; }
        public virtual DbSet<WebAdValoremMarques> WebAdValoremMarques { get; set; }
        public virtual DbSet<WebCategories> WebCategories { get; set; }
        public virtual DbSet<WebChargingTpabyCompany> WebChargingTpabyCompany { get; set; }
        public virtual DbSet<WebChargingTpabyCompany16122022> WebChargingTpabyCompany16122022 { get; set; }
        public virtual DbSet<WebChargingTpabyCompany20220216> WebChargingTpabyCompany20220216 { get; set; }
        public virtual DbSet<WebChargingTpabyCompanyBackup> WebChargingTpabyCompanyBackup { get; set; }
        public virtual DbSet<WebChargingTpabyCompanyBad> WebChargingTpabyCompanyBad { get; set; }
        public virtual DbSet<WebCompanies> WebCompanies { get; set; }
        public virtual DbSet<WebCountries> WebCountries { get; set; }
        public virtual DbSet<WebKpiSettings> WebKpiSettings { get; set; }
        public virtual DbSet<WebMajorCustomers> WebMajorCustomers { get; set; }
        public virtual DbSet<WebOpenDaysDet> WebOpenDaysDet { get; set; }
        public virtual DbSet<WebPages> WebPages { get; set; }
        public virtual DbSet<WebPagesRoles> WebPagesRoles { get; set; }
        public virtual DbSet<WebProduct> WebProduct { get; set; }
        public virtual DbSet<WebProductRange> WebProductRange { get; set; }
        public virtual DbSet<WebProductRegimes> WebProductRegimes { get; set; }
        public virtual DbSet<WebProfile> WebProfile { get; set; }
        public virtual DbSet<WebProfileReport> WebProfileReport { get; set; }
        public virtual DbSet<WebReportDealerCode> WebReportDealerCode { get; set; }
        public virtual DbSet<WebReportDealerShipmentsP20220425> WebReportDealerShipmentsP20220425 { get; set; }
        public virtual DbSet<WebReportDealerShipmentsParams> WebReportDealerShipmentsParams { get; set; }
        public virtual DbSet<WebReportUserPlateforms> WebReportUserPlateforms { get; set; }
        public virtual DbSet<WebReports> WebReports { get; set; }
        public virtual DbSet<WebReportsParams> WebReportsParams { get; set; }
        public virtual DbSet<WebReportsParams20220325> WebReportsParams20220325 { get; set; }
        public virtual DbSet<WebReportsProductsParamsxx> WebReportsProductsParamsxx { get; set; }
        public virtual DbSet<WebReportsproductsparams> WebReportsproductsparams { get; set; }
        public virtual DbSet<WebRoles> WebRoles { get; set; }
        public virtual DbSet<WebServicePages> WebServicePages { get; set; }
        public virtual DbSet<WebServiceReport> WebServiceReport { get; set; }
        public virtual DbSet<WebServiceRoleUser> WebServiceRoleUser { get; set; }
        public virtual DbSet<WebServices> WebServices { get; set; }
        public virtual DbSet<WebUserCountry> WebUserCountry { get; set; }
        public virtual DbSet<WebUserPlateform> WebUserPlateform { get; set; }
        public virtual DbSet<WebUserPlateformBkp20240813> WebUserPlateformBkp20240813 { get; set; }
        public virtual DbSet<WebUserReports> WebUserReports { get; set; }
        public virtual DbSet<WebUsers> WebUsers { get; set; }
        public virtual DbSet<WebVersions> WebVersions { get; set; }
        public virtual DbSet<WebYears> WebYears { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=freqxwsqlr7.cat.groupecat.com;Initial Catalog=CATLCR;persist security info=True; user id=catlcr;password=c@tlcr;MultipleActiveResultSets=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BiLogError>(entity =>
            {
                entity.ToTable("BI_LogError");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CountryName).HasMaxLength(100);

                entity.Property(e => e.FirstName).HasMaxLength(100);

                entity.Property(e => e.LastName).HasMaxLength(100);
            });

            modelBuilder.Entity<Customers>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DafLabels>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("DAF_LABELS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.IsoCodeLanguage)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LabelSelect)
                    .IsRequired()
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Value)
                    .IsRequired()
                    .IsUnicode(false);
            });

            modelBuilder.Entity<EmailEtds>(entity =>
            {
                entity.ToTable("EmailETDs");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<EmailGroupeAnomalies>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EmailGroupe_Anomalies");

                entity.Property(e => e.Email).HasColumnName("EMAIL");
            });

            modelBuilder.Entity<EmailReportCountry>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EmailReport_Country");

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<EmailReportCountryBrandProducts>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EmailReport_CountryBrandProducts");

                entity.Property(e => e.Brand)
                    .IsRequired()
                    .HasColumnName("BRAND")
                    .HasMaxLength(100);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Product)
                    .IsRequired()
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<EmailReportCountryPf>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EmailReport_CountryPF");

                entity.Property(e => e.Codeplf)
                    .IsRequired()
                    .HasColumnName("CODEPLF")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<EmailReportEmails>(entity =>
            {
                entity.ToTable("EmailReport_Emails");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.CodePlf).HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.Emails).HasColumnName("EMAILS");

                entity.Property(e => e.Frequencies).HasColumnName("FREQUENCIES");

                entity.Property(e => e.Groups).HasMaxLength(200);

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.Sysdate).HasColumnName("SYSDATE");

                entity.Property(e => e.Sysdate1).HasColumnName("SYSDATE1");

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.Updatedby).HasMaxLength(200);
            });

            modelBuilder.Entity<EmailReportEmails2511>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EmailReport_Emails_2511");

                entity.Property(e => e.CodePlf).HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.Emails).HasColumnName("EMAILS");

                entity.Property(e => e.Frequencies).HasColumnName("FREQUENCIES");

                entity.Property(e => e.Groups).HasMaxLength(200);

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.Sysdate).HasColumnName("SYSDATE");

                entity.Property(e => e.Sysdate1).HasColumnName("SYSDATE1");
            });

            modelBuilder.Entity<EmailReports>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EMAIL_REPORTS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");
            });

            modelBuilder.Entity<EmailWebEmailFrequencies>(entity =>
            {
                entity.HasKey(e => new { e.EmailWebId, e.FrequencyId });

                entity.ToTable("EmailWeb_EmailFrequencies");
            });

            modelBuilder.Entity<EmailWebFrequencies>(entity =>
            {
                entity.ToTable("EmailWeb_Frequencies");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.FrequencyKey)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FrequencyLabel)
                    .IsRequired()
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<Emailings>(entity =>
            {
                entity.ToTable("EMAILINGS");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.CodePlf).HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.EachDay).HasColumnName("EACH_DAY");

                entity.Property(e => e.EachMonth).HasColumnName("EACH_MONTH");

                entity.Property(e => e.Emails)
                    .IsRequired()
                    .HasColumnName("EMAILS")
                    .HasMaxLength(3000);

                entity.Property(e => e.RecurrentDays)
                    .HasColumnName("RECURRENT_DAYS")
                    .HasMaxLength(250);

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.SelectedDays)
                    .HasColumnName("SELECTED_DAYS")
                    .HasMaxLength(250);

                entity.Property(e => e.SelectedMonths)
                    .HasColumnName("SELECTED_MONTHS")
                    .HasMaxLength(250);

                entity.Property(e => e.SysN).HasColumnName("SYS_N");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");
            });

            modelBuilder.Entity<EsCostsDayLineAuto>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ES_COSTS_DAY_LINE_AUTO");

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("CHARGEABLE_WEIGHT")
                    .HasColumnType("decimal(11, 3)");

                entity.Property(e => e.Company)
                    .HasColumnName("COMPANY")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Concatenate)
                    .IsRequired()
                    .HasColumnName("concatenate")
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasComputedColumnSql("(concat([REF_ID],[SER_ID]))");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(5);

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("FUEL_SURCHARGE")
                    .HasColumnType("decimal(15, 2)");

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("GROSS_WEIGHT")
                    .HasColumnType("decimal(11, 3)");

                entity.Property(e => e.HuQuantity)
                    .HasColumnName("HU_QUANTITY")
                    .HasColumnType("decimal(10, 0)");

                entity.Property(e => e.Kms)
                    .HasColumnName("KMS")
                    .HasColumnType("decimal(10, 0)");

                entity.Property(e => e.LineId)
                    .HasColumnName("LINE_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Month)
                    .IsRequired()
                    .HasColumnName("MONTH")
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasComputedColumnSql("(concat(datepart(month,[Ref_date]),'/',datepart(year,[Ref_date])))");

                entity.Property(e => e.NbrOfDeliveryAddress)
                    .HasColumnName("NBR_OF_DELIVERY_ADDRESS")
                    .HasColumnType("decimal(6, 0)");

                entity.Property(e => e.NbrOfPickupAddress)
                    .HasColumnName("NBR_OF_PICKUP_ADDRESS")
                    .HasColumnType("decimal(6, 0)");

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.QuantityRated)
                    .HasColumnName("QUANTITY_RATED")
                    .HasColumnType("decimal(18, 3)");

                entity.Property(e => e.RefDate)
                    .HasColumnName("Ref_date")
                    .HasColumnType("date");

                entity.Property(e => e.RefId)
                    .HasColumnName("REF_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Scope)
                    .HasColumnName("SCOPE")
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasComputedColumnSql("(CONVERT([varchar](50),case when [SER_ID]='TMFX' then 'Fijo' when [SER_ID]='TMTP' then 'Entreg. DOM' when [SER_ID]='TMTP2' then 'Recog. DOM' when [SER_ID]='TMGW' then 'KG Entreg.' when [SER_ID]='TMCO' then 'KG Entreg.' when [SER_ID]='TMCO2' then 'KG Recog.' when [SER_ID]='TMGW2' then 'KG Recog.' else 'VARIOS' end))");

                entity.Property(e => e.SerId)
                    .HasColumnName("SER_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Supplier)
                    .HasColumnName("SUPPLIER")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TarifDefinitif)
                    .HasColumnName("TARIF_DEFINITIF")
                    .HasColumnType("decimal(16, 2)")
                    .HasComputedColumnSql("(isnull([TARIFF_AMOUNT],(0))+isnull([FUEL_SURCHARGE],(0)))");

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("TARIFF_AMOUNT")
                    .HasColumnType("decimal(15, 2)");

                entity.Property(e => e.Tot)
                    .HasColumnName("TOT")
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasComputedColumnSql("(CONVERT([varchar](50),case when [SER_ID]='TMFX' then 'Fijo' when [SER_ID]='TMTP' then 'Entreg.' when [SER_ID]='TMGW' then 'Entreg.' when [SER_ID]='TMCO' then 'Entreg.' when [SER_ID]='TMTP2' then 'Recog.' when [SER_ID]='TMGW2' then 'Recog.' when [SER_ID]='TMCO2' then 'Entreg.' else 'VARIOS' end))");

                entity.Property(e => e.TrfRangeBasis)
                    .HasColumnName("TRF_RANGE_BASIS")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TripNo)
                    .HasColumnName("TRIP_NO")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("UNIT_PRICE")
                    .HasColumnType("decimal(12, 2)");

                entity.Property(e => e.Volume)
                    .HasColumnName("VOLUME")
                    .HasColumnType("decimal(12, 6)");
            });

            modelBuilder.Entity<EsOperationsCost>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ES_OPERATIONS_COST");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("CHARGEABLE_WEIGHT")
                    .HasColumnType("decimal(11, 3)");

                entity.Property(e => e.Concatenate)
                    .IsRequired()
                    .HasColumnName("concatenate")
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasComputedColumnSql("(concat([ORDER_ID],[SERVICE]))");

                entity.Property(e => e.ConsigneeAddress)
                    .HasColumnName("CONSIGNEE_ADDRESS")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.ConsigneeId)
                    .HasColumnName("CONSIGNEE_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ConsigneeName)
                    .HasColumnName("CONSIGNEE_NAME")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ConsigneeZip)
                    .HasColumnName("CONSIGNEE_ZIP")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(5);

                entity.Property(e => e.CustomerRef)
                    .HasColumnName("CUSTOMER_REF")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("FUEL_SURCHARGE")
                    .HasColumnType("decimal(15, 2)");

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("GROSS_WEIGHT")
                    .HasColumnType("decimal(11, 3)");

                entity.Property(e => e.Milkrun)
                    .HasColumnName("MILKRUN")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.OrderId)
                    .HasColumnName("ORDER_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Parcels)
                    .HasColumnName("PARCELS")
                    .HasColumnType("decimal(12, 0)");

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.QttyRated)
                    .HasColumnName("QTTY_RATED")
                    .HasColumnType("decimal(18, 3)");

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.RefNumber)
                    .HasColumnName("REF_NUMBER")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SenderAddress)
                    .HasColumnName("SENDER_ADDRESS")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.SenderId)
                    .HasColumnName("SENDER_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SenderName)
                    .HasColumnName("SENDER_NAME")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SenderZip)
                    .HasColumnName("SENDER_ZIP")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Supplier)
                    .HasColumnName("SUPPLIER")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("TARIFF_AMOUNT")
                    .HasColumnType("decimal(15, 3)");

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("TOTAL_AMOUNT")
                    .HasColumnType("decimal(15, 2)");

                entity.Property(e => e.Trip)
                    .HasColumnName("TRIP")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Volume)
                    .HasColumnName("VOLUME")
                    .HasColumnType("decimal(12, 6)");
            });

            modelBuilder.Entity<FamiliesManagementAnomaly>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("FamiliesManagementAnomaly$");

                entity.Property(e => e.Action)
                    .HasColumnName("ACTION")
                    .HasMaxLength(255);

                entity.Property(e => e.Cle)
                    .HasColumnName("cle")
                    .HasMaxLength(255);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(255);

                entity.Property(e => e.CountryCode).HasMaxLength(50);

                entity.Property(e => e.F13).HasMaxLength(255);

                entity.Property(e => e.F15).HasMaxLength(255);

                entity.Property(e => e.Family)
                    .HasColumnName("FAMILY")
                    .HasMaxLength(255);

                entity.Property(e => e.FamilyACorriger)
                    .HasColumnName("FAMILY A CORRIGER")
                    .HasMaxLength(255);

                entity.Property(e => e.FamilyPk)
                    .HasColumnName("family pk")
                    .HasMaxLength(255);

                entity.Property(e => e.Label)
                    .HasColumnName("label")
                    .HasMaxLength(255);

                entity.Property(e => e.SprFk)
                    .HasColumnName("spr fk")
                    .HasMaxLength(255);

                entity.Property(e => e.SprFk1)
                    .HasColumnName("spr fk1")
                    .HasMaxLength(255);

                entity.Property(e => e.SprId)
                    .HasColumnName("spr id")
                    .HasMaxLength(255);

                entity.Property(e => e.SprId1)
                    .HasColumnName("spr_id")
                    .HasMaxLength(255);

                entity.Property(e => e.XaccountACorriger)
                    .HasColumnName("xaccount a corriger")
                    .HasMaxLength(255);

                entity.Property(e => e.XaccountFk)
                    .HasColumnName("xaccount fk")
                    .HasMaxLength(255);

                entity.Property(e => e.XaccountFk1)
                    .HasColumnName("xaccount fk1")
                    .HasMaxLength(255);

                entity.Property(e => e.XaccountFk2)
                    .HasColumnName("xaccount_fk")
                    .HasMaxLength(255);

                entity.Property(e => e.XaccountId)
                    .HasColumnName("xaccount id")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Labels>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.IsoCodeLanguage)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LabelSelect)
                    .IsRequired()
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Value)
                    .IsRequired()
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ProdLabels>(entity =>
            {
                entity.ToTable("PROD_LABELS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.IsoCodeLanguage).HasMaxLength(50);

                entity.Property(e => e.LabelSelect).HasMaxLength(255);

                entity.Property(e => e.Value).HasMaxLength(255);
            });

            modelBuilder.Entity<RefChargedTpaId>(entity =>
            {
                entity.ToTable("REF_CHARGED_TPA_ID");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("CODE")
                    .HasMaxLength(100);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);
            });

            modelBuilder.Entity<RefChargingTpaId>(entity =>
            {
                entity.ToTable("REF_CHARGING_TPA_ID");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("CODE")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(5);
            });

            modelBuilder.Entity<RefCountry>(entity =>
            {
                entity.HasKey(e => e.Pk);

                entity.ToTable("REF_COUNTRY");

                entity.Property(e => e.Pk)
                    .HasColumnName("PK")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CountryN2)
                    .HasColumnName("COUNTRY_N2")
                    .HasColumnType("numeric(2, 0)");

                entity.Property(e => e.CountryN3)
                    .HasColumnName("COUNTRY_N3")
                    .HasColumnType("numeric(3, 0)");

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("CREATED_BY")
                    .HasMaxLength(70);

                entity.Property(e => e.CreatedDate).HasColumnName("CREATED_DATE");

                entity.Property(e => e.CustomsAmsRecipientFk)
                    .HasColumnName("CUSTOMS_AMS_RECIPIENT_FK")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.CustomsAmsRecipientId)
                    .HasColumnName("CUSTOMS_AMS_RECIPIENT_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.CustomsAmsType)
                    .HasColumnName("CUSTOMS_AMS_TYPE")
                    .HasMaxLength(6);

                entity.Property(e => e.DefaultLanguage)
                    .HasColumnName("DEFAULT_LANGUAGE")
                    .HasMaxLength(2);

                entity.Property(e => e.DeletedBy)
                    .HasColumnName("DELETED_BY")
                    .HasMaxLength(30);

                entity.Property(e => e.DeletedDate).HasColumnName("DELETED_DATE");

                entity.Property(e => e.FirstWeekDay)
                    .HasColumnName("FIRST_WEEK_DAY")
                    .HasMaxLength(3);

                entity.Property(e => e.HouseNoPosType)
                    .HasColumnName("HOUSE_NO_POS_TYPE")
                    .HasMaxLength(1);

                entity.Property(e => e.IsCityChecked)
                    .HasColumnName("IS_CITY_CHECKED")
                    .HasMaxLength(1);

                entity.Property(e => e.IsCustomsCodeMandatory)
                    .HasColumnName("IS_CUSTOMS_CODE_MANDATORY")
                    .HasMaxLength(1);

                entity.Property(e => e.IsDomecticDaaExemption)
                    .HasColumnName("IS_DOMECTIC_DAA_EXEMPTION")
                    .HasMaxLength(1);

                entity.Property(e => e.IsEec)
                    .HasColumnName("IS_EEC")
                    .HasMaxLength(1);

                entity.Property(e => e.IsIsfRequired)
                    .HasColumnName("IS_ISF_REQUIRED")
                    .HasMaxLength(1);

                entity.Property(e => e.IsStateChecked)
                    .HasColumnName("IS_STATE_CHECKED")
                    .HasMaxLength(1);

                entity.Property(e => e.IsZipChecked)
                    .HasColumnName("IS_ZIP_CHECKED")
                    .HasMaxLength(1);

                entity.Property(e => e.Name)
                    .HasColumnName("NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.TimeZone)
                    .HasColumnName("TIME_ZONE")
                    .HasMaxLength(50);

                entity.Property(e => e.UpdatedBy)
                    .HasColumnName("UPDATED_BY")
                    .HasMaxLength(70);

                entity.Property(e => e.UpdatedDate).HasColumnName("UPDATED_DATE");

                entity.Property(e => e.VatCountry)
                    .HasColumnName("VAT_COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.VatNoCheckType)
                    .HasColumnName("VAT_NO_CHECK_TYPE")
                    .HasMaxLength(5);

                entity.Property(e => e.Version)
                    .HasColumnName("VERSION")
                    .HasColumnType("numeric(10, 0)");
            });

            modelBuilder.Entity<RefCreators>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Ref_Creators");

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("created_by")
                    .HasMaxLength(70);
            });

            modelBuilder.Entity<RefDealers>(entity =>
            {
                entity.ToTable("REF_DEALERS");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Brand)
                    .IsRequired()
                    .HasColumnName("BRAND")
                    .HasMaxLength(250);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.DealerCode)
                    .IsRequired()
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<RefIdClients>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Ref_IdClients");

                entity.Property(e => e.Country).HasMaxLength(10);

                entity.Property(e => e.IdClient)
                    .HasColumnName("id_client")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<RefLineId>(entity =>
            {
                entity.ToTable("REF_LINE_ID");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.LineId)
                    .IsRequired()
                    .HasColumnName("LINE_ID")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<RefMarques>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("REF_Marques");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.CountryDep)
                    .HasColumnName("COUNTRY_DEP")
                    .HasMaxLength(10);

                entity.Property(e => e.Marque)
                    .HasColumnName("MARQUE")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<RefMonths>(entity =>
            {
                entity.ToTable("Ref_Months");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<RefMrNumbers>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("REF_MR_NUMBERS");

                entity.Property(e => e.Country).HasMaxLength(4);

                entity.Property(e => e.MrNumber)
                    .HasColumnName("MR_NUMBER")
                    .HasMaxLength(100);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<RefOrgUnits>(entity =>
            {
                entity.HasKey(e => new { e.OrgUnit, e.Country });

                entity.ToTable("Ref_OrgUnits");

                entity.Property(e => e.OrgUnit).HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<RefPlateformes>(entity =>
            {
                entity.HasKey(e => new { e.CodePlf, e.Country })
                    .HasName("PK_REF_Plateformes_");

                entity.ToTable("REF_Plateformes");

                entity.Property(e => e.CodePlf).HasMaxLength(50);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.Euro).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.IsCat).HasColumnName("IsCAT");

                entity.Property(e => e.Nbr)
                    .HasColumnName("NBR")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Plateform)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<RefPlateformes22Mar2022>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("REF_Plateformes_22_mar_2022");

                entity.Property(e => e.CodePlf)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Euro).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.IsCat).HasColumnName("IsCAT");

                entity.Property(e => e.Nbr)
                    .HasColumnName("NBR")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Plateform)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<RefPlateformesBkp20240813>(entity =>
            {
                entity.HasKey(e => new { e.CodePlf, e.Country })
                    .HasName("PK_REF_Plateformes");

                entity.ToTable("REF_Plateformes_bkp20240813");

                entity.Property(e => e.CodePlf).HasMaxLength(50);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.Euro).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.IsCat).HasColumnName("IsCAT");

                entity.Property(e => e.Nbr)
                    .HasColumnName("NBR")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Plateform)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<RefProdutcsLinhaulMilkrun>(entity =>
            {
                entity.HasKey(e => e.Product);

                entity.ToTable("REF_ProdutcsLinhaulMilkrun");

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<RefRatingStatus>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Ref_RatingStatus");

                entity.Property(e => e.RatingStatus)
                    .HasColumnName("rating_status")
                    .HasMaxLength(9);
            });

            modelBuilder.Entity<RefRegimes>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("REF_Regimes");

                entity.Property(e => e.Order).HasColumnName("ORDER");

                entity.Property(e => e.Regime)
                    .IsRequired()
                    .HasColumnName("REGIME")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<RefShipments>(entity =>
            {
                entity.ToTable("REF_SHIPMENTS");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Brand)
                    .IsRequired()
                    .HasColumnName("BRAND")
                    .HasMaxLength(250);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.ShipmentCode)
                    .IsRequired()
                    .HasColumnName("SHIPMENT_CODE")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<RefSupplier>(entity =>
            {
                entity.ToTable("REF_SUPPLIER");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("NAME")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<RefSuppliers>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Ref_suppliers");

                entity.Property(e => e.Supplier)
                    .HasColumnName("supplier")
                    .HasMaxLength(38);
            });

            modelBuilder.Entity<RefTranscoFpWex>(entity =>
            {
                entity.HasKey(e => e.IdTranscoWex);

                entity.ToTable("REF_TRANSCO_FP_WEX");

                entity.HasIndex(e => new { e.IdTranscoWex, e.XaccountId, e.SprId, e.Country })
                    .HasName("<REF_TRASNCO_FP_WEX_ID, sysname,>");

                entity.Property(e => e.IdTranscoWex).HasDefaultValueSql("(newid())");

                entity.Property(e => e.ArrCountry).HasMaxLength(10);

                entity.Property(e => e.Country).HasMaxLength(10);

                entity.Property(e => e.Family).HasMaxLength(50);

                entity.Property(e => e.FamilyPk)
                    .HasColumnName("Family_Pk")
                    .HasMaxLength(50);

                entity.Property(e => e.Label).HasMaxLength(50);

                entity.Property(e => e.SprFk)
                    .HasColumnName("Spr_Fk")
                    .HasMaxLength(50);

                entity.Property(e => e.SprId)
                    .HasColumnName("Spr_Id")
                    .HasMaxLength(50);

                entity.Property(e => e.XaccountFk)
                    .HasColumnName("Xaccount_Fk")
                    .HasMaxLength(50);

                entity.Property(e => e.XaccountId)
                    .HasColumnName("Xaccount_Id")
                    .HasMaxLength(60);
            });

            modelBuilder.Entity<RefTranscoFpWexBak160322bak>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ref_transco_fp_wex_bak16_03_22bak");

                entity.Property(e => e.ArrCountry).HasMaxLength(10);

                entity.Property(e => e.Country).HasMaxLength(10);

                entity.Property(e => e.Family).HasMaxLength(50);

                entity.Property(e => e.FamilyPk)
                    .HasColumnName("Family_Pk")
                    .HasMaxLength(50);

                entity.Property(e => e.Label).HasMaxLength(50);

                entity.Property(e => e.SprFk)
                    .HasColumnName("Spr_Fk")
                    .HasMaxLength(50);

                entity.Property(e => e.SprId)
                    .HasColumnName("Spr_Id")
                    .HasMaxLength(50);

                entity.Property(e => e.XaccountFk)
                    .HasColumnName("Xaccount_Fk")
                    .HasMaxLength(50);

                entity.Property(e => e.XaccountId)
                    .HasColumnName("Xaccount_Id")
                    .HasMaxLength(60);
            });

            modelBuilder.Entity<RefTypeLineMilk>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Ref_TypeLineMilk");

                entity.Property(e => e.TypeName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<RefTypes>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Ref_Types");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<RefUserMarques>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ReportId, e.Marque });

                entity.ToTable("REF_UserMarques");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.Marque)
                    .HasColumnName("MARQUE")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<RefUserRegimes>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ReportId, e.Regime });

                entity.ToTable("REF_UserRegimes");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.Regime)
                    .HasColumnName("REGIME")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<RefWbNos>(entity =>
            {
                entity.HasKey(e => e.PfId)
                    .HasName("PK_REF_WB_NO");

                entity.ToTable("REF_WB_NOs");

                entity.Property(e => e.PfId)
                    .HasColumnName("PF_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.CodePlf)
                    .HasColumnName("CODE_PLF")
                    .HasMaxLength(50);

                entity.Property(e => e.NamePlf)
                    .HasColumnName("NAME_PLF")
                    .HasMaxLength(250);

                entity.Property(e => e.Wno)
                    .HasColumnName("WNO")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<RefWeeks>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("REF_Weeks");
            });

            modelBuilder.Entity<RefWorkUnits>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Ref_WorkUnits");

                entity.Property(e => e.Workunit)
                    .HasColumnName("workunit")
                    .HasMaxLength(152);
            });

            modelBuilder.Entity<ReportAdValoremStatus>(entity =>
            {
                entity.ToTable("Report_AdValoremStatus");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("CODE")
                    .HasMaxLength(50);

                entity.Property(e => e.Label)
                    .IsRequired()
                    .HasColumnName("LABEL")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<ReportDays>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_Days");

                entity.Property(e => e.Culture)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Dname)
                    .IsRequired()
                    .HasColumnName("DNAME")
                    .HasMaxLength(20);

                entity.Property(e => e.Dw).HasColumnName("DW");
            });

            modelBuilder.Entity<ReportFinanceLabels>(entity =>
            {
                entity.ToTable("Report_FinanceLabels");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.IsoCodeLanguage)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LabelSelect)
                    .IsRequired()
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Value)
                    .IsRequired()
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ReportFinancial>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_Financial");

                entity.Property(e => e.ArrPf)
                    .HasColumnName("ARR_PF")
                    .HasMaxLength(200);

                entity.Property(e => e.Boughtproduct)
                    .HasColumnName("BOUGHTPRODUCT")
                    .HasMaxLength(200);

                entity.Property(e => e.Brand)
                    .HasColumnName("brand")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("chargeable_weight")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargedTpa)
                    .HasColumnName("charged_tpa")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargingTpa)
                    .HasColumnName("charging_tpa")
                    .HasMaxLength(200);

                entity.Property(e => e.Company)
                    .HasColumnName("company")
                    .HasMaxLength(200);

                entity.Property(e => e.CostingClosingDate)
                    .HasColumnName("costing_closing_date")
                    .HasMaxLength(200);

                entity.Property(e => e.CusInvoiceNo)
                    .HasColumnName("cus_invoice_no")
                    .HasMaxLength(200);

                entity.Property(e => e.DepPf)
                    .HasColumnName("DEP_PF")
                    .HasMaxLength(200);

                entity.Property(e => e.ForcFlowPostingDate)
                    .HasColumnName("FORC_FLOW_POSTING_DATE")
                    .HasMaxLength(200);

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("fuel_surcharge")
                    .HasMaxLength(200);

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("gross_weight")
                    .HasMaxLength(200);

                entity.Property(e => e.HuQty)
                    .HasColumnName("hu_qty")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceInternalNo)
                    .HasColumnName("INVOICE_INTERNAL_NO")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceTempNo)
                    .HasColumnName("INVOICE_temp_NO")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceType)
                    .HasColumnName("INVOICE_TYPE")
                    .HasMaxLength(200);

                entity.Property(e => e.IsManuallyUpdated)
                    .HasColumnName("IS_MANUALLY_UPDATED")
                    .HasMaxLength(200);

                entity.Property(e => e.KindId)
                    .HasColumnName("KIND_ID")
                    .HasMaxLength(200);

                entity.Property(e => e.Lineid)
                    .HasColumnName("lineid")
                    .HasMaxLength(200);

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(200);

                entity.Property(e => e.QuantityRated)
                    .HasColumnName("quantity_rated")
                    .HasMaxLength(200);

                entity.Property(e => e.RatingStatus)
                    .HasColumnName("RATING_STATUS")
                    .HasMaxLength(200);

                entity.Property(e => e.RatingType)
                    .HasColumnName("RATING_TYPE")
                    .HasMaxLength(200);

                entity.Property(e => e.RealFlowPostingDate)
                    .HasColumnName("REAL_FLOW_POSTING_DATE")
                    .HasMaxLength(200);

                entity.Property(e => e.RefDate)
                    .HasColumnName("ref_date")
                    .HasMaxLength(200);

                entity.Property(e => e.RefId)
                    .HasColumnName("ref_id")
                    .HasMaxLength(200);

                entity.Property(e => e.SapCode)
                    .HasColumnName("SAP_CODE")
                    .HasMaxLength(200);

                entity.Property(e => e.SapCode2)
                    .HasColumnName("SAP_CODE2")
                    .HasMaxLength(200);

                entity.Property(e => e.SapName)
                    .HasColumnName("SAP_NAME")
                    .HasMaxLength(200);

                entity.Property(e => e.Service)
                    .HasColumnName("service")
                    .HasMaxLength(200);

                entity.Property(e => e.Soldproduct)
                    .HasColumnName("SOLDPRODUCT")
                    .HasMaxLength(200);

                entity.Property(e => e.SupInvoiceNo)
                    .HasColumnName("sup_invoice_no")
                    .HasMaxLength(200);

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("tariff_amount")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfRangeBasis)
                    .HasColumnName("trf_range_basis")
                    .HasMaxLength(200);

                entity.Property(e => e.TripFileId)
                    .HasColumnName("TRIP_FILE_ID")
                    .HasMaxLength(200);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("unit_price")
                    .HasMaxLength(200);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Volume)
                    .HasColumnName("volume")
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<ReportFinancialWithoutParam>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_Financial_Without_Param");

                entity.Property(e => e.ArrPf)
                    .HasColumnName("ARR_PF")
                    .HasMaxLength(200);

                entity.Property(e => e.Boughtproduct)
                    .HasColumnName("BOUGHTPRODUCT")
                    .HasMaxLength(200);

                entity.Property(e => e.Brand)
                    .HasColumnName("brand")
                    .HasMaxLength(200);

                entity.Property(e => e.CgnCountry)
                    .HasColumnName("CGN_COUNTRY")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("chargeable_weight")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargedTpa)
                    .HasColumnName("charged_tpa")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargingTpa)
                    .HasColumnName("charging_tpa")
                    .HasMaxLength(200);

                entity.Property(e => e.Company)
                    .HasColumnName("company")
                    .HasMaxLength(200);

                entity.Property(e => e.CostingClosingDate)
                    .HasColumnName("costing_closing_date")
                    .HasMaxLength(200);

                entity.Property(e => e.Currency)
                    .HasColumnName("CURRENCY")
                    .HasMaxLength(200);

                entity.Property(e => e.CusInvoiceNo)
                    .HasColumnName("cus_invoice_no")
                    .HasMaxLength(200);

                entity.Property(e => e.DepPf)
                    .HasColumnName("DEP_PF")
                    .HasMaxLength(200);

                entity.Property(e => e.ForcCurrRate)
                    .HasColumnName("FORC_CURR_RATE")
                    .HasMaxLength(400);

                entity.Property(e => e.ForcFlowPostingDate)
                    .HasColumnName("FORC_FLOW_POSTING_DATE")
                    .HasMaxLength(200);

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("fuel_surcharge")
                    .HasMaxLength(200);

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("gross_weight")
                    .HasMaxLength(200);

                entity.Property(e => e.HuQty)
                    .HasColumnName("hu_qty")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceInternalNo)
                    .HasColumnName("INVOICE_INTERNAL_NO")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceTempNo)
                    .HasColumnName("INVOICE_temp_NO")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceType)
                    .HasColumnName("INVOICE_TYPE")
                    .HasMaxLength(200);

                entity.Property(e => e.IsManuallyUpdated)
                    .HasColumnName("IS_MANUALLY_UPDATED")
                    .HasMaxLength(200);

                entity.Property(e => e.KindId)
                    .HasColumnName("KIND_ID")
                    .HasMaxLength(200);

                entity.Property(e => e.Lineid)
                    .HasColumnName("lineid")
                    .HasMaxLength(200);

                entity.Property(e => e.LocalValue)
                    .HasColumnName("LOCAL_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.LocalValueFk)
                    .HasColumnName("LOCAL_VALUE_FK")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(200);

                entity.Property(e => e.QuantityRated)
                    .HasColumnName("quantity_rated")
                    .HasMaxLength(200);

                entity.Property(e => e.RatingStatus)
                    .HasColumnName("RATING_STATUS")
                    .HasMaxLength(200);

                entity.Property(e => e.RatingType)
                    .HasColumnName("RATING_TYPE")
                    .HasMaxLength(200);

                entity.Property(e => e.RealFlowPostingDate)
                    .HasColumnName("REAL_FLOW_POSTING_DATE")
                    .HasMaxLength(200);

                entity.Property(e => e.RefDate)
                    .HasColumnName("ref_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.RefId)
                    .HasColumnName("ref_id")
                    .HasMaxLength(200);

                entity.Property(e => e.SapCode)
                    .HasColumnName("SAP_CODE")
                    .HasMaxLength(200);

                entity.Property(e => e.SapCode2)
                    .HasColumnName("SAP_CODE2")
                    .HasMaxLength(200);

                entity.Property(e => e.SapName)
                    .HasColumnName("SAP_NAME")
                    .HasMaxLength(200);

                entity.Property(e => e.Service)
                    .HasColumnName("service")
                    .HasMaxLength(200);

                entity.Property(e => e.Soldproduct)
                    .HasColumnName("SOLDPRODUCT")
                    .HasMaxLength(200);

                entity.Property(e => e.SupInvoiceNo)
                    .HasColumnName("sup_invoice_no")
                    .HasMaxLength(200);

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("tariff_amount")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfCurrRate)
                    .HasColumnName("TRF_CURR_RATE")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfCurrency)
                    .HasColumnName("TRF_CURRENCY")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfRangeBasis)
                    .HasColumnName("trf_range_basis")
                    .HasMaxLength(200);

                entity.Property(e => e.TripFileId)
                    .HasColumnName("TRIP_FILE_ID")
                    .HasMaxLength(200);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("unit_price")
                    .HasMaxLength(200);

                entity.Property(e => e.Volume)
                    .HasColumnName("volume")
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<ReportFinancialWithoutParamTemp>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_Financial_Without_Param_TEMP");

                entity.Property(e => e.ArrPf)
                    .HasColumnName("ARR_PF")
                    .HasMaxLength(200);

                entity.Property(e => e.Boughtproduct)
                    .HasColumnName("BOUGHTPRODUCT")
                    .HasMaxLength(200);

                entity.Property(e => e.Brand)
                    .HasColumnName("brand")
                    .HasMaxLength(200);

                entity.Property(e => e.CgnCountry)
                    .HasColumnName("CGN_COUNTRY")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("chargeable_weight")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargedTpa)
                    .HasColumnName("charged_tpa")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargingTpa)
                    .HasColumnName("charging_tpa")
                    .HasMaxLength(200);

                entity.Property(e => e.Company)
                    .HasColumnName("company")
                    .HasMaxLength(200);

                entity.Property(e => e.CostingClosingDate)
                    .HasColumnName("costing_closing_date")
                    .HasMaxLength(200);

                entity.Property(e => e.Currency)
                    .HasColumnName("CURRENCY")
                    .HasMaxLength(200);

                entity.Property(e => e.CusInvoiceNo)
                    .HasColumnName("cus_invoice_no")
                    .HasMaxLength(200);

                entity.Property(e => e.DepPf)
                    .HasColumnName("DEP_PF")
                    .HasMaxLength(200);

                entity.Property(e => e.ForcCurrRate)
                    .HasColumnName("FORC_CURR_RATE")
                    .HasMaxLength(400);

                entity.Property(e => e.ForcFlowPostingDate)
                    .HasColumnName("FORC_FLOW_POSTING_DATE")
                    .HasMaxLength(200);

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("fuel_surcharge")
                    .HasMaxLength(200);

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("gross_weight")
                    .HasMaxLength(200);

                entity.Property(e => e.HuQty)
                    .HasColumnName("hu_qty")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceInternalNo)
                    .HasColumnName("INVOICE_INTERNAL_NO")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceTempNo)
                    .HasColumnName("INVOICE_temp_NO")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceType)
                    .HasColumnName("INVOICE_TYPE")
                    .HasMaxLength(200);

                entity.Property(e => e.IsManuallyUpdated)
                    .HasColumnName("IS_MANUALLY_UPDATED")
                    .HasMaxLength(200);

                entity.Property(e => e.KindId)
                    .HasColumnName("KIND_ID")
                    .HasMaxLength(200);

                entity.Property(e => e.Lineid)
                    .HasColumnName("lineid")
                    .HasMaxLength(200);

                entity.Property(e => e.LocalValue)
                    .HasColumnName("LOCAL_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.LocalValueFk)
                    .HasColumnName("LOCAL_VALUE_FK")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(200);

                entity.Property(e => e.QuantityRated)
                    .HasColumnName("quantity_rated")
                    .HasMaxLength(200);

                entity.Property(e => e.RatingStatus)
                    .HasColumnName("RATING_STATUS")
                    .HasMaxLength(200);

                entity.Property(e => e.RatingType)
                    .HasColumnName("RATING_TYPE")
                    .HasMaxLength(200);

                entity.Property(e => e.RealFlowPostingDate)
                    .HasColumnName("REAL_FLOW_POSTING_DATE")
                    .HasMaxLength(200);

                entity.Property(e => e.RefDate)
                    .HasColumnName("ref_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.RefId)
                    .HasColumnName("ref_id")
                    .HasMaxLength(200);

                entity.Property(e => e.SapCode)
                    .HasColumnName("SAP_CODE")
                    .HasMaxLength(200);

                entity.Property(e => e.SapCode2)
                    .HasColumnName("SAP_CODE2")
                    .HasMaxLength(200);

                entity.Property(e => e.SapName)
                    .HasColumnName("SAP_NAME")
                    .HasMaxLength(200);

                entity.Property(e => e.Service)
                    .HasColumnName("service")
                    .HasMaxLength(200);

                entity.Property(e => e.Soldproduct)
                    .HasColumnName("SOLDPRODUCT")
                    .HasMaxLength(200);

                entity.Property(e => e.SupInvoiceNo)
                    .HasColumnName("sup_invoice_no")
                    .HasMaxLength(200);

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("tariff_amount")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfCurrRate)
                    .HasColumnName("TRF_CURR_RATE")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfCurrency)
                    .HasColumnName("TRF_CURRENCY")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfRangeBasis)
                    .HasColumnName("trf_range_basis")
                    .HasMaxLength(200);

                entity.Property(e => e.TripFileId)
                    .HasColumnName("TRIP_FILE_ID")
                    .HasMaxLength(200);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("unit_price")
                    .HasMaxLength(200);

                entity.Property(e => e.Volume)
                    .HasColumnName("volume")
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<ReportFinancialWithoutParamTemp1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_Financial_Without_Param_TEMP1");

                entity.Property(e => e.ArrPf)
                    .HasColumnName("ARR_PF")
                    .HasMaxLength(200);

                entity.Property(e => e.Boughtproduct)
                    .HasColumnName("BOUGHTPRODUCT")
                    .HasMaxLength(200);

                entity.Property(e => e.Brand)
                    .HasColumnName("brand")
                    .HasMaxLength(200);

                entity.Property(e => e.CgnCountry)
                    .HasColumnName("CGN_COUNTRY")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("chargeable_weight")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargedTpa)
                    .HasColumnName("charged_tpa")
                    .HasMaxLength(200);

                entity.Property(e => e.ChargingTpa)
                    .HasColumnName("charging_tpa")
                    .HasMaxLength(200);

                entity.Property(e => e.Company)
                    .HasColumnName("company")
                    .HasMaxLength(200);

                entity.Property(e => e.CostingClosingDate)
                    .HasColumnName("costing_closing_date")
                    .HasMaxLength(200);

                entity.Property(e => e.Currency)
                    .HasColumnName("CURRENCY")
                    .HasMaxLength(200);

                entity.Property(e => e.CusInvoiceNo)
                    .HasColumnName("cus_invoice_no")
                    .HasMaxLength(200);

                entity.Property(e => e.DepPf)
                    .HasColumnName("DEP_PF")
                    .HasMaxLength(200);

                entity.Property(e => e.ForcCurrRate)
                    .HasColumnName("FORC_CURR_RATE")
                    .HasMaxLength(400);

                entity.Property(e => e.ForcFlowPostingDate)
                    .HasColumnName("FORC_FLOW_POSTING_DATE")
                    .HasMaxLength(200);

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("fuel_surcharge")
                    .HasMaxLength(200);

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("gross_weight")
                    .HasMaxLength(200);

                entity.Property(e => e.HuQty)
                    .HasColumnName("hu_qty")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceInternalNo)
                    .HasColumnName("INVOICE_INTERNAL_NO")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceTempNo)
                    .HasColumnName("INVOICE_temp_NO")
                    .HasMaxLength(200);

                entity.Property(e => e.InvoiceType)
                    .HasColumnName("INVOICE_TYPE")
                    .HasMaxLength(200);

                entity.Property(e => e.IsManuallyUpdated)
                    .HasColumnName("IS_MANUALLY_UPDATED")
                    .HasMaxLength(200);

                entity.Property(e => e.KindId)
                    .HasColumnName("KIND_ID")
                    .HasMaxLength(200);

                entity.Property(e => e.Lineid)
                    .HasColumnName("lineid")
                    .HasMaxLength(200);

                entity.Property(e => e.LocalValue)
                    .HasColumnName("LOCAL_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(200);

                entity.Property(e => e.QuantityRated)
                    .HasColumnName("quantity_rated")
                    .HasMaxLength(200);

                entity.Property(e => e.RatPk)
                    .HasColumnName("RAT_PK")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RatingStatus)
                    .HasColumnName("RATING_STATUS")
                    .HasMaxLength(200);

                entity.Property(e => e.RatingType)
                    .HasColumnName("RATING_TYPE")
                    .HasMaxLength(200);

                entity.Property(e => e.RealFlowPostingDate)
                    .HasColumnName("REAL_FLOW_POSTING_DATE")
                    .HasMaxLength(200);

                entity.Property(e => e.RefDate)
                    .HasColumnName("ref_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.RefId)
                    .HasColumnName("ref_id")
                    .HasMaxLength(200);

                entity.Property(e => e.SapCode)
                    .HasColumnName("SAP_CODE")
                    .HasMaxLength(200);

                entity.Property(e => e.SapCode2)
                    .HasColumnName("SAP_CODE2")
                    .HasMaxLength(200);

                entity.Property(e => e.SapName)
                    .HasColumnName("SAP_NAME")
                    .HasMaxLength(200);

                entity.Property(e => e.Service)
                    .HasColumnName("service")
                    .HasMaxLength(200);

                entity.Property(e => e.Soldproduct)
                    .HasColumnName("SOLDPRODUCT")
                    .HasMaxLength(200);

                entity.Property(e => e.SupInvoiceNo)
                    .HasColumnName("sup_invoice_no")
                    .HasMaxLength(200);

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("tariff_amount")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfCurrRate)
                    .HasColumnName("TRF_CURR_RATE")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfCurrency)
                    .HasColumnName("TRF_CURRENCY")
                    .HasMaxLength(200);

                entity.Property(e => e.TrfRangeBasis)
                    .HasColumnName("trf_range_basis")
                    .HasMaxLength(200);

                entity.Property(e => e.TripFileId)
                    .HasColumnName("TRIP_FILE_ID")
                    .HasMaxLength(200);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("unit_price")
                    .HasMaxLength(200);

                entity.Property(e => e.Volume)
                    .HasColumnName("volume")
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<ReportHuTypes>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_HuTypes");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.HuType)
                    .HasColumnName("HU_TYPE")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<ReportInOrderActivities>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_InOrderActivities");

                entity.Property(e => e.Adress)
                    .HasColumnName("ADRESS")
                    .HasMaxLength(400);

                entity.Property(e => e.ArrivalDateHour)
                    .HasColumnName("ARRIVAL_DATE_HOUR")
                    .HasMaxLength(400);

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(400);

                entity.Property(e => e.ChWeight)
                    .HasColumnName("CH_WEIGHT")
                    .HasMaxLength(400);

                entity.Property(e => e.City)
                    .HasColumnName("CITY")
                    .HasMaxLength(400);

                entity.Property(e => e.CodgoodValue)
                    .HasColumnName("CODGOOD_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeId)
                    .HasColumnName("CONSIGNEE_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeName)
                    .HasColumnName("CONSIGNEE_NAME")
                    .HasMaxLength(400);

                entity.Property(e => e.Costes)
                    .HasColumnName("COSTES")
                    .HasMaxLength(400);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("CREATED_BY")
                    .HasMaxLength(400);

                entity.Property(e => e.CreatedOn)
                    .HasColumnName("CREATED_ON")
                    .HasMaxLength(400);

                entity.Property(e => e.DeliveryTerminal)
                    .HasColumnName("DELIVERY_TERMINAL")
                    .HasMaxLength(400);

                entity.Property(e => e.Gwgt)
                    .HasColumnName("GWgt")
                    .HasMaxLength(400);

                entity.Property(e => e.HandlyUnitQty)
                    .HasColumnName("HANDLY_UNIT_QTY")
                    .HasMaxLength(400);

                entity.Property(e => e.Incoterm)
                    .HasColumnName("INCOTERM")
                    .HasMaxLength(400);

                entity.Property(e => e.Ingresos)
                    .HasColumnName("INGRESOS")
                    .HasMaxLength(400);

                entity.Property(e => e.Instructions)
                    .HasColumnName("INSTRUCTIONS")
                    .HasMaxLength(400);

                entity.Property(e => e.InsureValue)
                    .HasColumnName("INSURE_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.ObjectCreationType)
                    .HasColumnName("OBJECT_CREATION_TYPE")
                    .HasMaxLength(400);

                entity.Property(e => e.OperacionInstruction)
                    .HasColumnName("OPERACION_INSTRUCTION")
                    .HasMaxLength(400);

                entity.Property(e => e.OrderNumber)
                    .HasColumnName("ORDER_NUMBER")
                    .HasMaxLength(400);

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(400);

                entity.Property(e => e.Reference)
                    .HasColumnName("REFERENCE")
                    .HasMaxLength(400);

                entity.Property(e => e.RevenueTotalValue)
                    .HasColumnName("REVENUE_TOTAL_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.SenderId)
                    .HasColumnName("SENDER_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ZipConsignee)
                    .HasColumnName("ZIP_CONSIGNEE")
                    .HasMaxLength(400);
            });

            modelBuilder.Entity<ReportMajorCustomerForVolume>(entity =>
            {
                entity.HasKey(e => new { e.Country, e.Customer });

                entity.ToTable("Report_MajorCustomerForVolume");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<ReportOpenDays>(entity =>
            {
                entity.ToTable("Report_OpenDays");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("country")
                    .HasMaxLength(10);

                entity.Property(e => e.Month).HasMaxLength(4000);
            });

            modelBuilder.Entity<ReportOrders>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_Orders");

                entity.Property(e => e.AgentAtDestinationId)
                    .HasColumnName("AGENT_AT_DESTINATION_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.AgentAtOriginId)
                    .HasColumnName("AGENT_AT_ORIGIN_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.CgnName)
                    .HasColumnName("CGN_NAME")
                    .HasMaxLength(400);

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("CREATED_DATE")
                    .HasMaxLength(400);

                entity.Property(e => e.CreatorId)
                    .HasColumnName("CREATOR_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.EstTimeDep)
                    .HasColumnName("EST_TIME_DEP")
                    .HasMaxLength(400);

                entity.Property(e => e.GnId)
                    .HasColumnName("GN_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.SndId)
                    .HasColumnName("SND_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.SndName)
                    .HasColumnName("SND_NAME")
                    .HasMaxLength(400);

                entity.Property(e => e.SprId)
                    .HasColumnName("SPR_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.XaccountId)
                    .HasColumnName("XACCOUNT_ID")
                    .HasMaxLength(400);
            });

            modelBuilder.Entity<ReportOutOrderActivities>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_OutOrderActivities");

                entity.Property(e => e.Adress)
                    .HasColumnName("ADRESS")
                    .HasMaxLength(400);

                entity.Property(e => e.ArrivalDateHour)
                    .HasColumnName("ARRIVAL_DATE_HOUR")
                    .HasMaxLength(400);

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(400);

                entity.Property(e => e.ChWeight)
                    .HasColumnName("CH_WEIGHT")
                    .HasMaxLength(400);

                entity.Property(e => e.City)
                    .HasColumnName("CITY")
                    .HasMaxLength(400);

                entity.Property(e => e.CodgoodValue)
                    .HasColumnName("CODGOOD_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeId)
                    .HasColumnName("CONSIGNEE_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeName)
                    .HasColumnName("CONSIGNEE_NAME")
                    .HasMaxLength(400);

                entity.Property(e => e.Costes)
                    .HasColumnName("COSTES")
                    .HasMaxLength(400);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("CREATED_BY")
                    .HasMaxLength(400);

                entity.Property(e => e.CreatedOn)
                    .HasColumnName("CREATED_ON")
                    .HasMaxLength(400);

                entity.Property(e => e.DeliveryTerminal)
                    .HasColumnName("DELIVERY_TERMINAL")
                    .HasMaxLength(400);

                entity.Property(e => e.Gwgt)
                    .HasColumnName("GWgt")
                    .HasMaxLength(400);

                entity.Property(e => e.HandlyUnitQty)
                    .HasColumnName("HANDLY_UNIT_QTY")
                    .HasMaxLength(400);

                entity.Property(e => e.Incoterm)
                    .HasColumnName("INCOTERM")
                    .HasMaxLength(400);

                entity.Property(e => e.Ingresos)
                    .HasColumnName("INGRESOS")
                    .HasMaxLength(400);

                entity.Property(e => e.Instructions)
                    .HasColumnName("INSTRUCTIONS")
                    .HasMaxLength(400);

                entity.Property(e => e.InsureValue)
                    .HasColumnName("INSURE_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.ObjectCreationType)
                    .HasColumnName("OBJECT_CREATION_TYPE")
                    .HasMaxLength(400);

                entity.Property(e => e.OperacionInstruction)
                    .HasColumnName("OPERACION_INSTRUCTION")
                    .HasMaxLength(400);

                entity.Property(e => e.OrderNumber)
                    .HasColumnName("ORDER_NUMBER")
                    .HasMaxLength(400);

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(400);

                entity.Property(e => e.Reference)
                    .HasColumnName("REFERENCE")
                    .HasMaxLength(400);

                entity.Property(e => e.RevenueTotalValue)
                    .HasColumnName("REVENUE_TOTAL_VALUE")
                    .HasMaxLength(400);

                entity.Property(e => e.SenderId)
                    .HasColumnName("SENDER_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ZipConsignee)
                    .HasColumnName("ZIP_CONSIGNEE")
                    .HasMaxLength(400);
            });

            modelBuilder.Entity<ReportPlateformCoordination>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_PlateformCoordination");

                entity.Property(e => e.ArrivalDate)
                    .HasColumnName("arrival_date")
                    .HasMaxLength(400);

                entity.Property(e => e.ArrivalPlatform)
                    .HasColumnName("Arrival_platform")
                    .HasMaxLength(400);

                entity.Property(e => e.AtdRef)
                    .HasColumnName("ATD_ref")
                    .HasMaxLength(400);

                entity.Property(e => e.Brand).HasMaxLength(400);

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("Chargeable_weight")
                    .HasMaxLength(400);

                entity.Property(e => e.Charging)
                    .HasColumnName("charging")
                    .HasMaxLength(400);

                entity.Property(e => e.ClosureDate)
                    .HasColumnName("Closure_date")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeCity)
                    .HasColumnName("consignee_city")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("consignee_country")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeId)
                    .HasColumnName("Consignee_id")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeName)
                    .HasColumnName("Consignee_Name")
                    .HasMaxLength(400);

                entity.Property(e => e.ConsigneeZip)
                    .HasColumnName("Consignee_zip")
                    .HasMaxLength(400);

                entity.Property(e => e.Creation).HasMaxLength(400);

                entity.Property(e => e.Customer).HasMaxLength(400);

                entity.Property(e => e.CustomerRef)
                    .HasColumnName("Customer_ref")
                    .HasMaxLength(400);

                entity.Property(e => e.DepartureDate)
                    .HasColumnName("departure_date")
                    .HasMaxLength(400);

                entity.Property(e => e.DeparturePlatform)
                    .HasColumnName("Departure_platform")
                    .HasMaxLength(400);

                entity.Property(e => e.Divisor).HasMaxLength(400);

                entity.Property(e => e.ExecutionDate)
                    .HasColumnName("execution_date")
                    .HasMaxLength(400);

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("Fuel_surcharge")
                    .HasMaxLength(400);

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("Gross_Weight")
                    .HasMaxLength(400);

                entity.Property(e => e.HuType)
                    .HasColumnName("HU_type")
                    .HasMaxLength(400);

                entity.Property(e => e.Incoterm).HasMaxLength(400);

                entity.Property(e => e.InvoiceNo)
                    .HasColumnName("INVOICE_NO")
                    .HasMaxLength(400);

                entity.Property(e => e.InvoiceType)
                    .HasColumnName("Invoice_Type")
                    .HasMaxLength(400);

                entity.Property(e => e.Milkrun).HasMaxLength(400);

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(400);

                entity.Property(e => e.OperationPoint)
                    .HasColumnName("operation_point")
                    .HasMaxLength(400);

                entity.Property(e => e.OperationStatus)
                    .HasColumnName("operation_status")
                    .HasMaxLength(400);

                entity.Property(e => e.OrderId)
                    .HasColumnName("Order_id")
                    .HasMaxLength(400);

                entity.Property(e => e.OrderId1)
                    .HasColumnName("OrderID")
                    .HasMaxLength(400);

                entity.Property(e => e.OrderStatus)
                    .HasColumnName("order_status")
                    .HasMaxLength(400);

                entity.Property(e => e.OrgUnit)
                    .HasColumnName("Org_unit")
                    .HasMaxLength(400);

                entity.Property(e => e.ParcelQtty)
                    .HasColumnName("Parcel_Qtty")
                    .HasMaxLength(400);

                entity.Property(e => e.Performer)
                    .HasColumnName("performer")
                    .HasMaxLength(400);

                entity.Property(e => e.Product).HasMaxLength(400);

                entity.Property(e => e.QttyRated)
                    .HasColumnName("Qtty_rated")
                    .HasMaxLength(400);

                entity.Property(e => e.RangeType)
                    .HasColumnName("range_type")
                    .HasMaxLength(400);

                entity.Property(e => e.RangeUnit)
                    .HasColumnName("range_unit")
                    .HasMaxLength(400);

                entity.Property(e => e.RealDeparture)
                    .HasColumnName("real_departure")
                    .HasMaxLength(400);

                entity.Property(e => e.RefDate)
                    .HasColumnName("Ref_Date")
                    .HasMaxLength(400);

                entity.Property(e => e.RefNumber)
                    .HasColumnName("Ref_Number")
                    .HasMaxLength(400);

                entity.Property(e => e.Requester)
                    .HasColumnName("requester")
                    .HasMaxLength(400);

                entity.Property(e => e.Sender).HasMaxLength(400);

                entity.Property(e => e.SenderCity)
                    .HasColumnName("Sender_city")
                    .HasMaxLength(400);

                entity.Property(e => e.SenderCountry)
                    .HasColumnName("Sender_country")
                    .HasMaxLength(400);

                entity.Property(e => e.SenderId)
                    .HasColumnName("Sender_id")
                    .HasMaxLength(400);

                entity.Property(e => e.SenderZip)
                    .HasColumnName("Sender_zip")
                    .HasMaxLength(400);

                entity.Property(e => e.Service).HasMaxLength(400);

                entity.Property(e => e.Status).HasMaxLength(400);

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("Tariff_amount")
                    .HasMaxLength(400);

                entity.Property(e => e.TariffType)
                    .HasColumnName("tariff_type")
                    .HasMaxLength(400);

                entity.Property(e => e.TaxationType)
                    .HasColumnName("taxation_type")
                    .HasMaxLength(400);

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("Total_Amount")
                    .HasMaxLength(400);

                entity.Property(e => e.Trip)
                    .HasColumnName("trip")
                    .HasMaxLength(400);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("Unit_Price")
                    .HasMaxLength(400);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Volume)
                    .HasColumnName("volume")
                    .HasMaxLength(400);
            });

            modelBuilder.Entity<ReportSpainTrips>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_SpainTrips");

                entity.Property(e => e.ArrPlatformId)
                    .HasColumnName("ARR_PLATFORM_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.Ata)
                    .HasColumnName("ATA")
                    .HasMaxLength(400);

                entity.Property(e => e.Delivery)
                    .HasColumnName("DELIVERY")
                    .HasMaxLength(400);

                entity.Property(e => e.DepPlatformId)
                    .HasColumnName("DEP_PLATFORM_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.Etd)
                    .HasColumnName("ETD")
                    .HasMaxLength(400);

                entity.Property(e => e.NombreColis)
                    .HasColumnName("NOMBRE_COLIS")
                    .HasMaxLength(400);

                entity.Property(e => e.NombreDelAdress)
                    .HasColumnName("NOMBRE_DEL_ADRESS")
                    .HasMaxLength(400);

                entity.Property(e => e.NombreOrdres)
                    .HasColumnName("NOMBRE_ORDRES")
                    .HasMaxLength(400);

                entity.Property(e => e.NombrePkpAdress)
                    .HasColumnName("NOMBRE_PKP_ADRESS")
                    .HasMaxLength(400);

                entity.Property(e => e.OthersOps)
                    .HasColumnName("OTHERS_OPS")
                    .HasMaxLength(400);

                entity.Property(e => e.Pickup)
                    .HasColumnName("PICKUP")
                    .HasMaxLength(400);

                entity.Property(e => e.Replaned)
                    .HasColumnName("REPLANED")
                    .HasMaxLength(400);

                entity.Property(e => e.RoadTripType)
                    .HasColumnName("ROAD_TRIP_TYPE")
                    .HasMaxLength(400);

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SUPPLIER_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.TotalVolume)
                    .HasColumnName("TOTAL_VOLUME")
                    .HasMaxLength(400);

                entity.Property(e => e.TotalWeight)
                    .HasColumnName("Total_Weight")
                    .HasMaxLength(400);

                entity.Property(e => e.TrifileId)
                    .HasColumnName("TRIFILE_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.TripProduct)
                    .HasColumnName("TRIP_PRODUCT")
                    .HasMaxLength(400);

                entity.Property(e => e.TriplineId)
                    .HasColumnName("TRIPLINE_ID")
                    .HasMaxLength(400);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<ReportSuiviPdadetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Report_SuiviPDADetail");

                entity.Property(e => e.DvcGroup)
                    .HasColumnName("DVC_GROUP")
                    .HasMaxLength(100);

                entity.Property(e => e.DvcId).HasColumnName("DVC_ID");

                entity.Property(e => e.DvcLogin)
                    .HasColumnName("DVC_LOGIN")
                    .HasMaxLength(100);

                entity.Property(e => e.IsHarmonie).HasMaxLength(50);

                entity.Property(e => e.IsMdm)
                    .HasColumnName("IsMDM")
                    .HasMaxLength(50);

                entity.Property(e => e.IsSpot)
                    .HasColumnName("IsSPOT")
                    .HasMaxLength(50);

                entity.Property(e => e.NbDaySpot)
                    .HasColumnName("NbDaySPOT")
                    .HasMaxLength(100);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<ReportSuiviPdaspot>(entity =>
            {
                entity.ToTable("Report_SuiviPDASpot");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.DvcGroup)
                    .HasColumnName("DVC_GROUP")
                    .HasMaxLength(150);

                entity.Property(e => e.DvcId)
                    .HasColumnName("DVC_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DvcLogin)
                    .HasColumnName("DVC_LOGIN")
                    .HasMaxLength(100);

                entity.Property(e => e.DvcType)
                    .HasColumnName("DVC_TYPE")
                    .HasMaxLength(100);

                entity.Property(e => e.Isharmonie)
                    .HasColumnName("ISHARMONIE")
                    .HasMaxLength(50);

                entity.Property(e => e.Isspot)
                    .HasColumnName("ISSPOT")
                    .HasMaxLength(50);

                entity.Property(e => e.Nbdayspot).HasColumnName("NBDAYSPOT");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");
            });

            modelBuilder.Entity<ReportTaxationFiltre>(entity =>
            {
                entity.HasKey(e => new { e.Type, e.ParentType, e.EurOrNbr, e.ServiceName });

                entity.ToTable("Report_TaxationFiltre");

                entity.Property(e => e.Type)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ParentType)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.EurOrNbr)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ServiceName).HasMaxLength(100);
            });

            modelBuilder.Entity<ReportUserCountries>(entity =>
            {
                entity.HasKey(e => new { e.ReportId, e.UserId, e.Country });

                entity.ToTable("Report_UserCountries");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<ReportUserMonths>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ReportId, e.Month });

                entity.ToTable("Report_UserMonths");
            });

            modelBuilder.Entity<ReportUserMrNumbers>(entity =>
            {
                entity.HasKey(e => new { e.ReportId, e.UserId, e.MrNumber });

                entity.ToTable("Report_UserMrNumbers");

                entity.Property(e => e.ReportId).HasColumnName("ReportID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.MrNumber)
                    .HasColumnName("MR_NUMBER")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<ReportUserOrgUnits>(entity =>
            {
                entity.HasKey(e => new { e.ReportId, e.UserId, e.OrgUnit });

                entity.ToTable("Report_UserOrgUnits");

                entity.Property(e => e.OrgUnit).HasMaxLength(38);
            });

            modelBuilder.Entity<ReportUserParams>(entity =>
            {
                entity.ToTable("REPORT_USER_PARAMS");

                entity.Property(e => e.DirectFieldValue)
                    .HasColumnName("DIRECT_FIELD_VALUE")
                    .HasMaxLength(100);

                entity.Property(e => e.FieldType).HasColumnName("FIELD_TYPE");

                entity.Property(e => e.FieldValue).HasColumnName("FIELD_VALUE");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");
            });

            modelBuilder.Entity<ReportUserProducts>(entity =>
            {
                entity.HasKey(e => new { e.ReportId, e.UserId, e.Product });

                entity.ToTable("Report_UserProducts");

                entity.Property(e => e.ReportId).HasColumnName("ReportID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.Product).HasMaxLength(100);
            });

            modelBuilder.Entity<ReportUserStatus>(entity =>
            {
                entity.HasKey(e => new { e.ReportId, e.UserId, e.StatusCode });

                entity.ToTable("Report_UserStatus");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.StatusCode)
                    .HasColumnName("STATUS_CODE")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<ReportUserSuppliers>(entity =>
            {
                entity.HasKey(e => new { e.ReportId, e.UserId, e.Supplier });

                entity.ToTable("Report_UserSuppliers");

                entity.Property(e => e.Supplier).HasMaxLength(250);
            });

            modelBuilder.Entity<ReportUserWeeks>(entity =>
            {
                entity.HasKey(e => new { e.ReportId, e.UserId, e.Week });

                entity.ToTable("Report_UserWeeks");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.Week).HasColumnName("WEEK");
            });

            modelBuilder.Entity<ReportUserproducts1601>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("report_userproducts_1601");

                entity.Property(e => e.Product)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.ReportId).HasColumnName("ReportID");

                entity.Property(e => e.UserId).HasColumnName("UserID");
            });

            modelBuilder.Entity<ReportWebCategoriesPfs>(entity =>
            {
                entity.HasKey(e => new { e.CatagoryId, e.Pf })
                    .HasName("PK_ReportWeb_CategoriesPFs_");

                entity.ToTable("ReportWeb_CategoriesPFs");

                entity.Property(e => e.CatagoryId).HasColumnName("CATAGORY_ID");

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(4);
            });

            modelBuilder.Entity<ReportWebCategoriesPfsBkp20240813>(entity =>
            {
                entity.HasKey(e => new { e.CatagoryId, e.Pf })
                    .HasName("PK_ReportWeb_CategoriesPFs");

                entity.ToTable("ReportWeb_CategoriesPFs_bkp20240813");

                entity.Property(e => e.CatagoryId).HasColumnName("CATAGORY_ID");

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(4);
            });

            modelBuilder.Entity<ReportwebCategoriespfs20220325>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("reportweb_categoriespfs_2022_03_25");

                entity.Property(e => e.CatagoryId).HasColumnName("CATAGORY_ID");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(4);

                entity.Property(e => e.Pf)
                    .IsRequired()
                    .HasColumnName("PF")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<StsFrReturnCustomer>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("STS_FR_RETURN_CUSTOMER");

                entity.Property(e => e.CurrentDelay).HasColumnName("CURRENT_DELAY");

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerOrder)
                    .HasColumnName("CUSTOMER_ORDER")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DayDelayCalculation)
                    .HasColumnName("DAY_DELAY_CALCULATION")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DealerId)
                    .HasColumnName("DEALER_ID")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DelayResult)
                    .HasColumnName("DELAY_RESULT")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DestinationId)
                    .HasColumnName("DESTINATION_ID")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.EventDate)
                    .HasColumnName("EVENT_DATE")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EventDateNoc)
                    .HasColumnName("EVENT_DATE_NOC")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Flow)
                    .HasColumnName("FLOW")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.GroupStatus)
                    .HasColumnName("GROUP_STATUS")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.LastEventName)
                    .HasColumnName("LAST_EVENT_NAME")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.LastEventReason)
                    .HasColumnName("LAST_EVENT_REASON")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastEventStatus)
                    .HasColumnName("LAST_EVENT_STATUS")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.MaxDelay).HasColumnName("MAX_DELAY");

                entity.Property(e => e.NocNumber).HasColumnName("NOC_NUMBER");

                entity.Property(e => e.OrderDate)
                    .HasColumnName("ORDER_DATE")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.OrderMaxDelDate).HasColumnName("ORDER_MAX_DEL_DATE");

                entity.Property(e => e.OrderStatus).HasColumnName("ORDER_STATUS");

                entity.Property(e => e.ParcelCab)
                    .HasColumnName("PARCEL_CAB")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.ParcelId).HasColumnName("PARCEL_ID");

                entity.Property(e => e.ParcelUnique).HasColumnName("PARCEL_UNIQUE");

                entity.Property(e => e.PcsStatusNoc)
                    .HasColumnName("PCS_STATUS_NOC")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ReasonIdNoc)
                    .HasColumnName("REASON_ID_NOC")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ReasonNameNoc)
                    .HasColumnName("REASON_NAME_NOC")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.RefNumberDays).HasColumnName("REF_NUMBER_DAYS");

                entity.Property(e => e.TypeReturn)
                    .HasColumnName("TYPE_RETURN")
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblViaVsRating>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("tblVIA_VS_RATING");

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("CHARGEABLE_WEIGHT")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.ChargedTpa)
                    .HasColumnName("CHARGED_TPA")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargingTpa)
                    .HasColumnName("CHARGING_TPA")
                    .HasMaxLength(50);

                entity.Property(e => e.Company)
                    .HasColumnName("COMPANY")
                    .HasMaxLength(50);

                entity.Property(e => e.CostingClosingDate)
                    .HasColumnName("COSTING_CLOSING_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("FUEL_SURCHARGE")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("GROSS_WEIGHT")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.HuQty).HasColumnName("HU_QTY");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Lineid)
                    .HasColumnName("LINEID")
                    .HasMaxLength(50);

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(50);

                entity.Property(e => e.QuantityRated)
                    .HasColumnName("QUANTITY_RATED")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.RefId)
                    .HasColumnName("REF_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(50);

                entity.Property(e => e.TarifAmount)
                    .HasColumnName("TARIF_AMOUNT")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.TrfRangeBasis)
                    .HasColumnName("TRF_RANGE_BASIS")
                    .HasMaxLength(50);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("UNIT_PRICE")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.Volume)
                    .HasColumnName("VOLUME")
                    .HasColumnType("decimal(12, 6)");
            });

            modelBuilder.Entity<TblViaVsRatingAgg>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("tblVIA_VS_RATING_AGG");

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("CHARGEABLE_WEIGHT")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.ChargedTpa)
                    .HasColumnName("CHARGED_TPA")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargingTpa)
                    .HasColumnName("CHARGING_TPA")
                    .HasMaxLength(50);

                entity.Property(e => e.Company)
                    .HasColumnName("COMPANY")
                    .HasMaxLength(25);

                entity.Property(e => e.CostingClosingDate)
                    .HasColumnName("COSTING_CLOSING_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("FUEL_SURCHARGE")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.GrossWeight)
                    .HasColumnName("GROSS_WEIGHT")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.HuQty).HasColumnName("HU_QTY");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(50);

                entity.Property(e => e.QuantityRated)
                    .HasColumnName("QUANTITY_RATED")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.RefId)
                    .HasColumnName("REF_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(50);

                entity.Property(e => e.TarifAmount)
                    .HasColumnName("TARIF_AMOUNT")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.TrfRangeBasis)
                    .HasColumnName("TRF_RANGE_BASIS")
                    .HasMaxLength(50);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("UNIT_PRICE")
                    .HasColumnType("decimal(12, 4)");

                entity.Property(e => e.Volume)
                    .HasColumnName("VOLUME")
                    .HasColumnType("decimal(12, 6)");
            });

            modelBuilder.Entity<TkiFtl>(entity =>
            {
                entity.ToTable("TKI_FTL");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.Ata).HasColumnName("ATA");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(100);

                entity.Property(e => e.Consignee)
                    .HasColumnName("CONSIGNEE")
                    .HasMaxLength(255);

                entity.Property(e => e.ConsigneeCity)
                    .HasColumnName("CONSIGNEE_CITY")
                    .HasMaxLength(200);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("CONSIGNEE_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.ConsigneeZip)
                    .HasColumnName("CONSIGNEE_ZIP")
                    .HasMaxLength(200);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Creator)
                    .HasColumnName("CREATOR")
                    .HasMaxLength(200);

                entity.Property(e => e.Eta).HasColumnName("ETA");

                entity.Property(e => e.Etd).HasColumnName("ETD");

                entity.Property(e => e.ImperativeDate).HasColumnName("IMPERATIVE_DATE");

                entity.Property(e => e.NumOrder)
                    .HasColumnName("NUM_ORDER")
                    .HasMaxLength(100);

                entity.Property(e => e.OrderStatus)
                    .HasColumnName("ORDER_STATUS")
                    .HasMaxLength(10);

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(50);

                entity.Property(e => e.Sender)
                    .HasColumnName("SENDER")
                    .HasMaxLength(200);

                entity.Property(e => e.SenderCity)
                    .HasColumnName("SENDER_CITY")
                    .HasMaxLength(100);

                entity.Property(e => e.SenderCountry)
                    .HasColumnName("SENDER_COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.SenderZip)
                    .HasColumnName("SENDER_ZIP")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Tkpi10ExploitReturnCustomer>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI10_EXPLOIT_RETURN_CUSTOMER");

                entity.Property(e => e.CurrentDelay).HasColumnName("CURRENT_DELAY");

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(50);

                entity.Property(e => e.CustomerOrder)
                    .HasColumnName("CUSTOMER_ORDER")
                    .HasMaxLength(50);

                entity.Property(e => e.DayDelayCalculation)
                    .HasColumnName("DAY_DELAY_CALCULATION")
                    .HasMaxLength(50);

                entity.Property(e => e.DealerId)
                    .HasColumnName("DEALER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DelayResult).HasColumnName("DELAY_RESULT");

                entity.Property(e => e.DestinationId)
                    .HasColumnName("DESTINATION_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.EventDate)
                    .HasColumnName("EVENT_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.EventDateNoc)
                    .HasColumnName("EVENT_DATE_NOC")
                    .HasMaxLength(50);

                entity.Property(e => e.Flow)
                    .HasColumnName("FLOW")
                    .HasMaxLength(50);

                entity.Property(e => e.GroupStatus).HasColumnName("GROUP_STATUS");

                entity.Property(e => e.HuType)
                    .HasColumnName("HU_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.IdUser).HasColumnName("ID_USER");

                entity.Property(e => e.LastEventName).HasColumnName("LAST_EVENT_NAME");

                entity.Property(e => e.LastEventReason)
                    .HasColumnName("LAST_EVENT_REASON")
                    .HasMaxLength(50);

                entity.Property(e => e.LastEventStatus)
                    .HasColumnName("LAST_EVENT_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.MaxDelay).HasColumnName("MAX_DELAY");

                entity.Property(e => e.NocNumber).HasColumnName("NOC_NUMBER");

                entity.Property(e => e.OrderDate)
                    .HasColumnName("ORDER_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderMaxDelDate).HasColumnName("ORDER_MAX_DEL_DATE");

                entity.Property(e => e.OrderStatus).HasColumnName("ORDER_STATUS");

                entity.Property(e => e.ParcelCab)
                    .HasColumnName("PARCEL_CAB")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelId).HasColumnName("PARCEL_ID");

                entity.Property(e => e.ParcelUnique).HasColumnName("PARCEL_UNIQUE");

                entity.Property(e => e.PcsStatusNoc)
                    .HasColumnName("PCS_STATUS_NOC")
                    .HasMaxLength(50);

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(50);

                entity.Property(e => e.ReasonIdNoc)
                    .HasColumnName("REASON_ID_NOC")
                    .HasMaxLength(50);

                entity.Property(e => e.ReasonNameNoc).HasColumnName("REASON_NAME_NOC");

                entity.Property(e => e.RefNumberDays).HasColumnName("REF_NUMBER_DAYS");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(100);

                entity.Property(e => e.TypeReturn)
                    .HasColumnName("TYPE_RETURN")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Tkpi11ExploitReturnTracing>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI11_EXPLOIT_RETURN_TRACING");

                entity.Property(e => e.ActualPf)
                    .HasColumnName("ACTUAL_PF")
                    .HasMaxLength(50);

                entity.Property(e => e.ArrPf)
                    .HasColumnName("ARR_PF")
                    .HasMaxLength(50);

                entity.Property(e => e.City).HasColumnName("CITY");

                entity.Property(e => e.Contenant).HasColumnName("CONTENANT");

                entity.Property(e => e.CpDest)
                    .HasColumnName("CP_DEST")
                    .HasMaxLength(50);

                entity.Property(e => e.CreatedBy).HasColumnName("CREATED_BY");

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("CREATED_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(50);

                entity.Property(e => e.DepPf)
                    .HasColumnName("DEP_PF")
                    .HasMaxLength(50);

                entity.Property(e => e.Depart)
                    .HasColumnName("DEPART")
                    .HasMaxLength(50);

                entity.Property(e => e.Destination)
                    .HasColumnName("DESTINATION")
                    .HasMaxLength(50);

                entity.Property(e => e.Etat).HasColumnName("ETAT");

                entity.Property(e => e.EventDate)
                    .HasColumnName("EVENT_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.IdUser).HasColumnName("ID_USER");

                entity.Property(e => e.Line)
                    .HasColumnName("LINE")
                    .HasMaxLength(50);

                entity.Property(e => e.NameDest).HasColumnName("NAME_DEST");

                entity.Property(e => e.OrderDate)
                    .HasColumnName("ORDER_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.OrderNumber)
                    .HasColumnName("ORDER_NUMBER")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelCab)
                    .HasColumnName("PARCEL_CAB")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelNum)
                    .HasColumnName("PARCEL_NUM")
                    .HasMaxLength(50);

                entity.Property(e => e.Poids).HasColumnName("POIDS");

                entity.Property(e => e.Produit)
                    .HasColumnName("PRODUIT")
                    .HasMaxLength(50);

                entity.Property(e => e.Reason).HasColumnName("REASON");

                entity.Property(e => e.ReasonName).HasColumnName("REASON_NAME");

                entity.Property(e => e.StatusId)
                    .HasColumnName("STATUS_ID")
                    .HasMaxLength(10);

                entity.Property(e => e.TimeMax)
                    .HasColumnName("TIME_MAX")
                    .HasMaxLength(50);

                entity.Property(e => e.TripType)
                    .HasColumnName("TRIP_TYPE")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Tkpi12ExploitDeconsigneRenault>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI12_EXPLOIT_DECONSIGNE_RENAULT");

                entity.Property(e => e.CofrStatus)
                    .HasColumnName("COFR_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.CurrentDelay).HasColumnName("CURRENT_DELAY");

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(50);

                entity.Property(e => e.CustomerOrder)
                    .HasColumnName("CUSTOMER_ORDER")
                    .HasMaxLength(50);

                entity.Property(e => e.DayDelayCalculation)
                    .HasColumnName("DAY_DELAY_CALCULATION")
                    .HasMaxLength(50);

                entity.Property(e => e.DealerId)
                    .HasColumnName("DEALER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DelayResult).HasColumnName("DELAY_RESULT");

                entity.Property(e => e.DestinationId)
                    .HasColumnName("DESTINATION_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.EventDate)
                    .HasColumnName("EVENT_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.Finish).HasColumnName("FINISH");

                entity.Property(e => e.Flow)
                    .HasColumnName("FLOW")
                    .HasMaxLength(50);

                entity.Property(e => e.GroupStatus).HasColumnName("GROUP_STATUS");

                entity.Property(e => e.HuQty).HasColumnName("HU_QTY");

                entity.Property(e => e.IdUser).HasColumnName("ID_USER");

                entity.Property(e => e.LastEventName).HasColumnName("LAST_EVENT_NAME");

                entity.Property(e => e.LastEventReason)
                    .HasColumnName("LAST_EVENT_REASON")
                    .HasMaxLength(50);

                entity.Property(e => e.LastEventStatus)
                    .HasColumnName("LAST_EVENT_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderDate)
                    .HasColumnName("ORDER_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderMaxDelDate)
                    .HasColumnName("ORDER_MAX_DEL_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.OrderStatus)
                    .HasColumnName("ORDER_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelCab)
                    .HasColumnName("PARCEL_CAB")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelId)
                    .HasColumnName("PARCEL_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelUnique).HasColumnName("PARCEL_UNIQUE");

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(50);

                entity.Property(e => e.Poids).HasColumnName("POIDS");

                entity.Property(e => e.RefNumberDays).HasColumnName("REF_NUMBER_DAYS");

                entity.Property(e => e.TypeReturn)
                    .HasColumnName("TYPE_RETURN")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Tkpi12ExploitDeconsigneRenaultUp>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI12_EXPLOIT_DECONSIGNE_RENAULT_UP");

                entity.Property(e => e.CofrStatus)
                    .HasColumnName("COFR_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.CurrentDelay).HasColumnName("CURRENT_DELAY");

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(50);

                entity.Property(e => e.CustomerOrder)
                    .HasColumnName("CUSTOMER_ORDER")
                    .HasMaxLength(50);

                entity.Property(e => e.DayDelayCalculation)
                    .HasColumnName("DAY_DELAY_CALCULATION")
                    .HasMaxLength(50);

                entity.Property(e => e.DealerId)
                    .HasColumnName("DEALER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DelayResult).HasColumnName("DELAY_RESULT");

                entity.Property(e => e.DestinationId)
                    .HasColumnName("DESTINATION_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.EventDate)
                    .HasColumnName("EVENT_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.Finish).HasColumnName("FINISH");

                entity.Property(e => e.Flow)
                    .HasColumnName("FLOW")
                    .HasMaxLength(50);

                entity.Property(e => e.GroupStatus).HasColumnName("GROUP_STATUS");

                entity.Property(e => e.HuQty).HasColumnName("HU_QTY");

                entity.Property(e => e.IdUser).HasColumnName("ID_USER");

                entity.Property(e => e.LastEventName).HasColumnName("LAST_EVENT_NAME");

                entity.Property(e => e.LastEventReason)
                    .HasColumnName("LAST_EVENT_REASON")
                    .HasMaxLength(50);

                entity.Property(e => e.LastEventStatus)
                    .HasColumnName("LAST_EVENT_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderDate)
                    .HasColumnName("ORDER_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderDate3)
                    .HasColumnName("ORDER_DATE_3")
                    .HasColumnType("datetime");

                entity.Property(e => e.OrderMaxDelDate)
                    .HasColumnName("ORDER_MAX_DEL_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.OrderStatus)
                    .HasColumnName("ORDER_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelCab)
                    .HasColumnName("PARCEL_CAB")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelId)
                    .HasColumnName("PARCEL_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelUnique).HasColumnName("PARCEL_UNIQUE");

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(50);

                entity.Property(e => e.Poids).HasColumnName("POIDS");

                entity.Property(e => e.RefNumberDays).HasColumnName("REF_NUMBER_DAYS");

                entity.Property(e => e.TypeReturn)
                    .HasColumnName("TYPE_RETURN")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Tkpi13ExploitationLhl>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI13_EXPLOITATION_LHL");

                entity.Property(e => e.Ata)
                    .HasColumnName("ATA")
                    .HasColumnType("date");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(4);

                entity.Property(e => e.FinalHu).HasColumnName("FINAL_HU");

                entity.Property(e => e.HuToCharge).HasColumnName("HU_TO_CHARGE");

                entity.Property(e => e.IsLoading).HasColumnName("IS_LOADING");

                entity.Property(e => e.LineId)
                    .HasColumnName("LINE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.LoadedHuQty).HasColumnName("LOADED_HU_QTY");

                entity.Property(e => e.LoadingHuQty).HasColumnName("LOADING_HU_QTY");

                entity.Property(e => e.NbParcels).HasColumnName("NB_PARCELS");

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.RealTrace).HasColumnName("REAL_TRACE");

                entity.Property(e => e.Trace).HasColumnName("TRACE");

                entity.Property(e => e.TripId)
                    .HasColumnName("TRIP_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.UnloadingHuQty).HasColumnName("UNLOADING_HU_QTY");
            });

            modelBuilder.Entity<Tkpi13ExploitationLhlNbr>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI13_EXPLOITATION_LHL_NBR");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(4);

                entity.Property(e => e.EventDate)
                    .HasColumnName("EVENT_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.NbCab).HasColumnName("NB_CAB");

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.TypeLoading)
                    .HasColumnName("TYPE_LOADING")
                    .HasMaxLength(4);
            });

            modelBuilder.Entity<Tkpi13Lhl>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI13_LHL");

                entity.Property(e => e.Ata)
                    .HasColumnName("ATA")
                    .HasMaxLength(10);

                entity.Property(e => e.FinalHu).HasColumnName("FINAL_HU");

                entity.Property(e => e.HuToCahrge).HasColumnName("HU_TO_CAHRGE");

                entity.Property(e => e.IsLoading).HasColumnName("IS_LOADING");

                entity.Property(e => e.LineId)
                    .HasColumnName("LINE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.LoadedHuQty).HasColumnName("LOADED_HU_QTY");

                entity.Property(e => e.LoadingHuQty).HasColumnName("LOADING_HU_QTY");

                entity.Property(e => e.NbParcels).HasColumnName("NB_PARCELS");

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.RealTrace).HasColumnName("REAL_TRACE");

                entity.Property(e => e.Trace).HasColumnName("TRACE");

                entity.Property(e => e.TripId)
                    .HasColumnName("TRIP_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.UnloadingHuQty).HasColumnName("UNLOADING_HU_QTY");

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Tkpi13Pcs>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI13_PCS");

                entity.Property(e => e.Ata)
                    .HasColumnName("ATA")
                    .HasMaxLength(10);

                entity.Property(e => e.LineId)
                    .HasColumnName("LINE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Pf)
                    .HasColumnName("pf")
                    .HasMaxLength(50);

                entity.Property(e => e.ReasonId)
                    .HasColumnName("REASON_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.StatusId)
                    .HasColumnName("STATUS_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.TripId)
                    .HasColumnName("TRIP_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Tkpi14DafAdvalorem>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI14_DAF_ADVALOREM");

                entity.Property(e => e.Achats)
                    .HasColumnName("ACHATS")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.ArrPlatformId)
                    .HasColumnName("ARR_PLATFORM_ID")
                    .HasMaxLength(152);

                entity.Property(e => e.BarcodeExtNo)
                    .HasColumnName("BARCODE_EXT_NO")
                    .HasMaxLength(150);

                entity.Property(e => e.ClaimedValue)
                    .HasColumnName("CLAIMED_VALUE")
                    .HasColumnType("numeric(22, 15)");

                entity.Property(e => e.ClaimsExtNo)
                    .HasColumnName("CLAIMS_EXT_NO")
                    .HasMaxLength(140);

                entity.Property(e => e.ClaimsNo)
                    .HasColumnName("CLAIMS_NO")
                    .HasMaxLength(100);

                entity.Property(e => e.ClaimsRefusalReasonName).HasColumnName("CLAIMS_REFUSAL_REASON_NAME");

                entity.Property(e => e.CommercialValue)
                    .HasColumnName("COMMERCIAL_VALUE")
                    .HasColumnType("numeric(22, 15)");

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CreatorId)
                    .IsRequired()
                    .HasColumnName("CREATOR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DepPlatformId)
                    .HasColumnName("DEP_PLATFORM_ID")
                    .HasMaxLength(152);

                entity.Property(e => e.DiscrepancyDatetime)
                    .HasColumnName("DISCREPANCY_DATETIME")
                    .HasColumnType("date");

                entity.Property(e => e.DiscrepancyStatus)
                    .HasColumnName("DISCREPANCY_STATUS")
                    .HasMaxLength(12);

                entity.Property(e => e.GdsValNeg).HasColumnName("GDS_VAL_NEG");

                entity.Property(e => e.GdsValPos).HasColumnName("GDS_VAL_POS");

                entity.Property(e => e.InsuranceApplicationNo)
                    .HasColumnName("INSURANCE_APPLICATION_NO")
                    .HasMaxLength(280);

                entity.Property(e => e.InsuredValue)
                    .HasColumnName("INSURED_VALUE")
                    .HasColumnType("numeric(22, 15)");

                entity.Property(e => e.IsDirectInsRefund)
                    .HasColumnName("IS_DIRECT_INS_REFUND")
                    .HasMaxLength(4);

                entity.Property(e => e.OrdCgnId)
                    .HasColumnName("ORD_CGN_ID")
                    .HasMaxLength(152);

                entity.Property(e => e.OrdCgnName)
                    .HasColumnName("ORD_CGN_NAME")
                    .HasMaxLength(280);

                entity.Property(e => e.ResponsibleTpaId)
                    .HasColumnName("RESPONSIBLE_TPA_ID")
                    .HasMaxLength(152);

                entity.Property(e => e.RootCauseAnalysis)
                    .HasColumnName("ROOT_CAUSE_ANALYSIS")
                    .HasMaxLength(1024);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasColumnName("USER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Ventes)
                    .HasColumnName("VENTES")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.XaccountId)
                    .HasColumnName("XACCOUNT_ID")
                    .HasMaxLength(150);
            });

            modelBuilder.Entity<Tkpi15DafClaimsDoc>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI15_DAF_CLAIMS_DOC");

                entity.Property(e => e.Achats)
                    .HasColumnName("ACHATS")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.ClaimedValue)
                    .HasColumnName("CLAIMED_VALUE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.ClaimsNo)
                    .HasColumnName("CLAIMS_NO")
                    .HasMaxLength(100);

                entity.Property(e => e.ClaimsRefusalReasonName).HasColumnName("CLAIMS_REFUSAL_REASON_NAME");

                entity.Property(e => e.CommercialValue)
                    .HasColumnName("COMMERCIAL_VALUE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CreatorId)
                    .HasColumnName("CREATOR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Devis).HasColumnName("DEVIS");

                entity.Property(e => e.DiscrepancyDatetime)
                    .HasColumnName("DISCREPANCY_DATETIME")
                    .HasColumnType("date");

                entity.Property(e => e.DiscrepancyStatus)
                    .HasColumnName("DISCREPANCY_STATUS")
                    .HasMaxLength(12);

                entity.Property(e => e.EmailsInfos).HasColumnName("EMAILS_INFOS");

                entity.Property(e => e.ForwarderId)
                    .HasColumnName("FORWARDER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.FrLettreRefus).HasColumnName("FR_LETTRE_REFUS");

                entity.Property(e => e.FrLitigeLoti).HasColumnName("FR_LITIGE_LOTI");

                entity.Property(e => e.FrLitigeLotiAdValorem).HasColumnName("FR_LITIGE_LOTI_AD_VALOREM");

                entity.Property(e => e.FrMiseEnCause).HasColumnName("FR_MISE_EN_CAUSE");

                entity.Property(e => e.InsuredValue)
                    .HasColumnName("INSURED_VALUE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.InvoiceDate)
                    .HasColumnName("INVOICE_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.IsDirectInsRefund)
                    .HasColumnName("IS_DIRECT_INS_REFUND")
                    .HasMaxLength(4);

                entity.Property(e => e.IsSurveyorRequested)
                    .HasColumnName("IS_SURVEYOR_REQUESTED")
                    .HasMaxLength(10);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(100);

                entity.Property(e => e.RecepisseLivraisonClient).HasColumnName("RECEPISSE_LIVRAISON_CLIENT");

                entity.Property(e => e.RecepisseOriginalCat).HasColumnName("RECEPISSE_ORIGINAL_CAT");

                entity.Property(e => e.ReclamationClient).HasColumnName("RECLAMATION_CLIENT");

                entity.Property(e => e.ResponsibleTpaId).HasColumnName("RESPONSIBLE_TPA_ID");

                entity.Property(e => e.SupInvoiceNo)
                    .HasColumnName("SUP_INVOICE_NO")
                    .HasMaxLength(50);

                entity.Property(e => e.SupplierStatus)
                    .HasColumnName("SUPPLIER_STATUS")
                    .HasMaxLength(10);

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.Ventes)
                    .HasColumnName("VENTES")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.XaccountId)
                    .HasColumnName("XACCOUNT_ID")
                    .HasMaxLength(150);
            });

            modelBuilder.Entity<Tkpi16ExploitationMkrFolowUpDay>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI16_EXPLOITATION_MKR_FOLOW_UP_DAY");

                entity.Property(e => e.ArrDatetime)
                    .HasColumnName("ARR_DATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.CountPoint).HasColumnName("COUNT_POINT");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(4);

                entity.Property(e => e.DelTime)
                    .HasColumnName("DEL_TIME")
                    .HasMaxLength(50);

                entity.Property(e => e.DepDatetime)
                    .HasColumnName("DEP_DATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.DepPf)
                    .HasColumnName("DEP_PF")
                    .HasMaxLength(50);

                entity.Property(e => e.EndOfMission)
                    .HasColumnName("END_OF_MISSION")
                    .HasColumnType("datetime");

                entity.Property(e => e.MaxVolume)
                    .HasColumnName("MAX_VOLUME")
                    .HasMaxLength(100);

                entity.Property(e => e.MaxWeight)
                    .HasColumnName("MAX_WEIGHT")
                    .HasMaxLength(100);

                entity.Property(e => e.MaxWeightType)
                    .HasColumnName("MAX_WEIGHT_TYPE")
                    .HasMaxLength(100);

                entity.Property(e => e.MeansId)
                    .HasColumnName("MEANS_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.MeansType)
                    .HasColumnName("MEANS_TYPE")
                    .HasMaxLength(100);

                entity.Property(e => e.MmaxVolumeType)
                    .HasColumnName("MMAX_VOLUME_TYPE")
                    .HasMaxLength(100);

                entity.Property(e => e.NbOfDelStops).HasColumnName("NB_OF_DEL_STOPS");

                entity.Property(e => e.NbOfPkpStops).HasColumnName("NB_OF_PKP_STOPS");

                entity.Property(e => e.NbParcelsPerDelTime).HasColumnName("NB_PARCELS_PER_DEL_TIME");

                entity.Property(e => e.NbPieces).HasColumnName("NB_PIECES");

                entity.Property(e => e.PlannedPfArrival)
                    .HasColumnName("PLANNED_PF_ARRIVAL")
                    .HasColumnType("datetime");

                entity.Property(e => e.PlannedPfDeparture)
                    .HasColumnName("PLANNED_PF_DEPARTURE")
                    .HasColumnType("datetime");

                entity.Property(e => e.RealPfArrival)
                    .HasColumnName("REAL_PF_ARRIVAL")
                    .HasColumnType("datetime");

                entity.Property(e => e.RealPfDeparture)
                    .HasColumnName("REAL_PF_DEPARTURE")
                    .HasColumnType("datetime");

                entity.Property(e => e.RealisedKms).HasColumnName("REALISED_KMS");

                entity.Property(e => e.TotalVolume).HasColumnName("TOTAL_VOLUME");

                entity.Property(e => e.TotalWeight).HasColumnName("TOTAL_WEIGHT");

                entity.Property(e => e.TripFileId)
                    .HasColumnName("TRIP_FILE_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.TripLineId)
                    .HasColumnName("TRIP_LINE_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.TripStatus)
                    .HasColumnName("TRIP_STATUS")
                    .HasMaxLength(100);

                entity.Property(e => e.UserId).HasColumnName("USER_ID");
            });

            modelBuilder.Entity<Tkpi17Invoicingtcpe>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI17_INVOICINGTCPE");

                entity.Property(e => e.ArrCity)
                    .HasColumnName("ARR_CITY")
                    .HasMaxLength(100);

                entity.Property(e => e.Countunit).HasColumnName("COUNTUNIT");

                entity.Property(e => e.DepCity)
                    .HasColumnName("DEP_CITY")
                    .HasMaxLength(100);

                entity.Property(e => e.ForcUnit).HasColumnName("FORC_UNIT");

                entity.Property(e => e.InvoiceNum)
                    .HasColumnName("INVOICE_NUM")
                    .HasMaxLength(100);

                entity.Property(e => e.Key).HasMaxLength(50);

                entity.Property(e => e.SerId)
                    .HasColumnName("SER_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.SprId)
                    .HasColumnName("SPR_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.TrfResultTrfval).HasColumnName("trf_result_trfval");

                entity.Property(e => e.TripLineId)
                    .HasColumnName("TRIP_LINE_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Tkpi1PlfVolMonth>(entity =>
            {
                entity.HasKey(e => e.IdTkpi1)
                    .HasName("PK_TMP_TKPI1_PLF_VOL_MONTH");

                entity.ToTable("TKPI1_PLF_VOL_MONTH");

                entity.Property(e => e.IdTkpi1)
                    .HasColumnName("ID_TKPI1")
                    .ValueGeneratedNever();

                entity.Property(e => e.Cle)
                    .HasColumnName("CLE")
                    .HasMaxLength(100);

                entity.Property(e => e.Colis).HasColumnName("COLIS");

                entity.Property(e => e.Jour)
                    .HasColumnName("JOUR")
                    .HasColumnType("date");

                entity.Property(e => e.Libelle)
                    .HasColumnName("LIBELLE")
                    .HasMaxLength(50);

                entity.Property(e => e.Marque)
                    .HasColumnName("MARQUE")
                    .HasMaxLength(50);

                entity.Property(e => e.Mois)
                    .HasColumnName("MOIS")
                    .HasMaxLength(7);

                entity.Property(e => e.Pays)
                    .HasColumnName("PAYS")
                    .HasMaxLength(10);

                entity.Property(e => e.PaysDep)
                    .HasColumnName("PAYS_DEP")
                    .HasMaxLength(10);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.Poids)
                    .HasColumnName("POIDS")
                    .HasColumnType("decimal(38, 3)");

                entity.Property(e => e.Produit)
                    .HasColumnName("PRODUIT")
                    .HasMaxLength(50);

                entity.Property(e => e.Regime)
                    .HasColumnName("REGIME")
                    .HasMaxLength(50);

                entity.Property(e => e.Synthese)
                    .HasColumnName("SYNTHESE")
                    .HasColumnType("decimal(38, 3)");
            });

            modelBuilder.Entity<Tkpi1PlfVolMonthOpendays>(entity =>
            {
                entity.HasKey(e => e.IdTkpi1)
                    .HasName("PK_TMP_TKPI1_PLF_VOL_MONTH_OPENDAYS");

                entity.ToTable("TKPI1_PLF_VOL_MONTH_OPENDAYS");

                entity.Property(e => e.IdTkpi1)
                    .HasColumnName("ID_TKPI1")
                    .ValueGeneratedNever();

                entity.Property(e => e.Colis).HasColumnName("COLIS");

                entity.Property(e => e.DayOfTheWeek).HasMaxLength(10);

                entity.Property(e => e.Jour)
                    .HasColumnName("JOUR")
                    .HasColumnType("date");

                entity.Property(e => e.Marque)
                    .HasColumnName("MARQUE")
                    .HasMaxLength(50);

                entity.Property(e => e.MonthDay).HasMaxLength(10);

                entity.Property(e => e.Pays)
                    .HasColumnName("PAYS")
                    .HasMaxLength(10);

                entity.Property(e => e.PaysDep)
                    .HasColumnName("PAYS_DEP")
                    .HasMaxLength(10);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.Poids)
                    .HasColumnName("POIDS")
                    .HasColumnType("decimal(38, 3)");

                entity.Property(e => e.Produit)
                    .HasColumnName("PRODUIT")
                    .HasMaxLength(50);

                entity.Property(e => e.Regime)
                    .HasColumnName("REGIME")
                    .HasMaxLength(50);

                entity.Property(e => e.Synthese)
                    .HasColumnName("SYNTHESE")
                    .HasColumnType("decimal(38, 3)");
            });

            modelBuilder.Entity<Tkpi20FrCertifJourDateToutClient>(entity =>
            {
                entity.ToTable("TKPI20_FR_CERTIF_JOUR_DATE_TOUT_CLIENT");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Cp)
                    .HasColumnName("CP")
                    .HasMaxLength(50);

                entity.Property(e => e.DateDep)
                    .HasColumnName("Date_Dep")
                    .HasColumnType("datetime");

                entity.Property(e => e.DateDexpédition)
                    .HasColumnName("Date_dexpédition")
                    .HasColumnType("datetime");

                entity.Property(e => e.Destinataire).HasMaxLength(50);

                entity.Property(e => e.Marque).HasMaxLength(50);

                entity.Property(e => e.Nom).HasMaxLength(100);

                entity.Property(e => e.PlateformeLivraison)
                    .HasColumnName("Plateforme_livraison")
                    .HasMaxLength(50);

                entity.Property(e => e.ReasonId)
                    .HasColumnName("REASON_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.SprId)
                    .HasColumnName("Spr_Id")
                    .HasMaxLength(250);

                entity.Property(e => e.Tournée)
                    .HasColumnName("tournée")
                    .HasMaxLength(50);

                entity.Property(e => e.Ville).HasMaxLength(50);
            });

            modelBuilder.Entity<Tkpi20FrControlePerfPf>(entity =>
            {
                entity.ToTable("TKPI20_FR_CONTROLE_PERF_PF");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.CodeRaison)
                    .HasColumnName("Code_Raison")
                    .HasMaxLength(50);

                entity.Property(e => e.DateHeureLivraisonMax)
                    .HasColumnName("Date_Heure_livraison_max")
                    .HasMaxLength(50);

                entity.Property(e => e.DateHeureLivraisonReelle)
                    .HasColumnName("Date_Heure_livraison_reelle")
                    .HasMaxLength(50);

                entity.Property(e => e.Do)
                    .HasColumnName("DO")
                    .HasMaxLength(50);

                entity.Property(e => e.Fournisseur).HasMaxLength(50);

                entity.Property(e => e.NbrColis).HasColumnName("Nbr_Colis");

                entity.Property(e => e.NomDeLaRaison).HasMaxLength(100);

                entity.Property(e => e.NumCompte)
                    .HasColumnName("Num_Compte")
                    .HasMaxLength(50);

                entity.Property(e => e.NumRécépissé)
                    .HasColumnName("Num_récépissé")
                    .HasMaxLength(50);

                entity.Property(e => e.NumTournée)
                    .HasColumnName("Num_Tournée")
                    .HasMaxLength(50);

                entity.Property(e => e.NumVoyage)
                    .HasColumnName("Num_Voyage")
                    .HasMaxLength(50);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(2);

                entity.Property(e => e.PlannedStartDateTime).HasColumnType("datetime");

                entity.Property(e => e.PlatformCountry).HasMaxLength(2);

                entity.Property(e => e.PoidsColis)
                    .HasColumnName("poids_colis")
                    .HasColumnType("numeric(11, 3)");

                entity.Property(e => e.Produit).HasMaxLength(50);

                entity.Property(e => e.RsClient)
                    .HasColumnName("RS_Client")
                    .HasMaxLength(100);

                entity.Property(e => e.Ville).HasMaxLength(100);
            });

            modelBuilder.Entity<Tkpi20FrPerfToyotaManuelV2>(entity =>
            {
                entity.ToTable("TKPI20_FR_PERF_TOYOTA_MANUEL_V2");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Adress)
                    .HasColumnName("ADRESS")
                    .HasMaxLength(40);

                entity.Property(e => e.CatPf)
                    .HasColumnName("CAT_PF")
                    .HasMaxLength(38);

                entity.Property(e => e.City)
                    .HasColumnName("CITY")
                    .HasMaxLength(40);

                entity.Property(e => e.ColisResteAQuai)
                    .HasColumnName("colis_reste_a_quai")
                    .HasMaxLength(50);

                entity.Property(e => e.DateDep)
                    .HasColumnName("Date_Dep")
                    .HasColumnType("datetime");

                entity.Property(e => e.DealerCode)
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(6);

                entity.Property(e => e.DealerName)
                    .HasColumnName("DEALER_NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.DeliveryDate)
                    .HasColumnName("DELIVERY_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.DeliveryTime)
                    .HasColumnName("DELIVERY_TIME")
                    .HasMaxLength(50);

                entity.Property(e => e.HeureLivraisonEstimee)
                    .HasColumnName("Heure_livraison_estimee")
                    .HasMaxLength(50);

                entity.Property(e => e.HeureMax).HasMaxLength(50);

                entity.Property(e => e.MilkRun)
                    .HasColumnName("MILK_RUN")
                    .HasMaxLength(38);

                entity.Property(e => e.Raison).HasMaxLength(50);

                entity.Property(e => e.Shipper)
                    .HasColumnName("SHIPPER")
                    .HasMaxLength(5);

                entity.Property(e => e.WithoutLabel)
                    .HasColumnName("Without_label")
                    .HasMaxLength(50);

                entity.Property(e => e.Zipcode)
                    .HasColumnName("ZIPCODE")
                    .HasMaxLength(12);
            });

            modelBuilder.Entity<Tkpi20FrPfRecepissesGloba>(entity =>
            {
                entity.ToTable("TKPI20_FR_PF_RECEPISSES_GLOBA");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Cp)
                    .HasColumnName("CP")
                    .HasMaxLength(12);

                entity.Property(e => e.DateEdition)
                    .HasColumnName("date_edition")
                    .HasMaxLength(25);

                entity.Property(e => e.DateExpedition)
                    .HasColumnName("Date_Expedition")
                    .HasColumnType("datetime");

                entity.Property(e => e.DateScan)
                    .HasColumnName("Date_scan")
                    .HasMaxLength(25);

                entity.Property(e => e.Destinataire).HasMaxLength(50);

                entity.Property(e => e.Flashage).HasMaxLength(25);

                entity.Property(e => e.Marque).HasMaxLength(38);

                entity.Property(e => e.NumRecep)
                    .HasColumnName("Num_Recep")
                    .HasMaxLength(25);

                entity.Property(e => e.NumTournée)
                    .HasColumnName("Num_Tournée")
                    .HasMaxLength(38);

                entity.Property(e => e.PfArrivée)
                    .HasColumnName("Pf_Arrivée")
                    .HasMaxLength(38);

                entity.Property(e => e.PfDistribution)
                    .HasColumnName("PF_Distribution")
                    .HasMaxLength(38);

                entity.Property(e => e.RsDestinataire)
                    .HasColumnName("RS_Destinataire")
                    .HasMaxLength(70);

                entity.Property(e => e.Ville).HasMaxLength(40);
            });

            modelBuilder.Entity<Tkpi20FrTourneeForcage>(entity =>
            {
                entity.ToTable("TKPI20_FR_TOURNEE_FORCAGE");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.DateEvenement).HasColumnName("Date_Evenement");

                entity.Property(e => e.DesDefDeo)
                    .HasColumnName("DES/DEF/DEO")
                    .HasMaxLength(50);

                entity.Property(e => e.IdLigne)
                    .HasColumnName("ID_Ligne")
                    .HasMaxLength(50);

                entity.Property(e => e.Marque).HasMaxLength(50);

                entity.Property(e => e.NumColis)
                    .HasColumnName("Num_Colis")
                    .HasMaxLength(50);

                entity.Property(e => e.OperAreaId)
                    .HasColumnName("Oper_area_id")
                    .HasMaxLength(50);

                entity.Property(e => e.PlatformCountry).HasMaxLength(50);

                entity.Property(e => e.Produit).HasMaxLength(50);

                entity.Property(e => e.Ville).HasMaxLength(50);
            });

            modelBuilder.Entity<Tkpi2DailyPerfDelayDet>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DAILY_PERF_DELAY_DET");

                entity.HasIndex(e => e.Brand)
                    .HasName("index_Brand");

                entity.HasIndex(e => e.MaxDelDate)
                    .HasName("Index_MaxDelDate");

                entity.HasIndex(e => e.ShipmentDate)
                    .HasName("Index_Shipment_Date_Clustered")
                    .IsClustered();

                entity.HasIndex(e => new { e.IdTkpi2det, e.Brand, e.ShipmentCode, e.ShipmentDate, e.ParcelNumber })
                    .HasName("Index_Parcel");

                entity.HasIndex(e => new { e.ParcelNumber, e.DealerCode, e.DealerName, e.PcsGroup, e.Brand, e.PfDistri, e.ShipmentDate, e.SoldProduct })
                    .HasName("Index_Brand_Pf_Date_Product");

                entity.HasIndex(e => new { e.ParcelNumber, e.Brand, e.ShipmentCode, e.DealerCode, e.DealerName, e.DealerZip, e.DealerCity, e.PfDistri, e.MrNumber, e.ShipmentDate, e.DeliveryDate, e.DeliveryTime, e.MaxDeliveryDate, e.MaxDeliveryTime, e.Responsible, e.LastEventReason, e.LastEventStatus, e.LastEventDate, e.LastEventHour, e.IdEventOp, e.SoldProduct, e.Country, e.PcsGroup, e.MaxDelDate })
                    .HasName("Index_Country_Pcs_MaxDate");

                entity.HasIndex(e => new { e.ParcelNumber, e.Brand, e.ShipmentCode, e.DealerCode, e.DealerName, e.DealerZip, e.DealerCity, e.MrNumber, e.DeliveryDate, e.DeliveryTime, e.MaxDeliveryDate, e.MaxDeliveryTime, e.Responsible, e.LastEventReason, e.LastEventName, e.LastEventStatus, e.LastEventDate, e.LastEventHour, e.IdEventOp, e.SoldProduct, e.GrsWgt, e.Doublon, e.Country, e.PfDistri, e.PcsGroup, e.ShipmentDate })
                    .HasName("INDEX_CountryPfGroupShipment");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.CntHuType)
                    .HasColumnName("CNT_HU_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("CONSIGNEE_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CurrentPf)
                    .HasColumnName("CURRENT_PF")
                    .HasMaxLength(20);

                entity.Property(e => e.DaysTotalDelayOrder).HasColumnName("DAYS_TOTAL_DELAY_ORDER");

                entity.Property(e => e.DealerCity)
                    .HasColumnName("DEALER_CITY")
                    .HasMaxLength(40);

                entity.Property(e => e.DealerCode)
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(38);

                entity.Property(e => e.DealerName)
                    .HasColumnName("DEALER_NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.DealerZip)
                    .HasColumnName("DEALER_ZIP")
                    .HasMaxLength(12);

                entity.Property(e => e.DelStatusMoto)
                    .HasColumnName("DEL_STATUS_MOTO")
                    .HasMaxLength(40);

                entity.Property(e => e.DeliveryDate)
                    .HasColumnName("DELIVERY_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.DeliveryTime)
                    .HasColumnName("DELIVERY_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.Doublon).HasColumnName("doublon");

                entity.Property(e => e.ForcedDate)
                    .HasColumnName("FORCED_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.ForcedGrp)
                    .HasColumnName("FORCED_GRP")
                    .HasMaxLength(2);

                entity.Property(e => e.ForcedReasonCode)
                    .HasColumnName("FORCED_REASON_CODE")
                    .HasMaxLength(20);

                entity.Property(e => e.ForcedStatus)
                    .HasColumnName("FORCED_STATUS")
                    .HasMaxLength(20);

                entity.Property(e => e.ForcedTime)
                    .HasColumnName("FORCED_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.ForcedTraceOriginKind)
                    .HasColumnName("FORCED_TRACE_ORIGIN_KIND")
                    .HasMaxLength(7);

                entity.Property(e => e.GrsWgt).HasColumnName("GRS_WGT");

                entity.Property(e => e.IdEventOp)
                    .HasColumnName("ID_EVENT_OP")
                    .HasColumnType("nvarchar(max)");

                entity.Property(e => e.IdTkpi2det).HasColumnName("ID_TKPI2DET");

                entity.Property(e => e.LastEventDate)
                    .HasColumnName("LAST_EVENT_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.LastEventHour)
                    .HasColumnName("LAST_EVENT_HOUR")
                    .HasMaxLength(7);

                entity.Property(e => e.LastEventName)
                    .HasColumnName("LAST_EVENT_NAME")
                    .HasMaxLength(80);

                entity.Property(e => e.LastEventReason)
                    .HasColumnName("LAST_EVENT_REASON")
                    .HasMaxLength(8);

                entity.Property(e => e.LastEventStatus)
                    .HasColumnName("LAST_EVENT_STATUS")
                    .HasMaxLength(8);

                entity.Property(e => e.MaxDelDate)
                    .HasColumnName("MAX_DEL_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.MaxDeliveryDate)
                    .HasColumnName("MAX_DELIVERY_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.MaxDeliveryTime)
                    .HasColumnName("MAX_DELIVERY_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.MrNumber)
                    .HasColumnName("MR_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(20);

                entity.Property(e => e.OwnerCountry)
                    .HasColumnName("OWNER_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.ParcelNumber)
                    .HasColumnName("PARCEL_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.PcsGroup)
                    .HasColumnName("PCS_GROUP")
                    .HasMaxLength(384);

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.Responsible)
                    .HasColumnName("RESPONSIBLE")
                    .HasMaxLength(18);

                entity.Property(e => e.ShipmentCode)
                    .HasColumnName("SHIPMENT_CODE")
                    .HasMaxLength(38);

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.SupplierId).HasColumnName("SUPPLIER_ID");
            });

            modelBuilder.Entity<Tkpi2DailyPerfDelayDetForced>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DAILY_PERF_DELAY_DET_FORCED");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.CntHuType)
                    .HasColumnName("CNT_HU_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CurrentPf)
                    .HasColumnName("CURRENT_PF")
                    .HasMaxLength(20);

                entity.Property(e => e.DaysTotalDelayOrder).HasColumnName("DAYS_TOTAL_DELAY_ORDER");

                entity.Property(e => e.DealerCity)
                    .HasColumnName("DEALER_CITY")
                    .HasMaxLength(40);

                entity.Property(e => e.DealerCode)
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(38);

                entity.Property(e => e.DealerName)
                    .HasColumnName("DEALER_NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.DealerZip)
                    .HasColumnName("DEALER_ZIP")
                    .HasMaxLength(12);

                entity.Property(e => e.DelStatusMoto)
                    .HasColumnName("DEL_STATUS_MOTO")
                    .HasMaxLength(40);

                entity.Property(e => e.DeliveryDate)
                    .HasColumnName("DELIVERY_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.DeliveryTime)
                    .HasColumnName("DELIVERY_TIME")
                    .HasMaxLength(50);

                entity.Property(e => e.Doublon).HasColumnName("DOUBLON");

                entity.Property(e => e.ForcedDate)
                    .HasColumnName("FORCED_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.ForcedGrp)
                    .HasColumnName("FORCED_GRP")
                    .HasMaxLength(2);

                entity.Property(e => e.ForcedReasonCode)
                    .HasColumnName("FORCED_REASON_CODE")
                    .HasMaxLength(20);

                entity.Property(e => e.ForcedStatus)
                    .HasColumnName("FORCED_STATUS")
                    .HasMaxLength(20);

                entity.Property(e => e.ForcedTime)
                    .HasColumnName("FORCED_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.ForcedTraceOriginKind)
                    .HasColumnName("FORCED_TRACE_ORIGIN_KIND")
                    .HasMaxLength(7);

                entity.Property(e => e.GrsWgt).HasColumnName("GRS_WGT");

                entity.Property(e => e.IdEventOp)
                    .HasColumnName("ID_EVENT_OP")
                    .HasMaxLength(50);

                entity.Property(e => e.IdTkpi2det).HasColumnName("ID_TKPI2DET");

                entity.Property(e => e.LastEventDate)
                    .HasColumnName("LAST_EVENT_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.LastEventHour)
                    .HasColumnName("LAST_EVENT_HOUR")
                    .HasMaxLength(7);

                entity.Property(e => e.LastEventName).HasColumnName("LAST_EVENT_NAME");

                entity.Property(e => e.LastEventReason)
                    .HasColumnName("LAST_EVENT_REASON")
                    .HasMaxLength(100);

                entity.Property(e => e.LastEventStatus)
                    .HasColumnName("LAST_EVENT_STATUS")
                    .HasMaxLength(8);

                entity.Property(e => e.MaxDelDate)
                    .HasColumnName("MAX_DEL_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.MaxDeliveryDate)
                    .HasColumnName("MAX_DELIVERY_DATE")
                    .HasMaxLength(50);

                entity.Property(e => e.MaxDeliveryTime)
                    .HasColumnName("MAX_DELIVERY_TIME")
                    .HasMaxLength(50);

                entity.Property(e => e.MrNumber)
                    .HasColumnName("MR_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(20);

                entity.Property(e => e.ParcelNumber)
                    .HasColumnName("PARCEL_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.PcsGroup)
                    .HasColumnName("PCS_GROUP")
                    .HasMaxLength(384);

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.Responsible)
                    .HasColumnName("RESPONSIBLE")
                    .HasMaxLength(18);

                entity.Property(e => e.ShipmentCode)
                    .HasColumnName("SHIPMENT_CODE")
                    .HasMaxLength(38);

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Tkpi2DailyPerfDelaySum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DAILY_PERF_DELAY_SUM");

                entity.HasIndex(e => e.Brand)
                    .HasName("Index_Brand");

                entity.HasIndex(e => e.ShipmentDate)
                    .HasName("Index_Shipment_Date");

                entity.HasIndex(e => new { e.ShipmentDate, e.Brand, e.SoldProduct, e.TotalPcs, e.OnTime, e.DelayNoCat, e.DelayCat, e.NoReasonDelay, e.NoTrace, e.NoReceived, e.Country, e.PfDistri })
                    .HasName("Index_Country_PF");

                entity.HasIndex(e => new { e.SoldProduct, e.TotalPcs, e.OnTime, e.DelayNoCat, e.DelayCat, e.NoReasonDelay, e.NoTrace, e.NoReceived, e.Country, e.Brand, e.ShipmentDate, e.PfDistri })
                    .HasName("Index_Country_Brand_Date_Pf");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("CONSIGNEE_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.DelayCat).HasColumnName("DELAY_CAT");

                entity.Property(e => e.DelayNoCat).HasColumnName("DELAY_NO_CAT");

                entity.Property(e => e.NoReasonDelay).HasColumnName("NO_REASON_DELAY");

                entity.Property(e => e.NoReceived).HasColumnName("NO_RECEIVED");

                entity.Property(e => e.NoTrace).HasColumnName("NO_TRACE");

                entity.Property(e => e.NoTraceDelBeforeMaxDelDate).HasColumnName("NO_TRACE_DEL_BEFORE_MAX_DEL_DATE");

                entity.Property(e => e.OnTime).HasColumnName("ON_TIME");

                entity.Property(e => e.OwnerCountry)
                    .HasColumnName("OWNER_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.TotalPcs).HasColumnName("TOTAL_PCS");
            });

            modelBuilder.Entity<Tkpi2DailyPerfDelaySum2>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DAILY_PERF_DELAY_SUM_2");

                entity.HasIndex(e => e.ShipmentDate)
                    .HasName("NonClusteredIndex-20241202-151737");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("CONSIGNEE_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.DealerCode)
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(100);

                entity.Property(e => e.DelayCat).HasColumnName("DELAY_CAT");

                entity.Property(e => e.DelayNoCat).HasColumnName("DELAY_NO_CAT");

                entity.Property(e => e.NoReasonDelay).HasColumnName("NO_REASON_DELAY");

                entity.Property(e => e.NoReceived).HasColumnName("NO_RECEIVED");

                entity.Property(e => e.NoTrace).HasColumnName("NO_TRACE");

                entity.Property(e => e.NoTraceDelBeforeMaxDelDate).HasColumnName("NO_TRACE_DEL_BEFORE_MAX_DEL_DATE");

                entity.Property(e => e.OnTime).HasColumnName("ON_TIME");

                entity.Property(e => e.OwnerCountry)
                    .HasColumnName("OWNER_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.ShipmentCode)
                    .HasColumnName("SHIPMENT_CODE")
                    .HasMaxLength(100);

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.TotalPcs).HasColumnName("TOTAL_PCS");
            });

            modelBuilder.Entity<Tkpi2DailyPerfDelaySumMaxDeliveryDate>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DAILY_PERF_DELAY_SUM__MAX_DELIVERY_DATE");

                entity.HasIndex(e => new { e.Brand, e.SoldProduct, e.TotalPcs, e.OnTime, e.DelayNoCat, e.DelayCat, e.NoReasonDelay, e.NoTrace, e.NoReceived, e.MaxDeliveryDate, e.Country, e.PfDistri })
                    .HasName("Index_Date_Country_PF");

                entity.HasIndex(e => new { e.MaxDeliveryDate, e.Brand, e.SoldProduct, e.TotalPcs, e.OnTime, e.DelayNoCat, e.DelayCat, e.NoReasonDelay, e.NoTrace, e.NoReceived, e.Country, e.PfDistri })
                    .HasName("Index_Country_Pf");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.DelayCat).HasColumnName("DELAY_CAT");

                entity.Property(e => e.DelayNoCat).HasColumnName("DELAY_NO_CAT");

                entity.Property(e => e.Etd)
                    .HasColumnName("ETD")
                    .HasColumnType("date");

                entity.Property(e => e.MaxDeliveryDate)
                    .HasColumnName("MAX_DELIVERY_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.NoReasonDelay).HasColumnName("NO_REASON_DELAY");

                entity.Property(e => e.NoReceived).HasColumnName("NO_RECEIVED");

                entity.Property(e => e.NoTrace).HasColumnName("NO_TRACE");

                entity.Property(e => e.NoTraceDelBeforeMaxDelDate).HasColumnName("NO_TRACE_DEL_BEFORE_MAX_DEL_DATE");

                entity.Property(e => e.OnTime).HasColumnName("ON_TIME");

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.TotalPcs).HasColumnName("TOTAL_PCS");
            });

            modelBuilder.Entity<Tkpi2DailyPerfDelaySumMaxDeliveryDate2>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DAILY_PERF_DELAY_SUM__MAX_DELIVERY_DATE_2");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.DealerCode)
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(100);

                entity.Property(e => e.DelayCat).HasColumnName("DELAY_CAT");

                entity.Property(e => e.DelayNoCat).HasColumnName("DELAY_NO_CAT");

                entity.Property(e => e.Etd)
                    .HasColumnName("ETD")
                    .HasColumnType("date");

                entity.Property(e => e.MaxDeliveryDate)
                    .HasColumnName("MAX_DELIVERY_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.NoReasonDelay).HasColumnName("NO_REASON_DELAY");

                entity.Property(e => e.NoReceived).HasColumnName("NO_RECEIVED");

                entity.Property(e => e.NoTrace).HasColumnName("NO_TRACE");

                entity.Property(e => e.NoTraceDelBeforeMaxDelDate).HasColumnName("NO_TRACE_DEL_BEFORE_MAX_DEL_DATE");

                entity.Property(e => e.OnTime).HasColumnName("ON_TIME");

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.ShipmentCode)
                    .HasColumnName("SHIPMENT_CODE")
                    .HasMaxLength(100);

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.TotalPcs).HasColumnName("TOTAL_PCS");
            });

            modelBuilder.Entity<Tkpi2DelayForcedMrSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DELAY_FORCED_MR_SUM");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.ForcedDriver).HasColumnName("FORCED_DRIVER");

                entity.Property(e => e.MrNumber)
                    .HasColumnName("MR_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.NoDeliveryDate).HasColumnName("NO_DELIVERY_DATE");

                entity.Property(e => e.NotReceived).HasColumnName("NOT_RECEIVED");

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.Scanned).HasColumnName("SCANNED");

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.TotalPcs).HasColumnName("TOTAL_PCS");

                entity.Property(e => e.UpdatedPf).HasColumnName("UPDATED_PF");
            });

            modelBuilder.Entity<Tkpi2DelayForcedMrSumForced>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DELAY_FORCED_MR_SUM_FORCED");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.DeliveryDate)
                    .HasColumnName("DELIVERY_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.ForcedDriver).HasColumnName("FORCED_DRIVER");

                entity.Property(e => e.MrNumber)
                    .HasColumnName("MR_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.NoDeliveryDate).HasColumnName("NO_DELIVERY_DATE");

                entity.Property(e => e.NotReceived).HasColumnName("NOT_RECEIVED");

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.Scanned).HasColumnName("SCANNED");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.TotalPcs).HasColumnName("TOTAL_PCS");

                entity.Property(e => e.UpdatedPf).HasColumnName("UPDATED_PF");

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Tkpi2DelayForcedPfSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_DELAY_FORCED_PF_SUM");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.ForcedDriver).HasColumnName("FORCED_DRIVER");

                entity.Property(e => e.NoDeliveryDate).HasColumnName("NO_DELIVERY_DATE");

                entity.Property(e => e.NotReceived).HasColumnName("NOT_RECEIVED");

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.Scanned).HasColumnName("SCANNED");

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.TotalPcs).HasColumnName("TOTAL_PCS");

                entity.Property(e => e.UpdatedPf).HasColumnName("UPDATED_PF");
            });

            modelBuilder.Entity<Tkpi2MonthlyDelayForcedAndScansPfSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_MONTHLY_DELAY_FORCED_AND_SCANS_PF_SUM");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.DeliveredScannedParcelTotal).HasColumnName("DELIVERED_SCANNED_PARCEL_TOTAL");

                entity.Property(e => e.ForcedByDriverParcelTotal).HasColumnName("FORCED_BY_DRIVER_PARCEL_TOTAL");

                entity.Property(e => e.FormattedShipmentDate)
                    .HasColumnName("FORMATTED_SHIPMENT_DATE")
                    .HasMaxLength(4000);

                entity.Property(e => e.NotDeliveredParcelTotal).HasColumnName("NOT_DELIVERED_PARCEL_TOTAL");

                entity.Property(e => e.NotReceivedParcelTotal).HasColumnName("NOT_RECEIVED_PARCEL_TOTAL");

                entity.Property(e => e.ParcelNotReceivedExcludedTotal).HasColumnName("PARCEL_NOT_RECEIVED_Excluded_TOTAL");

                entity.Property(e => e.ParcelTotal).HasColumnName("PARCEL_TOTAL");

                entity.Property(e => e.ProductRange)
                    .HasColumnName("PRODUCT_RANGE")
                    .HasMaxLength(50);

                entity.Property(e => e.ScannedForcedParcelTotal).HasColumnName("SCANNED_FORCED_PARCEL_TOTAL");

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.UpdatedByPlatformParcelTotal).HasColumnName("UPDATED_BY_PLATFORM_PARCEL_TOTAL");
            });

            modelBuilder.Entity<Tkpi2MonthlyDelayForcedPfSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_MONTHLY_DELAY_FORCED_PF_SUM");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.DeliveredScannedParcelTotal).HasColumnName("DELIVERED_SCANNED_PARCEL_TOTAL");

                entity.Property(e => e.ForcedByDriverParcelTotal).HasColumnName("FORCED_BY_DRIVER_PARCEL_TOTAL");

                entity.Property(e => e.FormattedShipmentDate)
                    .HasColumnName("FORMATTED_SHIPMENT_DATE")
                    .HasMaxLength(4000);

                entity.Property(e => e.NotDeliveredParcelTotal).HasColumnName("NOT_DELIVERED_PARCEL_TOTAL");

                entity.Property(e => e.NotReceivedParcelTotal).HasColumnName("NOT_RECEIVED_PARCEL_TOTAL");

                entity.Property(e => e.ParcelNotReceivedExcludedTotal).HasColumnName("PARCEL_NOT_RECEIVED_Excluded_TOTAL");

                entity.Property(e => e.ParcelTotal).HasColumnName("PARCEL_TOTAL");

                entity.Property(e => e.ProductRange)
                    .HasColumnName("PRODUCT_RANGE")
                    .HasMaxLength(50);

                entity.Property(e => e.ScannedForcedParcelTotal).HasColumnName("SCANNED_FORCED_PARCEL_TOTAL");

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.UpdatedByPlatformParcelTotal).HasColumnName("UPDATED_BY_PLATFORM_PARCEL_TOTAL");
            });

            modelBuilder.Entity<Tkpi2MonthlyPerfDelaySum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI2_MONTHLY_PERF_DELAY_SUM");

                entity.HasIndex(e => new { e.ShipmentDate, e.Brand, e.ShipmentCode, e.DealerCode, e.SoldProduct, e.TotalPcs, e.OnTime, e.DelayNoCat, e.DelayCat, e.NoReasonDelay, e.NoTrace, e.NoReceived, e.Country, e.PfDistri })
                    .HasName("IX_COUNTRY_PF");

                entity.HasIndex(e => new { e.ShipmentDate, e.ShipmentCode, e.DealerCode, e.TotalPcs, e.OnTime, e.DelayNoCat, e.DelayCat, e.NoReasonDelay, e.NoTrace, e.NoReceived, e.Country, e.PfDistri, e.Brand, e.SoldProduct })
                    .HasName("IX_COUNTRY_PF_BRAND_PRODUCT");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("CONSIGNEE_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.DealerCode)
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(100);

                entity.Property(e => e.DelayCat).HasColumnName("DELAY_CAT");

                entity.Property(e => e.DelayNoCat).HasColumnName("DELAY_NO_CAT");

                entity.Property(e => e.NoReasonDelay).HasColumnName("NO_REASON_DELAY");

                entity.Property(e => e.NoReceived).HasColumnName("NO_RECEIVED");

                entity.Property(e => e.NoTrace).HasColumnName("NO_TRACE");

                entity.Property(e => e.NoTraceDelBeforeMaxDelDate).HasColumnName("NO_TRACE_DEL_BEFORE_MAX_DEL_DATE");

                entity.Property(e => e.OnTime).HasColumnName("ON_TIME");

                entity.Property(e => e.OwnerCountry)
                    .HasColumnName("OWNER_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.PfDistri)
                    .HasColumnName("PF_DISTRI")
                    .HasMaxLength(38);

                entity.Property(e => e.ShipmentCode)
                    .HasColumnName("SHIPMENT_CODE")
                    .HasMaxLength(100);

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasMaxLength(20);

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.TotalPcs).HasColumnName("TOTAL_PCS");
            });

            modelBuilder.Entity<Tkpi3DailyDamageDet>(entity =>
            {
                entity.HasKey(e => e.IdTkpi3det);

                entity.ToTable("TKPI3_DAILY_DAMAGE_DET");

                entity.Property(e => e.IdTkpi3det)
                    .HasColumnName("ID_TKPI3DET")
                    .ValueGeneratedNever();

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("CREATED_DATE")
                    .HasMaxLength(16);

                entity.Property(e => e.LhMr)
                    .HasColumnName("LH_MR")
                    .HasMaxLength(50);

                entity.Property(e => e.LineType)
                    .HasColumnName("LINE_TYPE")
                    .HasMaxLength(25);

                entity.Property(e => e.ParcelId)
                    .HasColumnName("PARCEL_ID")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.ParcelNumber)
                    .HasColumnName("PARCEL_NUMBER")
                    .HasMaxLength(50);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(20);

                entity.Property(e => e.ReasonId)
                    .HasColumnName("REASON_ID")
                    .HasMaxLength(8);

                entity.Property(e => e.ReasonName).HasColumnName("REASON_NAME");

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasMaxLength(6);

                entity.Property(e => e.UserCreator)
                    .HasColumnName("USER_CREATOR")
                    .HasMaxLength(70);
            });

            modelBuilder.Entity<Tkpi3DailyDamageSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI3_DAILY_DAMAGE_SUM");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(20);

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.TotalDmgLh).HasColumnName("TOTAL_DMG_LH");

                entity.Property(e => e.TotalDmgMr).HasColumnName("TOTAL_DMG_MR");

                entity.Property(e => e.TotalDmgPf).HasColumnName("TOTAL_DMG_PF");

                entity.Property(e => e.TotalParcel).HasColumnName("TOTAL_PARCEL");
            });

            modelBuilder.Entity<Tkpi4CountryDailyMrCostPerformance>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI4_COUNTRY_DAILY_MR_COST_PERFORMANCE");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.MrBusiness)
                    .HasColumnName("MR_BUSINESS")
                    .HasMaxLength(100);

                entity.Property(e => e.MrDay)
                    .HasColumnName("MR_DAY")
                    .HasColumnType("datetime");

                entity.Property(e => e.MrNumber)
                    .HasColumnName("MR_NUMBER")
                    .HasMaxLength(100);

                entity.Property(e => e.MrTripFile)
                    .HasColumnName("MR_TRIP_FILE")
                    .HasMaxLength(100);

                entity.Property(e => e.MrType)
                    .HasColumnName("MR_TYPE")
                    .HasMaxLength(100);

                entity.Property(e => e.NumberDeliveryPoints).HasColumnName("NUMBER_DELIVERY_POINTS");

                entity.Property(e => e.NumberTouchPoints).HasColumnName("NUMBER_TOUCH_POINTS");

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(100);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasMaxLength(100);

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SUPPLIER_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.TotalCost)
                    .HasColumnName("TOTAL_COST")
                    .HasColumnType("numeric(15, 2)");

                entity.Property(e => e.TotalKm)
                    .HasColumnName("TOTAL_KM")
                    .HasColumnType("numeric(7, 0)");

                entity.Property(e => e.TotalNumberPiece)
                    .HasColumnName("TOTAL_NUMBER_PIECE")
                    .HasColumnType("numeric(9, 0)");

                entity.Property(e => e.TotalWeight)
                    .HasColumnName("TOTAL_WEIGHT")
                    .HasColumnType("numeric(11, 3)");
            });

            modelBuilder.Entity<Tkpi4DailyMrCostDet>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI4_DAILY_MR_COST_DET");

                entity.Property(e => e.Cost).HasColumnName("COST");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.DeliveryPoints).HasColumnName("DELIVERY_POINTS");

                entity.Property(e => e.Km).HasColumnName("KM");

                entity.Property(e => e.Mr)
                    .HasColumnName("MR")
                    .HasMaxLength(20);

                entity.Property(e => e.MrBusiness)
                    .HasColumnName("MR_BUSINESS")
                    .HasMaxLength(25);

                entity.Property(e => e.MrDay)
                    .HasColumnName("MR_DAY")
                    .HasColumnType("datetime");

                entity.Property(e => e.MrTransco)
                    .HasColumnName("MR_TRANSCO")
                    .HasMaxLength(25);

                entity.Property(e => e.MrType)
                    .HasColumnName("MR_TYPE")
                    .HasMaxLength(20);

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(20);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasMaxLength(20);

                entity.Property(e => e.TouchPoints).HasColumnName("TOUCH_POINTS");

                entity.Property(e => e.Weight).HasColumnName("WEIGHT");
            });

            modelBuilder.Entity<Tkpi4DailyMrCostSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI4_DAILY_MR_COST_SUM");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.DistriCost).HasColumnName("DISTRI_COST");

                entity.Property(e => e.InboundCost).HasColumnName("INBOUND_COST");

                entity.Property(e => e.Mensagerie).HasColumnName("MENSAGERIE");

                entity.Property(e => e.MilkrunInbound).HasColumnName("MILKRUN_INBOUND");

                entity.Property(e => e.MrDay)
                    .HasColumnName("MR_DAY")
                    .HasColumnType("datetime");

                entity.Property(e => e.NoClose).HasColumnName("NO_CLOSE");

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(20);

                entity.Property(e => e.Regular).HasColumnName("REGULAR");

                entity.Property(e => e.Spot).HasColumnName("SPOT");

                entity.Property(e => e.Taxi).HasColumnName("TAXI");
            });

            modelBuilder.Entity<Tkpi5FinanceForwardingDet>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI5_FINANCE_FORWARDING_DET");

                entity.Property(e => e.Amount)
                    .HasColumnName("AMOUNT")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Arrival).HasColumnName("ARRIVAL");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("CREATED_BY")
                    .HasMaxLength(70);

                entity.Property(e => e.Currency)
                    .HasColumnName("CURRENCY")
                    .HasMaxLength(5);

                entity.Property(e => e.Departure).HasColumnName("DEPARTURE");

                entity.Property(e => e.EstTimeDep)
                    .HasColumnName("EST_TIME_DEP")
                    .HasColumnType("datetime");

                entity.Property(e => e.IdTkpi5det).HasColumnName("ID_TKPI5DET");

                entity.Property(e => e.Km)
                    .HasColumnName("KM")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Lm)
                    .HasColumnName("LM")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Means)
                    .HasColumnName("MEANS")
                    .HasMaxLength(38);

                entity.Property(e => e.OpsType)
                    .HasColumnName("OPS_TYPE")
                    .HasMaxLength(6);

                entity.Property(e => e.Ordernum)
                    .HasColumnName("ORDERNUM")
                    .HasMaxLength(25);

                entity.Property(e => e.Pkops)
                    .HasColumnName("PKOPS")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.Pkord)
                    .HasColumnName("PKORD")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.Pkrat)
                    .HasColumnName("PKRAT")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.Pktrip)
                    .HasColumnName("PKTRIP")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(38);

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.RatingType)
                    .HasColumnName("RATING_TYPE")
                    .HasMaxLength(1);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(12);

                entity.Property(e => e.Supplier)
                    .HasColumnName("SUPPLIER")
                    .HasMaxLength(38);

                entity.Property(e => e.Trafictype)
                    .HasColumnName("TRAFICTYPE")
                    .HasMaxLength(10);

                entity.Property(e => e.TripFileId)
                    .HasColumnName("TRIP_FILE_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.TripLineId)
                    .HasColumnName("TRIP_LINE_ID")
                    .HasMaxLength(38);
            });

            modelBuilder.Entity<Tkpi5FinanceForwardingSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI5_FINANCE_FORWARDING_SUM");

                entity.Property(e => e.AmountHa)
                    .HasColumnName("AMOUNT_HA")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.AmountHaGo)
                    .HasColumnName("AMOUNT_HA_GO")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.AmountV)
                    .HasColumnName("AMOUNT_V")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.AmountVAadr)
                    .HasColumnName("AMOUNT_V_AADR")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.AmountVGo)
                    .HasColumnName("AMOUNT_V_GO")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Arrival).HasColumnName("ARRIVAL");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("CREATED_BY")
                    .HasMaxLength(70);

                entity.Property(e => e.Currency)
                    .HasColumnName("CURRENCY")
                    .HasMaxLength(5);

                entity.Property(e => e.Departure).HasColumnName("DEPARTURE");

                entity.Property(e => e.EstTimeDep)
                    .HasColumnName("EST_TIME_DEP")
                    .HasColumnType("date");

                entity.Property(e => e.Km)
                    .HasColumnName("KM")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Lm)
                    .HasColumnName("LM")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Means)
                    .HasColumnName("MEANS")
                    .HasMaxLength(38);

                entity.Property(e => e.Ordernum)
                    .HasColumnName("ORDERNUM")
                    .HasMaxLength(50);

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(38);

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.Supplier)
                    .HasColumnName("SUPPLIER")
                    .HasMaxLength(38);

                entity.Property(e => e.TraficType).HasMaxLength(10);

                entity.Property(e => e.TripFileId)
                    .HasColumnName("TRIP_FILE_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.TripLineId)
                    .HasColumnName("TRIP_LINE_ID")
                    .HasMaxLength(38);
            });

            modelBuilder.Entity<Tkpi6FinanceSalesClosing>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI6_FINANCE_SALES_CLOSING");

                entity.HasIndex(e => e.CostingDate)
                    .HasName("IX_COSTING_DATE");

                entity.HasIndex(e => e.Country)
                    .HasName("IX_COUNTRY");

                entity.HasIndex(e => e.IdClient)
                    .HasName("IX_IDCLIENT");

                entity.HasIndex(e => e.InvoiceNo)
                    .HasName("IX_INVOICENO");

                entity.HasIndex(e => e.NoSapClt)
                    .HasName("IX_NOSAPCLT");

                entity.HasIndex(e => e.OrdId)
                    .HasName("IX_ORDID");

                entity.HasIndex(e => e.OrgUnit)
                    .HasName("IX_ORGUNIT");

                entity.HasIndex(e => e.RatingStatus)
                    .HasName("IX_RATINGSTATUS");

                entity.Property(e => e.ArrCity)
                    .HasColumnName("ARR_CITY")
                    .HasMaxLength(40);

                entity.Property(e => e.ArrName)
                    .HasColumnName("ARR_NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.ArrPlatformId)
                    .HasColumnName("ARR_PLATFORM_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.ArrTpaId)
                    .HasColumnName("ARR_TPA_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.Cc)
                    .HasColumnName("CC")
                    .HasMaxLength(384);

                entity.Property(e => e.Cle)
                    .HasColumnName("CLE")
                    .HasMaxLength(107);

                entity.Property(e => e.CostingDate).HasColumnName("COSTING_DATE");

                entity.Property(e => e.CostingMonth)
                    .HasColumnName("COSTING_MONTH")
                    .HasMaxLength(7);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.Cpte)
                    .HasColumnName("CPTE")
                    .HasMaxLength(384);

                entity.Property(e => e.Currency)
                    .HasColumnName("CURRENCY")
                    .HasMaxLength(3);

                entity.Property(e => e.DepCity)
                    .HasColumnName("DEP_CITY")
                    .HasMaxLength(40);

                entity.Property(e => e.DepName)
                    .HasColumnName("DEP_NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.DepPlatformId)
                    .HasColumnName("DEP_PLATFORM_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.DepTpaId)
                    .HasColumnName("DEP_TPA_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.EstTimeDep).HasColumnName("EST_TIME_DEP");

                entity.Property(e => e.ExchangeRate)
                    .HasColumnName("EXCHANGE_RATE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.ForcCurval1)
                    .HasColumnName("FORC_CURVAL1")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.IdClient)
                    .HasColumnName("ID_CLIENT")
                    .HasMaxLength(38);

                entity.Property(e => e.IdTkpi6det).HasColumnName("ID_TKPI6DET");

                entity.Property(e => e.IndexTaxCurval)
                    .HasColumnName("INDEX_TAX_CURVAL")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.InvoiceNo)
                    .HasColumnName("INVOICE_NO")
                    .HasMaxLength(100);

                entity.Property(e => e.InvoiceRefNo)
                    .HasColumnName("INVOICE_REF_NO")
                    .HasMaxLength(240);

                entity.Property(e => e.InvoiceTempNo)
                    .HasColumnName("INVOICE_TEMP_NO")
                    .HasMaxLength(100);

                entity.Property(e => e.InvoiceType)
                    .HasColumnName("INVOICE_TYPE")
                    .HasMaxLength(1);

                entity.Property(e => e.IsDistribution)
                    .HasColumnName("IS_DISTRIBUTION")
                    .HasMaxLength(1);

                entity.Property(e => e.ManualLine)
                    .HasColumnName("MANUAL_LINE")
                    .HasMaxLength(1);

                entity.Property(e => e.MontantTtc)
                    .HasColumnName("MONTANT_TTC")
                    .HasMaxLength(384);

                entity.Property(e => e.NoSapClt)
                    .HasColumnName("NO_SAP_CLT")
                    .HasMaxLength(384);

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(25);

                entity.Property(e => e.OrgUnit)
                    .HasColumnName("ORG_UNIT")
                    .HasMaxLength(38);

                entity.Property(e => e.Pa)
                    .HasColumnName("PA")
                    .HasMaxLength(38);

                entity.Property(e => e.Produit)
                    .HasColumnName("PRODUIT")
                    .HasMaxLength(38);

                entity.Property(e => e.RatingStatus)
                    .HasColumnName("RATING_STATUS")
                    .HasMaxLength(9);

                entity.Property(e => e.RefNo)
                    .HasColumnName("REF_NO")
                    .HasMaxLength(35);

                entity.Property(e => e.SerId1)
                    .HasColumnName("SER_ID1")
                    .HasMaxLength(12);

                entity.Property(e => e.SprFamilyId)
                    .HasColumnName("SPR_FAMILY_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.SprId)
                    .HasColumnName("SPR_ID")
                    .HasMaxLength(25);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasMaxLength(4);

                entity.Property(e => e.Toc)
                    .HasColumnName("TOC")
                    .HasMaxLength(38);

                entity.Property(e => e.TotalHt)
                    .HasColumnName("TOTAL_HT")
                    .HasMaxLength(384);

                entity.Property(e => e.TransferDate).HasColumnName("TRANSFER_DATE");

                entity.Property(e => e.TransferMonth)
                    .HasColumnName("TRANSFER_MONTH")
                    .HasMaxLength(7);

                entity.Property(e => e.TrfRangeVal)
                    .HasColumnName("TRF_RANGE_VAL")
                    .HasColumnType("decimal(18, 3)");

                entity.Property(e => e.TrfRate)
                    .HasColumnName("TRF_RATE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.TrfRateBasis)
                    .HasColumnName("TRF_RATE_BASIS")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.TrfResultTrfval)
                    .HasColumnName("TRF_RESULT_TRFVAL")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Typ)
                    .HasColumnName("TYP")
                    .HasMaxLength(8);

                entity.Property(e => e.WorkUnit).HasMaxLength(152);
            });

            modelBuilder.Entity<Tkpi6FinanceSalesClosingSum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI6_FINANCE_SALES_CLOSING_SUM");

                entity.Property(e => e.CostingDate).HasColumnName("COSTING_DATE");

                entity.Property(e => e.CostingMonth)
                    .HasColumnName("COSTING_MONTH")
                    .HasMaxLength(7);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.ForcCurval1)
                    .HasColumnName("FORC_CURVAL1")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.IdClient)
                    .HasColumnName("ID_CLIENT")
                    .HasMaxLength(38);

                entity.Property(e => e.IdTkpi6sum).HasColumnName("ID_TKPI6SUM");

                entity.Property(e => e.IndexTaxCurval)
                    .HasColumnName("INDEX_TAX_CURVAL")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.InvoiceNo)
                    .HasColumnName("INVOICE_NO")
                    .HasMaxLength(100);

                entity.Property(e => e.InvoiceRefNo)
                    .HasColumnName("INVOICE_REF_NO")
                    .HasMaxLength(240);

                entity.Property(e => e.InvoiceTempNo)
                    .HasColumnName("INVOICE_TEMP_NO")
                    .HasMaxLength(100);

                entity.Property(e => e.NoSapClt)
                    .HasColumnName("NO_SAP_CLT")
                    .HasMaxLength(384);

                entity.Property(e => e.Num).HasColumnName("num");

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(25);

                entity.Property(e => e.OrgUnit)
                    .HasColumnName("ORG_UNIT")
                    .HasMaxLength(38);

                entity.Property(e => e.RatingStatus)
                    .HasColumnName("RATING_STATUS")
                    .HasMaxLength(9);

                entity.Property(e => e.RefNo)
                    .HasColumnName("REF_NO")
                    .HasMaxLength(35);

                entity.Property(e => e.SerId1)
                    .HasColumnName("SER_ID1")
                    .HasMaxLength(12);

                entity.Property(e => e.SprFamilyId)
                    .HasColumnName("SPR_FAMILY_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.SprId)
                    .HasColumnName("SPR_ID")
                    .HasMaxLength(25);

                entity.Property(e => e.TrfRangeVal)
                    .HasColumnName("TRF_RANGE_VAL")
                    .HasColumnType("decimal(18, 3)");

                entity.Property(e => e.TrfRate)
                    .HasColumnName("TRF_RATE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.TrfResultTrfval)
                    .HasColumnName("TRF_RESULT_TRFVAL")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.WorkUnit).HasMaxLength(152);
            });

            modelBuilder.Entity<Tkpi7FinanceTripTaxation>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI7_FINANCE_TRIP_TAXATION");

                entity.Property(e => e.BoughtProduct)
                    .HasColumnName("BOUGHT_PRODUCT")
                    .HasMaxLength(25);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.Coutassocie)
                    .HasColumnName("COUTASSOCIE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.CpArrivee)
                    .HasColumnName("CP_ARRIVEE")
                    .HasMaxLength(12);

                entity.Property(e => e.CpDepart)
                    .HasColumnName("CP_DEPART")
                    .HasMaxLength(12);

                entity.Property(e => e.Eta).HasColumnName("ETA");

                entity.Property(e => e.Etd).HasColumnName("ETD");

                entity.Property(e => e.Fournisseur)
                    .HasColumnName("FOURNISSEUR")
                    .HasMaxLength(38);

                entity.Property(e => e.Gestionnaire)
                    .HasColumnName("GESTIONNAIRE")
                    .HasMaxLength(38);

                entity.Property(e => e.HArrivee)
                    .HasColumnName("H_ARRIVEE")
                    .HasMaxLength(5);

                entity.Property(e => e.IdTkpi7det).HasColumnName("ID_TKPI7DET");

                entity.Property(e => e.KilometresReel)
                    .HasColumnName("KILOMETRES_REEL")
                    .HasColumnType("numeric(7, 0)");

                entity.Property(e => e.Kms)
                    .HasColumnName("KMS")
                    .HasColumnType("numeric(7, 0)");

                entity.Property(e => e.Numerovoyage)
                    .HasColumnName("NUMEROVOYAGE")
                    .HasMaxLength(38);

                entity.Property(e => e.PaysArrivee)
                    .HasColumnName("PAYS_ARRIVEE")
                    .HasMaxLength(2);

                entity.Property(e => e.PaysDepart)
                    .HasColumnName("PAYS_DEPART")
                    .HasMaxLength(2);

                entity.Property(e => e.PointArrivee)
                    .HasColumnName("POINT_ARRIVEE")
                    .HasMaxLength(38);

                entity.Property(e => e.PointDepart)
                    .HasColumnName("POINT_DEPART")
                    .HasMaxLength(38);

                entity.Property(e => e.Programme)
                    .HasColumnName("PROGRAMME")
                    .HasMaxLength(38);

                entity.Property(e => e.QuantiteTaxee)
                    .HasColumnName("QUANTITE_TAXEE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(12);

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasMaxLength(18);

                entity.Property(e => e.Typevoyage)
                    .HasColumnName("TYPEVOYAGE")
                    .HasMaxLength(3);

                entity.Property(e => e.UniteTaxee)
                    .HasColumnName("UNITE_TAXEE")
                    .HasMaxLength(38);

                entity.Property(e => e.VilleArrivee)
                    .HasColumnName("VILLE_ARRIVEE")
                    .HasMaxLength(40);

                entity.Property(e => e.VilleDepart)
                    .HasColumnName("VILLE_DEPART")
                    .HasMaxLength(40);
            });

            modelBuilder.Entity<Tkpi8DafDoublons>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI8_DAF_DOUBLONS");

                entity.Property(e => e.Amount)
                    .HasColumnName("AMOUNT")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.BarcodeExtId)
                    .HasColumnName("BARCODE_EXT_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.BarcodeId)
                    .HasColumnName("BARCODE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.CgnCity)
                    .HasColumnName("CGN_CITY")
                    .HasMaxLength(50);

                entity.Property(e => e.CgnId)
                    .HasColumnName("CGN_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.CreateType)
                    .HasColumnName("CREATE_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.EstTimeDep)
                    .HasColumnName("EST_TIME_DEP")
                    .HasColumnType("datetime");

                entity.Property(e => e.GrsWgt).HasColumnName("GRS_WGT");

                entity.Property(e => e.HuType)
                    .HasColumnName("HU_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.IdOrd)
                    .HasColumnName("ID_ORD")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.IdPcs)
                    .HasColumnName("ID_PCS")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.IdUser).HasColumnName("ID_USER");

                entity.Property(e => e.IncId)
                    .HasColumnName("INC_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.OpsStatus)
                    .HasColumnName("OPS_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.OrdStatus)
                    .HasColumnName("ORD_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.SndCity)
                    .HasColumnName("SND_CITY")
                    .HasMaxLength(50);

                entity.Property(e => e.SndId)
                    .HasColumnName("SND_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.SprId)
                    .HasColumnName("SPR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.XaccountId).HasColumnName("XACCOUNT_ID");
            });

            modelBuilder.Entity<Tkpi8DafTaxations>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI8_DAF_TAXATIONS");

                entity.Property(e => e.CgnCity)
                    .HasColumnName("CGN_CITY")
                    .HasMaxLength(50);

                entity.Property(e => e.CgnId)
                    .HasColumnName("CGN_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.CgnName)
                    .HasColumnName("CGN_NAME")
                    .HasMaxLength(50);

                entity.Property(e => e.CgnZip)
                    .HasColumnName("CGN_ZIP")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargedTpaId)
                    .HasColumnName("CHARGED_TPA_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.CusInvoiceNo)
                    .HasColumnName("CUS_INVOICE_NO")
                    .HasMaxLength(50);

                entity.Property(e => e.EstTimeDep)
                    .HasColumnName("EST_TIME_DEP")
                    .HasColumnType("date");

                entity.Property(e => e.ExtOrdId)
                    .HasColumnName("EXT_ORD_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ForcCurval)
                    .HasColumnName("FORC_CURVAL")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.GrsWgt).HasColumnName("GRS_WGT");

                entity.Property(e => e.HuQty).HasColumnName("HU_QTY");

                entity.Property(e => e.IdUser).HasColumnName("ID_USER");

                entity.Property(e => e.ImpArrPlatformId)
                    .HasColumnName("IMP_ARR_PLATFORM_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.IndexTaxCurval)
                    .HasColumnName("INDEX_TAX_CURVAL")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.OrdStatus)
                    .HasColumnName("ORD_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderPk)
                    .HasColumnName("ORDER_PK")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.RatingPk)
                    .HasColumnName("RATING_PK")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.SerId)
                    .HasColumnName("SER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.SndCity)
                    .HasColumnName("SND_CITY")
                    .HasMaxLength(50);

                entity.Property(e => e.SndId)
                    .HasColumnName("SND_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.SndName)
                    .HasColumnName("SND_NAME")
                    .HasMaxLength(50);

                entity.Property(e => e.SndZip)
                    .HasColumnName("SND_ZIP")
                    .HasMaxLength(50);

                entity.Property(e => e.SprId)
                    .HasColumnName("SPR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.TrfRangeVal)
                    .HasColumnName("TRF_RANGE_VAL")
                    .HasColumnType("decimal(18, 3)");

                entity.Property(e => e.TrfRate)
                    .HasColumnName("TRF_RATE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.TrfRateBasis).HasColumnName("TRF_RATE_BASIS");

                entity.Property(e => e.TrfResultTrfval)
                    .HasColumnName("TRF_RESULT_TRFVAL")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.XaccountId).HasColumnName("XACCOUNT_ID");
            });

            modelBuilder.Entity<Tkpi9DafIndex>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI9_DAF_INDEX");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.CttId)
                    .HasColumnName("CTT_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.IndexFk).HasColumnName("INDEX_FK");

                entity.Property(e => e.IndexId)
                    .HasColumnName("INDEX_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.IndexRate)
                    .HasColumnName("INDEX_RATE")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.IndexStartValue)
                    .HasColumnName("INDEX_START_VALUE")
                    .HasColumnType("decimal(18, 3)");

                entity.Property(e => e.IndexThreshold)
                    .HasColumnName("INDEX_THRESHOLD")
                    .HasColumnType("decimal(18, 2)");

                entity.Property(e => e.IndexType)
                    .HasColumnName("INDEX_TYPE")
                    .HasMaxLength(2);

                entity.Property(e => e.Name).HasColumnName("NAME");

                entity.Property(e => e.SprId)
                    .HasColumnName("SPR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.TpaId)
                    .HasColumnName("TPA_ID")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Tkpi9DafIndexPeriod>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI9_DAF_INDEX_PERIOD");

                entity.Property(e => e.IndexFk).HasColumnName("INDEX_FK");

                entity.Property(e => e.IndexId)
                    .HasColumnName("INDEX_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.IndexValue)
                    .HasColumnName("INDEX_VALUE")
                    .HasColumnType("decimal(18, 3)");

                entity.Property(e => e.PeriodMonth)
                    .HasColumnName("PERIOD_MONTH")
                    .HasMaxLength(2);

                entity.Property(e => e.PeriodYear)
                    .HasColumnName("PERIOD_YEAR")
                    .HasMaxLength(4);

                entity.Property(e => e.Pk).HasColumnName("PK");
            });

            modelBuilder.Entity<TkpiDelayPerfFtl>(entity =>
            {
                entity.ToTable("TKPI_DELAY_PERF_FTL");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Circuit)
                    .HasColumnName("CIRCUIT")
                    .HasMaxLength(250);

                entity.Property(e => e.DestAdresse)
                    .HasColumnName("DEST_ADRESSE")
                    .HasMaxLength(250);

                entity.Property(e => e.DestAdresse2)
                    .HasColumnName("DEST_ADRESSE2")
                    .HasMaxLength(250);

                entity.Property(e => e.DestCp)
                    .HasColumnName("DEST_CP")
                    .HasMaxLength(100);

                entity.Property(e => e.DestPays)
                    .HasColumnName("DEST_PAYS")
                    .HasMaxLength(10);

                entity.Property(e => e.DestVille)
                    .HasColumnName("DEST_VILLE")
                    .HasMaxLength(100);

                entity.Property(e => e.Destinataire)
                    .HasColumnName("DESTINATAIRE")
                    .HasMaxLength(250);

                entity.Property(e => e.Etd)
                    .HasColumnName("ETD")
                    .HasColumnType("datetime");

                entity.Property(e => e.ExecutedEndDatetime).HasColumnName("EXECUTED_END_DATETIME");

                entity.Property(e => e.ExpAdresse)
                    .HasColumnName("EXP_ADRESSE")
                    .HasMaxLength(250);

                entity.Property(e => e.ExpAdresse2)
                    .HasColumnName("EXP_ADRESSE2")
                    .HasMaxLength(250);

                entity.Property(e => e.ExpCp)
                    .HasColumnName("EXP_CP")
                    .HasMaxLength(100);

                entity.Property(e => e.ExpPays)
                    .HasColumnName("EXP_PAYS")
                    .HasMaxLength(10);

                entity.Property(e => e.ExpVille)
                    .HasColumnName("EXP_VILLE")
                    .HasMaxLength(100);

                entity.Property(e => e.Expediteur)
                    .HasColumnName("EXPEDITEUR")
                    .HasMaxLength(250);

                entity.Property(e => e.LoginCreation)
                    .HasColumnName("LOGIN_CREATION")
                    .HasMaxLength(250);

                entity.Property(e => e.Marque)
                    .HasColumnName("MARQUE")
                    .HasMaxLength(100);

                entity.Property(e => e.NbKms).HasColumnName("NB_KMS");

                entity.Property(e => e.NoOrder)
                    .HasColumnName("NO_ORDER")
                    .HasMaxLength(100);

                entity.Property(e => e.PfArrivee)
                    .HasColumnName("PF_ARRIVEE")
                    .HasMaxLength(100);

                entity.Property(e => e.PfDepart)
                    .HasColumnName("PF_DEPART")
                    .HasMaxLength(50);

                entity.Property(e => e.PlannedEndDatetime).HasColumnName("PLANNED_END_DATETIME");

                entity.Property(e => e.PlannedStartDatetime).HasColumnName("PLANNED_START_DATETIME");

                entity.Property(e => e.Produit)
                    .HasColumnName("PRODUIT")
                    .HasMaxLength(100);

                entity.Property(e => e.Transporteur)
                    .HasColumnName("TRANSPORTEUR")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<TkpiDelayPerfFtlSum>(entity =>
            {
                entity.ToTable("TKPI_DELAY_PERF_FTL_SUM");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.Etd)
                    .HasColumnName("ETD")
                    .HasColumnType("datetime");

                entity.Property(e => e.Groupe1).HasColumnName("Groupe_1");

                entity.Property(e => e.Groupe2).HasColumnName("Groupe_2");

                entity.Property(e => e.Groupe5).HasColumnName("Groupe_5");

                entity.Property(e => e.Groupe6).HasColumnName("Groupe_6");

                entity.Property(e => e.Marque)
                    .HasColumnName("MARQUE")
                    .HasMaxLength(100);

                entity.Property(e => e.PfDepart)
                    .HasColumnName("PF_DEPART")
                    .HasMaxLength(50);

                entity.Property(e => e.Produit)
                    .HasColumnName("PRODUIT")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<TkpiDelayPerfFtlTest>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TKPI_DELAY_PERF_FTL_TEST");

                entity.Property(e => e.Circuit)
                    .HasColumnName("CIRCUIT")
                    .HasMaxLength(250);

                entity.Property(e => e.DestAdresse)
                    .HasColumnName("DEST_ADRESSE")
                    .HasMaxLength(250);

                entity.Property(e => e.DestAdresse2)
                    .HasColumnName("DEST_ADRESSE2")
                    .HasMaxLength(250);

                entity.Property(e => e.DestCp)
                    .HasColumnName("DEST_CP")
                    .HasMaxLength(100);

                entity.Property(e => e.DestPays)
                    .HasColumnName("DEST_PAYS")
                    .HasMaxLength(10);

                entity.Property(e => e.DestVille)
                    .HasColumnName("DEST_VILLE")
                    .HasMaxLength(100);

                entity.Property(e => e.Destinataire)
                    .HasColumnName("DESTINATAIRE")
                    .HasMaxLength(250);

                entity.Property(e => e.Etd)
                    .HasColumnName("ETD")
                    .HasColumnType("datetime");

                entity.Property(e => e.ExecutedEndDatetime)
                    .HasColumnName("EXECUTED_END_DATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.ExpAdresse)
                    .HasColumnName("EXP_ADRESSE")
                    .HasMaxLength(250);

                entity.Property(e => e.ExpAdresse2)
                    .HasColumnName("EXP_ADRESSE2")
                    .HasMaxLength(250);

                entity.Property(e => e.ExpCp)
                    .HasColumnName("EXP_CP")
                    .HasMaxLength(100);

                entity.Property(e => e.ExpPays)
                    .HasColumnName("EXP_PAYS")
                    .HasMaxLength(10);

                entity.Property(e => e.ExpVille)
                    .HasColumnName("EXP_VILLE")
                    .HasMaxLength(100);

                entity.Property(e => e.Expediteur)
                    .HasColumnName("EXPEDITEUR")
                    .HasMaxLength(250);

                entity.Property(e => e.LoginCreation)
                    .HasColumnName("LOGIN_CREATION")
                    .HasMaxLength(250);

                entity.Property(e => e.Marque)
                    .HasColumnName("MARQUE")
                    .HasMaxLength(100);

                entity.Property(e => e.NbKms).HasColumnName("NB_KMS");

                entity.Property(e => e.NoOrder)
                    .HasColumnName("NO_ORDER")
                    .HasMaxLength(100);

                entity.Property(e => e.PfArrivee)
                    .HasColumnName("PF_ARRIVEE")
                    .HasMaxLength(100);

                entity.Property(e => e.PfDepart)
                    .HasColumnName("PF_DEPART")
                    .HasMaxLength(50);

                entity.Property(e => e.PlannedEndDatetime)
                    .HasColumnName("PLANNED_END_DATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.PlannedStartDatetime)
                    .HasColumnName("PLANNED_START_DATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.Produit)
                    .HasColumnName("PRODUIT")
                    .HasMaxLength(100);

                entity.Property(e => e.Transporteur)
                    .HasColumnName("TRANSPORTEUR")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<TkpiFlotaCapCostDetail>(entity =>
            {
                entity.ToTable("TKPI_FLOTA_CAP_COST_DETAIL");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.CenterId)
                    .HasColumnName("CENTER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ClosingCostDate)
                    .HasColumnName("CLOSING_COST_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.NbOfDel).HasColumnName("NB_OF_DEL");

                entity.Property(e => e.NbOfDelStops).HasColumnName("NB_OF_DEL_STOPS");

                entity.Property(e => e.NbOfPkp).HasColumnName("NB_OF_PKP");

                entity.Property(e => e.NbOfPkpStops).HasColumnName("NB_OF_PKP_STOPS");

                entity.Property(e => e.NbOfPos).HasColumnName("NB_OF_POS");

                entity.Property(e => e.NbPieces).HasColumnName("NB_PIECES");

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(50);

                entity.Property(e => e.OpsType)
                    .HasColumnName("OPS_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.RealisedKms).HasColumnName("REALISED_KMS");

                entity.Property(e => e.RefAgg)
                    .HasColumnName("REF_AGG")
                    .HasMaxLength(50);

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.Repes).HasColumnName("REPES");

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(50);

                entity.Property(e => e.ServiceSeq).HasColumnName("SERVICE_SEQ");

                entity.Property(e => e.SoldProduct)
                    .HasColumnName("SOLD_PRODUCT")
                    .HasMaxLength(50);

                entity.Property(e => e.SupplierFk)
                    .HasColumnName("SUPPLIER_FK")
                    .HasMaxLength(50);

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SUPPLIER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("TOTAL_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalVolume)
                    .HasColumnName("TOTAL_VOLUME")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalWeight)
                    .HasColumnName("TOTAL_WEIGHT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.Trip)
                    .HasColumnName("TRIP")
                    .HasMaxLength(50);

                entity.Property(e => e.TripLine)
                    .HasColumnName("TRIP_LINE")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TkpiFlotaCapOpsDetail>(entity =>
            {
                entity.ToTable("TKPI_FLOTA_CAP_OPS_DETAIL");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.ArrPlannedDt)
                    .HasColumnName("ARR_PLANNED_DT")
                    .HasColumnType("date");

                entity.Property(e => e.ArrTripDate)
                    .HasColumnName("ARR_TRIP_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.AutomaticTrf)
                    .HasColumnName("AUTOMATIC_TRF")
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.BprId)
                    .HasColumnName("BPR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargingCompanyId)
                    .HasColumnName("CHARGING_COMPANY_ID")
                    .HasMaxLength(70);

                entity.Property(e => e.ChargingTpaId)
                    .HasColumnName("CHARGING_TPA_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ClosingCostDate)
                    .HasColumnName("CLOSING_COST_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.CusorId)
                    .HasColumnName("CUSOR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.CustomerId)
                    .HasColumnName("CUSTOMER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.CustomerName)
                    .HasColumnName("CUSTOMER_NAME")
                    .HasMaxLength(50);

                entity.Property(e => e.DepTripDate)
                    .HasColumnName("DEP_TRIP_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.Divisor).HasColumnName("DIVISOR");

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("FUEL_SURCHARGE")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.InvoiceDate)
                    .HasColumnName("INVOICE_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.InvoiceNr)
                    .HasColumnName("INVOICE_NR")
                    .HasMaxLength(50);

                entity.Property(e => e.ManuelUpdated)
                    .HasColumnName("MANUEL_UPDATED")
                    .HasMaxLength(50);

                entity.Property(e => e.NbDelStops).HasColumnName("NB_DEL_STOPS");

                entity.Property(e => e.NbOfDel).HasColumnName("NB_OF_DEL");

                entity.Property(e => e.NbOfPkp).HasColumnName("NB_OF_PKP");

                entity.Property(e => e.NbOfPkpStops).HasColumnName("NB_OF_PKP_STOPS");

                entity.Property(e => e.NbOfPos).HasColumnName("NB_OF_POS");

                entity.Property(e => e.NbPieces).HasColumnName("NB_PIECES");

                entity.Property(e => e.OpChargeableWeight)
                    .HasColumnName("OP_CHARGEABLE_WEIGHT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OpGw)
                    .HasColumnName("OP_GW")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OpHuQty)
                    .HasColumnName("OP_HU_QTY")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OpVol)
                    .HasColumnName("OP_VOL")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.Operation)
                    .HasColumnName("OPERATION")
                    .HasMaxLength(50);

                entity.Property(e => e.OpsSinTrfXTrip2)
                    .HasColumnName("OPS_SIN_TRF_X_TRIP2")
                    .HasMaxLength(50);

                entity.Property(e => e.OpsTrfXTrip2)
                    .HasColumnName("OPS_TRF_X_TRIP2")
                    .HasMaxLength(50);

                entity.Property(e => e.OpsType)
                    .HasColumnName("OPS_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.OpsXTrip)
                    .HasColumnName("OPS_X_TRIP")
                    .HasMaxLength(50);

                entity.Property(e => e.OpsXTrip2)
                    .HasColumnName("OPS_X_TRIP2")
                    .HasMaxLength(50);

                entity.Property(e => e.OwnerForwarderId)
                    .HasColumnName("OWNER_FORWARDER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.OwnerForwaredIdCenterId)
                    .HasColumnName("OWNER_FORWARED_ID_CENTER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.PkAgg)
                    .HasColumnName("PK_AGG")
                    .HasMaxLength(50);

                entity.Property(e => e.PkAgop)
                    .HasColumnName("PK_AGOP")
                    .HasMaxLength(50);

                entity.Property(e => e.PkOps)
                    .HasColumnName("PK_OPS")
                    .HasMaxLength(50);

                entity.Property(e => e.PkRt)
                    .HasColumnName("PK_RT")
                    .HasMaxLength(50);

                entity.Property(e => e.QtyRated)
                    .HasColumnName("QTY_RATED")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.RangeType)
                    .HasColumnName("RANGE_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.RangeUnit)
                    .HasColumnName("RANGE_UNIT")
                    .HasMaxLength(50);

                entity.Property(e => e.RealisedKms).HasColumnName("REALISED_KMS");

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.RefNo)
                    .HasColumnName("REF_NO")
                    .HasMaxLength(50);

                entity.Property(e => e.Repes).HasColumnName("REPES");

                entity.Property(e => e.RoadTripType)
                    .HasColumnName("ROAD_TRIP_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.RowType)
                    .HasColumnName("ROW_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(50);

                entity.Property(e => e.StatusRt)
                    .HasColumnName("STATUS_RT")
                    .HasMaxLength(50);

                entity.Property(e => e.TakeOwner).HasColumnName("TAKE_OWNER");

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("TARIFF_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TariffType)
                    .HasColumnName("TARIFF_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.TaxationType)
                    .HasColumnName("TAXATION_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("TOTAL_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalAmount2)
                    .HasColumnName("TOTAL_AMOUNT_2")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalVolume)
                    .HasColumnName("TOTAL_VOLUME")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalWeight)
                    .HasColumnName("TOTAL_WEIGHT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TrfXOp)
                    .HasColumnName("TRF_X_OP")
                    .HasMaxLength(50);

                entity.Property(e => e.Trip)
                    .HasColumnName("TRIP")
                    .HasMaxLength(50);

                entity.Property(e => e.TripLineId)
                    .HasColumnName("TRIP_LINE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.TripOpsStatus)
                    .HasColumnName("TRIP_OPS_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.TripPk)
                    .HasColumnName("TRIP_PK")
                    .HasMaxLength(50);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("UNIT_PRICE")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.WbMasterNo)
                    .HasColumnName("WB_MASTER_NO")
                    .HasMaxLength(50);

                entity.Property(e => e.WbNo)
                    .HasColumnName("WB_NO")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TkpiFlotaCapSum>(entity =>
            {
                entity.ToTable("TKPI_FLOTA_CAP_SUM");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.AgazAmount)
                    .HasColumnName("AGAZ_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.CenterId)
                    .HasColumnName("CENTER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DelGwCoAmount)
                    .HasColumnName("DEL_GW_CO_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.DelGwCoKgrs)
                    .HasColumnName("DEL_GW_CO_KGRS")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.NbOfDelStops).HasColumnName("NB_OF_DEL_STOPS");

                entity.Property(e => e.NbOfPkpStops).HasColumnName("NB_OF_PKP_STOPS");

                entity.Property(e => e.NbPfPos).HasColumnName("NB_PF_POS");

                entity.Property(e => e.NbPieces).HasColumnName("NB_PIECES");

                entity.Property(e => e.NumDiasArr).HasColumnName("NUM_DIAS_ARR");

                entity.Property(e => e.NumDiasDep).HasColumnName("NUM_DIAS_DEP");

                entity.Property(e => e.NumTrips).HasColumnName("NUM_TRIPS");

                entity.Property(e => e.OpGwDel)
                    .HasColumnName("OP_GW_DEL")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OpGwPkp)
                    .HasColumnName("OP_GW_PKP")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.PkpGwCoAmount)
                    .HasColumnName("PKP_GW_CO_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.PkpGwCoKgrs)
                    .HasColumnName("PKP_GW_CO_KGRS")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.ReportDate)
                    .HasColumnName("REPORT_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.Sap1)
                    .HasColumnName("SAP1")
                    .HasMaxLength(50);

                entity.Property(e => e.Sap2)
                    .HasColumnName("SAP2")
                    .HasMaxLength(50);

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SUPPLIER_ID")
                    .HasMaxLength(70);

                entity.Property(e => e.TmfxAmount)
                    .HasColumnName("TMFX_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.Tmtp2Amount)
                    .HasColumnName("TMTP2_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TmtpAmount)
                    .HasColumnName("TMTP_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalWeightTrip)
                    .HasColumnName("TOTAL_WEIGHT_TRIP")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TripLine)
                    .HasColumnName("TRIP_LINE")
                    .HasMaxLength(50);

                entity.Property(e => e.VariosAmount)
                    .HasColumnName("VARIOS_AMOUNT")
                    .HasColumnType("decimal(18, 5)");
            });

            modelBuilder.Entity<TkpiFlotaCapSumTrip>(entity =>
            {
                entity.ToTable("TKPI_FLOTA_CAP_SUM_TRIP");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.AgazAmount)
                    .HasColumnName("AGAZ_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.ArrTripDate)
                    .HasColumnName("ARR_TRIP_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.BprId)
                    .HasColumnName("BPR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.CenterId)
                    .HasColumnName("CENTER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DelGwCoAmount)
                    .HasColumnName("DEL_GW_CO_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.DelGwCoKgrs)
                    .HasColumnName("DEL_GW_CO_KGRS")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.DelGwCoPcs)
                    .HasColumnName("DEL_GW_CO_PCS")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.DepTripDate)
                    .HasColumnName("DEP_TRIP_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.NbOfDelStopsTrip).HasColumnName("NB_OF_DEL_STOPS_TRIP");

                entity.Property(e => e.NbOfPkpStopsTrip).HasColumnName("NB_OF_PKP_STOPS_TRIP");

                entity.Property(e => e.NbPfPosTrip).HasColumnName("NB_PF_POS_TRIP");

                entity.Property(e => e.NbPiecesTrip).HasColumnName("NB_PIECES_TRIP");

                entity.Property(e => e.NumDiasArr).HasColumnName("NUM_DIAS_ARR");

                entity.Property(e => e.NumDiasDep).HasColumnName("NUM_DIAS_DEP");

                entity.Property(e => e.NumTrips).HasColumnName("NUM_TRIPS");

                entity.Property(e => e.OpGwDel)
                    .HasColumnName("OP_GW_DEL")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OpGwPkp)
                    .HasColumnName("OP_GW_PKP")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.PkpGwCoAmount)
                    .HasColumnName("PKP_GW_CO_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.PkpGwCoKgrs)
                    .HasColumnName("PKP_GW_CO_KGRS")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.PkpGwCoPcs)
                    .HasColumnName("PKP_GW_CO_PCS")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.ReportDate)
                    .HasColumnName("REPORT_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.Sap1)
                    .HasColumnName("SAP1")
                    .HasMaxLength(50);

                entity.Property(e => e.Sap2)
                    .HasColumnName("SAP2")
                    .HasMaxLength(50);

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SUPPLIER_ID")
                    .HasMaxLength(70);

                entity.Property(e => e.TmfxAmount)
                    .HasColumnName("TMFX_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.Tmtp2Amount)
                    .HasColumnName("TMTP2_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TmtpAmount)
                    .HasColumnName("TMTP_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalWeightTrip)
                    .HasColumnName("TOTAL_WEIGHT_TRIP")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.Trip)
                    .HasColumnName("TRIP")
                    .HasMaxLength(50);

                entity.Property(e => e.TripLine)
                    .HasColumnName("TRIP_LINE")
                    .HasMaxLength(50);

                entity.Property(e => e.VariosAmount)
                    .HasColumnName("VARIOS_AMOUNT")
                    .HasColumnType("decimal(18, 5)");
            });

            modelBuilder.Entity<TkpiFlotaCapVarios>(entity =>
            {
                entity.ToTable("TKPI_FLOTA_CAP_VARIOS");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.ArrPlannedDt)
                    .HasColumnName("ARR_PLANNED_DT")
                    .HasColumnType("date");

                entity.Property(e => e.AutomaticTrf)
                    .HasColumnName("AUTOMATIC_TRF")
                    .HasMaxLength(50);

                entity.Property(e => e.BprId)
                    .HasColumnName("BPR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargingCompanyId)
                    .HasColumnName("CHARGING_COMPANY_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargingTpaId)
                    .HasColumnName("CHARGING_TPA_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ClosingCostDate)
                    .HasColumnName("CLOSING_COST_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.Divisor).HasColumnName("DIVISOR");

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("FUEL_SURCHARGE")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.InvoiceDate)
                    .HasColumnName("INVOICE_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.InvoiceNr)
                    .HasColumnName("INVOICE_NR")
                    .HasMaxLength(50);

                entity.Property(e => e.ManualTrf).HasColumnName("MANUAL_TRF");

                entity.Property(e => e.NbOfDel).HasColumnName("NB_OF_DEL");

                entity.Property(e => e.NbOfDelStops).HasColumnName("NB_OF_DEL_STOPS");

                entity.Property(e => e.NbOfPkp).HasColumnName("NB_OF_PKP");

                entity.Property(e => e.NbOfPos).HasColumnName("NB_OF_POS");

                entity.Property(e => e.NbOfStops).HasColumnName("NB_OF_STOPS");

                entity.Property(e => e.NbPieces).HasColumnName("NB_PIECES");

                entity.Property(e => e.OwnerForwarderIdCenterId)
                    .HasColumnName("OWNER_FORWARDER_ID_CENTER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.PkRt)
                    .HasColumnName("PK_RT")
                    .HasMaxLength(50);

                entity.Property(e => e.PkTrip)
                    .HasColumnName("PK_TRIP")
                    .HasMaxLength(50);

                entity.Property(e => e.QtyRated)
                    .HasColumnName("QTY_RATED")
                    .HasMaxLength(50);

                entity.Property(e => e.RangeType)
                    .HasColumnName("RANGE_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.RangeUnit)
                    .HasColumnName("RANGE_UNIT")
                    .HasMaxLength(50);

                entity.Property(e => e.RealisedKms).HasColumnName("REALISED_KMS");

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.RefNo)
                    .HasColumnName("REF_NO")
                    .HasMaxLength(50);

                entity.Property(e => e.RoadTripType)
                    .HasColumnName("ROAD_TRIP_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(50);

                entity.Property(e => e.StatusRt)
                    .HasColumnName("STATUS_RT")
                    .HasMaxLength(50);

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SUPPLIER_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.SupplierName)
                    .HasColumnName("SUPPLIER_NAME")
                    .HasMaxLength(100);

                entity.Property(e => e.TarifAmount)
                    .HasColumnName("TARIF_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TariffType)
                    .HasColumnName("TARIFF_TYPE")
                    .HasMaxLength(100);

                entity.Property(e => e.TaxationType)
                    .HasColumnName("TAXATION_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("TOTAL_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalVolume)
                    .HasColumnName("TOTAL_VOLUME")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TotalWeight)
                    .HasColumnName("TOTAL_WEIGHT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.Trip)
                    .HasColumnName("TRIP")
                    .HasMaxLength(50);

                entity.Property(e => e.TripFileId)
                    .HasColumnName("TRIP_FILE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.TripLineId)
                    .HasColumnName("TRIP_LINE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.TripOpsStatus)
                    .HasColumnName("TRIP_OPS_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("UNIT_PRICE")
                    .HasColumnType("decimal(18, 5)");
            });

            modelBuilder.Entity<TkpiVentasCustomer>(entity =>
            {
                entity.ToTable("TKPI_VENTAS_CUSTOMER");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.ChargedTpaId)
                    .HasColumnName("CHARGED_TPA_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.InvoiceTp).HasColumnName("INVOICE_TP");

                entity.Property(e => e.OrderId)
                    .HasColumnName("ORDER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.RtPk)
                    .HasColumnName("RT_PK")
                    .HasMaxLength(50);

                entity.Property(e => e.Sap)
                    .HasColumnName("SAP")
                    .HasMaxLength(50);

                entity.Property(e => e.Sap2)
                    .HasColumnName("SAP2")
                    .HasMaxLength(50);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(50);

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("TOTAL_AMOUNT")
                    .HasColumnType("decimal(18, 5)");
            });

            modelBuilder.Entity<TkpiVentasDetNoRating>(entity =>
            {
                entity.ToTable("TKPI_VENTAS_DET_NO_RATING");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.ArrPf)
                    .HasColumnName("ARR_PF")
                    .HasMaxLength(50);

                entity.Property(e => e.ArrPfArea)
                    .HasColumnName("ARR_PF_AREA")
                    .HasMaxLength(50);

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("CHARGEABLE_WEIGHT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.Consignee)
                    .HasColumnName("CONSIGNEE")
                    .HasMaxLength(100);

                entity.Property(e => e.ConsigneeCity)
                    .HasColumnName("CONSIGNEE_CITY")
                    .HasMaxLength(50);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("CONSIGNEE_COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.ConsigneeId)
                    .HasColumnName("CONSIGNEE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ConsigneeZip)
                    .HasColumnName("CONSIGNEE_ZIP")
                    .HasMaxLength(50);

                entity.Property(e => e.Creation)
                    .HasColumnName("CREATION")
                    .HasMaxLength(50);

                entity.Property(e => e.CreatorId)
                    .HasColumnName("CREATOR_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.CustomerRef)
                    .HasColumnName("CUSTOMER_REF")
                    .HasMaxLength(50);

                entity.Property(e => e.DepPf)
                    .HasColumnName("DEP_PF")
                    .HasMaxLength(50);

                entity.Property(e => e.DepPfArea)
                    .HasColumnName("DEP_PF_AREA")
                    .HasMaxLength(50);

                entity.Property(e => e.ExtOrdId)
                    .HasColumnName("EXT_ORD_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ExtOrdId2)
                    .HasColumnName("EXT_ORD_ID2")
                    .HasMaxLength(50);

                entity.Property(e => e.Incoterm)
                    .HasColumnName("INCOTERM")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderCreationDate)
                    .HasColumnName("ORDER_CREATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.OrderDepartureDate)
                    .HasColumnName("ORDER_DEPARTURE_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.OrderId)
                    .HasColumnName("ORDER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderStatus)
                    .HasColumnName("ORDER_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderVolume)
                    .HasColumnName("ORDER_VOLUME")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OrderWeight)
                    .HasColumnName("ORDER_WEIGHT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OrgUnit)
                    .HasColumnName("ORG_UNIT")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelQty).HasColumnName("PARCEL_QTY");

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(20);

                entity.Property(e => e.Sender)
                    .HasColumnName("SENDER")
                    .HasMaxLength(100);

                entity.Property(e => e.SenderCity)
                    .HasColumnName("SENDER_CITY")
                    .HasMaxLength(50);

                entity.Property(e => e.SenderCountry)
                    .HasColumnName("SENDER_COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.SenderId)
                    .HasColumnName("SENDER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.SenderZip)
                    .HasColumnName("SENDER_ZIP")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TkpiVentasDetRating>(entity =>
            {
                entity.ToTable("TKPI_VENTAS_DET_RATING");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.ArrPf)
                    .HasColumnName("ARR_PF")
                    .HasMaxLength(50);

                entity.Property(e => e.ArrPfArea)
                    .HasColumnName("ARR_PF_AREA")
                    .HasMaxLength(50);

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargeableWeight)
                    .HasColumnName("CHARGEABLE_WEIGHT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.ClosureDate)
                    .HasColumnName("CLOSURE_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.Consignee)
                    .HasColumnName("CONSIGNEE")
                    .HasMaxLength(100);

                entity.Property(e => e.ConsigneeCity)
                    .HasColumnName("CONSIGNEE_CITY")
                    .HasMaxLength(50);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("CONSIGNEE_COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.ConsigneeId)
                    .HasColumnName("CONSIGNEE_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.ConsigneeZip)
                    .HasColumnName("CONSIGNEE_ZIP")
                    .HasMaxLength(50);

                entity.Property(e => e.Contract)
                    .HasColumnName("CONTRACT")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.Creation)
                    .HasColumnName("CREATION")
                    .HasMaxLength(50);

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(50);

                entity.Property(e => e.CustomerRef)
                    .HasColumnName("CUSTOMER_REF")
                    .HasMaxLength(50);

                entity.Property(e => e.DepPfArea)
                    .HasColumnName("DEP_PF_AREA")
                    .HasMaxLength(50);

                entity.Property(e => e.DeparturePf)
                    .HasColumnName("DEPARTURE_PF")
                    .HasMaxLength(50);

                entity.Property(e => e.Divisore).HasColumnName("DIVISORE");

                entity.Property(e => e.Error)
                    .HasColumnName("ERROR")
                    .HasMaxLength(50);

                entity.Property(e => e.ExtOrdId)
                    .HasColumnName("Ext_ord_id")
                    .HasMaxLength(50);

                entity.Property(e => e.ExtOrdId2)
                    .HasColumnName("Ext_ord_id2")
                    .HasMaxLength(50);

                entity.Property(e => e.FkCustomer)
                    .HasColumnName("FK_customer")
                    .HasMaxLength(50);

                entity.Property(e => e.FuelSurcharge)
                    .HasColumnName("FUEL_SURCHARGE")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.Incoterm)
                    .HasColumnName("INCOTERM")
                    .HasMaxLength(50);

                entity.Property(e => e.InvoiceNr)
                    .HasColumnName("INVOICE_NR")
                    .HasMaxLength(50);

                entity.Property(e => e.InvoiceType)
                    .HasColumnName("INVOICE_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderCreationDate)
                    .HasColumnName("ORDER_CREATION_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.OrderDepartureDate)
                    .HasColumnName("ORDER_DEPARTURE_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.OrderId)
                    .HasColumnName("ORDER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderStatus)
                    .HasColumnName("ORDER_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.OrderVolume)
                    .HasColumnName("ORDER_VOLUME")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OrderWeight)
                    .HasColumnName("ORDER_WEIGHT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.OrgUnit)
                    .HasColumnName("ORG_UNIT")
                    .HasMaxLength(50);

                entity.Property(e => e.ParcelQty).HasColumnName("PARCEL_QTY");

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(20);

                entity.Property(e => e.QtyRated).HasColumnName("QTY_RATED");

                entity.Property(e => e.RangeCode)
                    .HasColumnName("RANGE_CODE")
                    .HasMaxLength(50);

                entity.Property(e => e.RangeDescription)
                    .HasColumnName("RANGE_DESCRIPTION")
                    .HasMaxLength(50);

                entity.Property(e => e.RangeType)
                    .HasColumnName("RANGE_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.RefNumber)
                    .HasColumnName("REF_NUMBER")
                    .HasMaxLength(50);

                entity.Property(e => e.RtPk)
                    .HasColumnName("rt_PK")
                    .HasMaxLength(50);

                entity.Property(e => e.Sap)
                    .HasColumnName("SAP")
                    .HasMaxLength(50);

                entity.Property(e => e.Sap2)
                    .HasColumnName("SAP2")
                    .HasMaxLength(50);

                entity.Property(e => e.Sender)
                    .HasColumnName("SENDER")
                    .HasMaxLength(100);

                entity.Property(e => e.SenderCity)
                    .HasColumnName("SENDER_CITY")
                    .HasMaxLength(50);

                entity.Property(e => e.SenderCountry)
                    .HasColumnName("SENDER_COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.SenderId)
                    .HasColumnName("SENDER_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.SenderZip)
                    .HasColumnName("SENDER_ZIP")
                    .HasMaxLength(50);

                entity.Property(e => e.Service)
                    .HasColumnName("SERVICE")
                    .HasMaxLength(50);

                entity.Property(e => e.ServiceType)
                    .HasColumnName("SERVICE_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.TariffAmount)
                    .HasColumnName("TARIFF_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.TaxationType)
                    .HasColumnName("TAXATION_TYPE")
                    .HasMaxLength(5);

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("TOTAL_AMOUNT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.UnitPrice)
                    .HasColumnName("UNIT_PRICE")
                    .HasColumnType("decimal(18, 5)");
            });

            modelBuilder.Entity<TkpiVentasSumDay>(entity =>
            {
                entity.ToTable("TKPI_VENTAS_SUM_DAY");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.CCoes)
                    .HasColumnName("C_COES")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.ChargedTpaId)
                    .HasColumnName("CHARGED_TPA_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.RefDate)
                    .HasColumnName("REF_DATE")
                    .HasColumnType("date");

                entity.Property(e => e.SBultos)
                    .HasColumnName("S_BULTOS")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.SChWgt)
                    .HasColumnName("S_CH_WGT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.SFuel)
                    .HasColumnName("S_FUEL")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.SOrdVol)
                    .HasColumnName("S_ORD_VOL")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.SOrdWgt)
                    .HasColumnName("S_ORD_WGT")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.SOtros)
                    .HasColumnName("S_OTROS")
                    .HasColumnType("decimal(18, 5)");

                entity.Property(e => e.SPortes)
                    .HasColumnName("S_PORTES")
                    .HasColumnType("decimal(18, 5)");
            });

            modelBuilder.Entity<TmpAccessKey>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("tmpAccessKey");

                entity.Property(e => e.Accesskey).HasColumnName("ACCESSKEY");

                entity.Property(e => e.Cc).HasColumnName("cc");
            });

            modelBuilder.Entity<TmpCursor1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TMP_CURSOR1");

                entity.Property(e => e.Customer)
                    .HasColumnName("CUSTOMER")
                    .HasMaxLength(38);

                entity.Property(e => e.Dealer)
                    .HasColumnName("DEALER")
                    .HasMaxLength(6);

                entity.Property(e => e.Destination)
                    .HasColumnName("DESTINATION")
                    .HasMaxLength(38);

                entity.Property(e => e.NumberParcels)
                    .HasColumnName("NUMBER_PARCELS")
                    .HasMaxLength(384);

                entity.Property(e => e.OrderDate)
                    .HasColumnName("ORDER_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.OrderNumber)
                    .HasColumnName("ORDER_NUMBER")
                    .HasMaxLength(25);

                entity.Property(e => e.Platform)
                    .HasColumnName("PLATFORM")
                    .HasMaxLength(38);
            });

            modelBuilder.Entity<TmpCursor2>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TMP_CURSOR2");

                entity.Property(e => e.ParceNumber)
                    .HasColumnName("PARCE_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.ParcelPk)
                    .HasColumnName("PARCEL_PK")
                    .HasColumnType("numeric(38, 0)");
            });

            modelBuilder.Entity<TmpTmpDateFromInjection>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Tmp_TmpDateFromInjection");

                entity.Property(e => e.Brand)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Product)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<TmpVsTrace>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TMP_VS_TRACE");

                entity.Property(e => e.EventDate1)
                    .HasColumnName("EVENT_DATE_1")
                    .HasMaxLength(10);

                entity.Property(e => e.PlatformId)
                    .HasColumnName("PLATFORM_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.ReasonId)
                    .HasColumnName("REASON_ID")
                    .HasMaxLength(8);

                entity.Property(e => e.ReasonName)
                    .HasColumnName("REASON_NAME")
                    .HasMaxLength(2960);

                entity.Property(e => e.StatusId)
                    .HasColumnName("STATUS_ID")
                    .HasMaxLength(8);
            });

            modelBuilder.Entity<UserTrack>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ReportId).HasColumnName("ReportID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Report)
                    .WithMany(p => p.UserTrack)
                    .HasForeignKey(d => d.ReportId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserTrack_Web_Reports");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserTrack)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserTrack_Web_Users");
            });

            modelBuilder.Entity<UserTrackTemp>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ReportId).HasColumnName("ReportID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Report)
                    .WithMany(p => p.UserTrackTemp)
                    .HasForeignKey(d => d.ReportId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserTrackTemp_Web_Reports");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserTrackTemp)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserTrackTemp_Web_Users");
            });

            modelBuilder.Entity<ViaCustomers>(entity =>
            {
                entity.ToTable("Via_Customers");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.Brand).HasMaxLength(150);

                entity.Property(e => e.CustomerGroup).HasMaxLength(150);

                entity.Property(e => e.MarketLine).HasMaxLength(150);
            });

            modelBuilder.Entity<ViaTkpi1PlfVolMonth>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("VIA_TKPI1_PLF_VOL_MONTH");

                entity.Property(e => e.ArrOperAreaId)
                    .HasColumnName("ARR_OPER_AREA_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.CreatorId)
                    .HasColumnName("CREATOR_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DepOperAreaId)
                    .HasColumnName("DEP_OPER_AREA_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.EstTimeDep).HasColumnName("EST_TIME_DEP");

                entity.Property(e => e.HuQty)
                    .HasColumnName("HU_QTY")
                    .HasColumnType("numeric(9, 0)");

                entity.Property(e => e.OrdStatus)
                    .HasColumnName("ORD_STATUS")
                    .HasMaxLength(3);

                entity.Property(e => e.OrdgrsWgt)
                    .HasColumnName("ORDGRS_WGT")
                    .HasColumnType("numeric(11, 3)");

                entity.Property(e => e.PcsgrsWgt)
                    .HasColumnName("PCSGRS_WGT")
                    .HasColumnType("numeric(11, 3)");

                entity.Property(e => e.Pk)
                    .HasColumnName("PK")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.SprFk)
                    .HasColumnName("SPR_FK")
                    .HasMaxLength(50);

                entity.Property(e => e.SprId)
                    .HasColumnName("SPR_ID")
                    .HasMaxLength(60);

                entity.Property(e => e.XaccountFk)
                    .HasColumnName("XACCOUNT_FK")
                    .HasMaxLength(50);

                entity.Property(e => e.XaccountId)
                    .HasColumnName("XACCOUNT_ID")
                    .HasMaxLength(60);
            });

            modelBuilder.Entity<ViaTkpi2DailyPerfDelay>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("VIA_TKPI2_DAILY_PERF_DELAY");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.City)
                    .HasColumnName("CITY")
                    .HasMaxLength(40);

                entity.Property(e => e.CntHuType)
                    .HasColumnName("CNT_HU_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.ConsigneeCountry)
                    .HasColumnName("CONSIGNEE_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.DealerCode)
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(38);

                entity.Property(e => e.DealerName)
                    .HasColumnName("DEALER_NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.DealerZip)
                    .HasColumnName("DEALER_ZIP")
                    .HasMaxLength(12);

                entity.Property(e => e.ForcedDate)
                    .HasColumnName("FORCED_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.ForcedGrp)
                    .HasColumnName("FORCED_GRP")
                    .HasMaxLength(2);

                entity.Property(e => e.ForcedReasonCode)
                    .HasColumnName("FORCED_REASON_CODE")
                    .HasMaxLength(20);

                entity.Property(e => e.ForcedStatus)
                    .HasColumnName("FORCED_STATUS")
                    .HasMaxLength(20);

                entity.Property(e => e.ForcedTime)
                    .HasColumnName("FORCED_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.ForcedTraceOriginKind)
                    .HasColumnName("FORCED_TRACE_ORIGIN_KIND")
                    .HasMaxLength(7);

                entity.Property(e => e.Grp)
                    .HasColumnName("GRP")
                    .HasMaxLength(384);

                entity.Property(e => e.GrsWgt).HasColumnName("GRS_WGT");

                entity.Property(e => e.LastEventDate)
                    .HasColumnName("LAST_EVENT_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.LastEventDescription)
                    .HasColumnName("LAST_EVENT_DESCRIPTION")
                    .HasMaxLength(740);

                entity.Property(e => e.LastEventHour)
                    .HasColumnName("LAST_EVENT_HOUR")
                    .HasMaxLength(7);

                entity.Property(e => e.LastEventPlatform)
                    .HasColumnName("LAST_EVENT_PLATFORM")
                    .HasMaxLength(38);

                entity.Property(e => e.LastEventReason)
                    .HasColumnName("LAST_EVENT_REASON")
                    .HasMaxLength(8);

                entity.Property(e => e.LastEventStatus)
                    .HasColumnName("LAST_EVENT_STATUS")
                    .HasMaxLength(8);

                entity.Property(e => e.Lg)
                    .HasColumnName("LG")
                    .HasMaxLength(384);

                entity.Property(e => e.MaxDelDate)
                    .HasColumnName("MAX_DEL_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.MaxDelDatetime).HasColumnName("MAX_DEL_DATETIME");

                entity.Property(e => e.MaxDelTime)
                    .HasColumnName("MAX_DEL_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.OpDatetime).HasColumnName("OP_DATETIME");

                entity.Property(e => e.OpsType)
                    .HasColumnName("OPS_TYPE")
                    .HasMaxLength(6);

                entity.Property(e => e.OpsWb)
                    .HasColumnName("OPS_WB")
                    .HasMaxLength(25);

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(20);

                entity.Property(e => e.OrdStatus)
                    .HasColumnName("ORD_STATUS")
                    .HasMaxLength(10);

                entity.Property(e => e.OwnerCountry)
                    .HasColumnName("OWNER_COUNTRY")
                    .HasMaxLength(10);

                entity.Property(e => e.ParcelNumber)
                    .HasColumnName("PARCEL_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(38);

                entity.Property(e => e.Pk)
                    .HasColumnName("PK")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.ShipmentDate).HasColumnName("SHIPMENT_DATE");

                entity.Property(e => e.ShipmentId)
                    .HasColumnName("SHIPMENT_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.SoldProd)
                    .HasColumnName("SOLD_PROD")
                    .HasMaxLength(25);

                entity.Property(e => e.TrDescription).HasColumnName("TR_DESCRIPTION");

                entity.Property(e => e.TrEventDate)
                    .HasColumnName("TR_EVENT_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.TrEventDate2)
                    .HasColumnName("TR_EVENT_DATE2")
                    .HasMaxLength(10);

                entity.Property(e => e.TrEventTime)
                    .HasColumnName("TR_EVENT_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.TrEventTime2)
                    .HasColumnName("TR_EVENT_TIME2")
                    .HasMaxLength(7);

                entity.Property(e => e.TrEventdatetime).HasColumnName("TR_EVENTDATETIME");

                entity.Property(e => e.TrReasonCode)
                    .HasColumnName("TR_REASON_CODE")
                    .HasMaxLength(8);

                entity.Property(e => e.TrResponsability)
                    .HasColumnName("TR_RESPONSABILITY")
                    .HasMaxLength(18);

                entity.Property(e => e.TrStatus)
                    .HasColumnName("TR_STATUS")
                    .HasMaxLength(8);

                entity.Property(e => e.TrTourne)
                    .HasColumnName("TR_TOURNE")
                    .HasMaxLength(38);

                entity.Property(e => e.TrTourne3)
                    .HasColumnName("TR_TOURNE3")
                    .HasMaxLength(38);

                entity.Property(e => e.TrTourne4)
                    .HasColumnName("TR_TOURNE4")
                    .HasMaxLength(38);
            });

            modelBuilder.Entity<ViaTkpi2DailyPerfDelayForced>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("VIA_TKPI2_DAILY_PERF_DELAY_FORCED");

                entity.Property(e => e.Brand)
                    .HasColumnName("BRAND")
                    .HasMaxLength(38);

                entity.Property(e => e.City)
                    .HasColumnName("CITY")
                    .HasMaxLength(40);

                entity.Property(e => e.CntHuType)
                    .HasColumnName("CNT_HU_TYPE")
                    .HasMaxLength(50);

                entity.Property(e => e.DealerCode)
                    .HasColumnName("DEALER_CODE")
                    .HasMaxLength(38);

                entity.Property(e => e.DealerName)
                    .HasColumnName("DEALER_NAME")
                    .HasMaxLength(70);

                entity.Property(e => e.DealerZip)
                    .HasColumnName("DEALER_ZIP")
                    .HasMaxLength(12);

                entity.Property(e => e.ForcedDate)
                    .HasColumnName("FORCED_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.ForcedGrp)
                    .HasColumnName("FORCED_GRP")
                    .HasMaxLength(2);

                entity.Property(e => e.ForcedReasonCode)
                    .HasColumnName("FORCED_REASON_CODE")
                    .HasMaxLength(20);

                entity.Property(e => e.ForcedStatus)
                    .HasColumnName("FORCED_STATUS")
                    .HasMaxLength(20);

                entity.Property(e => e.ForcedTime)
                    .HasColumnName("FORCED_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.ForcedTraceOriginKind)
                    .HasColumnName("FORCED_TRACE_ORIGIN_KIND")
                    .HasMaxLength(7);

                entity.Property(e => e.Grp)
                    .HasColumnName("GRP")
                    .HasMaxLength(384);

                entity.Property(e => e.GrsWgt).HasColumnName("GRS_WGT");

                entity.Property(e => e.LastEventDate)
                    .HasColumnName("LAST_EVENT_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.LastEventDescription).HasColumnName("LAST_EVENT_DESCRIPTION");

                entity.Property(e => e.LastEventHour)
                    .HasColumnName("LAST_EVENT_HOUR")
                    .HasMaxLength(7);

                entity.Property(e => e.LastEventPlatform)
                    .HasColumnName("LAST_EVENT_PLATFORM")
                    .HasMaxLength(38);

                entity.Property(e => e.LastEventReason)
                    .HasColumnName("LAST_EVENT_REASON")
                    .HasMaxLength(8);

                entity.Property(e => e.LastEventStatus)
                    .HasColumnName("LAST_EVENT_STATUS")
                    .HasMaxLength(8);

                entity.Property(e => e.Lg)
                    .HasColumnName("LG")
                    .HasMaxLength(384);

                entity.Property(e => e.MaxDelDate)
                    .HasColumnName("MAX_DEL_DATE")
                    .HasMaxLength(10);

                entity.Property(e => e.MaxDelDatetime).HasColumnName("MAX_DEL_DATETIME");

                entity.Property(e => e.MaxDelTime)
                    .HasColumnName("MAX_DEL_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.OpDatetime).HasColumnName("OP_DATETIME");

                entity.Property(e => e.OpsType)
                    .HasColumnName("OPS_TYPE")
                    .HasMaxLength(6);

                entity.Property(e => e.OpsWb)
                    .HasColumnName("OPS_WB")
                    .HasMaxLength(25);

                entity.Property(e => e.OrdId)
                    .HasColumnName("ORD_ID")
                    .HasMaxLength(20);

                entity.Property(e => e.OrdStatus)
                    .HasColumnName("ORD_STATUS")
                    .HasMaxLength(10);

                entity.Property(e => e.ParcelNumber)
                    .HasColumnName("PARCEL_NUMBER")
                    .HasMaxLength(38);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(38);

                entity.Property(e => e.Pk)
                    .HasColumnName("PK")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.ShipmentId)
                    .HasColumnName("SHIPMENT_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.SoldProd)
                    .HasColumnName("SOLD_PROD")
                    .HasMaxLength(25);

                entity.Property(e => e.TrEventDate)
                    .HasColumnName("TR_EVENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.TrEventDate2).HasColumnName("TR_EVENT_DATE2");

                entity.Property(e => e.TrEventTime)
                    .HasColumnName("TR_EVENT_TIME")
                    .HasMaxLength(7);

                entity.Property(e => e.TrEventTime2)
                    .HasColumnName("TR_EVENT_TIME2")
                    .HasColumnType("datetime");

                entity.Property(e => e.TrEventdatetime).HasColumnName("TR_EVENTDATETIME");

                entity.Property(e => e.TrReasonCode)
                    .HasColumnName("TR_REASON_CODE")
                    .HasMaxLength(8);

                entity.Property(e => e.TrReasonName).HasColumnName("TR_REASON_NAME");

                entity.Property(e => e.TrResponsability)
                    .HasColumnName("TR_RESPONSABILITY")
                    .HasMaxLength(18);

                entity.Property(e => e.TrStatus)
                    .HasColumnName("TR_STATUS")
                    .HasMaxLength(8);

                entity.Property(e => e.TrTourne)
                    .HasColumnName("TR_TOURNE")
                    .HasMaxLength(38);

                entity.Property(e => e.TrTourne3)
                    .HasColumnName("TR_TOURNE3")
                    .HasMaxLength(38);

                entity.Property(e => e.TrTourne4)
                    .HasColumnName("TR_TOURNE4")
                    .HasMaxLength(38);

                entity.Property(e => e.UserId)
                    .HasColumnName("USER_ID")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<ViaTkpi2OpsMoto>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("VIA_TKPI2_OPS_MOTO");

                entity.Property(e => e.CurrentPfMoto)
                    .HasColumnName("CURRENT_PF_MOTO")
                    .HasMaxLength(20);

                entity.Property(e => e.DelDateMoto)
                    .HasColumnName("DEL_DATE_MOTO")
                    .HasMaxLength(20);

                entity.Property(e => e.DelTimeMoto)
                    .HasColumnName("DEL_TIME_MOTO")
                    .HasMaxLength(20);

                entity.Property(e => e.OpsDatetimeMoto)
                    .HasColumnName("OPS_DATETIME_MOTO")
                    .HasColumnType("datetime");

                entity.Property(e => e.OpsTypeMoto)
                    .HasColumnName("OPS_TYPE_MOTO")
                    .HasMaxLength(20);

                entity.Property(e => e.Pk)
                    .HasColumnName("PK")
                    .HasColumnType("numeric(38, 0)");
            });

            modelBuilder.Entity<ViaTkpi3DailyDamage>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("VIA_TKPI3_DAILY_DAMAGE");

                entity.Property(e => e.Country)
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(2);

                entity.Property(e => e.EventDate)
                    .HasColumnName("EVENT_DATE")
                    .HasMaxLength(16);

                entity.Property(e => e.LhMr)
                    .HasColumnName("LH_MR")
                    .HasMaxLength(50);

                entity.Property(e => e.LineType)
                    .HasColumnName("LINE_TYPE")
                    .HasMaxLength(25);

                entity.Property(e => e.ParcelId)
                    .HasColumnName("PARCEL_ID")
                    .HasColumnType("numeric(38, 0)");

                entity.Property(e => e.ParcelNumber)
                    .HasColumnName("PARCEL_NUMBER")
                    .HasMaxLength(50);

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(20);

                entity.Property(e => e.ReasonId)
                    .HasColumnName("REASON_ID")
                    .HasMaxLength(8);

                entity.Property(e => e.ReasonName).HasColumnName("REASON_NAME");

                entity.Property(e => e.ShipmentDate)
                    .HasColumnName("SHIPMENT_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.Status)
                    .HasColumnName("STATUS")
                    .HasMaxLength(6);

                entity.Property(e => e.UserCreator)
                    .HasColumnName("USER_CREATOR")
                    .HasMaxLength(70);
            });

            modelBuilder.Entity<ViaTkpiDelayPerfFtl>(entity =>
            {
                entity.ToTable("VIA_TKPI_DELAY_PERF_FTL");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Circuit)
                    .HasColumnName("CIRCUIT")
                    .HasMaxLength(250);

                entity.Property(e => e.DestAdresse)
                    .HasColumnName("DEST_ADRESSE")
                    .HasMaxLength(250);

                entity.Property(e => e.DestAdresse2)
                    .HasColumnName("DEST_ADRESSE2")
                    .HasMaxLength(250);

                entity.Property(e => e.DestCp)
                    .HasColumnName("DEST_CP")
                    .HasMaxLength(100);

                entity.Property(e => e.DestPays)
                    .HasColumnName("DEST_PAYS")
                    .HasMaxLength(10);

                entity.Property(e => e.DestVille)
                    .HasColumnName("DEST_VILLE")
                    .HasMaxLength(100);

                entity.Property(e => e.Destinataire)
                    .HasColumnName("DESTINATAIRE")
                    .HasMaxLength(250);

                entity.Property(e => e.Etd)
                    .HasColumnName("ETD")
                    .HasColumnType("datetime");

                entity.Property(e => e.ExecutedEndDatetime).HasColumnName("EXECUTED_END_DATETIME");

                entity.Property(e => e.ExpAdresse)
                    .HasColumnName("EXP_ADRESSE")
                    .HasMaxLength(250);

                entity.Property(e => e.ExpAdresse2)
                    .HasColumnName("EXP_ADRESSE2")
                    .HasMaxLength(250);

                entity.Property(e => e.ExpCp)
                    .HasColumnName("EXP_CP")
                    .HasMaxLength(100);

                entity.Property(e => e.ExpPays)
                    .HasColumnName("EXP_PAYS")
                    .HasMaxLength(10);

                entity.Property(e => e.ExpVille)
                    .HasColumnName("EXP_VILLE")
                    .HasMaxLength(100);

                entity.Property(e => e.Expediteur)
                    .HasColumnName("EXPEDITEUR")
                    .HasMaxLength(250);

                entity.Property(e => e.LoginCreation)
                    .HasColumnName("LOGIN_CREATION")
                    .HasMaxLength(250);

                entity.Property(e => e.Marque)
                    .HasColumnName("MARQUE")
                    .HasMaxLength(100);

                entity.Property(e => e.NbKms).HasColumnName("NB_KMS");

                entity.Property(e => e.NoOrder)
                    .HasColumnName("NO_ORDER")
                    .HasMaxLength(100);

                entity.Property(e => e.PfArrivee)
                    .HasColumnName("PF_ARRIVEE")
                    .HasMaxLength(100);

                entity.Property(e => e.PfDepart)
                    .HasColumnName("PF_DEPART")
                    .HasMaxLength(50);

                entity.Property(e => e.PlannedEndDatetime).HasColumnName("PLANNED_END_DATETIME");

                entity.Property(e => e.PlannedStartDatetime).HasColumnName("PLANNED_START_DATETIME");

                entity.Property(e => e.Produit)
                    .HasColumnName("PRODUIT")
                    .HasMaxLength(100);

                entity.Property(e => e.Transporteur)
                    .HasColumnName("TRANSPORTEUR")
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<ViaTripLines>(entity =>
            {
                entity.HasKey(e => e.Pk);

                entity.ToTable("VIA_TRIP_LINES");

                entity.Property(e => e.Pk)
                    .HasColumnName("PK")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name).HasColumnName("NAME");

                entity.Property(e => e.SupplierId)
                    .HasColumnName("SUPPLIER_ID")
                    .HasMaxLength(38);

                entity.Property(e => e.TripLineId)
                    .HasColumnName("TRIP_LINE_ID")
                    .HasMaxLength(38);
            });

            modelBuilder.Entity<WebAdValoremMarques>(entity =>
            {
                entity.HasKey(e => e.Marque);

                entity.ToTable("Web_AdValoremMarques");

                entity.Property(e => e.Marque).HasMaxLength(100);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<WebCategories>(entity =>
            {
                entity.ToTable("Web_Categories");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<WebChargingTpabyCompany>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_ChargingTPAbyCompany");

                entity.HasIndex(e => new { e.Company, e.ChargingTpa, e.ChargingType })
                    .HasName("NonClusteredIndex-20220425-100046");

                entity.Property(e => e.ChargingTpa)
                    .IsRequired()
                    .HasColumnName("ChargingTPA")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargingType)
                    .HasColumnName("Charging_Type")
                    .HasMaxLength(40);

                entity.Property(e => e.Company)
                    .IsRequired()
                    .HasMaxLength(4);

                entity.Property(e => e.Plfcosts)
                    .IsRequired()
                    .HasColumnName("PLFCosts")
                    .HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<WebChargingTpabyCompany16122022>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_ChargingTPAbyCompany_16122022");

                entity.Property(e => e.ChargingTpa)
                    .IsRequired()
                    .HasColumnName("ChargingTPA")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargingType)
                    .HasColumnName("Charging_Type")
                    .HasMaxLength(40);

                entity.Property(e => e.Company)
                    .IsRequired()
                    .HasMaxLength(4);

                entity.Property(e => e.Plfcosts).HasColumnName("PLFCosts");
            });

            modelBuilder.Entity<WebChargingTpabyCompany20220216>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_ChargingTPAbyCompany_2022_02_16");

                entity.Property(e => e.ChargingTpa)
                    .IsRequired()
                    .HasColumnName("ChargingTPA")
                    .HasMaxLength(50);

                entity.Property(e => e.Company)
                    .IsRequired()
                    .HasMaxLength(4);

                entity.Property(e => e.Plfcosts).HasColumnName("PLFCosts");
            });

            modelBuilder.Entity<WebChargingTpabyCompanyBackup>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_ChargingTPAbyCompany_backup");

                entity.Property(e => e.ChargingTpa)
                    .IsRequired()
                    .HasColumnName("ChargingTPA")
                    .HasMaxLength(50);

                entity.Property(e => e.ChargingType)
                    .HasColumnName("Charging_Type")
                    .HasMaxLength(40);

                entity.Property(e => e.Company)
                    .IsRequired()
                    .HasMaxLength(4);

                entity.Property(e => e.Plfcosts).HasColumnName("PLFCosts");
            });

            modelBuilder.Entity<WebChargingTpabyCompanyBad>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_ChargingTPAbyCompanyBAD");

                entity.Property(e => e.ChargingTpa)
                    .IsRequired()
                    .HasColumnName("ChargingTPA")
                    .HasMaxLength(20);

                entity.Property(e => e.Company)
                    .IsRequired()
                    .HasMaxLength(4);

                entity.Property(e => e.Plfcosts)
                    .IsRequired()
                    .HasColumnName("PLFCosts")
                    .HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<WebCompanies>(entity =>
            {
                entity.ToTable("Web_Companies");

                entity.Property(e => e.Label).HasMaxLength(50);

                entity.Property(e => e.Value).HasMaxLength(50);
            });

            modelBuilder.Entity<WebCountries>(entity =>
            {
                entity.ToTable("Web_Countries");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<WebKpiSettings>(entity =>
            {
                entity.ToTable("Web_KpiSettings");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<WebMajorCustomers>(entity =>
            {
                entity.ToTable("Web_MajorCustomers");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(150);
            });

            modelBuilder.Entity<WebOpenDaysDet>(entity =>
            {
                entity.ToTable("Web_OpenDaysDet");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Day).HasColumnType("date");
            });

            modelBuilder.Entity<WebPages>(entity =>
            {
                entity.ToTable("Web_Pages");

                entity.Property(e => e.DateCreation).HasColumnType("datetime");

                entity.Property(e => e.KeyReport)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Url)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_dbo.Web_Pages_dbo.Web_Pages_ParentId");
            });

            modelBuilder.Entity<WebPagesRoles>(entity =>
            {
                entity.HasKey(e => new { e.PageId, e.RoleId })
                    .HasName("PK_dbo.Web_PagesRoles");

                entity.ToTable("Web_PagesRoles");

                entity.Property(e => e.PageId).HasColumnName("Page_Id");

                entity.Property(e => e.RoleId).HasColumnName("Role_Id");

                entity.HasOne(d => d.Page)
                    .WithMany(p => p.WebPagesRoles)
                    .HasForeignKey(d => d.PageId)
                    .HasConstraintName("FK_dbo.Web_PagesRoles_dbo.Web_Pages_Page_Id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.WebPagesRoles)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_dbo.Web_PagesRoles_dbo.Web_Roles_Role_Id");
            });

            modelBuilder.Entity<WebProduct>(entity =>
            {
                entity.HasKey(e => new { e.Product, e.Id })
                    .HasName("PK_Web_PRODUCT");

                entity.ToTable("Web_Product");

                entity.Property(e => e.Product)
                    .HasColumnName("PRODUCT")
                    .HasMaxLength(50);

                entity.Property(e => e.ProductRange).HasMaxLength(50);
            });

            modelBuilder.Entity<WebProductRange>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_ProductRange");

                entity.Property(e => e.ProductRange).HasMaxLength(50);
            });

            modelBuilder.Entity<WebProductRegimes>(entity =>
            {
                entity.ToTable("Web_ProductRegimes");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<WebProfile>(entity =>
            {
                entity.ToTable("Web_Profile");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.ProfileName).HasMaxLength(255);
            });

            modelBuilder.Entity<WebProfileReport>(entity =>
            {
                entity.HasKey(e => new { e.ProfileId, e.ReportId });

                entity.ToTable("Web_ProfileReport");
            });

            modelBuilder.Entity<WebReportDealerCode>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_ReportDealerCode");

                entity.Property(e => e.DealerCode)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.ReportId).HasColumnName("ReportID");
            });

            modelBuilder.Entity<WebReportDealerShipmentsP20220425>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("WEB_REPORT_DEALER_SHIPMENTS_P_2022_04_25");

                entity.Property(e => e.Brand)
                    .IsRequired()
                    .HasColumnName("BRAND")
                    .HasMaxLength(250);

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("CODE")
                    .HasMaxLength(250);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.IsDealer).HasColumnName("IS_DEALER");
            });

            modelBuilder.Entity<WebReportDealerShipmentsParams>(entity =>
            {
                entity.ToTable("WEB_REPORT_DEALER_SHIPMENTS_PARAMS");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Brand)
                    .IsRequired()
                    .HasColumnName("BRAND")
                    .HasMaxLength(250);

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("CODE")
                    .HasMaxLength(250);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(50);

                entity.Property(e => e.IsDealer).HasColumnName("IS_DEALER");
            });

            modelBuilder.Entity<WebReportUserPlateforms>(entity =>
            {
                entity.HasKey(e => new { e.ReportId, e.UserId, e.Pf })
                    .HasName("PK_WebReport_UserPlateforms_1");

                entity.ToTable("WebReport_UserPlateforms");

                entity.Property(e => e.ReportId).HasColumnName("REPORT_ID");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.Pf)
                    .HasColumnName("PF")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("COUNTRY")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<WebReports>(entity =>
            {
                entity.ToTable("Web_Reports");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.DateCreation).HasColumnType("datetime");

                entity.Property(e => e.DateUpdate).HasColumnType("datetime");

                entity.Property(e => e.IsForEmail)
                    .HasColumnName("IS_FOR_EMAIL")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Label).HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.ParentReportId).HasColumnName("ParentReportID");

                entity.Property(e => e.ReportKey)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ReportPath).HasMaxLength(400);

                entity.Property(e => e.ReportServer).HasMaxLength(100);

                entity.Property(e => e.Subreport).HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<WebReportsParams>(entity =>
            {
                entity.ToTable("Web_ReportsParams");

                entity.Property(e => e.Id).HasDefaultValueSql("(newid())");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.IsDelayReport)
                    .IsRequired()
                    .HasColumnName("IS_DELAY_REPORT")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Kpi).HasColumnName("KPI");
            });

            modelBuilder.Entity<WebReportsParams20220325>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_ReportsParams_2022_03_25");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.IsDelayReport).HasColumnName("IS_DELAY_REPORT");

                entity.Property(e => e.Kpi).HasColumnName("KPI");
            });

            modelBuilder.Entity<WebReportsProductsParamsxx>(entity =>
            {
                entity.ToTable("Web_ReportsProductsParamsxx");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Kpi).HasColumnName("KPI");

                entity.Property(e => e.Product).HasMaxLength(100);
            });

            modelBuilder.Entity<WebReportsproductsparams>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("web_reportsproductsparams");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Kpi).HasColumnName("KPI");

                entity.Property(e => e.Product).HasMaxLength(100);
            });

            modelBuilder.Entity<WebRoles>(entity =>
            {
                entity.ToTable("Web_Roles");

                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<WebServicePages>(entity =>
            {
                entity.HasKey(e => new { e.ServiceId, e.PageId });

                entity.ToTable("Web_ServicePages");
            });

            modelBuilder.Entity<WebServiceReport>(entity =>
            {
                entity.HasKey(e => new { e.ServiceId, e.ReportId });

                entity.ToTable("Web_ServiceReport");

                entity.Property(e => e.ServiceId).HasColumnName("serviceId");

                entity.Property(e => e.ReportId).HasColumnName("reportId");
            });

            modelBuilder.Entity<WebServiceRoleUser>(entity =>
            {
                entity.ToTable("Web_ServiceRoleUser");

                entity.Property(e => e.Id).HasColumnName("ID");
            });

            modelBuilder.Entity<WebServices>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_Services");

                entity.Property(e => e.DateCreation)
                    .HasColumnName("dateCreation")
                    .HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<WebUserCountry>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.CountryCode });

                entity.ToTable("Web_UserCountry");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.CountryCode)
                    .HasColumnName("countryCode")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<WebUserPlateform>(entity =>
            {
                entity.ToTable("Web_UserPlateform");

                entity.Property(e => e.Plateform)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.UserId).HasColumnName("userId");
            });

            modelBuilder.Entity<WebUserPlateformBkp20240813>(entity =>
            {
                entity.ToTable("Web_UserPlateform_bkp20240813");

                entity.Property(e => e.Plateform)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.UserId).HasColumnName("userId");
            });

            modelBuilder.Entity<WebUserReports>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ReportId });

                entity.ToTable("Web_UserReports");
            });

            modelBuilder.Entity<WebUsers>(entity =>
            {
                entity.ToTable("Web_Users");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.AccessKey)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.ServiceId).HasColumnName("serviceId");

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.Property(e => e.UserType)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Profile)
                    .WithMany(p => p.WebUsers)
                    .HasForeignKey(d => d.ProfileId)
                    .HasConstraintName("FK__Web_Users__Profi__0942B845");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.WebUsers)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_Web_Roles_Web_Users");
            });

            modelBuilder.Entity<WebVersions>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_Versions");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.VersionName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<WebYears>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Web_Years");

                entity.Property(e => e.FirstDayOfWeek)
                    .HasColumnName("firstDayOfWeek")
                    .HasColumnType("date");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
