# chai-kahlan

[![Build Status](https://travis-ci.org/crysalead-js/chai-kahlan.png?branch=master)](https://travis-ci.org/crysalead-js/chai-kahlan)

chai-kahlan is an extension which provides [kahlan's](https://github.com/crysalead/kahlan) matchers for [chai](http://chaijs.com/) assertion library.

Note: `toReceive()` && `toReceiveNext()` are not supported. However jasmine's native `spyOn()`/`toHaveBeenCalled()` combo is supported instead.

## Installation

```bash
npm install chai-kahlan --save-dev;
```

## Usage

node:
```js
require('chai-kahlan');
```

browser:
```js
<script src="vendor/mocha/mocha.js" type="text/javascript"></script>
<script src="vendor/chai/chai.js" type="text/javascript"></script>
<script src="vendor/chai-kahlan/chai-kahlan.js" type="text/javascript"></script>
```
