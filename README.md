# eslint-config-connections

[![Build Status](https://travis-ci.org/NCR-CoDE/eslint-config-connections.svg?branch=master)](https://travis-ci.org/NCR-CoDE/eslint-config-connections)

Shared configurations for linting with [ESLint](http://eslint.org/) used by NCR's [Connections](http://ncredinburgh.com/projects/connections/) team.
The current (3.x) release supports ESLint 1.x.

Whilst these rules mandate 2-space indentation, mandatory semi-colons and single quote strings they do not enforce any style beyond that, concentrating instead on rules that catch errors.

## Install

```
$ npm install --save-dev eslint eslint
```

To use the AngularJS specific rules:

```
$ npm install --save-dev eslint-plugin-angular
```

## Usage

To enable the default rules, simply extend them in your eslint rc, for example with YAML:

```yaml
extends: connections
```

To use the angular-specific rules  extend the angular rules within your eslintrc file:

```yaml
extends: connections/angular
```
