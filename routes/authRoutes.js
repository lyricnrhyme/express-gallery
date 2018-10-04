const express = require('express');
const Router = express.Router();

Router.post('register', (req, res) => {
    res.send('testRegister')
})

Router.post('/login', (req, res) => {

})

Router.post('/logout', (req, res) => {

})

Router.get('protected', (req, res) => {
    res.send('PROTECTEDDDD');

})

module.exports = Router

