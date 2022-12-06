package ardvro.adapter.cms;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class cmsContentMember implements Serializable
{
    public static String CMSCONTENTMEMBER = "cmsContentMember"; 


    public cmsContentMember() { }

    public static String ID = "cmsContentMember.Id"; 
    public int Id ;

    public static String STATUS = "cmsContentMember.Status"; 
    public byte Status ;

    public static String UPDATED = "cmsContentMember.Updated"; 
    public Date Updated ;

    public static String UPDATER = "cmsContentMember.Updater"; 
    public String Updater ;

    public static String CREATED = "cmsContentMember.Created"; 
    public Date Created ;

    public static String CMSCONTENTID = "cmsContentMember.cmsContentId"; 
    public int cmsContentId ;
    public static String CMSCONTENT = "cmsContent"; 
    public cmsContent cmsContent ;

    public static String MEMBERTYPE = "cmsContentMember.MemberType"; 
    public String MemberType ;

    public static String PFEPROFILEID = "cmsContentMember.pfeProfileId"; 
    public int pfeProfileId ;

    public static String COLOR = "cmsContentMember.Color"; 
    public String Color ;

    public static String NOTE = "cmsContentMember.Note"; 
    public String Note ;


}
