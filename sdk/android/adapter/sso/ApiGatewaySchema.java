package ardvro.adapter.sso;

import java.util.ArrayList;

public class ApiGatewaySchema
{
    public String EndPoint = "";
    public String ForwardUrl = "";
    public String HeaderApiKey = "";
    public String HttpMethod = "";
    public String ContentType = "";
    public String Headers = "";
    public ArrayList<ApiGatewaySchemaMap> Maps = new ArrayList<ApiGatewaySchemaMap>();
}