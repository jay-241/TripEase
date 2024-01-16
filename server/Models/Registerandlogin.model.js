//Author: Maitri Savla(mt588638@dal.ca) || Banner Id : B00899569

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    emailid:String,
    pass:String
});

module.exports = mongoose.model("users", userSchema);