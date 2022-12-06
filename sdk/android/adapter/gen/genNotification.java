package ardvro.adapter.gen;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class genNotification implements Serializable
{
    public static String GENNOTIFICATION = "genNotification"; 


    public genNotification() { }

    public static String ID = "genNotification.Id"; 
    public int Id ;

    public static String STATUS = "genNotification.Status"; 
    public byte Status ;

    public static String UPDATED = "genNotification.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genNotification.Updater"; 
    public String Updater ;

    public static String CREATED = "genNotification.Created"; 
    public Date Created ;

    public static String NOTIFICATIONTYPE = "genNotification.NotificationType"; 
    public String NotificationType ;

    public static String SENDER = "genNotification.Sender"; 
    public String Sender ;

    public static String RECEIVER = "genNotification.Receiver"; 
    public String Receiver ;

    public static String MESSAGE = "genNotification.Message"; 
    public String Message ;

    public static String URL = "genNotification.Url"; 
    public String Url ;

    public static String NOTE = "genNotification.Note"; 
    public String Note ;


}
