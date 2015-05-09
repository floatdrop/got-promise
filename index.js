'use strict';

var Promise = require('native-or-bluebird');
var objectAssign = require('object-assign');
var got = require('got');

function gotPromise(url, opts) {
	return new Promise(function (resolve, reject) {
		got(url, opts, function (err, body, res) {
			if (err) {
				err.body = body;
				err.response = res;
				return reject(err);
			}

			res.body = body;
			resolve(res);
		});
	});
}

module.exports = gotPromise;

[
	'get',
	'post',
	'put',
	'patch',
	'head',
	'delete'
].forEach(function (el) {
	module.exports[el] = function (url, opts) {
		return gotPromise(url, objectAssign({}, opts, {method: el.toUpperCase()}));
	};
});
