// GET /
// GET /gallery/:id
// GET /gallery/new
//// author, link, description
// POST /gallery
// GET /gallery/:id/edit
//// author, link, description
// PUT /gallery/:id
// DELETE /gallery/:id

const express = require('express');
const bp = require('body-parser');
const PORT = process.env.EXPRESS_CONTAINER_PORT;
const app = express();
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('homepage');
})

app.get('/gallery', (req, res) => {
    res.send('gallery')
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})