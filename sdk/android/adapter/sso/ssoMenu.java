package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoMenu implements Serializable
{
    public static String SSOMENU = "ssoMenu"; 


    public ssoMenu() { }

    public static String ID = "ssoMenu.Id"; 
    public int Id ;

    public static String STATUS = "ssoMenu.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoMenu.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoMenu.Updater"; 
    public String Updater ;

    public static String SSOAPPLICATIONID = "ssoMenu.ssoApplicationId"; 
    public int ssoApplicationId ;
    public static String SSOAPPLICATION = "ssoApplication"; 
    public ssoApplication ssoApplication ;

    public static String SSOMENUID = "ssoMenu.ssoMenuId"; 
    public int ssoMenuId ;
    public static String SSOMENU1 = "ssoMenu1"; 
    public ssoMenu ssoMenu1 ;

    public static String CODE = "ssoMenu.Code"; 
    public String Code ;

    public static String NAME = "ssoMenu.Name"; 
    public String Name ;

    public static String ICON = "ssoMenu.Icon"; 
    public String Icon ;

    public static String SCRIPT = "ssoMenu.Script"; 
    public String Script ;

    public static String PATH = "ssoMenu.Path"; 
    public String Path ;

    public static String NOTE = "ssoMenu.Note"; 
    public String Note ;


    public static String SSOMENUS = "ssoMenus"; 
    public ArrayList<ssoMenu> ssoMenus ;

    public static String SSOMENUROLES = "ssoMenuRoles"; 
    public ArrayList<ssoMenuRole> ssoMenuRoles ;

}
