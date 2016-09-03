var Schema = require('mongoose').Schema;
var homeworkSchema = Schema({
    catgory: String,
    theClass: String,
    date: Date,
    content: String,
    createTime: Date,
    updateTime: Date,
    status: String,
});
/* global db */
module.exports = db.model('Homework', homeworkSchema, 'homework');
