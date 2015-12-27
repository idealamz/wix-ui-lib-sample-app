define([
    'react/addons',
    'lodash',
    'UI',
    'settings/pages/general/index',
    'settings/pages/style/index',
    'settings/pages/sync/index'
], function (React, _, UI, generalPage, stylePage, syncPage) {
    'use strict';
    function onChange1(newVal) {
        console.log(newVal + ' selected');
    }
    return function () {
        return React.createElement('div', { 'id': 'settings' }, React.createElement(UI.tabs.holder, {
            'defaultTab': 'first',
            'className': 'top',
            'onChange': onChange1.bind(this)
        }, React.createElement(UI.tabs.header, {}, React.createElement(UI.tabs.label, {
            'htmlFor': 'first',
            'className': 'first'
        }, 'General Settings'), React.createElement(UI.tabs.label, {
            'htmlFor': 'second',
            'className': 'second'
        }, 'Style Settings'), React.createElement(UI.tabs.label, {
            'htmlFor': 'third',
            'className': 'third'
        }, 'Sync Options')), React.createElement(UI.tabs.content, {}, React.createElement(UI.tabs.tab, {
            'name': 'first',
            'className': 'settings-tab'
        }, React.createElement(generalPage, {})), React.createElement(UI.tabs.tab, {
            'name': 'second',
            'className': 'settings-tab'
        }, React.createElement(stylePage, {})), React.createElement(UI.tabs.tab, {
            'name': 'third',
            'className': 'settings-tab'
        }, React.createElement(syncPage, {})))));
    };
});