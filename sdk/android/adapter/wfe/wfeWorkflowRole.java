package ardvro.adapter.wfe;

import java.io.Serializable;
import java.util.Date;

public class wfeWorkflowRole implements Serializable
{
    public static String WFEWORKFLOWROLE = "wfeWorkflowRole"; 


    public wfeWorkflowRole() { }

    public static String ID = "wfeWorkflowRole.Id"; 
    public int Id ;

    public static String STATUS = "wfeWorkflowRole.Status"; 
    public byte Status ;

    public static String UPDATED = "wfeWorkflowRole.Updated"; 
    public Date Updated ;

    public static String UPDATER = "wfeWorkflowRole.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "wfeWorkflowRole.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String WFEWORKFLOWID = "wfeWorkflowRole.wfeWorkflowId"; 
    public int wfeWorkflowId ;
    public static String WFEWORKFLOW = "wfeWorkflow"; 
    public wfeWorkflow wfeWorkflow ;

    public static String SSOROLEID = "wfeWorkflowRole.ssoRoleId"; 
    public int ssoRoleId ;


}
