// simple Express.js RESTful API
'use strict';
// initialize

const port = (process.env.PORT || 5000)
const  express = require('express');
const cors = require('cors');
const path = require('path')
const ejs = require('ejs');
const app = express();
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/render", function(req, res) {
    res.render("render.ejs", {
        message: 'Hello wold! i am now using ejs '
    });

});

// /hello/ GET request
app.get('/hello/:name?', (req, res) =>
  res.json(
    { message: `Hello ${req.params.name || 'world'}!`}
  )
);

app.get('/', (req, res) =>
  res.end(
    "Please say hello"
  )
);

app.post('/hello/:name?', (req, res) =>
  res.json(
    { message: `Post ${req.params.name || 'world'}!`}
  )
);


// start server
app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);


