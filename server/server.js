const express = require('express');
const handlers = require('./requestHandlers.js');


const app = express();

// TODO: serve static files.
// app.use(express.static('../public'));

handlers.superGetHandler();
app.listen(8080, () => console.log('Example app listening on port 8080!'));