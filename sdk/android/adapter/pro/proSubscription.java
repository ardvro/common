package ardvro.adapter.pro;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class proSubscription implements Serializable
{
    public static String PROSUBSCRIPTION = "proSubscription"; 


    public proSubscription() { }

    public static String ID = "proSubscription.Id"; 
    public int Id ;

    public static String STATUS = "proSubscription.Status"; 
    public byte Status ;

    public static String UPDATED = "proSubscription.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proSubscription.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proSubscription.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SUBSCRIPTIONTYPE = "proSubscription.SubscriptionType"; 
    public String SubscriptionType ;

    public static String PROSUBSCRIPTIONID = "proSubscription.proSubscriptionId"; 
    public int proSubscriptionId ;
    public static String PROSUBSCRIPTION1 = "proSubscription1"; 
    public proSubscription proSubscription1 ;

    public static String PROSOLUTIONAPPLICATIONID = "proSubscription.proSolutionApplicationId"; 
    public int proSolutionApplicationId ;
    public static String PROSOLUTIONAPPLICATION = "proSolutionApplication"; 
    public proSolutionApplication proSolutionApplication ;

    public static String SUBORDERID = "proSubscription.subOrderId"; 
    public int subOrderId ;


    public static String PROSUBSCRIPTIONS = "proSubscriptions"; 
    public ArrayList<proSubscription> proSubscriptions ;

}
