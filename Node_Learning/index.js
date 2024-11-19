//Bring logic of myModule.js into index.js
const operations = require('./myModule.js');

console.log(typeof operations); //object

console.log(operations.add); //[Function: add]

console.log(operations.add(5, 6)); //11

console.log(operations.prod); //[Function: prod]

console.log(operations.prod(2, 3)); //6