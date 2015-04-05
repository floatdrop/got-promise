/* global it */

'use strict';

var assert = require('assert');
var got = require('./');

it('should have promisified methods', function () {
	assert.ok(typeof got.promise === 'function');
	assert.ok(typeof got.promise.get === 'function');
	assert.ok(typeof got.promise.post === 'function');
	assert.ok(typeof got.promise.put === 'function');
	assert.ok(typeof got.promise.patch === 'function');
	assert.ok(typeof got.promise.head === 'function');
	assert.ok(typeof got.promise.delete === 'function');
});

it('promisified methods should work', function (done) {
	got.promise('google.com').then(function (res) {
		assert.ok(res.body);
		done();
	}, done);
});
