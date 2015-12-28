define([
        'react',
        'lodash',
        'UI',
        'settings/pages/general/index.jsx',
        'settings/pages/style/index.jsx',
        'settings/pages/sync/index.jsx'
    ],
    function (
        React,
        _,
        UI,
        generalTab,
        styleTab,
        syncTab
    ) {
        var pages = {
            general: generalTab,
            style: styleTab,
            sync: syncTab
        };

        return React.createClass({
            displayName: 'template',
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
                return (
                    <UI.tabs.holder defaultTab="first"
                                    className="top"
                                    onChange={(newVal)=>console.log(newVal + ' selected')}>
                        <UI.tabs.header>
                            <UI.tabs.label for="first" class="first">General Settings</UI.tabs.label>
                            <UI.tabs.label for="second" class="second">Style Settings</UI.tabs.label>
                            <UI.tabs.label for="third" class="third">Sync Options</UI.tabs.label>                        </UI.tabs.header>
                        <UI.tabs.content>
                            <UI.tabs.tab name="first" className="settings-tab">
                                <pages.general settingsUpdate={this.settingsUpdate.bind(this)}/>
                            </UI.tabs.tab>
                            <UI.tabs.tab name="second" className="settings-tab">
                                <pages.style/>
                            </UI.tabs.tab>
                            <UI.tabs.tab name="third" className="settings-tab">
                                <pages.sync/>
                            </UI.tabs.tab>
                        </UI.tabs.content>
                    </UI.tabs.holder>
                )
            }
        });
    }
);