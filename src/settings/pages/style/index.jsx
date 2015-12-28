define(['react', 'lodash', './index.rt'], function (React, _, template) {
    return React.createClass({
        displayName: 'template',
        updateAppData: function (data, callback) {
            Wix.Data.Public.get('appData', function(currentData) {
                Wix.Data.Public.set('appData', _.assign(currentData.appData, data), callback);
            }, function () {
                Wix.Data.Public.set('appData', data, callback);
            });
        },
        settingsUpdate: function (data) {
            this.updateAppData(data, Wix.Settings.triggerSettingsUpdatedEvent);
        },
        render: template
    });
});