package ardvro.adapter.gen;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class genIntegrationMap implements Serializable
{
    public static String GENINTEGRATIONMAP = "genIntegrationMap"; 


    public genIntegrationMap() { }

    public static String ID = "genIntegrationMap.Id"; 
    public int Id ;

    public static String STATUS = "genIntegrationMap.Status"; 
    public byte Status ;

    public static String UPDATED = "genIntegrationMap.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genIntegrationMap.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "genIntegrationMap.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String GENINTEGRATIONID = "genIntegrationMap.genIntegrationId"; 
    public int genIntegrationId ;
    public static String GENINTEGRATION = "genIntegration"; 
    public genIntegration genIntegration ;

    public static String DIRECTIONTYPE = "genIntegrationMap.DirectionType"; 
    public String DirectionType ;

    public static String SOURCEFIELD = "genIntegrationMap.SourceField"; 
    public String SourceField ;

    public static String TARGETFIELD = "genIntegrationMap.TargetField"; 
    public String TargetField ;

    public static String TARGETTYPE = "genIntegrationMap.TargetType"; 
    public String TargetType ;

    public static String DEFAULTVALUE = "genIntegrationMap.DefaultValue"; 
    public String DefaultValue ;

    public static String NOTE = "genIntegrationMap.Note"; 
    public String Note ;


}
