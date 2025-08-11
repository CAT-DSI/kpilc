using System;
using System.Collections.Generic;

#nullable disable

namespace CATLCR_BackEnd.Data.BILCO2
{
    public partial class Time
    {
        public int PeriodDay { get; set; }
        public string Year { get; set; }
        public string Quarter { get; set; }
        public string YearQuarter { get; set; }
        public string Half { get; set; }
        public string YearHalf { get; set; }
        public string MonthPeriod { get; set; }
        public string MonthNumber { get; set; }
        public string MonthName { get; set; }
        public string Week { get; set; }
        public string YearWeek { get; set; }
        public string DateFormat { get; set; }
        public string Day { get; set; }
        public string DayName { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
