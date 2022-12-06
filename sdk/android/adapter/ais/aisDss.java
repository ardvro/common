package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisDss implements Serializable
{
    public static String AISDSS = "aisDss"; 


    public aisDss() { }

    public static String ID = "aisDss.Id"; 
    public int Id ;

    public static String STATUS = "aisDss.Status"; 
    public byte Status ;

    public static String UPDATED = "aisDss.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisDss.Updater"; 
    public String Updater ;

    public static String AISCRITERIAID = "aisDss.aisCriteriaId"; 
    public int aisCriteriaId ;
    public static String AISCRITERIA = "aisCriteria"; 
    public aisCriteria aisCriteria ;

    public static String NAME = "aisDss.Name"; 
    public String Name ;

    public static String DECISIONTYPE = "aisDss.DecisionType"; 
    public String DecisionType ;

    public static String NOTE = "aisDss.Note"; 
    public String Note ;


    public static String AISDSSITEMS = "aisDssItems"; 
    public ArrayList<aisDssItem> aisDssItems ;

}
