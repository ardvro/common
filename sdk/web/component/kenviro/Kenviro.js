var Kenviro = (function ()
{
    let ken = {};

    ken.KnowledgeAcquisitionType = 
    {
        Files: "Files",
        Google: "Google",
        Mining: "Mining",
        Existing: "Existing",
        Text: "Text",
        Manual: "Manual"
    };

    ken.InferenceType =
    {
        Files: "DemspterShafer",
        Google: "BackwardChaining",
        Mining: "ForwardChaining"
    };

    ken.CriteriaType =
    {
        ExpertSystem: "ExpertSystem",
        DecisionSupportSystem: "DecisionSupportSystem",
        FuzzyLogic: "FuzzyLogic",
        Probabilistic: "Probabilistic",
        GeneticAlgorithm: "GeneticAlgorithm",
        LinearProgramming: "LinearProgramming",
        Subject: "Subject",
        Matter: "Matter",
        Indication: "Indication",
        Question: "Question",
    };

    ken.ShowChatbotWidgetScript = function (webbaseurl, websocketurl, cdnurl, theme)
    {
        frm = new FormModal({ Id: "kenvirochatbotwidgetscriptmodal", Label: "Chatbot Embedded Script For Website", Theme: theme });
        let txt = Inputs.CreateFormInput({ Id: "txtEmbeddedScript", Name: "EmbeddedScript", InputType: InputType.TextArea, Required: false, StatusType: StatusType.View, Label: "Paste this embedded script to your index.html", MinimumValue: 3, MaximumValue: 1024, Note: "Paste this embedded script to your index.html file on the script of the head section", TabIndex: 1 });
        frm.Body.Panel.Add(txt);

        let script = ken.CreateChatbotWidgetScript(webbaseurl, websocketurl, cdnurl);
        txt.Input.value = script;

        frm.Body.Panel.Load();

        let btnCopy = Inputs.CreateButton({
            Id: "kenvirochatbotwidgetscriptmodal_btnCopy", Name: " Copy", ButtonType: ButtonType.Button, Class: theme, 
            Icon: "fas fa-copy", Label: "Copy",
            OnClick: function (e)
            {
                Utils.CopyStringToClipboard(script);
                MsgBox.Show("Script copied to clipboard");
            }
        });
        frm.Panel.AddButton(btnCopy);

        txt.Input.focus();
    };

    ken.CreateChatbotWidgetScript = function (baseurl, websocketurl, cdnurl)
    {
        if (baseurl == null || websocketurl == null || cdnurl == null)
        {
            return "";
        }

        if (baseurl.endsWith("/"))
        {
            baseurl = baseurl.substr(0, baseurl.length - 1);
        }
        if (cdnurl.endsWith("/"))
        {
            cdnurl = cdnurl.substr(0, cdnurl.length - 1);
        }

        let websocketurlparts = baseurl.split('.');
        if (websocketurlparts != null && websocketurlparts.length > 1)
        {
            websocketurl = "".concat(websocketurlparts[1], '.', websocketurlparts[2]);
        }

        let str =
            '<script type="text/javascript" src="[baseurl]/res/config/PageConfig.js"></script>' + '\n' +
            '<script type="text/javascript" src="[baseurl]/res/config/WebsiteConfig.js"></script>' + '\n' +
            '<script type="text/javascript" src="[baseurl]/res/config/WebsiteSetting.js"></script>' + '\n' +
            '<script type="text/javascript" src="[cdnurl]/res/js/production/ardvro.core.package.js"></script>' + '\n' +
            '<script type="text/javascript" src="[cdnurl]/ardvro/ardvro.js"></script>' + '\n' +
            '<script type="text/javascript">' + '\n' +
            '   const WEBSOCKETURL = "[websocketurl]";' + '\n' +
            '   const WEBBASEURL = "[baseurl]";' + '\n' +
            '   const CDNURL = "[cdnurl]";' + '\n' +
            '	window.onload = function () {' + '\n' +
            '		Chatbot.InitStandaloneChatWidget();' + '\n' +
            '	};' + '\n' +
            '	(function () {' + '\n' +
            '		Loader.InitDependencies(WEBBASEURL, CDNURL, [ArdvroCoreDependencies]);' + '\n' +
            '	})();' + '\n' +
            '</script>' + '\n';
        let result = str.replace(/\[baseurl\]/g, baseurl).replace(/\[cdnurl\]/g, cdnurl).replace(/\[websocketurl\]/g, websocketurl);
        return result;
    };

    ken.ShowEmbeddedWidgetScript = function (webbaseurl, websocketurl, cdnurl, theme)
    {
        frm = new FormModal({ Id: "kenvirowidgetscriptmodal", Label: "Kenviro Embedded Script For Website", Theme: theme });
        let txt = Inputs.CreateFormInput({ Id: "txtEmbeddedScript", Name: "EmbeddedScript", InputType: InputType.TextArea, Required: false, StatusType: StatusType.View, Label: "Paste this embedded script to your index.html", MinimumValue: 3, MaximumValue: 1024, Note: "Paste this embedded script to your index.html file on the script of the head section", TabIndex: 1 });
        frm.Body.Panel.Add(txt);

        let script = ken.CreateEmbeddedWidgetScript(webbaseurl, websocketurl, cdnurl);
        txt.Input.value = script;

        frm.Body.Panel.Load();

        let btnCopy = Inputs.CreateButton({
            Id: "kenvirowidgetscriptmodal_btnCopy", Name: " Copy", ButtonType: ButtonType.Button, Class: theme.ButtonClass,
            Icon: "fas fa-copy", Label: "Copy",
            OnClick: function (e)
            {
                Utils.CopyStringToClipboard(script);
                MsgBox.Show("Script copied to clipboard");
            }
        });
        frm.Panel.AddButton(btnCopy);

        txt.Input.focus();
    };

    ken.CreateEmbeddedWidgetScript = function (baseurl, websocketurl, cdnurl)
    {
        if (baseurl == null || cdnurl == null || websocketurl == null)
        {
            return "";
        }

        if (baseurl.endsWith("/"))
        {
            baseurl = baseurl.substr(0, baseurl.length - 1);
        }
        if (cdnurl.endsWith("/"))
        {
            cdnurl = cdnurl.substr(0, cdnurl.length - 1);
        }

        let websocketurlparts = baseurl.split('.');
        if (websocketurlparts != null && websocketurlparts.length > 1)
        {
            websocketurl = "".concat(websocketurlparts[1], '.', websocketurlparts[2]);
        }

        let str =
            '<script type="text/javascript" src="[baseurl]/res/config/PageConfig.js"></script>' + '\n' +
            '<script type="text/javascript" src="[baseurl]/res/config/WebsiteConfig.js"></script>' + '\n' +
            '<script type="text/javascript" src="[baseurl]/res/config/WebsiteSetting.js"></script>' + '\n' +
            '<script type="text/javascript" src="[cdnurl]/res/js/production/ardvro.core.package.js"></script>' + '\n' +
            '<script type="text/javascript" src="[cdnurl]/ardvro/ardvro.js"></script>' + '\n' +
            '<script type="text/javascript">' + '\n' +
            '   const WEBSOCKETURL = "[websocketurl]";' + '\n' +
            '   const WEBBASEURL = "[baseurl]";' + '\n' +
            '   const CDNURL = "[cdnurl]";' + '\n' +
            '	window.onload = function () {' + '\n' +
            '		Facade.Start(true);' + '\n' +
            '	};' + '\n' +
            '	(function () {' + '\n' +
            '		Loader.InitDependencies(WEBBASEURL, CDNURL, [ArdvroCoreDependencies]);' + '\n' +
            '	})();' + '\n' +
            '//Put the script above in inside the <head> ... </head> tag.' + '\n' +
            '//Then to use it, put this script on your html element on click' + '\n' +
            '//Please write div element with the following html id on your index page for each features you need to use.' + '\n' +
            '// <!-- <div id="dashboardtray"></div> -->' + '\n' +
            '// <!-- <div id="webdesktray"></div> -->' + '\n' +
            '// <!-- <div id="kenvirotray"></div> -->' + '\n' +
            '// <!-- <div id="devtoolstray"></div> -->' + '\n' +
            '// <!-- <div id="kmstray"></div> -->' + '\n' +
            '// <!-- <div id="messengertray"></div> -->' + '\n' +
            '// <!-- <div id="notificationtray"></div> -->' + '\n' +
            '//If you need a login button put the div below in your html.' + '\n' +
            '// <!-- <div id="mainmenu"><div id="accoutmenu"></div></div> -->' + '\n' +
            '//If you want to use the screen put the div below in your html.' + '\n' +
            '// <!-- <div id="tabContainerMain"></div> -->' + '\n' +
            '</script>' + '\n';
        let result = str.replace(/\[baseurl\]/g, baseurl).replace(/\[cdnurl\]/g, cdnurl).replace(/\[websocketurl\]/g, websocketurl);
        return result;
    };

    /*
    ken.CalculateDempsterShafer = function (domainListSrc, currentItem, domainIdField, domainItemListField, itemIdField, itemDomainIdField)
    {
        let domainList = Utils.CloneList(domainListSrc);

        let currentDomain = domainList.find(x => x[domainIdField] == currentItem[itemDomainIdField]);
        if (currentDomain == null)
        {
            return;
        }

        if (currentItem == null)
        {
            return;
        }

        if (currentDomain.ListAnswered == null)
        {
            currentDomain.ListAnswered = [];
        }

        let currentItemIndex = currentDomain.ListAnswered.findIndex(x => x[itemIdField] == currentItem[itemIdField]);
        if (currentItemIndex != -1)
        {
            return;
        }

        if (currentDomain[domainItemListField] == null || currentDomain[domainItemListField].length <= 0)
        {
            return;
        }

        currentDomain.ListAnswered.push(currentItem);

        //let dItem = (1.0 / currentDomain[domainItemListField].length);
        //my enhancement 2021-06-21 , each item(question) would be given a weight, which would be normalise to the probability
        let dItem = (1.0 / currentDomain[domainItemListField].length) * (currentItem.Weight == null ? 1.0 : currentItem.Weight);

        currentDomain.Probability = currentDomain.Probability == null ? dItem : currentDomain.Probability += dItem;
        currentDomain.Evidence = 1.0 - currentDomain.Probability;

        console.log("===1===");
        console.log(currentDomain.Id + " Prob :" + currentDomain.Probability);
        console.log(currentDomain.Id + " Evid :" + currentDomain.Evidence);

        let dTotalEvidence = 0.0;

        console.log("===2===");
        domainList.forEach(
            function (domainBase, index)
            {
                if (domainBase[domainIdField] == currentDomain[domainIdField])
                {
                    return;
                }

                domainBase.Probability = domainBase.Probability == null ? 0 : domainBase.Probability;

                domainBase.Evidence = currentDomain.Probability * domainBase.Probability;
                domainBase.Probability = currentDomain.Evidence * domainBase.Probability;

                console.log(domainBase.Id + " Prob :" + domainBase.Probability);
                console.log(domainBase.Id + " Evid :" + domainBase.Evidence);

                dTotalEvidence += domainBase.Evidence;
            }
        );

        console.log("===3===");

        domainList.forEach(
            function (domainBase, index)
            {
                domainBase.Probability = domainBase.Probability / (1.0 - dTotalEvidence);
                console.log(domainBase.Id + " Prob :" + domainBase.Probability);
            }
        );

        let unansweredList = [];
        currentDomain[domainItemListField].forEach(
            function (item, j)
            {
                let existingIndex = currentDomain.ListAnswered.findIndex(x => x.Id == item.Id);
                if (existingIndex === -1)
                {
                    unansweredList.push(item);
                }
            }
        );

        let item = ken.GetDempsterShaferCriteria(currentDomain[domainItemListField], currentDomain.ListAnswered, currentDomain.ListIncorrect, (currentDomain[domainItemListField].length - unansweredList.length), itemIdField, currentItem);

        return { Matters: domainList, Criteria: item };
    };

    ken.GetDempsterShaferCriteria = function (items, answeredList, incorrectList, maxIndex, itemIdField, currentItem)
    {
        if (items == null || items.length <= 0)
        {
            return;
        }

        let item;
        let minSort = DataType.Int.Max;

        //prioritise items with higher weight, default is 1. in the future, the Weights would be fill automatically.
        let listSorts = items.sort((a, b) => (a.Sort > b.Sort) ? 1 : ((a.Sort < b.Sort) ? -1 : 0)).map(x => (x.Sort)).filter(Utils.DistinctCallback);

        if (answeredList != null && incorrectList != null)
        {
            for (let i = 0; i < listSorts.length; i++)
            {
                //make sure the weights have not been answer with yes or no
                let sortvalue = listSorts[i];

                let tmpWeightFilter = items.filter(x => x.Sort == sortvalue);
                let tmpAnwerFilter = answeredList.filter(x => x.Sort == sortvalue);
                let tmpIncorrectFilter = incorrectList.filter(x => x.Sort == sortvalue);

                let totalAnswered = 0;
                let totalIncorrect = 0;
                for (let j = 0; j < items.length; j++)
                {
                    if (items[j].Sort == sortvalue)
                    {
                        let tmpAnswerIndex = tmpAnwerFilter.findIndex(x => x.Id == items[j].Id);
                        if (tmpAnswerIndex != -1)
                        {
                            totalAnswered++;
                        }

                        let tmpIncorrectIndex = tmpIncorrectFilter.findIndex(x => x.Id == items[j].Id);
                        if (tmpIncorrectIndex != -1)
                        {
                            totalIncorrect++;
                        }
                    }
                }
                if (tmpWeightFilter.length > (totalAnswered + totalIncorrect))
                {
                    if (sortvalue < minSort)
                    {
                        minSort = sortvalue;
                    }
                    break;
                }
            }
        }

        if (listSorts != null && listSorts.length > 0 && (minSort == null || minSort <= 0))
        {
            minSort = listSorts[0];
        }

        if (minSort == null || minSort >= DataType.Int.Max)
        {
            minSort = 1;
        }

        //only randomize index on higher value items which have not been answered yet.
        let listMinSort = items.filter(x => x.Sort == minSort);

        let bTrue = 0;
        while (bTrue < listMinSort.length)
        {
            let randomItemIndex = Utils.RandomInt(0, maxIndex);
            let tmpItem = listMinSort[randomItemIndex];
            if (tmpItem == null)
            {
                break;
            }

            if (answeredList != null && answeredList.length > 0)
            {
                let tmpIndex = answeredList.findIndex(x => x[itemIdField] == tmpItem[itemIdField]);
                if (tmpIndex == -1)
                {
                    if (currentItem != null)
                    {
                        if (currentItem[itemIdField] != tmpItem[itemIdField])
                        {
                            if (incorrectList != null && incorrectList.length > 0)
                            {
                                let tmpFalseIndex = incorrectList.findIndex(x => x[itemIdField] == tmpItem[itemIdField]);
                                if (tmpFalseIndex == -1)
                                {
                                    item = tmpItem;
                                    break;
                                }
                            }
                            else
                            {
                                item = tmpItem;
                                break;
                            }
                        }
                    }
                    else
                    {
                        item = tmpItem;
                        break;
                    }
                }
            }
            else
            {
                item = tmpItem;
                break;
            }

            bTrue++;
        }

        return item;
    };

    ken.BookmarkIncorrect = function (domainListSrc, currentItem, itemIdField, itemDomainIdField)
    {
        let currentDomain = domainListSrc.find(x => x[itemIdField] == currentItem[itemDomainIdField]);
        if (currentDomain == null)
        {
            return;
        }

        if (currentDomain.ListIncorrect == null)
        {
            currentDomain.ListIncorrect = [];
        }

        let existingIndex = currentDomain.ListIncorrect.findIndex(x => x[itemIdField] == currentItem[itemDomainIdField]);
        if (existingIndex == -1)
        {
            currentDomain.ListIncorrect.push(currentItem);
        }
    };

    ken.GetDominated = function (listMatters)
    {
        let list = listMatters.sort((a, b) => (a.Probability < b.Probability) ? 1 : ((a.Probability > b.Probability) ? -1 : 0));

        let highgerMatters = list.filter(x => x.Probability > 0.65);
        let listNotZero = list.filter(x => x.Probability > 0.05);

        let winnerDomain = list != null && list.length > 0 ? list[0] : null;

        return {
            PotentialMatters: highgerMatters == null ? [] : highgerMatters,
            UncertaintyMatters: listNotZero == null ? [] : listNotZero,
            WinnerMatter: winnerDomain
        };
    };
    */

	return ken;
}());
