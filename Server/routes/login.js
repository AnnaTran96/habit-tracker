const express = require('express');
const db = require('../database/config');
const { userIndex, userShow, userCreate } = require('../database/queries');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport')
const flash = require("express-flash");
const session = require("express-session");

router.use(express.session({ secret: "secret" }));
router.use(flash());

const initializePassport = require('../passportConfig')
initializePassport(passport)
router.set('trust proxy', 1)
router.use(
    session({
        secret: 'this_is_our_secret_key',
        resave: false,
        saveUninitialized: false
    })
);

router.get('/', (req, res) => {
    db.run(userIndex)
        .then(response => {
            const users = response.rows
            res.json({users})
        })
        .catch(err => res.status(500).end())
})

router.get('/:id', (req, res) => {
    db.run(userShow, [req.params.id])
        .then(resp => {
            const users = resp.rows
            res.json({users})
        })
        .catch(err => res.status(500).end())
})
router.use(passport.initialize())
router.use(passport.session())

router.post('/', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true

    })

) 
    // invalid/empty login details
    // if(req.body.username === null || req.body.password === null){
    //     res.send({ errorMessage: 'Please enter a valid username or password - fields cannot be left empty'})
    // } else if() {
    //     // checking if user exists - need to make below query
    //     // db.userShow(req.body.username)
    //     //     .then()
    // }

    // const email = req.body.email
    // const password = req.body.password



    


    // incorrect login details


// })

module.exports = router;