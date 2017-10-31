'use strict'

const express = require('express');
const app = express();
const body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended: false}));
const route = require('./routes/routes');
const port_number = 3000;

route(app);

app.listen(port_number, function() {
	console.log("Server started on port " + port_number);
});

