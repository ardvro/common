var KenviroDashboard = function KenviroDashboard(cfg)
{
    let ctrlEs = new ExpertSystemController({ Connector: cfg.Connector });

    let _esAnswerLogs = [];
    let _dssUsageCounts = [];
    let _esAnswerSolutions = [];

    let panel = new DashboardPanel(
        {
            Id: cfg.Id.concat("kenvirodashboard"),
            Code: cfg.Code,
            Connector: cfg.Connector,
            Theme: cfg.Theme,
            Desktop: cfg.Desktop,
            User: cfg.User,
            CdnUrl: cfg.CdnUrl,
            WebBaseUrl: cfg.WebBaseUrl,
            GetServerTime: cfg.GetServerTime
        }
    );

    let divChart1 = document.createElement("div");
    divChart1.setAttribute("id", "kenvirochart1");
    divChart1.setAttribute("title", "Click to view report detail");
    divChart1.setAttribute("style", "min-height: 320px");

    let divChart2 = document.createElement("div");
    divChart2.setAttribute("id", "kenvirochart2");
    divChart2.setAttribute("title", "Click to view report detail");
    divChart2.setAttribute("style", "min-height: 320px");

    let divChart3 = document.createElement("div");
    divChart3.setAttribute("id", "kenvirochart3");
    divChart3.setAttribute("class", "clickable");
    divChart3.setAttribute("title", "Click to view report detail");
    divChart3.setAttribute("style", "min-height: 480px");

    let listBoxes = [
        {
            BackgroundColor: "#cc2323",
            Icon: "fas fa-diagnoses",
            Title: "Expert Systems",
            Type: "",
            RouteId: "expertsystems",
            LeftText: "Chatbot",
            RightText: "Generator",
            OnClick: expertSystemClick //expertSystemGeneratorClick// expertSystemRunClick
        },
        {
            BackgroundColor: "#0abf3a",
            Icon: "fas fa-chart-pie",
            Title: "Decision Support Systems",
            Type: "",
            Panel: "",
            RouteId: "decisionsupportsystems",
            LeftText: "Criteria",
            RightText: "Generator",
            OnClick: desicionSupportSystemsClick
        },
        {
            BackgroundColor: "#26A0DA",
            Icon: "fas fa-magic",
            Title: "Text Mining",
            Type: "",
            Panel: "",
            RouteId: "textmining",
            LeftText: "Retrieval",
            RightText: "Extraction",
            OnClick: textMiningClick //textMiningGeneratorClick
        },
        {
            BackgroundColor: "#FF8C00", //"#6C429C",
            Icon: "fas fa-drafting-compass",
            Title: "Machine Learning",
            Type: "",
            Panel: "",
            RouteId: "machinelearning",
            LeftText: "Modelling",
            RightText: "Simulator",
            OnClick: machineLearningClick
        },
        /*{
            BackgroundColor: "#FF8C00", //"#e6de00",
            Icon: "fas fa-chart-line",
            Title: "Fuzzy Logic",
            Type: "",
            Panel: "",
            RouteId: "fuzzydatabase",
            LeftText: "Fuzzy Database",
            RightText: "Fuzzy Inference",
            OnClick: fuzzyDatabaseClick
        },*/
        /*{
            BackgroundColor: "#FF8C00",
            Icon: "fas fa-code",
            Title: "Chatbot",
            Type: "",
            Panel: "",
            RouteId: "embeddedscript",
            LeftText: "Embedded",
            RightText: "Script",
            OnClick: createScript
        },*/

        {
            BackgroundColor: "#d4af37", //"#d4af37",
            Icon: "fas fa-project-diagram",
            Title: "Knowledge Base",
            Type: "",
            Panel: "",
            RouteId: "knowledgebase",
            LeftText: "Fuzzy Logic",
            RightText: "Genetic Algorithm",
            OnClick: criteriaTreeViewClick
        },




        /*{
            BackgroundColor: "#00CED1",
            Icon: "fas fa-folder-open",
            Title: "Files",
            Type: "",
            Panel: "",
            RouteId: "files",
            LeftText: "",
            RightText: "",
            OnClick: genFilesClick
        },*/
        /*{
            BackgroundColor: "silver",
            Icon: "fas fa-plug",
            Title: "Integrations",
            Type: "",
            Panel: "",
            RouteId: "kenvirointegrations",
            LeftText: "",
            RightText: "",
            OnClick: genIntegrationsClick
        },*/
        /*{
            BackgroundColor: "#e6de00",
            Icon: "fas fa-sticky-note",
            Title: "Notes",
            Type: "",
            Panel: "",
            RouteId: "notes",
            LeftText: "",
            RightText: "",
            OnClick: genNotesClick
        },*/

        {
            BackgroundColor: "#cf3476",
            Icon: "fas fa-code",
            Title: "Embedded Script",
            Type: "",
            Panel: "",
            RouteId: "",
            LeftText: "",
            RightText: "",
            OnClick: embeddedScriptClick
        },

        {
            BackgroundColor: "#e6de00",
            Icon: "fas fa-cog",
            Title: "Settings",
            Type: "",
            Panel: "",
            RouteId: "kenviromenu",
            LeftText: "Master",
            RightText: "Logs",
            OnClick: kenviroMenuClick
        },
        {
            BackgroundColor: "#242121",
            Icon: "fas fa-clock",
            Title: "Server Time",
            Type: "ServerTime",
            Panel: "",
            RouteId: "",
            LeftText: "",
            RightText: ""
        },
        {
            BackgroundColor: "",
            Icon: "",
            Title: "",
            Type: "Element",
            Element: divChart1,
            OnClick: showReport1,
            Panel: "",
            RouteId: "",
            LeftText: "",
            RightText: ""
        },
        {
            BackgroundColor: "",
            Icon: "",
            Title: "",
            Type: "Element",
            Element: divChart2,
            OnClick: showReport2,
            Panel: "",
            RouteId: "",
            LeftText: "",
            RightText: ""
        }
    ];

    panel.Load(listBoxes);

    divChart3.onclick = function ()
    {
        showReport3(divChart3);
    };
    panel.Body.appendChild(document.createElement("br"));
    panel.Body.appendChild(divChart3);

    loadChart1(divChart1);

    loadChart2(divChart2);

    loadChart3(divChart3);

    cfg.Desktop.Add("", cfg.Code, panel);

    window.scrollTo(0, 0);


    function expertSystemClick()
    {
        let frm = new EsTable(
            {
                Id: "expertsystems",
                Code: "expertsystems",
                Label: "Expert Systems",
                Theme: cfg.Theme,
                ShowLabel: cfg.ShowLabel,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                GetServerTime: cfg.GetServerTime,
                WebSocketUrl: cfg.WebSocketUrl,
                WebBaseUrl: cfg.WebBaseUrl,
                CdnUrl: cfg.CdnUrl,
            }
        );
    }

    function textMiningClick()
    {
        let frm = new TmTable(
            {
                Id: "textmining",
                Code: "textmining",
                Label: "Text Mining",
                Theme: cfg.Theme,
                ShowLabel: cfg.ShowLabel,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                GetServerTime: cfg.GetServerTime,
                WebsiteSetting: cfg.WebsiteSetting,
                WebBaseUrl: cfg.WebBaseUrl,
                CdnUrl: cfg.CdnUrl,
            }
        );
    }

    function criteriaTreeViewClick()
    {
        const frm = new CriteriaTreeview(
            {
                Id: "knowledgebase",
                Code: "knowledgebase",
                Connector: cfg.Connector,
                Theme: cfg.Theme,
                Desktop: cfg.Desktop,
                DesktopItemType: DesktopItemType.Desktop,
                User: cfg.User,
                CdnUrl: cfg.CdnUrl,
                WebBaseUrl: cfg.WebBaseUrl,
                GetServerTime: cfg.GetServerTime
            }
        );
        let tabform = cfg.Desktop.Add("", "knowledgebase", frm);
    }

    function desicionSupportSystemsClick()
    {
        let frm = new DssTable(
            {
                Id: "decisionsupportsystems",
                Code: "decisionsupportsystems",
                Label: "Decision Support Systems",
                Theme: cfg.Theme,
                ShowLabel: cfg.ShowLabel,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                GetServerTime: cfg.GetServerTime,
                WebsiteSetting: cfg.WebsiteSetting,
                WebBaseUrl: cfg.WebBaseUrl,
                CdnUrl: cfg.CdnUrl,
            }
        );
    }

    function machineLearningClick()
    {
        let frm = new MlTable(
            {
                Id: "machinelearning",
                Code: "machinelearning",
                Label: "Machine Learning",
                Theme: cfg.Theme,
                ShowLabel: cfg.ShowLabel,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                GetServerTime: cfg.GetServerTime,
                WebsiteSetting: cfg.WebsiteSetting,
                WebBaseUrl: cfg.WebBaseUrl,
                CdnUrl: cfg.CdnUrl,
            }
        );
    }

    function kenviroMenuClick()
    {
        if (cfg.User != null && cfg.User.IsInRoles([RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR]))
        {
            let frm = new KenviroMenu({
                Id: "kenviroadminmenu",
                Code: "kenviroadminmenu",
                Label: "Administration",
                SchemaSuffix: "",
                Connector: cfg.Connector,
                Theme: cfg.Theme,
                Desktop: cfg.Desktop,
                User: cfg.User,
                CdnUrl: cfg.CdnUrl,
                Authenticator: cfg.Authenticator,
                GetServerTime: cfg.GetServerTime
            });
        }
        else
        {
            MsgBox.Show("You need at least a supervisor roles to access this menu");
        }
    }

    function embeddedScriptClick()
    {
        Kenviro.ShowEmbeddedWidgetScript(cfg.WebBaseUrl, cfg.WebSocketUrl, cfg.CdnUrl, cfg.Theme.ButtonClass);
    }


    function loadChart1(element)
    {
        let dtm = new Date();
        let year = dtm.getFullYear();
        let dtmFrom = new Date(year, 1, 1).Format('yyyy-MM-dd');
        let dtmTo = new Date(year, 12, 31).Format('yyyy-MM-dd');
        ctrlEs.sp_EsLogAnswerCount(dtmFrom, dtmTo, 0, 20,
            function (result)
            {
                _esAnswerLogs = result;

                google.charts.load('current', { 'packages': ['corechart', 'bar'] });

                google.charts.setOnLoadCallback(
                    function ()
                    {
                        let rows = [];
                        let header = ['Matters', 'True', 'False'];
                        rows.push(header);
                        if (result != null && result.length > 0)
                        {
                            result.forEach(
                                function (item, index)
                                {
                                    if ((item.TrueAnswerCount == null && item.FalseAnswerCount == null) ||
                                        (item.TrueAnswerCount == '' && item.FalseAnswerCount == '') ||
                                        (item.TrueAnswerCount == 0 && item.FalseAnswerCount == 0) ||
                                        (item.Criteria == null && item.Criteria == ''))
                                    {
                                        return;
                                    }

                                    rows.push([item.Criteria, Number(item.TrueAnswerCount), Number(item.FalseAnswerCount)]);
                                }
                            );
                        }
                        else
                        {
                            rows.push(['', 0, 0]);
                        }

                        let data = new google.visualization.arrayToDataTable(rows);

                        let options = {
                            title: 'Expert Systems Answers Count',
                            vAxis: { title: 'Answer' },
                            hAxis: { title: 'Matters' },
                            seriesType: 'bars',
                            series: { 3: { type: 'line' } }
                        };

                        // Instantiate and draw our chart, passing in some options.
                        let chart = new google.visualization.ComboChart(element);
                        chart.draw(data, options);
                    }
                );

            }
        );
    }

    function showReport1()
    {
        let frm = new EsLogAnswerCountTable(
            {
                Id: "EsLogAnswerCountTable",
                Code: "kenviro",
                Label: "Expert System Answer Logs",
                Theme: cfg.Theme,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                GetServerTime: cfg.GetServerTime,
                GetDataFunction: function (ctrlArg, onLoaded)
                {
                    onLoaded(_esAnswerLogs);
                }
            }
        );
    }


    function loadChart2(element)
    {
        let dtm = new Date();
        let year = dtm.getFullYear();
        let dtmFrom = new Date(year, 1, 1).Format('yyyy-MM-dd');
        let dtmTo = new Date(year, 12, 31).Format('yyyy-MM-dd');
        ctrlEs.sp_DssItemCriteriaUsageCount(dtmFrom, dtmTo, 0, 100,
            function (result)
            {
                _dssUsageCounts = result;
                google.charts.load('current', { 'packages': ['corechart'] });
                google.charts.setOnLoadCallback(
                    function ()
                    {
                        let data = new google.visualization.DataTable();
                        data.addColumn('string', 'Matter');
                        data.addColumn('number', 'UsageCount');
                        let rows = [];
                        result.forEach(
                            function (item, index)
                            {
                                if (item.UsageCount == null || item.UsageCount == '' || item.UsageCount == '0')
                                {
                                    return;
                                }
                                rows.push([item.Matter, item.UsageCount]);
                            }
                        );
                        data.addRows(rows);

                        // Set chart options
                        let options = {
                            'title': 'DSS Criteria Usage Proportion',
                            //'width': 400,
                            //'height': 300
                        };

                        // Instantiate and draw our chart, passing in some options.
                        let chart = new google.visualization.PieChart(element);
                        chart.draw(data, options);
                    }
                );

            }
        );
    }

    function showReport2()
    {
        let frm = new DssItemCriteriaUsageTable(
            {
                Id: "aisDssCriteriaItemUsageCount",
                Code: "kenviro",
                Label: "DSS Criteria Item Usage Count",
                Theme: cfg.Theme,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                GetServerTime: cfg.GetServerTime,
                GetDataFunction: function (ctrlArg, onLoaded)
                {
                    onLoaded(_dssUsageCounts);
                }
            }
        );
    }

    
    function loadChart3(element)
    {
        let dtm = new Date();
        let year = dtm.getFullYear();
        let dtmFrom = new Date(year, 1, 1).Format('yyyy-MM-dd');
        let dtmTo = new Date(year, 12, 31).Format('yyyy-MM-dd');
        ctrlEs.sp_EsLogAnswerCountSolutions(dtmFrom, dtmTo, 0, 100,
            function (result)
            {
                _esAnswerSolutions = result;

                google.charts.load('current', { 'packages': ['corechart'] });
                google.charts.setOnLoadCallback(
                    function ()
                    {
                        let rows = [];
                        rows.push(['CriteriaName', 'FalseAnswer', 'TrueAnswer', 'MatterName', 'Probability']);

                        if (result != null && result.length > 0)
                        {
                            result.forEach(
                                function (item, index)
                                {
                                    if ((item.TrueAnswerCount == null && item.FalseAnswerCount == null) ||
                                        (item.TrueAnswerCount == '' && item.FalseAnswerCount == '') ||
                                        (item.TrueAnswerCount == 0 && item.FalseAnswerCount == 0))
                                    {
                                        return;
                                    }
                                    rows.push([item.Criteria.substr(0, 32).concat("..."), item.FalseAnswerCount, item.TrueAnswerCount, item.Matter.substr(0, 32), item.Probability]);
                                }
                            );
                        }
                        else
                        {
                            rows.push(['', 0, 0, '', 0]);
                        }

                        let data = google.visualization.arrayToDataTable(rows);

                        let options = {
                            title: 'Criterias Answers Count',
                            hAxis: { title: 'False' },
                            vAxis: { title: 'True' },
                            bubble: {
                            }
                        };

                        let chart = new google.visualization.BubbleChart(element);
                        chart.draw(data, options);
                    }
                );

            }
        );
    }

    function showReport3()
    {
        let frm = new EsLogAnswerSolutionsTable(
            {
                Id: "aisEsLogAnswerCountSolutions",
                Code: "kenviro",
                Label: "ES Answers & Solutions Probability",
                Theme: cfg.Theme,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                GetServerTime: cfg.GetServerTime,
                GetDataFunction: function (ctrlArg, onLoaded)
                {
                    onLoaded(_esAnswerSolutions);
                }
            }
        );
    }


    return panel;
};