const express = require('express');
const movies = require('./moviesHolder.js');
const bodyParser = require('body-parser');


const app = express();

// TODO: serve static files.
// app.use(express.static('../public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/movies', function(req, res) {
  res.json(movies);
});

app.post('/api/movies', function(req, res) {
  movies.push(req.body);
  res.send('POST successful');
});

app.put('/api/movies/:id', function(req, res) {
  movies.forEach((movie) => {
    if (JSON.stringify(movie.id) === req.params.id){
      console.log('movie found');
      movie.watched = !movie.watched;
      return;
    }
  });
  res.send('PUT successful');
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));

