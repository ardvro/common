var HttpWebApi = function HttpWebApi()
{
    let ctrl = {};

    ctrl.Get = function (baseGatewayUrl, url, authorization, onResponse)
    {
        let baseUrl = baseGatewayUrl.concat('/ardvro/component/sqljson/Http/Get/?url=', url, '&authorization=', authorization);

        Ajax.Get(baseUrl, '', 
            function (stringresult)
            {
                onResponse != null ? onResponse(stringresult) : null;
            }
        );
    };

    ctrl.Post = function (baseGatewayUrl, url, data, authorization, onResponse)
    {
        let postData;
        if (data instanceof FormData)
        {
            postData = new URLSearchParams(data);
        }
        else
        {
            postData = data;
        }

        let baseUrl = baseGatewayUrl.concat('/ardvro/component/sqljson/Http/post');
        let arg = {
            Url: url,
            Data: postData,
            Authorization: authorization
        };
        Ajax.Post(baseUrl, arg, '',
            function (stringresult)
            {
                onResponse != null ? onResponse(stringresult) : null;
            }
        );
    };
    
    ctrl.GetStream = function (baseGatewayUrl, url, authorization, onResponse)
    {
        let baseUrl = baseGatewayUrl.concat('/ardvro/component/sqljson/Http/getstream?url=', url, '&authorization=', authorization);
        Ajax.Get(baseUrl, '',
            function (bytesresult)
            {
                onResponse != null ? onResponse(bytesresult) : null;
            }
        );
    };

    ctrl.PostStream = function (baseGatewayUrl, url, data, authorization, onResponse)
    {
        let postData;
        if (data instanceof FormData)
        {
            postData = new URLSearchParams(data);
        }
        else if (typeof data === 'string')
        {
            postData = data;
        }
        else
        {
            postData = data;
        }

        let baseUrl = baseGatewayUrl.concat('/ardvro/component/sqljson/Http/poststream');
        let arg = {
            Url: url,
            Data: postData,
            Authorization: authorization
        };
        Ajax.Post(baseUrl, arg, '',
            function (stringresult)
            {
                onResponse != null ? onResponse(stringresult) : null;
            }
        );
    };

    ctrl.Post = function (baseGatewayUrl, url, data, bytes, authorization, onResponse)
    {
        let postData;
        if (data instanceof FormData)
        {
            postData = new URLSearchParams(data);
        }
        else if (typeof data === 'string')
        {
            postData = data;
        }
        else
        {
            postData = data;
        }

        let baseUrl = baseGatewayUrl.concat('/ardvro/component/sqljson/Http/upload');
        let arg = {
            Url: url,
            Data: postData,
            Bytes: bytes,
            Authorization: authorization
        };
        Ajax.Post(baseUrl, arg, '',
            function (stringresult)
            {
                onResponse != null ? onResponse(stringresult) : null;
            }
        );
    };

    return ctrl;
};