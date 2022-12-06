package ardvro.adapter.gen;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class genEmail implements Serializable
{
    public static String GENEMAIL = "genEmail"; 


    public genEmail() { }

    public static String ID = "genEmail.Id"; 
    public int Id ;

    public static String STATUS = "genEmail.Status"; 
    public byte Status ;

    public static String UPDATED = "genEmail.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genEmail.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "genEmail.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String EMAILTYPE = "genEmail.EmailType"; 
    public String EmailType ;

    public static String FROMEMAIL = "genEmail.FromEmail"; 
    public String FromEmail ;

    public static String FROMNAME = "genEmail.FromName"; 
    public String FromName ;

    public static String TOEMAILS = "genEmail.ToEmails"; 
    public String ToEmails ;

    public static String CCEMAILS = "genEmail.CcEmails"; 
    public String CcEmails ;

    public static String BCCEMAILS = "genEmail.BccEmails"; 
    public String BccEmails ;

    public static String SUBJECT = "genEmail.Subject"; 
    public String Subject ;

    public static String CONTENT = "genEmail.Content"; 
    public String Content ;

    public static String ATTACHMENTS = "genEmail.Attachments"; 
    public String Attachments ;

    public static String NOTE = "genEmail.Note"; 
    public String Note ;


}
