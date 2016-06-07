console.log("Starting node..")

// set up ======================================================================================
var expresss    = require('express');
var app         = express();
var mongoose    = require('mongoose');
var port        = process.env.PORT || 8642;
var database    = require('./config/database');

// configuration ===============================================================================
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public')); 

// routes ======================================================================================
require('./app/routes')(app);

// listen ======================================================================================
app.listen(port);
console.log("App listening on port " + port);