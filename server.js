
// Part A - This is an api, we are calling different url, and we are getting different data back.
const express = require('express')
const app = express()
const port = 3000

// Part B - Here we use the path package to specify what directory we are in.
const path = require('path');

// Part C = This package is used to parse the body in express for us.
const bodyParser = require("body-parser");

// Part C - parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Part C - parse application/json
app.use(bodyParser.json())

// Part A - the text below is the text data we get when we visit the url.
// Part A - req = request, res = response.
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation and Querying')
})

// Part A - req and res represent the http request being passed up by the browser, and the response being sent back by the browser.
app.get('/hello/:name', (req, res) => {
  console.log(req.params.name);
  res.send('Hello ' + req.params.name)
})

// Part B - Here we specify what we are listening for with the url api/movies at localhost3000.
app.get('/api/movies', (req, res) => {
  const mymovies = [
    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
  ];

  //Part B - Here we use .json instead of .send to send json data back to us.
  res.json({ movies: mymovies });
});

app.get('/test', (req, res) => {

  // Part B - Here we determine that we are in the index.html directory.
  res.sendFile(__dirname + '/index.html');

})
// Part C - A get request sends data as part of the url, where as post sends data in the html body.
app.get('/name', (req, res) => {
  res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

// Part C - Here this method is listening for a post request unlike the others that were listening for a get request.
app.post('/name', (req, res) => {
  res.send('Hello ' + req.body.fname + ' ' + req.body.lname);

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})