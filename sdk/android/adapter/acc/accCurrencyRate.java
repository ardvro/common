package ardvro.adapter.acc;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class accCurrencyRate implements Serializable
{
    public static String ACCCURRENCYRATE = "accCurrencyRate"; 


    public accCurrencyRate() { }

    public static String ID = "accCurrencyRate.Id"; 
    public int Id ;

    public static String STATUS = "accCurrencyRate.Status"; 
    public byte Status ;

    public static String UPDATED = "accCurrencyRate.Updated"; 
    public Date Updated ;

    public static String UPDATER = "accCurrencyRate.Updater"; 
    public String Updater ;

    public static String CURRENCYCODEFROM = "accCurrencyRate.CurrencyCodeFrom"; 
    public String CurrencyCodeFrom ;

    public static String CURRENCYCODETO = "accCurrencyRate.CurrencyCodeTo"; 
    public String CurrencyCodeTo ;

    public static String RATE = "accCurrencyRate.Rate"; 
    public float Rate ;

    public static String SOURCE = "accCurrencyRate.Source"; 
    public String Source ;


}
