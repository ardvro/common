package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisTm implements Serializable
{
    public static String AISTM = "aisTm"; 


    public aisTm() { }

    public static String ID = "aisTm.Id"; 
    public int Id ;

    public static String STATUS = "aisTm.Status"; 
    public byte Status ;

    public static String UPDATED = "aisTm.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisTm.Updater"; 
    public String Updater ;

    public static String NAME = "aisTm.Name"; 
    public String Name ;

    public static String KEYWORDS = "aisTm.Keywords"; 
    public String Keywords ;

    public static String REJECTEDS = "aisTm.Rejecteds"; 
    public String Rejecteds ;

    public static String GOOGLESEARCHKEY = "aisTm.GoogleSearchKey"; 
    public String GoogleSearchKey ;

    public static String GOOGLECXKEY = "aisTm.GoogleCxKey"; 
    public String GoogleCxKey ;

    public static String NOTE = "aisTm.Note"; 
    public String Note ;

    public static String SUMMARY = "aisTm.Summary"; 
    public String Summary ;


    public static String AISTMDOCUMENTS = "aisTmDocuments"; 
    public ArrayList<aisTmDocument> aisTmDocuments ;

    public static String AISTMTOPICS = "aisTmTopics"; 
    public ArrayList<aisTmTopic> aisTmTopics ;

}
