
<!DOCTYPE html>
<html>
<head>
    <title>ARDVRO | Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8" />
    <link rel="icon" href="https://cdn.ardvro.com/res/image/ardvro_icon.png">
    <script type="text/javascript" src="https://cdn.ardvro.com/res/ref/codemirror-5.53.2/codemirror.js"></script>
    <script type="text/javascript" src="https://demo.ardvro.id/res/config/PageConfig.js"></script>
    <script type="text/javascript" src="https://demo.ardvro.id/res/config/WebsiteConfig.js"></script>
    <script type="text/javascript" src="https://demo.ardvro.id/res/config/WebsiteSetting.js"></script>
    <script type="text/javascript" src="https://demo.ardvro.id/res/js/Www.js"></script>
    <script type="text/javascript" src="https://demo.ardvro.id/res/js/Demo.js"></script>
    <script type="text/javascript" src="https://demo.ardvro.id/res/js/DemoRoute.js"></script>
    <script type="text/javascript" src="https://cdn.ardvro.com/res/js/production/ardvro.core.package.js"></script>
    <script type="text/javascript" src="https://cdn.ardvro.com/res/js/public.js"></script>
    <script type="text/javascript">
        <?php
			include "res/ardvro.php";
      	?>
    </script>
    <script type="text/javascript">
        const WEBSOCKETURL = "ardvro.id";
        const WEBBASEURL = "https://demo.ardvro.id";
        const CDNURL = "https://cdn.ardvro.com";
        window.onload = function ()
        {
            Demo.Start();
          
            Www.Init(1500);
        };
        (function ()
        {
            Loader.InitDependencies(WEBBASEURL, CDNURL, [ArdvroCoreDependencies]);
        })();
    </script>

    <!--Global site tag (gtag.js) - Google Analytics-->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0Y0JCX4L7N"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-0Y0JCX4L7N');
    </script>

</head>
<body style="overflow-x:hidden;">
    <nav class="navbar navbar-expand-lg fixed-top bg-danger" id="header" style="padding: 5px 0px 7px 0px;">
        <button id="btnlogout" class="btn btn-danger" onclick="Facade.Logout();"><i class="fas fa-power-off"></i></button>
        <div class="container-fluid" id="mainmenu" style="padding-left: 2px;">
        </div>
        <div id="kenvirotray"></div>
        <div id="devtoolstray"></div>
        <div id="kmstray"></div>
        <div id="messengertray"></div>
        <div id="notificationtray"></div>
    </nav>
    <div style="min-height:75vh; padding-top:56px;">
        <div id="tabContainerMain">
            <?php
			    include "view/HomeBanner.html";
      	    ?>
        </div>
    </div>
    <br />
    <nav class="navbar">
        <div style="width:100%; text-align:center;">
            Warning !!! This is a demo version, your data can be read and modified by others. Please <a href="https://www.ardvro.com/login">Register</a> the free version for further testing.
            <br >
            <a href="https://www.ardvro.com/content/56/user_registration">User Registration</a> |
            <a href="https://www.ardvro.com/contents/39/sqljson">Create Cloud Backend</a> |
            <a href="https://www.ardvro.com/content/106/kenviro">Create Intelligent Applications</a> |
            <a href="https://www.ardvro.com/contents/40/webappgear">Create Website</a> |
            <a href="https://www.ardvro.com/contents/41/netcorehost">Web Hosting</a> |
            <a href="https://www.ardvro.com/kms">Support</a> 
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg">
        <div style="width:100vw; text-align:center; padding-left:10px; padding-right:10px;">
            <script type="text/javascript">
                document.write('Copyright and Trademark <a href="https://www.ardvro.com" target="_blank" style="text-decoration:none;">&copy;ARDVRO&trade; </a> ' + new Date().getFullYear() + ' <label style="white-space: nowrap;">PT. ARDVRO SISTEM TEKNOLOGI</label>');
            </script>
        </div>
    </nav>
</body>
</html>
