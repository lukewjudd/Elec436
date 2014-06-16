/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  user = require('./routes/user'),
  http = require('http'),
  path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res) {
  res.render('index', {
    scripts: ['./Event.js','./EventDispatcher.js','./Tween.js', './Ease.js', './easeljs-NEXT.min.js','./CSSPlugin.js','./animation.js']
  });
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

app.get('/introduction', function(req, res){
  res.render('introduction', {
    title: 'Introduction'
  });
});

app.get('/disaster', function(req, res){
  res.render('disaster', {
    title: 'Software Disaster'
  });
});

app.get('/webapp', function(req, res){
  res.render('webapp', {
    title: 'Web App'
  });
});
app.get('/databases', function(req, res){
  res.render('databases', {
    title: 'Databases'
  });
});

app.get('/os', function(req, res){
  res.render('os', {
    title: 'Operating Systems'
  });
});

app.get('/news', function(req, res){
  res.render('news', {
    title: 'News'
  });
});
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

