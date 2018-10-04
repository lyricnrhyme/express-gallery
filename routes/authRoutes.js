const express = require('express');
const Router = express.Router();
const Users = require('../db/models/Users.js')

Router.post('/register', (req, res) => {
    const {email, password} = req.body;
        Users
            .forge({email, password})
            .save()
            .then( result => {
                if (result){
                    //save user data into DB
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

Router.post('/login', (req, res) => {

})

Router.post('/logout', (req, res) => {

})

Router.get('/protected', (req, res) => {
    res.send('PROTECTEDDDD');

})

module.exports = Router

