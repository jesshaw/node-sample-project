var _ = require('lodash'),
    config = require('../config'),
    jwt = require('jsonwebtoken'),
    User = require('./user');

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
    } else if (req.body.wxname) {
        username = req.body.wxname;
        type = 'wx';
        userSearch = { wxUsername: username };
    }

    return {
        username: username,
        type: type,
        userSearch: userSearch
    };
}

exports.index = function(req, res) {
    res.send('ok');
};

exports.create = function(req, res) {

    if (!req.body.username || !req.body.password) {
        return res.status(400).send({ message: "You must send the username and the password" });
    }

    User.findOne({ username: req.body.username }, function(err, user) {
        if (err)
            res.send(err);
        if (user) {
            return res.status(400).send({ message: "A user with that username already exists" });
        };

        user = new User();
        username.username = req.body.username;
        user.password = req.body.password;
        user.roles = req.body.roles;
        user.save(function(err, user) {
            if (err)
                res.send(err);

            return res.send({ message: "Successfully created" });
            // res.send({ id_token: createToken(user) });
        });
    });
};


exports.getsByClass = function(req, res) {
    User.find(function(err, users) {
        if (err)
            res.send(err);
        res.send(users);
    });
};

exports.getById = function(req, res) {
    // console.log(req.user);
    User.findById(req.params.id, function(err, User) {
        if (err)
            res.send(err);
        res.send(User);
    });
};

exports.getByUsername = function(req, res) {
    // console.log(req.query);
    if (!req.query.username) {
        return res.status(400).send({ message: "You must send the username" });
    }
    User.findOne({ username: req.query.username }, function(err, user) {
        if (err)
            return res.status(400).send(err);
        res.status(201).send({
            user: user
        });
    });
};


exports.update = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err)
            res.send(err);
        if (user) {
            if (req.body.username) {
                user.username = req.body.username;
            }
            if (req.body.password) {
                user.password = req.body.password;
            }
            if (req.body.wxUsername) {
                user.wxUsername = req.body.wxUsername;
            }
            if (req.body.wxRandom) {
                user.wxRandom = req.body.wxRandom;
            }
            if (req.body.roles) {
                user.roles = req.body.roles;
            }

            user.save(function(err, user) {
                if (err)
                    res.send(err);
                res.send(user);
            });
        };
    });
};

exports.updateUsername = function(req, res) {

    User.findOne({ username: req.body.username }, function(err, user) {
        if (err)
            res.send(err);
        if (user) {
            return res.status(400).send({ message: "A user with that username already exists" });
        };

        User.findOne({ username: req.user.username }, function(err, user) {
            if (err)
                res.send(err);

            if (req.body.username) {
                user.username = req.body.username;
            }

            user.save(function(err, user) {
                if (err)
                    res.send(err);
                return res.send({
                    id_token: createToken({ username: user.username, roles: user.roles })
                });
            });
        });

    });
};

exports.updatePassword = function(req, res) {

    if (!req.body.password) {
        return res.status(400).send({ message: "You must send old password of the user" });
    };
    if (!req.body.newPassword) {
        return res.status(400).send({ message: "You must send new password of the user" });
    };

    User.findOne({ username: req.user.username, password: req.body.password }, function(err, user) {
        if (err)
            res.send(err);
        user.password = req.body.newPassword;

        user.save(function(err, user) {
            if (err)
                res.send(err);
            return res.send({
                id_token: createToken({ username: user.username, roles: user.roles })
            });
        });
    });
};

exports.updateRoles = function(req, res) {
    if (!req.body.roles) {
        return res.status(400).send({ message: "You must send roles of the user" });
    };

    // console.log(req.user);
    // console.log(req.body.roles);

    // return res.status(400).send({ message: "failure" });

    User.findOne({ username: req.user.username }, function(err, user) {
        if (err)
            res.send(err);

        user.roles = req.body.roles;
        user.save(function(err, user) {
            if (err)
                res.send(err);

            return res.send({
                id_token: createToken({ username: user.username, roles: user.roles })
            });
        });
    });
};

exports.deleteById = function(req, res) {
    User.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        // res.json({ message: 'Successfully deleted' });
        res.send({ message: 'Successfully deleted' });
    });
};

exports.login = function(req, res) {
    var userScheme = getUserScheme(req);

    User.findOne(userScheme.userSearch, function(err, user) {
        if (err)
            return res.send(err);

        if (!user) {
            return res.status(401).send({ message: "The username or password don't match" });
        }

        switch (userScheme.type) {
            case "username":
                if (!userScheme.username || !req.body.password) {
                    return res.status(400).send({ message: "You must send the username and the password" });
                }

                if (user.password !== req.body.password) {
                    return res.status(401).send({ message: "The username or password don't match" });
                }
                break;
            case "email":
                return res.status(401).send({
                    message: "The username or password don't match"
                });
            case "wx":
                if (!userScheme.username || !req.body.r) {
                    return res.status(400).send({ message: "You must send the wxUsername and the random" });
                }
                if (user.wxRandom !== req.body.r) {
                    return res.status(401).send({ message: "The username or password don't match" });
                }
                break;
            default:
                return res.status(401).send({ message: "The username or password don't match" });
        }

        res.status(201).send({
            id_token: createToken({
                username: user.username,
                roles: user.roles
            })
        });
    });
};

exports.generateRandom = function(req, res) {

    var userScheme = getUserScheme(req);
    if (!userScheme.username) {
        return res.status(400).send({ message: "You must send the username and the password" });
    }

    User.findOne(userScheme.userSearch, function(err, user) {
        if (err)
            return res.status(400).send(err);

        var wxRandom = Math.ceil(Math.random() * 10000000);

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
            if (err)
                return res.status(400).send(err);
            //console.dir(user);
        });

        res.status(201).send({
            random: wxRandom
        });
    });
};
