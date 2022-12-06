package ardvro.component.sqljson;

import com.google.gson.internal.LinkedTreeMap;

import ardvro.core.RowStatusType;

public class Workgroup
{
    public int Id ;

    public RowStatusType Status ;

    public String Code ;

    public String Name ;

    public String Country ;


    public String Address ;
    public String City ;
    public String PostalCode ;
    public String Email ;
    public String Phone ;

    public String Note ;

    public LinkedTreeMap<Integer, String> Roles ;

    public String IsoCurrency ;

    public int CurrencyDecimalDigits ;
    public String CurrencySymbol ;

    public String[] IsoAlpha2Languages ;

    public String[] DialCodes ;

}
