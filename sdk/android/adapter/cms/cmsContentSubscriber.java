package ardvro.adapter.cms;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class cmsContentSubscriber implements Serializable
{
    public static String CMSCONTENTSUBSCRIBER = "cmsContentSubscriber"; 


    public cmsContentSubscriber() { }

    public static String ID = "cmsContentSubscriber.Id"; 
    public int Id ;

    public static String STATUS = "cmsContentSubscriber.Status"; 
    public byte Status ;

    public static String UPDATED = "cmsContentSubscriber.Updated"; 
    public Date Updated ;

    public static String UPDATER = "cmsContentSubscriber.Updater"; 
    public String Updater ;

    public static String CMSCONTENTID = "cmsContentSubscriber.cmsContentId"; 
    public int cmsContentId ;
    public static String CMSCONTENT = "cmsContent"; 
    public cmsContent cmsContent ;

    public static String ACCOUNTTYPE = "cmsContentSubscriber.AccountType"; 
    public String AccountType ;

    public static String USERNAME = "cmsContentSubscriber.UserName"; 
    public String UserName ;


}
