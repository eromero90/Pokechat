var express = require('express');
var app = express();
var path = require('path');

//Importamos los routers
//var home = require(path.join(__dirname,'/routers/main.js'));
//var blog = require(path.join(__dirname,'/routers/blog.js'));

// Templates
//app.set('view engine','jade');
//app.set('views',path.join(__dirname,'/views'));

//Funciones antes
/*app.use(function(req,res,next){
	console.log('Proceso inicial');
	next();
});*/

//Static folder
app.use(express.static('public'));

//Routers
//app.use('/',home.router);
//app.use('/blog',blog.router);

exports.server = app;