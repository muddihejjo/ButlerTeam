import Corporation from './corporation_Model';

const _ = require('lodash');
const signToken = require('../../auth/auth').signToken;
const bcrypt = require('bcrypt');

exports.params = function (req, res, next, id) {
    Corporation.findById(id)
        .select('-password')
        .exec()
        .then(function (user) {
            if (!user) {
                next(new Error('No staff_user with that id'));
            } else {
                req.user = user;
                next();
            }
        }, function (err) {
            next(err);
        });
};


// Return a user without password
exports.get = function (req, res, next) {
    Corporation.find({})
        .select('-password')
        .exec()
        .then(function (users) {
            res.json(users.map(function (user) {
                return user.toJson();
            }));
        }, function (err) {
            next(err);
        });
};

// Return a user with all the options
exports.getOne = function (req, res, next) {
    let user = req.user.toJson();
    res.json(user.toJson());
};


exports.updateUser = function (req, res, next) {
    let user = req.user;
    let update = req.body;

    _.merge(user, update);

    user.save(function (err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved.toJson());
        }
    })
};

exports.createUser = function (req, res, next) {
    let newUser = new Corporation(req.body);

    newUser.save(function (err, user) {
        if (err) {
            return next(err);
        }

        let token = signToken(user._id);
        res.json({token: token, user: user});
    });
};

exports.deleteUser = function (req, res, next) {
    req.user.remove(function (err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed.toJson());
        }
    });
};

exports.changePassword = function (req, res, next) {
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    Corporation.findOne({email: req.user.email})
        .then((user) => {
            if (!user.authenticate(oldPassword)) {
                res.json({error: "Vær venlig at indtaste den korrekte gamle adgangskode"})
            } else {
                user.password = newPassword;
                user.save((err) => {
                    if (err) {
                        res.json({error: 'Noget gik galt, da vi prøvede at opdater din adgangskode'})
                    } else {
                        res.json({success: 'Adgangskode updateret'})
                    }
                })
            }
        })
};

exports.me = function (req, res) {
    res.json(req.user.toJson());
};


