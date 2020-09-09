const express = require('express');
const db = require('../database/config');
const { userIndex, userShow, userCreate } = require('../database/queries');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = express.Router();

router.get('/', (req, res) => {
    db.run(userIndex)
        .then(response => {
            const users = response.rows
            res.json({users})
        })
        .catch(err => res.status(500).end())
})

router.post('/', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds).then(function(hash){

        db.run(userCreate, [req.body.email, hash])
        .then(result => {
            const users = result.rows[0]
            res.status(201).json(users)
        })
        .catch(err => res.status(500).end())

    }) 
            
}) 


   

module.exports = router;