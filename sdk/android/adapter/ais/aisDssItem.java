package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisDssItem implements Serializable
{
    public static String AISDSSITEM = "aisDssItem"; 


    public aisDssItem() { }

    public static String ID = "aisDssItem.Id"; 
    public int Id ;

    public static String STATUS = "aisDssItem.Status"; 
    public byte Status ;

    public static String UPDATED = "aisDssItem.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisDssItem.Updater"; 
    public String Updater ;

    public static String AISDSSID = "aisDssItem.aisDssId"; 
    public int aisDssId ;
    public static String AISDSS = "aisDss"; 
    public aisDss aisDss ;

    public static String CODE = "aisDssItem.Code"; 
    public String Code ;

    public static String NAME = "aisDssItem.Name"; 
    public String Name ;

    public static String WEIGHT = "aisDssItem.Weight"; 
    public float Weight ;

    public static String OUTPUT = "aisDssItem.Output"; 
    public float Output ;

    public static String NOTE = "aisDssItem.Note"; 
    public String Note ;


    public static String AISDSSITEMCRITERIAS = "aisDssItemCriterias"; 
    public ArrayList<aisDssItemCriteria> aisDssItemCriterias ;

}
