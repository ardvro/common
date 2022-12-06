let AuthenticationMenu = function accountMenu(cfg)
{
    let m = {};

    let _user = {};

    let _divMenuId = "divMenuItems_" + cfg.Id;

    const _divId = cfg.Id.concat("_authentication_dropdownMenuButton");

    let divBtnGroup1;
    let parentDiv;
    let imgButton;

    construct();

    function construct()
    {
        initDiv();
        cfg.MenuItems = getInitialMenu();
        m.MenuItems = cfg.MenuItems;
        initMenuItems(cfg.MenuItems);
    }

    function initDiv()
    {
        parentDiv = document.getElementById(cfg.Id);
        if (parentDiv == null)
        {
            if (cfg.ForceCreateParent)
            {
                parentDiv = document.createElement("div");
                parentDiv.setAttribute("id", cfg.Id);
            }
            else
            {
                //means, the website template does not want to use start menu, instead it use flat menu like most website
                return;
            }
        }
        parentDiv.innerHTML = "";
        divBtnGroup1 = document.createElement("div");
        divBtnGroup1.setAttribute("id", _divId);
        divBtnGroup1.setAttribute("class", "dropdown");
        parentDiv.appendChild(divBtnGroup1);

        let ahrefmainmenu = document.createElement("button");
        ahrefmainmenu.setAttribute("data-toggle", "dropdown");
        ahrefmainmenu.setAttribute("aria-expanded", "false");
        divBtnGroup1.appendChild(ahrefmainmenu);

        imgButton = document.createElement("i");
        imgButton.setAttribute("class", "fas fa-user");
        imgButton.setAttribute("id", "imgMainLogo_" + cfg.Id);
        imgButton.setAttribute("title", "Login, Register, and Account Management");
        imgButton.setAttribute("data-toggle", "tooltip");
        imgButton.setAttribute("data-placement", "bottom");
        ahrefmainmenu.appendChild(imgButton);

        if (cfg.Theme.ButtonClass != null && cfg.Theme.ButtonClass != '')
        {
            ahrefmainmenu.setAttribute("class", cfg.Theme.ButtonClass);
        }
        else
        {
            ahrefmainmenu.setAttribute("class", "btn btn-light");
        }

    }

    function initMenuItems(menus)
    {
        let ulmenu = buildMenu(menus);
        if (ulmenu == null)
        {
            return;
        }

        if (divBtnGroup1 == null)
        {
            return;
        }

        divBtnGroup1.appendChild(ulmenu);
    }

    function getInitialMenu()
    {
        let menus = [
            {
                Id: 0,
                Code: "login", Name: "Login", Icon: "fas fa-unlock-alt", Closable: true, 
                Load: function (item, e)
                {
                    let redirecturl = Utils.GetQueryStringByName("redirecturl", window.location.href);

                    let frmLogin = new LoginForm({
                        Id: item.Code, Label: item.Name, ParentHtmlId: "modal", Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator,
                        Desktop: cfg.Desktop,
                        RedirectUrl: redirecturl,
                        OnLogin: function (usr)
                        {
                            m.ChangeLoginMenu(usr);
                            cfg.OnLogin(usr);

                            if (redirecturl != null && redirecturl != "")
                            {
                                window.location.href = redirecturl;
                            }
                            else
                            {
                                //document.location.reload();
                                window.location.href = cfg.WebBaseUrl;
                            }
                        }
                    });
                }
            },
            {
                Id: 1,
                Code: "activation", Name: "Activate User & Workgroup", Icon: "fas fa-building", Closable: true, 
                Load: function (item, e)
                {
                    let frmReg = new UserWorkgroupActivationForm({
                        Id: item.Code, Label: item.Name, Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });
                }
            },
            /*{
                Id: 2,
                Code: "SSO_USER_ACT", Name: "Activate User", Icon: "fas fa-user-check",
                Load: function (item, e)
                {
                    let frmReg = new UserActivationForm({
                        Id: item.Code, Label: item.Name, ParentHtmlId: "modal", Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });
                }
            },*/
            {
                Id: 3,
                Code: "register", Name: "Register", Icon: "fas fa-user-plus", Closable: true, 
                Load: function (item, e)
                {
                    let frmReg = new UserRegisterForm({
                        Id: item.Code, Label: item.Name, ParentHtmlId: "modal", Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator, DashboardUrl: cfg.DashboardUrl
                    });
                }
            },
            {
                Id: 4,
                Code: "resetpassword", Name: "Reset Password", Icon: "fas fa-user-lock", Closable: true, 
                Load: function (item, e)
                {
                    let frmResetPassword = new ResetPasswordForm({
                        Id: item.Code, Label: item.Name, Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });
                }
            },
            {
                Id: 5,
                Code: "resetpasswordconfirm", Name: "Reset Password Confirmation", Icon: "fas fas fa-lock-open", Closable: true, 
                Load: function (item, e)
                {
                    let frmResetPassword = new ResetPasswordConfirmForm({
                        Id: item.Code, Label: item.Name, Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });
                }
            },
            {
                Id: 6,
                Code: "SSO_USER_OTP", Name: "OTP Request", Icon: "fas fa-key",
                Load: function (item, e)
                {
                    let frm = new OtpRequestForm({
                        Id: item.Code, Label: item.Name, Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });
                }
            },
            {
                Id: 7,
                Code: "SSO_USER_OTP_LOGIN", Name: "OTP Login", Icon: "fas fa-unlock",
                Load: function (item, e)
                {
                    let frm = new OtpLoginForm({
                        Id: item.Code, Label: item.Name, Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator, WebBaseUrl: cfg.WebBaseUrl
                    });
                }
            }
        ];

        if (cfg.AllowUserSingleActivation)
        {
            menus.push(
                {
                    Id: 2,
                    Code: "SSO_USER_ACT", Name: "Activate User", Icon: "fas fa-user-check", Closable: true, 
                    Load: function (item, e)
                    {
                        let frmReg = new UserActivationForm({
                            Id: item.Code, Label: item.Name, ParentHtmlId: "modal", Theme: cfg.Theme,
                            Authenticator: cfg.Authenticator
                        });
                    }
                }
            );
        }

        if (cfg.AllowOtp)
        {
            menus.push(
                {
                    Id: 6,
                    Code: "SSO_USER_OTP", Name: "OTP Request", Icon: "fas fa-key", Closable: true, 
                    Load: function (item, e)
                    {
                        let frm = new OtpRequestForm({
                            Id: item.Code, Label: item.Name, Theme: cfg.Theme,
                            Authenticator: cfg.Authenticator
                        });
                    }
                }
            );
            menus.push(
                {
                    Id: 7,
                    Code: "SSO_USER_OTP_LOGIN", Name: "OTP Login", Icon: "fas fa-unlock", Closable: true, 
                    Load: function (item, e)
                    {
                        let frm = new OtpLoginForm({
                            Id: item.Code, Label: item.Name, Theme: cfg.Theme,
                            Authenticator: cfg.Authenticator
                        });
                    }
                }
            );
        }

        return menus;
    }

    function getAfterLoginMenu()
    {
        let afterLoginMenus = [
            {
                Id: 0,
                Code: "SSO_USER_NAME", Name: _user.Name, Icon: "fas fa-id-card-alt"
            },
            //{
            //    Id: 1,
            //    Code: "SSO_USER_ACTWG", Name: _user.PrimaryWorkgroupName == null ? "OTP Login" : _user.PrimaryWorkgroupName, Icon: "fas fa-briefcase"
            //},
            //{
            //    Id: -1
            //},
            //{
            //    Id: 3,
            //    Code: "SSO_USER", Name: "Authentication", Icon: "fas fa-user-cog"
            //},
            //{
            //    Id: 4,
            //    Code: "SSO_USER_WGACT", Name: "Workgroup", Icon: "fas fa-building"
            //},
            //{
            //    Id: -1
            //},
            {
                Id: -1
            },

            {
                Id: -1
            },
            {
                Id: 5,
                Code: "SSO_USER_CHGPWD", Name: "  Change Password", Icon: "fas fa-user-secret", Closable: true, 
                //ParentMenuId: 3,
                Load: function (item, e)
                {
                    let frmReg = new ChangePasswordForm({
                        Id: item.Code, Label: item.Name, ParentHtmlId: "modal", Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });
                }
            },
            {
                Id: 11,
                Code: "SSO_USER_SETTINGS", Name: "Settings", Icon: "fas fa-user-cog", Closable: true, 
                //ParentMenuId: 3,
                Load: function (item, e)
                {
                    let frm = new UserSettingTable({
                        Id: "SSO_USER_SETTINGS", Label: item.Name, ParentHtmlId: "modal", Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });

                    if (cfg.Desktop != null)
                    {
                        let tabform = cfg.Desktop.Add("Settings", "usersettings", frm);
                    }

                }
            },
            {
                Id: 12,
                Code: "SSO_USER_SECURITIES", Name: "Securities", Icon: "fas fa-user-shield", Closable: true, 
                //ParentMenuId: 3,
                Load: function (item, e)
                {
                    let frm = new UserSecurityTable({
                        Id: "SSO_USER_SECURITIES", Label: item.Name, ParentHtmlId: "modal", Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });

                    if (cfg.Desktop != null)
                    {
                        let tabform = cfg.Desktop.Add("Securities", "usersecurities", frm);
                    }

                }
            },
            {
                Id: 9,
                Code: "SSO_WG_USER_LIST", Name: "Users", Icon: "fas fa-users", Closable: true, 
                //ParentMenuId: 4,
                Load: function (item, e)
                {
                    let frm = new WorkgroupUserTable({
                        Id: "SSO_WG_USER_LIST", ParentHtmlId: "modal", Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });

                    if (cfg.Desktop != null)
                    {
                        let tabform = cfg.Desktop.Add("Users", "users", frm);
                    }
                }
            },
            {
                Id: 8,
                Code: "SSO_WG_LIST", Name: "Workgroups", Icon: "fas fa-suitcase", Closable: true, 
                //ParentMenuId: 4,
                Load: function (item, e)
                {
                    let frm = new WorkgroupTable({
                        Id: "SSO_WG_LIST", ParentHtmlId: "modal", Theme: cfg.Theme,
                        Authenticator: cfg.Authenticator
                    });

                    if (cfg.Desktop != null)
                    {
                        let tabform = cfg.Desktop.Add("Workgroups", "workgroups", frm);
                    }
                }
            },
            //{
            //    Id: 6,
            //    Code: "SSO_WG_ACTIVE", Name: "Active Workgroup", Icon: "fas fa-suitcase-rolling",
            //    Load: null
            //},
            //{
            //    Id: -1
            //},
            {
                Id: -1
            },
            {
                Id: 7,
                Code: "SSO_USER_LOGOUT", Name: "Logout", Icon: "fas fa-power-off",
                Load: function (item, e)
                {
                    logout();
                    e.stopPropagation();
                    e.preventDefault();
                }
            },

            /*{
                Id: 10,
                Code: "SSO_USR_WG_ADD", Name: "User Workgroup Registration", Icon: "fas fa-download",
                ParentMenuId: 4,
                Load: function (item, e)
                {
                    let frm = new UserWorkgroupRoleRegisterForm({
                        Id: "SSO_USR_WG_ADD", ParentHtmlId: "modal", Theme.TheadClass: cfg.Theme.TheadClass, Theme.HeaderClass: cfg.Theme.HeaderClass, Theme.HeaderStyle: cfg.Theme.HeaderStyle, Theme.ButtonClass: cfg.Theme.ButtonClass,
                        Label: "User Workgroup Registration",
                        Connector: cfg.Connector
                    });

                    if (cfg.Desktop != null)
                    {
                        let tabform = cfg.Desktop.Add("SSO_USR_WG_ADD", "Workgroup Users", "fas fa-download", true, frm.Body, frm.Header);
                    }
                }
            },*/


        ];

        afterLoginMenus = createActiveWorkgroupSettings(6, afterLoginMenus);

        return afterLoginMenus;
    }

    function createActiveWorkgroupSettings(parentMenuId, afterLoginMenu)
    {
        let n = _user.Data.Workgroups.length;
        for (let i = 0; i < n; i++)
        {
            let menuWorkgroup =
            {
                Id: afterLoginMenu.length + (i + 1),
                Name: _user.Data.Workgroups[i].Name,
                Icon: "fas fa-suitcase-rolling",
                IsActive: (_user.Data.Workgroups[i].Id == _user.PrimaryWorkgroupId),
                Load: function (item, e)
                {
                    _user.PrimaryWorkgroupId = _user.Data.Workgroups[i].Id;
                    setActiveWorkgroup(_user.Data.Workgroups[i].Name);
                }
            };

            afterLoginMenu.splice(2, 0, menuWorkgroup);
        }

        return afterLoginMenu;
    }

    function setActiveWorkgroup(workgroupName)
    {
        cfg.Authenticator.SetPrimaryWorkgroup(workgroupName, function (data)
        {
            if (data == null || data <= 0)
            {
                MsgBox.Show("Set Active Workgroup Failed");
            }

            m.ChangeLoginMenu(_user);
        });
    }

    function buildMenu (menulist, menuparent)
    {
        let listparent = [];

        let ul;

        if (menuparent == null)
        {
            listparent = menulist.filter(x => x.ParentMenuId == null);
        }
        else
        {
            listparent = menulist.filter(x => x.ParentMenuId == menuparent.Id);
        }

        if (listparent == null || listparent.length <= 0)
        {
            return;
        }

        ul = document.createElement("ul");
        ul.setAttribute("class", "dropdown-menu");
        ul.setAttribute("aria-labelledby", _divId);

        for (let i = 0; i < listparent.length; i++)
        {
            let parentitem = listparent[i];

            let li = document.createElement("li");
            li.setAttribute("id", parentitem.Id);

            let href = document.createElement("a");

            href.setAttribute("href", "#");
            href.setAttribute("tabindex", "-1");

            if (parentitem.Id == -1 && parentitem.Code == null && parentitem.Name == null)
            {
                let divider = document.createElement("div");
                divider.setAttribute("class", "dropdown-divider");
                li.appendChild(divider);
                ul.appendChild(li);
                continue;
            }
            else
            {
                href.innerHTML = '<i class="' + parentitem.Icon + '"></i>&nbsp;&nbsp;' + parentitem.Name;
                li.appendChild(href);
                ul.appendChild(li);
            }

            let childUL = buildMenu(menulist, parentitem);
            if (childUL != null)
            {
                href.setAttribute("class", "hrefsubmenu dropdown-item");
                li.setAttribute("class", "dropdown-submenu");
                li.appendChild(childUL);
            }
            else
            {
                href.setAttribute("class", "dropdown-item " + (parentitem.IsActive == null || !parentitem.IsActive ? "" : "active"));
                if (parentitem.Load != null)
                {
                    href.onclick = function (e)
                    {
                        if (parentitem.IsActive != null && !parentitem.IsActive)
                        {
                            href.parentElement.parentElement.querySelector("li>a").classList.remove("active");

                            href.setAttribute("class", "dropdown-item active");
                        }

                        parentitem.Load(parentitem, e);
                        //e.stopPropagation();
                        e.preventDefault();
                    };
                }
                else
                {
                    href.setAttribute("style", "pointer-events:none;");
                }
            }
        }

        return ul;
    }

    function getOtpLoginMenu()
    {
        let afterLoginMenus = [
            {
                Id: 0,
                Code: "SSO_USER_NAME", Name: _user.name, Icon: "fas fa-database"
            },
            {
                Id: 1,
                Code: "SSO_USER_ACTWG", Name: _user.primarygroupname == null ? "OTP Login" : _user.primarygroupname, Icon: "fas fa-database"
            },
            {
                Id: -1
            },
            {
                Id: 7,
                Code: "SSO_USER_LOGOUT", Name: "Logout", Icon: "fas fa-power-off",
                Load: function (item, e)
                {
                    logout();
                    e.stopPropagation();
                    e.preventDefault();
                }
            },

        ];

        return afterLoginMenus;
    }

    function logout ()
    {
        cfg.Authenticator.Logout(function (box)
        {
            document.location.href = cfg.WebBaseUrl;
        });
    }

    m.ChangeLoginMenu = function (usr)
    {
        if (divBtnGroup1 == null)
        {
            return;
        }

        _user = usr;

        if (_user.PrimaryWorkgroupId == null)
        {
            cfg.MenuItems = getOtpLoginMenu();
        }
        else
        {
            cfg.MenuItems = getAfterLoginMenu();
        }

        parentDiv.removeChild(divBtnGroup1);
        initDiv();
        divMenu = document.getElementById(_divMenuId);
        let ulmenu = buildMenu(cfg.MenuItems, null);

        divBtnGroup1.appendChild(ulmenu);
    };

    m.GetElement = function ()
    {
        return parentDiv;
    };

    return m;
};

