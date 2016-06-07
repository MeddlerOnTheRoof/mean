// set up ======================================================================================
var expresss    = require('express');
var app         = express();
var mongoose    = require('mongoose');
var port        = process.env.PORT || 8080;
var database    = require('./config/database');

// configuration ======================================================================================
mongoose.connect(database.url);                             // connect to the mongoDB database

app.use(express.static(__dirname + '/public')); 

// routes ======================================================================================
require('./app/routes')(app);

// listen ======================================================================================
app.listen(port);
console.log("Aoo listening on port " + port);