const mongoose = require('mongoose');
const studentModel = require("./models/student.model1");

//Connect with MongoDB
mongoose.connect("mongodb://localhost/be_demodb");

const db = mongoose.connection; //Start the connection with MongoDB

db.on("error", () => { //In case of error
    console.log("Error while connecting to database");
})

db.once("open", () => { //In case of success
    console.log("Connected to MongoDB");
    //Logic to insert data into the database
    init();

    //Running the queries on MongoDB
    dbQueries();
})

async function init(){
    //Logic to insert data into the database
    const student = {
        name: "Preksha",
        age: 21,
        email: "prekshamahajan2020@gmail.com",
        subjects: ["OS", "DSA"]
    }
    // const std_obj = await studentModel.create(student);
    // console.log(std_obj);
}

async function dbQueries(){
    //Read the student data
    console.log("Inside the dbQueries function");
    //Read the student data based on the id
    try{
        const student = await studentModel.findById("674076b03022a0f355289fd9");
        console.log(student);
    }catch(err){
        console.log(err);
    }

    //Read the student data based on the name
    try{
        const students = await studentModel.find({name:"Preksha"}); //acts like find all
        // const students = await studentModel.find({name:"Preksha"}); //in case of finding one record
        console.log(students);
    }catch(err){
        console.log(err);
    }

    //Deal with multiple conditions
    const stds = await studentModel.where("age").equals(21).where("email").equals("prekshamahajan2020@gmail.com").limit(2);
    console.log(stds);

    //Deal one document where name = "Preksha"
    const delStud = await studentModel.deleteOne({name:"Preksha"});
    console.log(delStud);
}