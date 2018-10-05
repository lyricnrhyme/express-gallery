const express = require('express');
const Router = express.Router();
const Users = require('../db/models/users.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
//6:25

passport.serializeUser( (user, done) => {
    console.log('serial', user)
    done(null, user.id)
})

passport.deserializeUser( (user, done) => {
    console.log('deserializing', user)
    done(null, user)
})

passport.use(new LocalStrategy({usernameField: 'email'}, (username, password, done) => {
    Users
    .where({email})
    .then( user => {
        return bcrypt.compare(password, user.attributes.password)
    })
    .then( result => {
        if (result) {
            done(null, user.attributes)
        } else {
            done(null, false)
        }
    })
    .catch( err => {
        done(err)
    })
}))

Router.post('/auth/register', (req, res) => {
    const {user_id, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then( hashedPassword => {
        return Users
        .forge({email, password: hashedPassword})
        .save()
    })
    .then( result => {
        if (result) {
            res.send('NEW USER')
        } else {
            res.send('ERRR')
        }
    })
    .catch( err => {
        console.log('err', err)
        res.send(err);
    })
})

Router.get('/auth/login', (req, res) => {
    res.render('login');
})

Router.post('/auth/login', passport.authenticate('local', {failreRedirect: '/'}), (req, res) => {
    res.send('AUTHENTICATED')
})

Router.post('/auth/logout', (req, res) => {
    req.logout();
    res.send('LOGGED OUT');
})

Router.get('/protected', (req, res) => {
    if (req.session.isLoggedIn) {
        res.send('PASS')
    } else {
        res.send('NO PASS')
    }
})

module.exports = Router

