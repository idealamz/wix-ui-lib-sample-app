/*eslint-disable */
requirejs.config({
    baseUrl: '/src',
    paths: {
        lodash: '/node_modules/lodash/index',
        jquery: '/node_modules/jquery/dist/jquery',
        react: '/node_modules/react/dist/react-with-addons',
        'Wix': '/lib/Wix-sdk/Wix',
        'UI': '/lib/editor-ui-lib/editor-ui-lib'
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    },
    shim: {
        Wix: {exports: 'Wix'}
    }
});
