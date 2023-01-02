//this file is used to make the connection the database

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.set('strictQuery', true);

module.exports = () => {
   // mongdb cloud connection is here
  mongoose
    .connect("mongodb+srv://gabi:123456gabi@cluster0.c1pjbdz.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("connected to mongodb cloud! :)");
    })
    .catch((err) => {
      console.log(err);
    }); 
};

