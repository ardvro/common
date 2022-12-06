package ardvro.adapter.gen;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class genIntegration implements Serializable
{
    public static String GENINTEGRATION = "genIntegration"; 


    public genIntegration() { }

    public static String ID = "genIntegration.Id"; 
    public int Id ;

    public static String STATUS = "genIntegration.Status"; 
    public byte Status ;

    public static String UPDATED = "genIntegration.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genIntegration.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "genIntegration.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String NAME = "genIntegration.Name"; 
    public String Name ;

    public static String INTEGRATIONTYPE = "genIntegration.IntegrationType"; 
    public String IntegrationType ;

    public static String AUTHENTICATION = "genIntegration.Authentication"; 
    public String Authentication ;

    public static String AUTHENTICATIONFORMAT = "genIntegration.AuthenticationFormat"; 
    public String AuthenticationFormat ;

    public static String AUTHENTICATIONFIELD = "genIntegration.AuthenticationField"; 
    public String AuthenticationField ;

    public static String AUTHENTICATIONHEADER = "genIntegration.AuthenticationHeader"; 
    public String AuthenticationHeader ;

    public static String COMMAND = "genIntegration.Command"; 
    public String Command ;

    public static String COMMANDFORMAT = "genIntegration.CommandFormat"; 
    public String CommandFormat ;

    public static String COMMANDRESULT = "genIntegration.CommandResult"; 
    public String CommandResult ;

    public static String NOTE = "genIntegration.Note"; 
    public String Note ;


    public static String GENINTEGRATIONLOGS = "genIntegrationLogs"; 
    public ArrayList<genIntegrationLog> genIntegrationLogs ;

    public static String GENINTEGRATIONMAPS = "genIntegrationMaps"; 
    public ArrayList<genIntegrationMap> genIntegrationMaps ;

    public static String GENINTEGRATIONROLES = "genIntegrationRoles"; 
    public ArrayList<genIntegrationRole> genIntegrationRoles ;

}
