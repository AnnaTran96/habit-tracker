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

// router.post('/login', (req, res, next) => {
//     db.run(userIndex, [req.body.email])
//       .then(resp => {
//         if(resp.rows[0]) {
//           bcrypt.compare(req.body.password, resp.rows[0].password)
//             .then((result) => {
//               if(result) {
//                 res.json({
//                   user_id: resp.rows[0].id,
//                   message: 'Logged in! :unlock:'
//                 })
//               } else {
//                 next(new Error('Wrong password'))
//               }
//             })
//         } else {
//           next(new Error('Username not found'))
//         }
//       })
// })


   

module.exports = router;