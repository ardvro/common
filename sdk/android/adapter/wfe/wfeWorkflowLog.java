package ardvro.adapter.wfe;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class wfeWorkflowLog implements Serializable
{
    public static String WFEWORKFLOWLOG = "wfeWorkflowLog"; 


    public wfeWorkflowLog() { }

    public static String ID = "wfeWorkflowLog.Id"; 
    public int Id ;

    public static String STATUS = "wfeWorkflowLog.Status"; 
    public byte Status ;

    public static String UPDATED = "wfeWorkflowLog.Updated"; 
    public Date Updated ;

    public static String UPDATER = "wfeWorkflowLog.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "wfeWorkflowLog.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String WFEWORKFLOWID = "wfeWorkflowLog.wfeWorkflowId"; 
    public int wfeWorkflowId ;
    public static String WFEWORKFLOW = "wfeWorkflow"; 
    public wfeWorkflow wfeWorkflow ;

    public static String CONTENT = "wfeWorkflowLog.Content"; 
    public String Content ;


}
