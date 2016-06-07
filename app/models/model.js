var mongoose = require('mongoose');

module.exports = mongoose.model('Model', {
    name        : String,
    description : String
});