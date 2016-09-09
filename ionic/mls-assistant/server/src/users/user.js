var Schema = require('mongoose').Schema;
var userSchema = Schema({
    username: String,
    password: String,
    roles: String,
    wxUsername: String,
    wxRandom: String
});
/* global db */
module.exports = db.model('User', userSchema,'user');
