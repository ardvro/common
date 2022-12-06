package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisDssItemCriteria implements Serializable
{
    public static String AISDSSITEMCRITERIA = "aisDssItemCriteria"; 


    public aisDssItemCriteria() { }

    public static String ID = "aisDssItemCriteria.Id"; 
    public int Id ;

    public static String STATUS = "aisDssItemCriteria.Status"; 
    public int Status ;

    public static String UPDATED = "aisDssItemCriteria.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisDssItemCriteria.Updater"; 
    public String Updater ;

    public static String AISDSSITEMID = "aisDssItemCriteria.aisDssItemId"; 
    public int aisDssItemId ;
    public static String AISDSSITEM = "aisDssItem"; 
    public aisDssItem aisDssItem ;

    public static String AISCRITERIAID = "aisDssItemCriteria.aisCriteriaId"; 
    public int aisCriteriaId ;
    public static String AISCRITERIA = "aisCriteria"; 
    public aisCriteria aisCriteria ;

    public static String CODE = "aisDssItemCriteria.Code"; 
    public String Code ;

    public static String NAME = "aisDssItemCriteria.Name"; 
    public String Name ;

    public static String VALUE = "aisDssItemCriteria.Value"; 
    public float Value ;

    public static String WEIGHT = "aisDssItemCriteria.Weight"; 
    public float Weight ;

    public static String OUTPUT = "aisDssItemCriteria.Output"; 
    public float Output ;

    public static String NOTE = "aisDssItemCriteria.Note"; 
    public String Note ;


}
