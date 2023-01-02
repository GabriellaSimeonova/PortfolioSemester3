const express = require('express');
const bodyParser = require('body-parser');

module.exports = app => {
  // middlewares
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static("public"));
  app.set("view engine", "ejs");
}
