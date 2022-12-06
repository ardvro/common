var DataImportController = function DataImportController(cfg)
{
    let ctrl = {};

    ctrl.ImportCsv = function (fileInput, callback)
    {
        importFromFileInput(fileInput,
            function (b64string)
            {
                cfg.Connector.Submit(b64string, "ardvro/component/sqljson/DataImport/ImportCsv", function (box)
                {
                    callback != null ? callback(box == null ? null : box.Data) : null;
                });
            }
        );
    };

    ctrl.ImportTxt = function (fileInput, callback)
    {
        importFromFileInput(fileInput,
            function (b64string)
            {
                cfg.Connector.Submit(b64string, "ardvro/component/sqljson/DataImport/ImportTxt", function (box)
                {
                    callback != null ? callback(box == null ? null : box.Data) : null;
                });
            }
        );
    };

    ctrl.ImportExcel = function (fileInput, callback)
    {
        importFromFileInput(fileInput,
            function (b64string)
            {
                cfg.Connector.Submit(b64string, "ardvro/component/sqljson/DataImport/ImportExcel", function (box)
                {
                    callback != null ? callback(box == null ? null : box.Data) : null;
                });
            }
        );
    };

    ctrl.ImportJson = function (fileInput, callback)
    {
        importFromFileInput(fileInput,
            function (b64string)
            {
                cfg.Connector.Submit(b64string, "ardvro/component/sqljson/DataImport/ImportJson", function (box)
                {
                    callback != null ? callback(box == null ? null : box.Data) : null;
                });
            }
        );
    };

    ctrl.ImportHtml = function (fileInput, callback)
    {
        importFromFileInput(fileInput,
            function (b64string)
            {
                cfg.Connector.Submit(b64string, "ardvro/component/sqljson/DataImport/ImportHtml", function (box)
                {
                    callback != null ? callback(box == null ? null : box.Data) : null;
                });
            }
        );
    };


    function importFromFileInput(fileinput, onFileLoad)
    {
        if (fileinput.files == null || fileinput.files.length <= 0)
        {
            return null;
        }

        for (let i = 0; i < fileinput.files.length; i++)
        {
            let file = fileinput.files[i];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function ()
            {
                let parts = reader.result.split(',');
                
                if (parts.length > 1)
                {
                    if (onFileLoad != null)
                    {
                        onFileLoad(parts[1]);
                    }
                }
                else
                {
                    if (onFileLoad != null)
                    {
                        onFileLoad(file.result);
                    }
                }
            };
        }
    }


    return ctrl;
};