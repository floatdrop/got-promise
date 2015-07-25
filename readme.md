# got-promise [![Build Status](https://travis-ci.org/floatdrop/got-promise.svg?branch=master)](https://travis-ci.org/floatdrop/got-promise)

__Deprecated__: Use `got` directly, since it now have Promise API :tada:.

## Install

```
$ npm install --save got-promise
```

## Usage

```js
var got = require('got-promise');

got('google.com')
	.then(function (res) {
		console.log(res.body);
	})
	.catch(function (err) {
		console.error(err);
		console.log(err.response.body);
	});

got.post('google.com'); // => Promise
```


## API

Look at [sindresorhus/got](https://github.com/sindresorhus/got).

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
