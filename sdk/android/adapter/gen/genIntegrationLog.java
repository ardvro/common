package ardvro.adapter.gen;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class genIntegrationLog implements Serializable
{
    public static String GENINTEGRATIONLOG = "genIntegrationLog"; 


    public genIntegrationLog() { }

    public static String ID = "genIntegrationLog.Id"; 
    public int Id ;

    public static String STATUS = "genIntegrationLog.Status"; 
    public byte Status ;

    public static String UPDATED = "genIntegrationLog.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genIntegrationLog.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "genIntegrationLog.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String GENINTEGRATIONID = "genIntegrationLog.genIntegrationId"; 
    public int genIntegrationId ;
    public static String GENINTEGRATION = "genIntegration"; 
    public genIntegration genIntegration ;

    public static String CONTENT = "genIntegrationLog.Content"; 
    public String Content ;


}
