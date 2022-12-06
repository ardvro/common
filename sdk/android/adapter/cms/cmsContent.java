package ardvro.adapter.cms;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class cmsContent implements Serializable
{
    public static String CMSCONTENT = "cmsContent"; 


    public cmsContent() { }

    public static String ID = "cmsContent.Id"; 
    public int Id ;

    public static String STATUS = "cmsContent.Status"; 
    public byte Status ;

    public static String UPDATED = "cmsContent.Updated"; 
    public Date Updated ;

    public static String UPDATER = "cmsContent.Updater"; 
    public String Updater ;

    public static String CREATED = "cmsContent.Created"; 
    public Date Created ;

    public static String CMSCONTENTID = "cmsContent.cmsContentId"; 
    public int cmsContentId ;
    public static String CMSCONTENT1 = "cmsContent1"; 
    public cmsContent cmsContent1 ;

    public static String CMSCONTENTTYPE = "cmsContent.CmsContentType"; 
    public String CmsContentType ;

    public static String COMMENTTYPE = "cmsContent.CommentType"; 
    public String CommentType ;

    public static String NAME = "cmsContent.Name"; 
    public String Name ;

    public static String ICON = "cmsContent.Icon"; 
    public String Icon ;

    public static String TREELEVEL = "cmsContent.TreeLevel"; 
    public byte TreeLevel ;

    public static String CONTENT = "cmsContent.Content"; 
    public String Content ;

    public static String TAGS = "cmsContent.Tags"; 
    public String Tags ;

    public static String PINNED = "cmsContent.Pinned"; 
    public byte Pinned ;

    public static String NOTE = "cmsContent.Note"; 
    public String Note ;


    public static String CMSCONTENTS = "cmsContents"; 
    public ArrayList<cmsContent> cmsContents ;

    public static String CMSCONTENTCOMMENTS = "cmsContentComments"; 
    public ArrayList<cmsContentComment> cmsContentComments ;

    public static String CMSCONTENTMEMBERS = "cmsContentMembers"; 
    public ArrayList<cmsContentMember> cmsContentMembers ;

    public static String CMSCONTENTSUBSCRIBERS = "cmsContentSubscribers"; 
    public ArrayList<cmsContentSubscriber> cmsContentSubscribers ;

    public static String CMSCONTENTVOTES = "cmsContentVotes"; 
    public ArrayList<cmsContentVote> cmsContentVotes ;

}
