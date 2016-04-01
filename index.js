var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.set('port', (process.env.PORT || 5000));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://oliv3178:ksc82xjz@ds011820.mlab.com:11820/feedyourrelations');
mongoose.connection.once('open', function() {

    app.models = require('./models/index');

    // Load the models.
    var routes = require('./routes');
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });

    app.listen(app.get('port'),function(){
      console.log('listening on port *:' + app.get('port'));
    });
 });
