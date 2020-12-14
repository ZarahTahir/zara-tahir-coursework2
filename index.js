
//import express
const express = require('express');

const bodyParser = require('body-parser')

//create express to use for the web application
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const mustache = require('mustache-express');

app.engine('mustache', mustache());

app.set('view engine', 'mustache');
//import path 
const path = require('path');
 
// create static folder public for the pages
const public = path.join(__dirname, 'public');
app.use(express.static(public));

// import router
const router = require('./routes/projectRouter');
app.use('/', router);



app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})


















