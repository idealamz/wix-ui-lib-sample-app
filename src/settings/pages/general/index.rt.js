define([
    'react/addons',
    'lodash',
    'UI'
], function (React, _, UI) {
    'use strict';
    function onClick1() {
        alert('Hello');
    }
    function onChange2(newVal) {
        this.settingsUpdate({ 'drop_down_select': newVal });
    }
    function onChange3(newVal) {
        this.settingsUpdate({ 'dock': newVal });
    }
    function onChange4(newVal) {
        this.settingsUpdate({ 'textInput': newVal });
    }
    function onChange5(newVal) {
        this.settingsUpdate({ 'language_picker': newVal });
    }
    return function () {
        return React.createElement('div', {}, React.createElement(UI.button, {
            'label': 'button',
            'onClick': onClick1.bind(this),
            'className': 'btn-primary'
        }), React.createElement(UI.dropDownSelect, {
            'label': 'Drop Down Select',
            'defaultValue': '1',
            'wix-param': 'drop_down_select',
            'onChange': onChange2.bind(this),
            'options': [
                {
                    value: '1',
                    label: 'One'
                },
                {
                    value: '2',
                    label: 'Two'
                },
                {
                    value: '3',
                    label: 'Three'
                }
            ],
            'infoTitle': 'Info Title',
            'infoText': 'Info Text'
        }), React.createElement(UI.dock, {
            'label': 'Dock',
            'defaultValue': 'TOP_RIGHT',
            'onChange': onChange3.bind(this)
        }), React.createElement(UI.textInput, {
            'label': 'Text Input',
            'wix-param': 'text_input',
            'validator': function (val) {
                return val.length < 15;
            },
            'placeholder': 'placeholder text',
            'infoText': 'Knowledge is power, this is just a text info',
            'invalidMessage': 'Invalid Input.',
            'focus': false,
            'onChange': onChange4.bind(this)
        }), React.createElement(UI.languagePicker, {
            'label': 'Language Picker',
            'onChange': onChange5.bind(this),
            'infoTitle': 'info title',
            'infoText': 'info text'
        }));
    };
});