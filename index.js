'use strict';

var Promise = require('native-or-bluebird');
var got = require('got');

var promise = function (url, opts, cb) {
	return new Promise(function (resolve, reject) {
		got(url, opts, function (err, body, res) {
			if (err) { return reject(err); }

			res.body = body;
			resolve(res);
		});
	});
};

[
	'get',
	'post',
	'put',
	'patch',
	'head',
	'delete'
].forEach(function (el) {
	promise[el] = function (url, opts, cb) {
		opts = opts || {};
		opts.method = el.toUpperCase();
		return promise(url, opts, cb);
	};
});

got.promise = promise;

module.exports = got;
