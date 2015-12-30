define([
        'react',
        'lodash',
        'UI',
        'settings/pages/general/index.jsx',
        'settings/pages/style/index.jsx',
        'settings/pages/sync/index.jsx',
        'settings/pages/wix-style-sample/index.jsx'
    ],
    function (React,
              _,
              UI,
              generalTab,
              styleTab,
              syncTab,
              wixStyleSample) {

        var pages = {
            'General Settings': generalTab,
            'Style Settings': styleTab,
            'Sync Options': syncTab,
            'Wix-Style Sample': wixStyleSample
        };

        return React.createClass({
            updateAppData: function (data, callback) {
                Wix.Data.Public.get('appData', function (currentData) {
                    Wix.Data.Public.set('appData', _.assign(currentData.appData, data), callback);
                }, function () {
                    Wix.Data.Public.set('appData', data, callback);
                });
            },
            settingsUpdate: function (data) {
                this.updateAppData(data, Wix.Settings.triggerSettingsUpdatedEvent);
            },
            render: function () {
                var label = function (tab, label) {
                    return (
                        <UI.tabs.label for={label} class={label}>
                            {label}
                        </UI.tabs.label>
                    )
                };

                var tab = function (tab, label) {
                    var _this = this;
                    var tabs = {
                        current: tab
                    };
                    return (
                        <UI.tabs.tab name={label} className="settings-tab">
                            <tabs.current settingsUpdate={_this.settingsUpdate}/>
                        </UI.tabs.tab>
                    )
                };

                return (
                    <UI.tabs.holder defaultTab={Object.keys(pages)[0]}
                                    className="top"
                                    onChange={(newVal)=>console.log(newVal + ' selected')}>
                        <UI.tabs.header>
                            {_.map(pages, label)}
                        </UI.tabs.header>
                        <UI.tabs.content>
                            {_.map(pages, tab)}
                        </UI.tabs.content>
                    </UI.tabs.holder>
                )
            }
        });
    }
);