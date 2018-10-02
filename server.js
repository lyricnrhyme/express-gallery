const express = require('express');
const app = express();
const bp = require('body-parser');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const PORT = process.env.EXPRESS_CONTAINER_PORT;


app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bp.urlencoded({ extended: true }));
app.set('view engine', '.hbs')
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))

const userRoutes = require('./routes/userRoutes.js');
const galleryRoutes = require('./routes/galleryRoutes.js');

// app.get('/', (req, res) => {
//   res.send('sanity check')
// })

app.use('/', userRoutes);
app.use('/', galleryRoutes);

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})