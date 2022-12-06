package ardvro.adapter.cms;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class cmsContentComment implements Serializable
{
    public static String CMSCONTENTCOMMENT = "cmsContentComment"; 


    public cmsContentComment() { }

    public static String ID = "cmsContentComment.Id"; 
    public int Id ;

    public static String STATUS = "cmsContentComment.Status"; 
    public byte Status ;

    public static String UPDATED = "cmsContentComment.Updated"; 
    public Date Updated ;

    public static String UPDATER = "cmsContentComment.Updater"; 
    public String Updater ;

    public static String CMSCONTENTCOMMENTID = "cmsContentComment.cmsContentCommentId"; 
    public int cmsContentCommentId ;
    public static String CMSCONTENTCOMMENT1 = "cmsContentComment1"; 
    public cmsContentComment cmsContentComment1 ;

    public static String CMSCONTENTID = "cmsContentComment.cmsContentId"; 
    public int cmsContentId ;
    public static String CMSCONTENT = "cmsContent"; 
    public cmsContent cmsContent ;

    public static String PFEPROFILEID = "cmsContentComment.pfeProfileId"; 
    public int pfeProfileId ;

    public static String COMMENT = "cmsContentComment.Comment"; 
    public String Comment ;


    public static String CMSCONTENTCOMMENTS = "cmsContentComments"; 
    public ArrayList<cmsContentComment> cmsContentComments ;

    public static String CMSCONTENTCOMMENTFILES = "cmsContentCommentFiles"; 
    public ArrayList<cmsContentCommentFile> cmsContentCommentFiles ;

    public static String CMSCONTENTCOMMENTSTATUSES = "cmsContentCommentStatuses"; 
    public ArrayList<cmsContentCommentStatus> cmsContentCommentStatuses ;

}
