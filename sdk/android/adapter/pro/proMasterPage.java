package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proMasterPage implements Serializable
{
    public static String PROMASTERPAGE = "proMasterPage"; 


    public proMasterPage() { }

    public static String ID = "proMasterPage.Id"; 
    public int Id ;

    public static String STATUS = "proMasterPage.Status"; 
    public byte Status ;

    public static String UPDATED = "proMasterPage.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proMasterPage.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proMasterPage.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proMasterPage.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proMasterPage.Name"; 
    public String Name ;

    public static String DESKTOPTYPE = "proMasterPage.DesktopType"; 
    public String DesktopType ;

    public static String MENUTYPE = "proMasterPage.MenuType"; 
    public String MenuType ;

    public static String MAINMENUHTMLID = "proMasterPage.MainMenuHtmlId"; 
    public String MainMenuHtmlId ;

    public static String MAINCONTAINERHTMLID = "proMasterPage.MainContainerHtmlId"; 
    public String MainContainerHtmlId ;

    public static String HEADERHTMLID = "proMasterPage.HeaderHtmlId"; 
    public String HeaderHtmlId ;

    public static String FOOTERHTMLID = "proMasterPage.FooterHtmlId"; 
    public String FooterHtmlId ;

    public static String AUTHENTICATIONMENUHTMLID = "proMasterPage.AuthenticationMenuHtmlId"; 
    public String AuthenticationMenuHtmlId ;

    public static String WINDOWMENUHTMLID = "proMasterPage.WindowMenuHtmlId"; 
    public String WindowMenuHtmlId ;

    public static String NOTIFICATORHTMLID = "proMasterPage.NotificatorHtmlId"; 
    public String NotificatorHtmlId ;

    public static String MESSENGERHTMLID = "proMasterPage.MessengerHtmlId"; 
    public String MessengerHtmlId ;

    public static String CONTENT = "proMasterPage.Content"; 
    public String Content ;

    public static String NOTE = "proMasterPage.Note"; 
    public String Note ;


}
