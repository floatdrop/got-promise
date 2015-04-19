'use strict';

var Promise = require('native-or-bluebird');
var got = require('got');

var promise = function (url, opts, cb) {
	return new Promise(function (resolve, reject) {
		got(url, opts, function (err, body, res) {
			if (err) {
				err.response = res;
				return reject(err);
			}

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
	got[el].promise = function (url, opts, cb) {
		return promise(url, objectAssign({}, opts, {method: el.toUpperCase()}), cb);
	};
});

got.promise = promise;

module.exports = got;
