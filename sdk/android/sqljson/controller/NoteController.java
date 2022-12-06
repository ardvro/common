package ardvro.component.sqljson.controller;

import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;

import ardvro.adapter.gen.genNote;
import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class NoteController
{
    private IConnection _conection;

    public NoteController(IConnection connection)
    {
        _conection = connection;
    }

    public void Delete(String name, IResponseListener<genNote> onResponse)
    {
        String functionName = "ardvro/component/sqljson/note/delete";
        _conection.Submit(new Object[]{ name }, functionName, onResponse);
    }

    public void Get(String name, IResponseListener<genNote> onResponse)
    {
        String functionName = "ardvro/component/sqljson/note/Get";
        _conection.Submit(new Object[]{ name }, functionName, onResponse);
    }

    public void GetByUsername(IResponseListener<ArrayList<genNote>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/note/Getbyusername";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

    public void Save(String name, String note, IResponseListener<genNote> onResponse)
    {
        LinkedTreeMap obj = new LinkedTreeMap();
        obj.put("Name", name);
        obj.put("Content", note);
        String functionName = "ardvro/component/sqljson/note/Get";
        _conection.Submit(obj, functionName, onResponse);
    }

}
