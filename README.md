# crockpot [![Build Status](https://travis-ci.org/eternal44/crockpot.svg?branch=master)](https://travis-ci.org/eternal44/crockpot)

> Converts multiple number formats using decimal numbers as a proxy.

## Install

```
$ npm install --save crockpot
```

## Usage
The following types of numbers can be translated to one of the types below to any other:
- decimal
- roman numeral
- english

TODO:
- binary

```js
var convert = require('crockpot')

crockpot.roman.toEnglish('IV')
// 'four'

crockpot.decimal.toEnglish(1066)
// 'one thousand sixty-six'
```

## Development
To run tests follow the following instructions:

```
$ npm install -g gulp
$ npm install -g mocha
```

To run tests on file changes:
```
$ gulp test
```

Alternatively you can run individual tests:
```
$ mocha specs/**
```

## License
MIT
