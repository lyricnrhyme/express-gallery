const express = require('express');
const Router = express.Router();
const Gallery = require('../db/models/gallery.js');

//GET /
//GET /gallery/:id
//GET /gallery/new author, link, description
//POST /gallery
//GET /gallery/:id/edit author, link, description
//PUT /gallery/:id
//DELETE /gallery/:id

Router.get('/', (req, res) => {
    Gallery
    .fetchAll()
    .then( gallery => {
        res.json(gallery.serialize());
        res.render('home', gallery);
    })
    .catch( err => {
        console.log('gallery err', err);
        res.json(err);
    })
})

module.exports = Router
// // create task by user id
// Router.post('/users/:user_id/tasks/new', (req, res) => {
//     const { user_id } = req.params;
//     const payload = {
//       name: req.body.name
//     }
//     Tasks
//       .forge(payload)
//       .save()
//       .then( result => {
//         res.json(result)
//       })
//       .catch( err => {
//         console.log('error', err)
//         res.json(err);
//       })
//   })
  
//   // update task by task id
//   Router.put('/tasks/:task_id/edit', (req, res) => {
//     const { task_id } = req.params;
    
//     const payload = {
//       name: req.body.name,
//       is_complete: req.body.is_complete
//     }
  
//     Tasks
//       .where({task_id})
//       .fetch()
//       .then( task => {
//         return task.save(payload)
//       })
//       .then( result => {
//         console.log('result', result)
//         res.json(result);
//       })
//       .catch(err => {
//         res.json(err);
//       })
//   })
  
//   // delete task by task id
//   Router.delete('/tasks/:task_id/delete', (req, res) => {
//     const { task_id } = req.params;
    
//     Tasks
//       .where({ task_id })
//       .destroy()
//       .then( result => {
//         res.json(result);
//       })
//       .catch(err => {
//         res.json(err);
//       })
//   })



// module.exports = Router;