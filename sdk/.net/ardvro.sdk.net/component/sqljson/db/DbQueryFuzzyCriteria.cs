namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryFuzzyCriteria
{
    public string Field     { get; set; } = "";
    public string Operator  { get; set; } = "";
    public string Value     { get; set; } = "";
    public string Compound { get; set; } = "";

}
