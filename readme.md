# got-promise [![Build Status](https://travis-ci.org/floatdrop/got-promise.svg?branch=master)](https://travis-ci.org/floatdrop/got-promise)

Promise wrapper around [sindresorhus/got](https://github.com/sindresorhus/got). Uses native `Promise` or [petkaantonov/bluebird](https://github.com/petkaantonov/bluebird) (if available).

## Install

On NodeJS 0.10.x:

```
$ npm install --save got-promise bluebird
```

On NodeJS 0.12.x and later:

```
$ npm install --save got-promise
```

## Usage

```js
var got = require('got-promise');

// Promises

got.promise('google.com')
	.then(function (res) {
		console.log(res.body);
	})
	.catch(function (err) {
		console.error(err);
	});

// Callback

got('google.com', function (err, data) {
	console.log(data);
});

// Streams

got('google.com').pipe(process.stdout);
```


## API

Same as in [sindresorhus/got](https://github.com/sindresorhus/got), but with `promise` property,
that contains same methods, as `got`, but promisified.

Promisified methods provide [http.incomingMessage](https://nodejs.org/api/http.html#http_http_incomingmessage) object on fulfill with `body` property with content.

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
