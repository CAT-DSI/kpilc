using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

#nullable disable

namespace CATLCR_BackEnd.Data.BILCO2
{
    public partial class BILC_CO2Context : DbContext
    {
        public BILC_CO2Context()
        {
        }

        public BILC_CO2Context(DbContextOptions<BILC_CO2Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Co2emission> Co2emissions { get; set; }
        public virtual DbSet<Means> Means { get; set; }
        public virtual DbSet<MeansType> MeansTypes { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ThirdParty> ThirdParties { get; set; }
        public virtual DbSet<Time> Times { get; set; }
        public virtual DbSet<WebCountry> WebCountries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Co2emission>(entity =>
            {
                entity.HasKey(e => e.IdCo2emission);

                entity.ToTable("CO2Emissions");

                entity.Property(e => e.IdCo2emission).HasColumnName("IdCO2Emission");

                entity.Property(e => e.Co2emission1).HasColumnName("CO2Emission");

                entity.Property(e => e.Co2level).HasColumnName("CO2Level");

                entity.Property(e => e.Co2rate)
                    .HasColumnType("numeric(10, 2)")
                    .HasColumnName("CO2Rate");

                entity.Property(e => e.Co2validFrom)
                    .HasColumnType("datetime")
                    .HasColumnName("CO2ValidFrom");

                entity.Property(e => e.Co2validUntil)
                    .HasColumnType("datetime")
                    .HasColumnName("CO2ValidUntil");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.EstTimeDep).HasColumnType("datetime");

                entity.Property(e => e.ExtOrdId).HasMaxLength(35);

                entity.Property(e => e.GrossWeight).HasColumnType("numeric(11, 3)");

                entity.Property(e => e.IdMeansType).HasColumnName("idMeansType");

                entity.Property(e => e.IdSender)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.KmNumber).HasColumnType("numeric(8, 2)");

                entity.Property(e => e.OpeCode).HasMaxLength(50);

                entity.Property(e => e.OpeStatus).HasMaxLength(50);

                entity.Property(e => e.OpeType).HasMaxLength(50);

                entity.Property(e => e.OrdCode).HasMaxLength(25);

                entity.Property(e => e.PerformerId).HasMaxLength(50);

                entity.Property(e => e.RoadType).HasMaxLength(50);

                entity.Property(e => e.TripId).HasMaxLength(50);

                entity.Property(e => e.TripLineId).HasMaxLength(50);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Means>(entity =>
            {
                entity.HasKey(e => e.IdMeans)
                    .HasName("PK_Dim_Means");

                entity.Property(e => e.IdMeans).ValueGeneratedNever();

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.MeansCode).HasMaxLength(38);

                entity.Property(e => e.MeansName).HasMaxLength(70);

                entity.Property(e => e.MeansType).HasMaxLength(38);

                entity.Property(e => e.TruckPlateNo).HasMaxLength(38);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<MeansType>(entity =>
            {
                entity.HasKey(e => e.IdMeansType);

                entity.ToTable("MeansType");

                entity.Property(e => e.IdMeansType)
                    .ValueGeneratedNever()
                    .HasColumnName("idMeansType");

                entity.Property(e => e.Co2meansTypeId)
                    .HasMaxLength(38)
                    .HasColumnName("CO2MeansTypeId");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.MeansTypeCode).HasMaxLength(50);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.IdProduct);

                entity.ToTable("Product");

                entity.Property(e => e.IdProduct)
                    .ValueGeneratedNever()
                    .HasColumnName("idProduct");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.ProductCode).HasMaxLength(25);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<ThirdParty>(entity =>
            {
                entity.HasKey(e => e.IdThirdParty);

                entity.ToTable("ThirdParty");

                entity.Property(e => e.Bu)
                    .HasMaxLength(38)
                    .HasColumnName("BU");

                entity.Property(e => e.Cee)
                    .HasMaxLength(50)
                    .HasColumnName("CEE");

                entity.Property(e => e.CityName).HasMaxLength(40);

                entity.Property(e => e.Company).HasMaxLength(38);

                entity.Property(e => e.CountryCode).HasMaxLength(2);

                entity.Property(e => e.CountryName).HasMaxLength(70);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IdThirdPartyDwh).HasColumnName("IdThirdPartyDWH");

                entity.Property(e => e.IsCustomer).HasMaxLength(50);

                entity.Property(e => e.IsPlatform).HasMaxLength(50);

                entity.Property(e => e.IsSupplier).HasMaxLength(50);

                entity.Property(e => e.IsPrincipal).HasColumnName("IS_PRINCIPAL");

                entity.Property(e => e.Latitude).HasColumnType("numeric(15, 6)");

                entity.Property(e => e.Longitude).HasColumnType("numeric(15, 6)");

                entity.Property(e => e.State).HasMaxLength(3);

                entity.Property(e => e.ThirdPartyCode).HasMaxLength(50);

                entity.Property(e => e.ThirdPartyName).HasMaxLength(70);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.ZipCode).HasMaxLength(12);
            });

            modelBuilder.Entity<Time>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Time");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.DateFormat).HasMaxLength(50);

                entity.Property(e => e.Day).HasMaxLength(50);

                entity.Property(e => e.DayName).HasMaxLength(50);

                entity.Property(e => e.Half).HasMaxLength(50);

                entity.Property(e => e.MonthName).HasMaxLength(50);

                entity.Property(e => e.MonthNumber).HasMaxLength(50);

                entity.Property(e => e.MonthPeriod).HasMaxLength(50);

                entity.Property(e => e.Quarter).HasMaxLength(50);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.Property(e => e.Week).HasMaxLength(50);

                entity.Property(e => e.Year).HasMaxLength(50);

                entity.Property(e => e.YearHalf)
                    .HasMaxLength(50)
                    .HasColumnName("Year-Half");

                entity.Property(e => e.YearQuarter)
                    .HasMaxLength(50)
                    .HasColumnName("Year-Quarter");

                entity.Property(e => e.YearWeek)
                    .HasMaxLength(50)
                    .HasColumnName("Year-Week");
            });

            modelBuilder.Entity<WebCountry>(entity =>
            {
                entity.ToTable("Web_Country");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name).HasMaxLength(20);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
