const express = require('express');
const movies = require('./moviesHolder.js');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// TODO: serve static files.
// app.use(express.static('../public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/movies', function(req, res) {
  res.json(movies);
});

app.post('/api/movies', function(req, res) {
  console.log('request body received: ' + req.body);
  movies.push(req.body);
  res.send('POST successful');
});

app.put('/api/movies/:id', function(req, res) {
  console.log('PUT request received');
  let foundFlag = false;
  movies.forEach((movie) => {
    if (JSON.stringify(movie.id) === req.params.id){
      foundFlag = true;
      console.log('movie found');
      movie.watched = !movie.watched;
      // res.send('PUT Successful');
      return;
    }
  });
  if (!foundFlag) {
    res.status(404).send('Error, movie with id not found.');  
  } else {
    res.send('PUT Successful');
  }
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));

