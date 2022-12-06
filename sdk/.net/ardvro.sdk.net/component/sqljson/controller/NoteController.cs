namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.adapter.gen.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class NoteController
{
    private IConnection _conection;

    public NoteController(IConnection connection)
    {
        _conection = connection;
    }

    public void Delete(String name, Action<genNote> onResponse)
    {
        String functionName = "ardvro/component/sqljson/note/delete";
        _conection.Submit(new Object[]{ name }, functionName, onResponse);
    }

    public void Get(String name, Action<genNote> onResponse)
    {
        String functionName = "ardvro/component/sqljson/note/Get";
        _conection.Submit(new Object[]{ name }, functionName, onResponse);
    }

    public void GetByUsername(Action<List<genNote>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/note/Getbyusername";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

    public void Save(String name, String note, Action<genNote> onResponse)
    {
        var obj = new Flexible();
        obj.Add("Name", name);
        obj.Add("Content", note);
        String functionName = "ardvro/component/sqljson/note/Get";
        _conection.Submit(obj, functionName, onResponse);
    }

}
