package ardvro.adapter.cms;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class cmsContentCommentFile implements Serializable
{
    public static String CMSCONTENTCOMMENTFILE = "cmsContentCommentFile"; 


    public cmsContentCommentFile() { }

    public static String ID = "cmsContentCommentFile.Id"; 
    public int Id ;

    public static String STATUS = "cmsContentCommentFile.Status"; 
    public byte Status ;

    public static String UPDATED = "cmsContentCommentFile.Updated"; 
    public Date Updated ;

    public static String UPDATER = "cmsContentCommentFile.Updater"; 
    public String Updater ;

    public static String CMSCONTENTCOMMENTID = "cmsContentCommentFile.cmsContentCommentId"; 
    public int cmsContentCommentId ;
    public static String CMSCONTENTCOMMENT = "cmsContentComment"; 
    public cmsContentComment cmsContentComment ;

    public static String NAME = "cmsContentCommentFile.Name"; 
    public String Name ;

    public static String CONTENT = "cmsContentCommentFile.Content"; 
    public String Content ;


}
