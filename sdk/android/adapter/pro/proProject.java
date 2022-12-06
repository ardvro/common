package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class proProject implements Serializable
{
    public static String PROPROJECT = "proProject"; 


    public proProject() { }

    public static String ID = "proProject.Id"; 
    public int Id ;

    public static String STATUS = "proProject.Status"; 
    public byte Status ;

    public static String UPDATED = "proProject.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proProject.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proProject.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String NAME = "proProject.Name"; 
    public String Name ;

    public static String PROJECTTYPE = "proProject.ProjectType"; 
    public String ProjectType ;

    public static String HOSTINGTYPE = "proProject.HostingType"; 
    public String HostingType ;

    public static String NOTE = "proProject.Note"; 
    public String Note ;


    public static String PROCOMPONENTS = "proComponents"; 
    public ArrayList<proComponent> proComponents ;

    public static String PROCRUDS = "proCruds"; 
    public ArrayList<proCrud> proCruds ;

    public static String PROCUSTOMPAGES = "proCustomPages"; 
    public ArrayList<proCustomPage> proCustomPages ;

    public static String PRODATAFORMS = "proDataForms"; 
    public ArrayList<proDataForm> proDataForms ;

    public static String PRODATASOURCES = "proDataSources"; 
    public ArrayList<proDataSource> proDataSources ;

    public static String PRODATATABLES = "proDataTables"; 
    public ArrayList<proDataTable> proDataTables ;

    public static String PRODBSCRIPTS = "proDbScripts"; 
    public ArrayList<proDbScript> proDbScripts ;

    public static String PROFILES = "proFiles"; 
    public ArrayList<proFile> proFiles ;

    public static String PROMASTERPAGES = "proMasterPages"; 
    public ArrayList<proMasterPage> proMasterPages ;

    public static String PROMENUS = "proMenus"; 
    public ArrayList<proMenu> proMenus ;

    public static String PROSETUPS = "proSetups"; 
    public ArrayList<proSetup> proSetups ;

    public static String PROSOLUTIONAPPLICATIONS = "proSolutionApplications"; 
    public ArrayList<proSolutionApplication> proSolutionApplications ;

    public static String PROTEMPLATES = "proTemplates"; 
    public ArrayList<proTemplate> proTemplates ;

    public static String PROWEBSCRIPTS = "proWebScripts"; 
    public ArrayList<proWebScript> proWebScripts ;

}
