package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proComponent implements Serializable
{
    public static String PROCOMPONENT = "proComponent"; 


    public proComponent() { }

    public static String ID = "proComponent.Id"; 
    public int Id ;

    public static String STATUS = "proComponent.Status"; 
    public byte Status ;

    public static String UPDATED = "proComponent.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proComponent.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proComponent.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proComponent.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proComponent.Name"; 
    public String Name ;

    public static String FILENAMES = "proComponent.FileNames"; 
    public String FileNames ;


}
