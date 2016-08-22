var mongoose = require('mongoose');

module.exports = mongoose.model('City', {
    city        : String,
    loc         : [Number],
    pop         : Number,
    state       : String
});