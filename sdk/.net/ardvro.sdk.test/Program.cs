using System.Text.Json;
using System.Threading;
using Microsoft.Extensions.Configuration;
using ardvro.core.lib.injection;
using ardvro.core.ext.connection;
using ardvro.sdk.net.component;
using ardvro.sdk.net.component.sqljson;
using ardvro.sdk.net.component.sqljson.db;
using ardvro.core.lib.common;

var configuration = InjectionFactory.CreateConfiguration();
var clientCfg = new ClientConfig();
configuration.Bind("ClientConfig", clientCfg);

Thread.Sleep(15000);

var ws = new WebSocketClient(clientCfg);
await ws.Connect(
    (ConnectionInfo connectionInfo) => 
    {
        Console.WriteLine("Connection Confirmed");
        var json = JsonSerializer.Serialize<ConnectionInfo>(connectionInfo, new JsonSerializerOptions() { WriteIndented = true });
        Console.WriteLine(json);

        var sqljson = new SqlJson(ws, 
            (SqlJson dbcontext) =>
            {
                dbcontext["genNotification"].Where("Status = 1").Jsons("*")
                    .Send<List<Flexible>>(
                        (List<Flexible> List) => 
                        { 

                        }
                    );
            }
        );
    }
);


Console.ReadKey();
