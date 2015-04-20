/* global it */

'use strict';

var assert = require('assert');
var got = require('./');

it('got should work', function (done) {
	got('google.com').then(function (res) {
		assert.ok(res.body);
		done();
	}, done);
});

it('got.get should work', function (done) {
	got.get('google.com').then(function (res) {
		assert.ok(res.body);
		done();
	}, done);
});
