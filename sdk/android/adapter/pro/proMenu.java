package ardvro.adapter.pro;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class proMenu implements Serializable
{
    public static String PROMENU = "proMenu"; 


    public proMenu() { }

    public static String ID = "proMenu.Id"; 
    public int Id ;

    public static String STATUS = "proMenu.Status"; 
    public byte Status ;

    public static String UPDATED = "proMenu.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proMenu.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proMenu.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proMenu.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String PROMENUID = "proMenu.proMenuId"; 
    public int proMenuId ;
    public static String PROMENU1 = "proMenu1"; 
    public proMenu proMenu1 ;

    public static String CODE = "proMenu.Code"; 
    public String Code ;

    public static String NAME = "proMenu.Name"; 
    public String Name ;

    public static String PROJECTITEMTYPE = "proMenu.ProjectItemType"; 
    public String ProjectItemType ;

    public static String PROJECTITEMID = "proMenu.ProjectItemId"; 
    public int ProjectItemId ;

    public static String ICON = "proMenu.Icon"; 
    public String Icon ;

    public static String SCRIPT = "proMenu.Script"; 
    public String Script ;

    public static String PATH = "proMenu.Path"; 
    public String Path ;

    public static String NOTE = "proMenu.Note"; 
    public String Note ;


    public static String PROMENUS = "proMenus"; 
    public ArrayList<proMenu> proMenus ;

    public static String PROMENUROLES = "proMenuRoles"; 
    public ArrayList<proMenuRole> proMenuRoles ;

}
