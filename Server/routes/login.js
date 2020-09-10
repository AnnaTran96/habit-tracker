const express = require('express');
const db = require('../database/config');
const { userIndex, userShow, userEmail } = require('../database/queries');
const bcrypt = require('bcrypt');

const router = express.Router();


router.post('/',(req,res,next)=>{
    db.run(userEmail, [req.body.email])
    .then(resp =>{
        if(resp.rows[0]){
                bcrypt.compare(req.body.password, resp.rows[0].password) 
                .then((result)=>{
                if(result){
                    res.json({
                        id: resp.rows[0].id,
                        message:"You've successfully logged in!"
                    })
                } else {
                    next(new Error ('Invalid username or password'))
                }
            })
            
        } else {
            next(new Error('Invalid Login'))
        }
    }).catch(err => res.status(500).end())
})







              


// router.post('/', (req, res, next) => {

//     const hash = bcrypt.hash(req.body.password, 10)
//     bcrypt.compare(req.body.password, hash).then(function(result) {

//         db.run(userIndex)

//         if(result){
//             res.json({
//                 message:"You've successfully logged in"
//             })
//         } else{
//             next(new Error ('Invalid username or password'))
//         }
        
        
//     }).catch(err => res.status(500).end())
// })
    
        
   







module.exports = router;