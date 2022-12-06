package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisTmTopicDocument implements Serializable
{
    public static String AISTMTOPICDOCUMENT = "aisTmTopicDocument"; 


    public aisTmTopicDocument() { }

    public static String ID = "aisTmTopicDocument.Id"; 
    public int Id ;

    public static String STATUS = "aisTmTopicDocument.Status"; 
    public byte Status ;

    public static String UPDATED = "aisTmTopicDocument.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisTmTopicDocument.Updater"; 
    public String Updater ;

    public static String AISTMTOPICID = "aisTmTopicDocument.aisTmTopicId"; 
    public int aisTmTopicId ;
    public static String AISTMTOPIC = "aisTmTopic"; 
    public aisTmTopic aisTmTopic ;

    public static String AISTMDOCUMENTID = "aisTmTopicDocument.aisTmDocumentId"; 
    public int aisTmDocumentId ;
    public static String AISTMDOCUMENT = "aisTmDocument"; 
    public aisTmDocument aisTmDocument ;

    public static String TF = "aisTmTopicDocument.Tf"; 
    public float Tf ;

    public static String TFIDF = "aisTmTopicDocument.TfIdf"; 
    public float TfIdf ;

    public static String COSINESIMILARITY = "aisTmTopicDocument.CosineSimilarity"; 
    public float CosineSimilarity ;

    public static String TOTALRECALL = "aisTmTopicDocument.TotalRecall"; 
    public int TotalRecall ;


}
