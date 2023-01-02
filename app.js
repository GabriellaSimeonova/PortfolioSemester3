//importing all the necessary npm-s and modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const ejs = require('ejs');

// creating the app via express and reading the files (html, css, etc)
const app = express();

app.set('view engine', 'ejs')
require('./startup/middleware')(app);
require('./startup/database')(); //connecttion to the database

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public')); 

//GET request for the index file
app
  .get("/", (req, res) => {
    res.render("index");
  })

//connecting with collection with project documents in the online database
const collectionName = 'Projects';

const collectionSchema = new mongoose.Schema({
   name: String,
   description: String,
   photo: String,
   category: String,
   link: String
  });

const Collection = mongoose.model(collectionName, collectionSchema);

// Query the collection and print the results
Collection.find({}, (err, documents) => {
    if (err) {
      console.error(err);
    } else {
      //console.log(documents);
    }
  });

//GET request to send the projects to the front end 
app.get('/getprojects', (req, res) => {
    Collection.find({}, (err, projects) => {
      if (err) {
        console.log(err)
      }
      // sends {projects} array to the server
      res.send({ projects })
      //console.log(projects);
    })
  })
  

// running the server on port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});

