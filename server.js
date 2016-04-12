'use strict';

var express = require('express');
var app = express();
app.use(function(req, res) {
	var info = {
		"ipaddress": req.headers['x-forwarded-for'],
		"language": req.headers['accept-language'].split(',')[0],
		"software": (/\(([^)]+)\)/).exec(req.headers['user-agent'])[1]
	}
    res.end(JSON.stringify(info));
});
var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});