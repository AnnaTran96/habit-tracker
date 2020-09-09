const localStrategy = require('passport-local').Strategy;
const { pool } = require('./database/config')
const bcrypt = require('bcrypt');
const { authenticate } = require('passport');

function initialize(passport){
const authenticateUser = (email, password, done)=>{

    pool.query(
        `SELECT * FROM users WHERE email =$1`, 
        [email], 
        (err, results)=> {
            if(err) {
                throw err;
            }

            console.log(results.rows);

            if (results.rows.length > 0) {

                const user = results.rows[0];

                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err){
                        throw err
                    }

                    if(isMatch){
                        return done(null, user)
                    } else{
                        return done(null, false, {message: 'Password is not correct'})
                    }
                })
            } else {
                return done(null, false, {message: 'Email is not registered'})
            }

        }
    )
}

    passport.use(
        new localStrategy(
            {
                usernameField: 'email',
                passwordField: 'password'
            },
            
            authenticateUser

            // authenticateUser(req, email, password, done)
        )
    );
    // to store user details in session
    // determining which data of user object should be stored
    passport.serializeUser((user, done) => done(null, user.id));
    // fetched object from above is attached to req object as req.user
    passport.deserializeUser((id, done) => {
        pool.query(`SELECT * FROM users WHERE id = $1`, [id], (err, results) => {
            if (err) {
                return done(err);
            }
            console.log(`ID is ${results.rows[0].id}`)
            return done(null, results.rows[0])
        } );
    })
}

module.exports = initialize;