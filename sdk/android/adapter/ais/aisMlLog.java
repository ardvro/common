package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisMlLog implements Serializable
{
    public static String AISMLLOG = "aisMlLog"; 


    public aisMlLog() { }

    public static String ID = "aisMlLog.Id"; 
    public int Id ;

    public static String STATUS = "aisMlLog.Status"; 
    public byte Status ;

    public static String UPDATED = "aisMlLog.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisMlLog.Updater"; 
    public String Updater ;

    public static String AISMLID = "aisMlLog.aisMlId"; 
    public int aisMlId ;
    public static String AISML = "aisMl"; 
    public aisMl aisMl ;

    public static String CODE = "aisMlLog.Code"; 
    public String Code ;

    public static String DATA = "aisMlLog.Data"; 
    public String Data ;


}
