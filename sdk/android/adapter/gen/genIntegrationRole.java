package ardvro.adapter.gen;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class genIntegrationRole implements Serializable
{
    public static String GENINTEGRATIONROLE = "genIntegrationRole"; 


    public genIntegrationRole() { }

    public static String ID = "genIntegrationRole.Id"; 
    public int Id ;

    public static String STATUS = "genIntegrationRole.Status"; 
    public byte Status ;

    public static String UPDATED = "genIntegrationRole.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genIntegrationRole.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "genIntegrationRole.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String GENINTEGRATIONID = "genIntegrationRole.genIntegrationId"; 
    public int genIntegrationId ;
    public static String GENINTEGRATION = "genIntegration"; 
    public genIntegration genIntegration ;

    public static String SSOROLEID = "genIntegrationRole.ssoRoleId"; 
    public int ssoRoleId ;


}
