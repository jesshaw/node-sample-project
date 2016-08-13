var Schema = require('mongoose').Schema;
var homeworkSchema = Schema({
    id: Number,
    catgory: String,
    date: Date,
    content: String
});
/* global db */
module.exports = db.model('homeworks', homeworkSchema);
