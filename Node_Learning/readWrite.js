//Read from external file
const fs = require('fs');

console.log(typeof fs); //object

//Read file in the synchronous way
console.log("Before starting to read");
const content = fs.readFileSync("d:/Backend Development/Node_Learning/input.txt", "utf-8");
console.log(content);
console.log("Last Line");
/* Before starting to read
Hello Students!
How are You?
I am reading from input file and greeting you guys!
Last Line */

//Read file in the asynchronous way
console.log("Before starting to read");
fs.readFile("d:/Backend Development/Node_Learning/input.txt", (err, content1) => {
    if(err){
        return console.log(err);
    }
    console.log("Content of the file is: " + content1);
})
console.log("Last Line");
/* Before starting to read
Last Line
Content of the file is: Hello Students!
How are You?
I am reading from input file and greeting you guys! */

//Write code to external file in synchronous way
console.log("Before");
fs.writeFileSync('output.txt', 'Hello Students!');
console.log("After");
/* Before
   --> output.txt file gets created
   After */

//Write code to external file in asynchronous way
console.log("Before");
fs.writeFile('output1.txt', 'Hello Students again!', err => {
    if(err){
        return console.log(err);
    }
    console.log("Written successfully");
}) 
console.log("After");
/* Before
   After
   Written successfully
   --> output1.txt file gets created */