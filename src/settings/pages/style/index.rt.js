define([
    'react/addons',
    'lodash',
    'UI'
], function (React, _, UI) {
    'use strict';
    function onChange1(newVal) {
        this.settingsUpdate({ 'color_picker': newVal });
    }
    function onChange2(newVal) {
        this.settingsUpdate({ 'font_picker': newVal });
    }
    return function () {
        return React.createElement('div', {}, React.createElement(UI.colorPickerSlider, {
            'label': 'Color Picker Slider',
            'wix-param': 'color_picker',
            'startWithOpacity': 0.5,
            'onChange': onChange1.bind(this)
        }), React.createElement(UI.fontPicker, {
            'label': 'Font Picker',
            'wix-param': 'font_picker',
            'startWithFont': 'Site Title',
            'infoTitle': 'font picker',
            'infoText': 'font picker',
            'onChange': onChange2.bind(this)
        }));
    };
});