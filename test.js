/* global it */

'use strict';

var assert = require('assert');
var got = require('./');

it('should have promisified methods', function () {
	assert.ok(typeof got.promise === 'function');
	assert.ok(typeof got.get.promise === 'function');
	assert.ok(typeof got.post.promise === 'function');
	assert.ok(typeof got.put.promise === 'function');
	assert.ok(typeof got.patch.promise === 'function');
	assert.ok(typeof got.head.promise === 'function');
	assert.ok(typeof got.delete.promise === 'function');
});

it('promisified methods should work', function (done) {
	got.promise('google.com').then(function (res) {
		assert.ok(res.body);
		done();
	}, done);
});
