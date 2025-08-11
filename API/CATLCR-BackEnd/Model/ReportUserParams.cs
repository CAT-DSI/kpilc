using System;
using System.Collections.Generic;

namespace CATLCR_BackEnd.Model
{
    public partial class ReportUserParams
    {
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public int FieldType { get; set; }
        public Guid? FieldValue { get; set; }
        public string DirectFieldValue { get; set; }
        public int Id { get; set; }
    }
}
