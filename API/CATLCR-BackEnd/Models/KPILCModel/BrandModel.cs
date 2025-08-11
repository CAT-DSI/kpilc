using System;
using System.Collections.Generic;

public class BrandModel
{
    public List<string> Brand { get; set; }
    public Guid UserID { get; set; }
    public Guid ReportID { get; set; }
}

public partial class ReportUserProductsModel
{
    public Guid ReportId { get; set; }
    public Guid UserId { get; set; }
    public List<string> Product { get; set; }
}

public partial class ReportUserParamsModel
{
    public Guid ReportId { get; set; }
    public Guid UserId { get; set; }    
    public int FieldType { get; set; }
    public List<Guid> FieldValue { get; set; }
    public string DirectFieldValue { get; set; }
    public int Id { get; set; }
}
public class BrandModelParams
{
    public List<string> Brand { get; set; }
    public Guid UserID { get; set; }
    public Guid ReportID { get; set; }
}
public  class ReportUserMrNumbersModel
{
    public Guid ReportId { get; set; }
    public Guid UserId { get; set; }
    public List<string> MrNumber { get; set; }
}