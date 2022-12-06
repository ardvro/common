package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proCrud implements Serializable
{
    public static String PROCRUD = "proCrud"; 


    public proCrud() { }

    public static String ID = "proCrud.Id"; 
    public int Id ;

    public static String STATUS = "proCrud.Status"; 
    public byte Status ;

    public static String UPDATED = "proCrud.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proCrud.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proCrud.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proCrud.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proCrud.Name"; 
    public String Name ;

    public static String NOTE = "proCrud.Note"; 
    public String Note ;


}
