package ardvro.component.sqljson;

import com.google.gson.internal.LinkedTreeMap;

import java.io.Serializable;
import java.util.ArrayList;

public class UserData implements Serializable
{
    public int Id ;

    public String Username ;

    public String Salt ;

    public String SessionCode ;

    public LinkedTreeMap<String, String> Settings ;

    public ArrayList<Workgroup> Workgroups ;

    public LinkedTreeMap<String, String> Securities ;
    
    public ArrayList<MenuItem> Menu ;

    public String Token;

    public boolean IsInRoles(String[] roles)
    {
        for (int i = 0; i < roles.length; i++)
        {
            for (int j=0; j< Workgroups.size(); j++)
            {
                Workgroup wg = Workgroups.get(j);
                for (int k=0; k<wg.Roles.size(); k++)
                {
                    String wgRoleName = wg.Code.toLowerCase() + "." + roles[i];
                    if (wg.Roles.containsValue(wgRoleName))
                    {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
