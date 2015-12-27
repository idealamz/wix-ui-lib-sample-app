define(['react', 'Wix', './index.rt'], function (React, Wix, template) {
    return React.createClass({
        displayName: 'template',
        getInitialState: function () {
            return {
                wixParams: {},
                appWixData: {}
            }
        },
        componentDidMount: function () {
            var _this = this;
            Wix.setHeight(1200);
            Wix.Styles.getStyleParams(this.updateWixParams);
            Wix.addEventListener(Wix.Events.THEME_CHANGE, function(styleObj){
                _this.updateWixParams(styleObj.style);
            });
            Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, this.getWixData);
            this.getWixData();
        },
        updateWixParams: function (style) {
            var wixParams = _.assign(
                style.numbers,
                style.fonts,
                style.booleans,
                style.colors
            );

            this.setState({
                wixParams: wixParams
            }, this.updateCompHeight);
        },
        getWixData: function () {
            var _this = this;
            Wix.Data.Public.get('appData', function (data) {
                _this.setState({
                    appWixData: data.appData
                }, _this.updateCompHeight);
            });
        },
        updateCompHeight: function () {
            Wix.setHeight(document.documentElement.scrollHeight);
        },
        stringify: function (input) {
            try {
                return JSON.stringify(input, null, 4);
            } catch (err) {
                return input;
            }
        },
        render: template
    });
});