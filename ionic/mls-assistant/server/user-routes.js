var express = require('express'),
    _ = require('lodash'),
    config = require('./config'),
    jwt = require('jsonwebtoken'),
    User = require('./user');

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = [{
    id: 1,
    username: 'test',
    password: 'test',
    roles: 'student,class1'
}];

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60 * 5 });
}

function getUserScheme(req) {

    var username;
    var type;
    var userSearch = {};

    // The POST contains a username and not an email
    if (req.body.username) {
        username = req.body.username;
        type = 'username';
        userSearch = { username: username };
    }
    // The POST contains an email and not an username
    else if (req.body.email) {
        username = req.body.email;
        type = 'email';
        userSearch = { email: username };
    } else if (req.body.wxUsername) {
        username = req.body.wxUsername;
        type = 'wx';
        userSearch = { wxUsername: username };
    }

    return {
        username: username,
        type: type,
        userSearch: userSearch
    };
}

app.post('/users', function(req, res) {

    var userScheme = getUserScheme(req);

    if (!userScheme.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }

    if (_.find(users, userScheme.userSearch)) {
        return res.status(400).send("A user with that username already exists");
    }

    var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
    profile.id = _.max(users, 'id').id + 1;

    users.push(profile);

    res.status(201).send({
        id_token: createToken(profile)
    });
});
// {wxUsername:"aa"}
app.post('/sessions/create', function(req, res) {

    var userScheme = getUserScheme(req);

    if (!userScheme.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }

    var user = _.find(users, userScheme.userSearch);

    if (!user) {
        return res.status(401).send({ message: "The username or password don't match", user: user });
    }

    if (user.password !== req.body.password) {
        return res.status(401).send("The username or password don't match");
    }

    res.status(201).send({
        id_token: createToken(user)
    });
});

app.post('/wx/createRandom', function(req, res) {

    var userScheme = getUserScheme(req);
    if (!userScheme.username) {
        return res.status(400).send("You must send the username and the password");
    }

    User.findOne(userScheme.userSearch, function(err, user1) {
        if (err) return console.error(err);
        console.dir(user1);
       var user = user1;

        var wxRandom = Math.ceil(Math.random() * 10000000);

        console.log(user);
        if (!user) {
            user = new User({
                username: userScheme.userSearch.wxUsername,
                password: "666666",
                roles: "student",
                wxUsername: userScheme.userSearch.wxUsername,
                wxRandom: wxRandom,
            });
        } else {
            user.wxRandom = wxRandom;
        }

        user.save(function(err, user) {
            if (err) return console.error(err);
            console.dir(user);
        });

        res.status(201).send({
            random: wxRandom
        });
    });
});
