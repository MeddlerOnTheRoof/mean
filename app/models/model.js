// will change this to reflect our true data model later

    // load mongoose since we need it to define a model
    var mongoose = require('mongoose');

    module.exports = mongoose.model('Todo', {
        text : String,
        done : Boolean
    });