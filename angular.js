'use strict';

module.exports = {
  extends: './index.js',
  env: {
    browser: true
  },
  globals: {
    angular: false,
    $: false
  },
  plugins: [
    'angular'
  ],
  rules: {
    'angular/angularelement': 1,
    'angular/controller-as': 2,
    'angular/controller-as-route': 2,
    'angular/controller-as-vm': [2, 'vm'],
    'angular/controller-name': [2, '/[A-Z].*Controller$/'],
    'angular/deferred': 0,
    'angular/definedundefined': 0,
    'angular/di': [2, 'function'],
    'angular/directive-name': 0,
    'angular/document-service': 2,
    'angular/empty-controller': 0,
    'angular/foreach': 0,
    'angular/filter-name': 0,
    'angular/function-type': 0,
    'angular/interval-service': 2,
    'angular/json-functions': 0,
    'angular/module-getter': 2,
    'angular/module-name': 0,
    'angular/module-setter': 2,
    'angular/no-angular-mock': 2,
    'angular/no-digest': 2,
    'angular/no-jquery-angularelement': 2,
    'angular/no-private-call': 2,
    'angular/no-services': [2, ['$http', '$resource', 'Restangular']],
    'angular/no-service-method': 0,
    'angular/on-watch': 2,
    'angular/service-name': 0,
    'angular/timeout-service': 2,
    'angular/typecheck-array': 0,
    'angular/typecheck-date': 0,
    'angular/typecheck-function': 0,
    'angular/typecheck-number': 0,
    'angular/typecheck-object': 0,
    'angular/typecheck-regexp': 0,
    'angular/typecheck-string': 0,
    'angular/window-service': 2,
    'no-use-before-define': 0,
    'strict': [2, 'function']
  }
};
