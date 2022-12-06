package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisMlDataset implements Serializable
{
    public static String AISMLDATASET = "aisMlDataset"; 


    public aisMlDataset() { }

    public static String ID = "aisMlDataset.Id"; 
    public int Id ;

    public static String STATUS = "aisMlDataset.Status"; 
    public byte Status ;

    public static String UPDATED = "aisMlDataset.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisMlDataset.Updater"; 
    public String Updater ;

    public static String AISMLID = "aisMlDataset.aisMlId"; 
    public int aisMlId ;
    public static String AISML = "aisMl"; 
    public aisMl aisMl ;

    public static String CODE = "aisMlDataset.Code"; 
    public String Code ;

    public static String DATA = "aisMlDataset.Data"; 
    public String Data ;


}
