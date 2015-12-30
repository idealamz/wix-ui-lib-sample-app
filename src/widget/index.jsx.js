define(['react', 'lodash', 'Wix'], function (React, _, Wix) {
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
            Wix.addEventListener(Wix.Events.THEME_CHANGE, function (styleObj) {
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
        render: function () {
            var _this = this;
            var wixParamRow = function (value, key) {
                return (
                    React.createElement("tr", null, 
                        React.createElement("td", null, key), 
                        React.createElement("td", null, 
                            React.createElement("pre", null, 
                                React.createElement("code", {dangerouslySetInnerHTML: {__html: _this.stringify(value)}})
                            )
                        )
                    )
                );
            };

            return (
                React.createElement("div", null, 
                    React.createElement("section", {id: "wix-data-public"}, 
                        React.createElement("h3", null, "Wix.Data.Public"), 
                        React.createElement("pre", null, 
                            React.createElement("code", {dangerouslySetInnerHTML: {__html: this.stringify(this.state.appWixData)}})
                        )
                    ), 

                    React.createElement("section", {id: "wix-style"}, 
                        React.createElement("style", {"wix-style": "abc"}, 
                            '#wix-style {' +
                                'div {' +
                                    'background-color: {{style.myBgColor white}}' +
                                '}' +
                            '}'
                        ), 
                        React.createElement("div", null, 
                            "hello there!"
                        )
                    ), 

                    React.createElement("section", {id: "wix-param"}, 
                        React.createElement("h3", null, "wix-param values"), 
                        React.createElement("table", null, 
                            React.createElement("thead", null, 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "param name"), 
                                React.createElement("th", null, "value")
                            )
                            ), 
                            React.createElement("tbody", null, 
                                _.map(this.state.wixParams, wixParamRow)
                            )
                        )
                    )
                )
            );
        }
    });
});