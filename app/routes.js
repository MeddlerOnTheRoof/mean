// load the todo model
var City = require('./models/city');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all cities
    app.get('/api/city', function(req, res) {
        City.find(function(err, cities){
            if(err){
                res.send(err);
            }
            
            res.json(cities);
        });
    });

    // create city record and send back all records after creation
    app.post('/api/city', function(req, res) {
        City.create({
            city    :   req.body.city,
            loc     :   req.body.loc,
            pop     :   req.body.pop,
            state   :   req.body.state
        }, function(err, city){
            if(err){
                res.send(err);
            }

            // get and return all the cities after you create another
            City.find(function(err, cities){
                if (err){
                    res.send(err);
                }

                res.json(cities);
            })
        })
    });

    // delete a city record
    app.delete('/api/city/:city_id', function(req, res) {
        City.remove({
            _id     :   res.params.city_id
        }, function(err, city){
            if (err){
                res.send(err);
            }

            // get and return all cities after you create another
            City.find(function(err, cities){
                City.find(function(err, city){
                    if(err){
                        res.send(err);
                    }

                    res.json(cities);
                })
            })
        })
    });

    // application ------------------------------------------------------------- 
    app.get('*', function(req, res) {
        res.sendFile(__dirname + '/./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};