const express = require('express');
const Router = express.Router();
const bp = require('body-parser');

Router.use(bp.urlencoded({ extended: true }));

// get all users
Router.get('/users', (req, res) => {
    Users
    .fetchAll()
    .then( users => {
      res.json(users.serialize());
    })
    .catch( err => {
      res.json(err);
    })
  })
  
  // get all tasks by user_id
  Router.get('/users/:user_id/tasks', (req, res) => {
    const { user_id } = req.params;
    Tasks
      .where({user_id})
      .fetchAll()
      .then( tasks => {
        res.json(tasks.serialize())
      })
      .catch( err => {
        res.json(err);
      })
  })

    // POST new user
    Router.post('/user/new', (req, res) => {
      console.log('req.body', req.body);
      const user = req.body;
      // DS_Inv.add(item);
      knex.raw(`INSERT INTO user (email, password, created_at, updated_at) VALUES ('${user.email}', '${user.password}', '${user.created_at}', '${user.updated_at}')`)
        .then( result => {
          res.redirect('/');
        })
        .catch( err => {
          console.log('error', err)
          res.redirect('/')
        })    
    });

module.exports = Router;