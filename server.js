var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
console.log('route '+ __dirname + "/dist");
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);