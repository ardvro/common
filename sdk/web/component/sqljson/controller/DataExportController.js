var DataExportController = function DataExportController(cfg)
{
    let ctrl = {};

    ctrl.ExportCsv = function (countryCode, data, template, width, height, callback)
    {
        var item = {
            CountryCode: countryCode,
            Data: data,
            Temlate: template,
            Width: width,
            HeighT: height
        };

        cfg.Connector.Submit(item, "ardvro/component/sqljson/DataExport/ExportCsv", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.ExportExcel = function (countryCode, data, template, width, height, callback)
    {
        var item = {
            CountryCode: countryCode,
            Data: data,
            Temlate: template,
            Width: width,
            HeighT: height
        };

        cfg.Connector.Submit(item, "ardvro/component/sqljson/DataExport/ExportExcel", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.ExportHtml = function (countryCode, data, template, width, height, callback)
    {
        var item = {
            CountryCode: countryCode,
            Data: data,
            Temlate: template,
            Width: width,
            HeighT: height
        };

        cfg.Connector.Submit(item, "ardvro/component/sqljson/DataExport/ExportHtml", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.ExportPdf = function (countryCode, data, template, width, height, callback)
    {
        var item = {
            CountryCode: countryCode,
            Data: data,
            Temlate: template,
            Width: width,
            HeighT: height
        };

        cfg.Connector.Submit(item, "ardvro/component/sqljson/DataExport/ExportPdf", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.ExportTxt = function (countryCode, data, template, width, height, callback)
    {
        var item = {
            CountryCode: countryCode,
            Data: data,
            Temlate: template,
            Width: width,
            HeighT: height
        };

        cfg.Connector.Submit(item, "ardvro/component/sqljson/DataExport/ExportTxt", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};