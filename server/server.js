const express = require('express');
const movies = require('./moviesHolder.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/schema.js');


const app = express();

// TODO: serve static files.
app.use(express.static('../build'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/movies', function(req, res) {
  db.Movie.findAll().then((movies) => {
    res.json(movies);
  });
});

app.post('/api/movies', function(req, res) {
  console.log('request body received: ' + req.body);
  db.Movie.create(req.body);
  res.send('POST successful');
});

app.put('/api/movies/:id', function(req, res) {
  db.Movie.find({where: {id: req.params.id}}).then((movie) => {
    if (movie) {
      movie.updateAttributes({watched: !movie.watched});
      res.send('PUT Successful');
    } else {
      res.status(404).send('Error, movie with id not found.');
    }
  });
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));

