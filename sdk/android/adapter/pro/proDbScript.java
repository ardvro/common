package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proDbScript implements Serializable
{
    public static String PRODBSCRIPT = "proDbScript"; 


    public proDbScript() { }

    public static String ID = "proDbScript.Id"; 
    public int Id ;

    public static String STATUS = "proDbScript.Status"; 
    public byte Status ;

    public static String UPDATED = "proDbScript.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proDbScript.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proDbScript.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proDbScript.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String CONTENT = "proDbScript.Content"; 
    public String Content ;

    public static String NAME = "proDbScript.Name"; 
    public String Name ;

    public static String NOTE = "proDbScript.Note"; 
    public String Note ;


}
