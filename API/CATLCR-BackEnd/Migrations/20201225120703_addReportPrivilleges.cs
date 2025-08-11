using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CATLCR_BackEnd.Migrations
{
    public partial class addReportPrivilleges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RoleReportAccess",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    RoleId = table.Column<Guid>(nullable: false),
                    ReportId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("ID", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoleReportAccess_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RoleReportAccess_LCRRoles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "dbo",
                        principalTable: "LCRRoles",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserParamValues",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    Value = table.Column<string>(nullable: true),
                    UserID = table.Column<Guid>(nullable: false),
                    Scheduler = table.Column<bool>(nullable: false),
                    CriteriaID = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserParamValues", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserParamValues_Parameters_CriteriaID",
                        column: x => x.CriteriaID,
                        principalTable: "Parameters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserParamValues_LCRUsers_UserID",
                        column: x => x.UserID,
                        principalSchema: "dbo",
                        principalTable: "LCRUsers",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserParamValues_CriteriaID",
                table: "UserParamValues",
                column: "CriteriaID");

            migrationBuilder.CreateIndex(
                name: "IX_UserParamValues_UserID",
                table: "UserParamValues",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_RoleReportAccess_ReportId",
                schema: "dbo",
                table: "RoleReportAccess",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_RoleReportAccess_RoleId",
                schema: "dbo",
                table: "RoleReportAccess",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserParamValues");

            migrationBuilder.DropTable(
                name: "RoleReportAccess",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "UserRoles",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Criteria");

            migrationBuilder.DropTable(
                name: "Report");

            migrationBuilder.DropTable(
                name: "Category");
        }
    }
}
