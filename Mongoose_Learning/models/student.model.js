//Define the schema of Students collection to be stored in the database
const mongoose = require('mongoose');

//Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
})

//Go ahead and create corresponding collection in Database
module.exports = mongoose.model("Student", studentSchema); //Name of the Collection (creates in Plural), Schema of the documents