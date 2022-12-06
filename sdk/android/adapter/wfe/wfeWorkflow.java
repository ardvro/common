package ardvro.adapter.wfe;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class wfeWorkflow implements Serializable
{
    public static String WFEWORKFLOW = "wfeWorkflow"; 


    public wfeWorkflow() { }

    public static String ID = "wfeWorkflow.Id"; 
    public int Id ;

    public static String STATUS = "wfeWorkflow.Status"; 
    public byte Status ;

    public static String UPDATED = "wfeWorkflow.Updated"; 
    public Date Updated ;

    public static String UPDATER = "wfeWorkflow.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "wfeWorkflow.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String NAME = "wfeWorkflow.Name"; 
    public String Name ;

    public static String CONTENT = "wfeWorkflow.Content"; 
    public String Content ;

    public static String NOTE = "wfeWorkflow.Note"; 
    public String Note ;


    public static String WFEWORKFLOWLOGS = "wfeWorkflowLogs"; 
    public ArrayList<wfeWorkflowLog> wfeWorkflowLogs ;

    public static String WFEWORKFLOWROLES = "wfeWorkflowRoles"; 
    public ArrayList<wfeWorkflowRole> wfeWorkflowRoles ;

}
