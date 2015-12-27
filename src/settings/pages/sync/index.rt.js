define([
    'react/addons',
    'lodash',
    'UI'
], function (React, _, UI) {
    'use strict';
    function onChange1(newVal) {
        this.settingsUpdate({ 'toggle_button_group': newVal });
    }
    function onChange2(newVal) {
        this.settingsUpdate({ 'checkbox_1': newVal });
    }
    function onChange3(newVal) {
        this.settingsUpdate({ 'checkbox_2': newVal });
    }
    function onChange4(newVal) {
        this.settingsUpdate({ 'button_group': newVal });
    }
    function onChange5(newVal) {
        this.settingsUpdate({ 'radio_button_group': newVal });
    }
    function onChange6(newVal) {
        this.settingsUpdate({ 'stepper': newVal });
    }
    function onChange7(newVal) {
        this.settingsUpdate({ 'slider': newVal });
    }
    return function () {
        return React.createElement('div', {}, React.createElement(UI.toggleButtonsGroup, {
            'defaultValue': [
                1,
                3
            ],
            'onChange': onChange1.bind(this),
            'options': [
                {
                    value: 1,
                    label: 'One'
                },
                {
                    value: 2,
                    label: 'Two'
                },
                {
                    value: 3,
                    label: 'Three'
                }
            ]
        }), React.createElement('div', {}, React.createElement(UI.checkbox, {
            'wix-param': 'checkbox_1',
            'onChange': onChange2.bind(this),
            'label': 'Checkbox 1',
            'defaultValue': 'true'
        }), React.createElement(UI.checkbox, {
            'wix-param': 'checkbox_2',
            'onChange': onChange3.bind(this),
            'label': 'Checkbox 2'
        }), React.createElement(UI.checkbox, {
            'label': 'Disabled',
            'disabled': 'true'
        })), React.createElement(UI.buttonsGroup, {
            'wix-param': 'button_group',
            'defaultValue': '2',
            'onChange': onChange4.bind(this),
            'options': [
                {
                    value: '1',
                    label: 'first'
                },
                {
                    value: '2',
                    label: 'second'
                },
                {
                    value: '3',
                    label: 'last'
                }
            ]
        }), React.createElement(UI.radioButtons, {
            'label': 'Radio Buttons',
            'wix-param': 'radio_button_group',
            'defaultValue': '2',
            'onChange': onChange5.bind(this),
            'options': [
                {
                    value: '1',
                    label: 'first'
                },
                {
                    value: '2',
                    label: 'second'
                },
                {
                    value: '3',
                    label: 'last'
                }
            ]
        }), React.createElement(UI.stepper, {
            'label': 'Stepper',
            'defaultValue': '20',
            'units': 'km',
            'min': '0',
            'max': '100',
            'onChange': onChange6.bind(this)
        }), React.createElement(UI.slider, {
            'label': 'Sample slider',
            'wix-param': 'slider',
            'onChange': onChange7.bind(this)
        }));
    };
});