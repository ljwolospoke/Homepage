var express = require('express');

var app = express();

// set up handlebars
var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.render('home');
});

app.get('/game', function(req, res){
	res.render('game');
});

app.get('/about', function(req, res){
	res.render('about');
});

// 404 page
app.use(function(req, res, next){
	res.status(404)
	res.render('404')
});

// 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
 console.log( 'Express started on host:' + app.get('port') + '; press ctrl-c to terminate.');
});
	
