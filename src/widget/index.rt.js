define([
    'react/addons',
    'lodash'
], function (React, _) {
    'use strict';
    function repeatParamKey1(paramKey, paramKeyIndex) {
        return React.createElement('tr', {}, React.createElement('td', {}, paramKey), React.createElement('td', {}, React.createElement('pre', {}, React.createElement('code', { 'dangerouslySetInnerHTML': { __html: this.stringify(this.state.wixParams[paramKey]) } }))));
    }
    return function () {
        return React.createElement('div', {}, React.createElement('section', { 'id': 'wix-data-public' }, React.createElement('h3', {}, 'Wix.Data.Public'), React.createElement('pre', {}, React.createElement('code', {
            'className': 'json',
            'dangerouslySetInnerHTML': { __html: this.stringify(this.state.appWixData) }
        }))), React.createElement('section', { 'id': 'wix-style-sample' }, React.createElement('div', {}, '\n            Hello Wix-Style!\n        ')), React.createElement('section', { 'id': 'wix-param' }, React.createElement('h3', {}, 'wix-param values'), React.createElement('table', {}, React.createElement('thead', {}, React.createElement('tr', {}, React.createElement('th', {}, 'param name'), React.createElement('th', {}, 'value'))), React.createElement.apply(this, [
            'tbody',
            {},
            _.map(Object.keys(this.state.wixParams), repeatParamKey1.bind(this))
        ]))));
    };
});