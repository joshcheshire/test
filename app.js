// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/heroes-of-ajax')

// Create Express App Object \\
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
// var heroCtrl = require('./controllers/heroCtrl')

app.get('/', function(req, res){
  res.sendFile('/public/index.html', {root : './public'})
});

app.get('/', function(req,res){
	res.sendfile('./public/splash.html', {root : './public'})
});

// app.get('/profile/:heroName', function(req, res){
//   res.sendFile('/html/hero.html', {root : './public'})
// });


// Hero Routes
// app.post('/api/heroes', heroCtrl.createHero)
// app.get('/api/heroes', heroCtrl.findHeroes)
// app.get('/api/heroes/:heroName', heroCtrl.findHeroes)
// req.params -> {heroName : 'gorilla'}

// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

});