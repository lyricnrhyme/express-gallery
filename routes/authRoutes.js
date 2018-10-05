const express = require('express');
const Router = express.Router();
const Users = require('../db/models/users.js')

Router.post('/register', (req, res) => {
    const {user_id, email, password} = req.body;
        Users
            .forge({user_id, email, password})
            .save()
            .then( result => {
                if (result){
                    //save user data into DB
                    console.log('WELCOME')
                }
                else{
                    res.send('YOU FUKKED UP')
                }
            })
            .catch( err => {
                console.log('error', err)
                res.send(err)
            })
    })

Router.get('/login', (req, res) => {
    const { email, password } = req.body;
    Users
    .where({ email })
    .fetch()
    .then( user => {
        if (password === user.attributes.password) {
            req.session.isLoggedIn = true;
            res.redirect('/')
        } else {
            res.redirect('/login')
        }
    })
    .catch( err => {
        console.log('err', err)
        res.send(err);
    })
})

Router.post('/login', (req, res) => {

})

Router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})

Router.get('/protected', (req, res) => {
    if (req.session.isLoggedIn) {
        //can access
    } else {
        //no can access
    }
    res.send('PROTECTEDDDD');

})

module.exports = Router

