const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const User = require('../../models/User');
const Lobby = require('../../models/lobby');

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    const testlobby = new Lobby({
        "userList": {
            "user1": "rewrew",
            "user2": "dfsajklfd",
            "user3": null,
            "user4": null,
            "user5": null,
            "user6": null,
            "user7": null,
            "user8": null,
            "user9": null,
            "user10": null,
        },
        "expansions": {
            "baseGame": true,
            "first": false,
            "second": false,
            "third": false,
            "fourth": false,
            "fifth": false,
            "sixth": false
        },
        "wincount": 10,
        "gameName": "rewrew's Game",
        "passwordBool": false,
        "password": null
    });
    testlobby.save().then(lobby => res.json(lobby)).catch(err => console.log(err));
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (user) return res.status(400).json({ email: "Email already exists" });

        const newUser = new User({
            name,
            email,
            password
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;

                newUser.password = hash;
                newUser.save().then(user => res.json(user)).catch(err => console.log(err));
            });
        });
    });
});

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) return res.status(404).json({ emailnotfound: "Email not found" });

        bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) return res.status(400).json({ passwordincorrect: "Password incorrect" });

            const payload = {
                id: user.id,
                name: user.name
            };

            jwt.sign(payload, keys.cypher, { expiresIn: 31556926 }, (err, token) => {
                if (err) return res.status(400).json({ tokenerror: "There was a problem updating your security token" });

                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            });
        });
    });
});

module.exports = router;