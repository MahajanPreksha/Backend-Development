//Define the schema of Students collection to be stored in the database
const mongoose = require('mongoose');

//Schema --> Adding validations/checks to ensure Data Integrity
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true //Constraints
    },
    age: {
        type: Number,
        min: 19
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 15
    },
    subjects: [String]
    // createdAt: {
    //     type: Date,
    //     immutable: true,
    //     default: () => {
    //         return Date.now();
    //     }
    // }
}, {versionKey: false, timestamps: true})

//Go ahead and create corresponding collection in Database
module.exports = mongoose.model("Student", studentSchema); //Name of the Collection (creates in Plural), Schema of the documents