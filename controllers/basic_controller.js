'use strict'

const path = require('path');
const fs = require('fs');
const util = require('util');
const formidable = require('formidable');

exports.read = function(req, res) {
	let key = req.params.key;

	let filepath = path.join(__dirname, "../static", req.params.key);
	fs.stat(filepath, function(err, fileInfo) {
		if (err) {
			console.log(filepath + " does not exist")
			return res.send(filepath);
		}

		if (fileInfo.isFile()) {
			return res.sendFile(filepath);
		} else {
			return res.send(key);
		}
	});
};

exports.write = function(req, res) {
	let key = req.params.key;

	let form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
	    console.log(fields.say);
    	console.log(fields.to);
    	console.log(files.attach.name);
    	fs.readFile(files.attach.path, 'utf-8', function(err, data) {
    		console.log(data);
    	});
     	res.writeHead(200, {'content-type': 'text/plain'});
     	res.write('received upload:\n\n');
     	res.end(util.inspect({fields: fields, files: files}));
    });
	// form.uploadDir = path.join(__dirname, "../static");

	// form.on('file', function(name, file) {
	// 	fs.rename(file.path, path.join(form.uploadDir, file.name));
	// });

	// form.on('end', function() {
	// 	res.end('Received');
	// });

	// let say = req.body.say;
	// let to = req.body.to;
	// let attach = req.body.;

	// console.log("recv: " + key + " " + say + " " + to);
	// console.log("data: " + attach);

	// form.parse(req);
};
