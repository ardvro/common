package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisTmSentence implements Serializable
{
    public static String AISTMSENTENCE = "aisTmSentence"; 


    public aisTmSentence() { }

    public static String ID = "aisTmSentence.Id"; 
    public int Id ;

    public static String STATUS = "aisTmSentence.Status"; 
    public byte Status ;

    public static String UPDATED = "aisTmSentence.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisTmSentence.Updater"; 
    public String Updater ;

    public static String AISTMDOCUMENTID = "aisTmSentence.aisTmDocumentId"; 
    public int aisTmDocumentId ;
    public static String AISTMDOCUMENT = "aisTmDocument"; 
    public aisTmDocument aisTmDocument ;

    public static String NAME = "aisTmSentence.Name"; 
    public String Name ;

    public static String TAG = "aisTmSentence.Tag"; 
    public String Tag ;


    public static String AISTMTOPICSENTENCES = "aisTmTopicSentences"; 
    public ArrayList<aisTmTopicSentence> aisTmTopicSentences ;

}
