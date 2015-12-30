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
                    <tr>
                        <td>{key}</td>
                        <td>
                            <pre>
                                <code dangerouslySetInnerHTML={{__html: _this.stringify(value)}}/>
                            </pre>
                        </td>
                    </tr>
                );
            };

            return (
                <div>
                    <section id="wix-data-public">
                        <h3>Wix.Data.Public</h3>
                        <pre>
                            <code dangerouslySetInnerHTML={{__html: this.stringify(this.state.appWixData)}}/>
                        </pre>
                    </section>

                    <section id="wix-style-sample">
                        <div>
                            Hello Wix-Style!
                        </div>
                    </section>

                    <section id="wix-param">
                        <h3>wix-param values</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>param name</th>
                                <th>value</th>
                            </tr>
                            </thead>
                            <tbody>
                                {_.map(this.state.wixParams, wixParamRow)}
                            </tbody>
                        </table>
                    </section>
                </div>
            );
        }
    });
});