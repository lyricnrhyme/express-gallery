const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.EXPRESS_CONTAINER_PORT;
const Tasks = require('./db/models/gallery.js');
const Users = require('./db/models/users.js');
const userRoutes = require('./routes/userRoutes.js');
const galleryRoutes = require('./routes/galleryRoutes.js');
const authRoutes = require('./routes/authRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('sanity check')
})

app.use('/', userRoutes);
app.use('/', galleryRoutes);





app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})