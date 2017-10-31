'use strict'

module.exports = function(app) {
	let basic_controller = require('../controllers/basic_controller.js');

	app.route("/item/:key")
		.get(basic_controller.read);

	app.route("/item/:key")
		.post(basic_controller.write);
}