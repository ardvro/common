package ardvro.adapter.gen;

import java.io.Serializable;
import java.util.Date;

public class genTransaction implements Serializable
{
    public static String GENTRANSACTION = "genTransaction"; 


    public genTransaction() { }

    public static String ID = "genTransaction.Id"; 
    public int Id ;

    public static String STATUS = "genTransaction.Status"; 
    public byte Status ;

    public static String UPDATED = "genTransaction.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genTransaction.Updater"; 
    public String Updater ;

    public static String CODE = "genTransaction.Code"; 
    public String Code ;

    public static String NAME = "genTransaction.Name"; 
    public String Name ;

    public static String CONTENT = "genTransaction.Content"; 
    public String Content ;


}
