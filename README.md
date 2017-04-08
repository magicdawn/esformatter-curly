# esformatter-curly

[![Greenkeeper badge](https://badges.greenkeeper.io/magicdawn/esformatter-curly.svg)](https://greenkeeper.io/)
> keep original curly fot import & one line object literal

[![Build Status](https://img.shields.io/travis/magicdawn/esformatter-curly.svg?style=flat-square)](https://travis-ci.org/magicdawn/esformatter-curly)
[![Coverage Status](https://img.shields.io/coveralls/magicdawn/esformatter-curly.svg?style=flat-square)](https://coveralls.io/github/magicdawn/esformatter-curly?branch=master)
[![npm version](https://img.shields.io/npm/v/esformatter-curly.svg?style=flat-square)](https://www.npmjs.com/package/esformatter-curly)
[![npm downloads](https://img.shields.io/npm/dm/esformatter-curly.svg?style=flat-square)](https://www.npmjs.com/package/esformatter-curly)
[![npm license](https://img.shields.io/npm/l/esformatter-curly.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```
npm i esformatter --save-dev
npm i esformatter-curly --save-dev
```

## Usage
for detail see [notes](notes/)

1. keep multiline import
```js
import {
  x,
  y
} from 'utils';
```

2. keep short object literal inline
```js
var o1 = { x: 1, y: 2 };
var o2 = {
  x: 2,
  y: 3
};
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org