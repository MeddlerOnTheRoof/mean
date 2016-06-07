// load the todo model
var Model = require('./models/model');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all records
    app.get('/api/model', function(req, res) {

    });

    // create data record and send back all records after creation
    app.post('/api/model', function(req, res) {

    });

    // delete a data record
    app.delete('/api/model/:model_id', function(req, res) {

    });

    // application ------------------------------------------------------------- 
    app.get('*', function(req, res) {
        res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};