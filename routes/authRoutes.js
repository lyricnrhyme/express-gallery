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

