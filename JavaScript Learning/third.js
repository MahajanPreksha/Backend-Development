//Higher Order Function - Type 1
function operation(operatorFn, a, b){
    return operatorFn(a, b);
}
function add(a, b){
    return a + b;
}
let res = operation(add, 5, 6);
console.log(res); //11

//Higher Order Function - Type 2
function getGreetMethod(){
    return function(){
        console.log("Hello Students");
    }
}
let greetFn = getGreetMethod();
console.log(greetFn); //Function
greetFn(); //Hello Students

//Array Functions

//forEach Method
players = ["Sachin", "Virat", "Dhoni", "Rohit"];
players.forEach(player => console.log(player)); //Sachin Virat Dhoni Rohit

//map Method
arr = [1, 2, 3, 4, 5, 6];
cube_arr = arr.map(num => num**3);
console.log(cube_arr); //[1, 8, 27, 64, 125, 216]

//filter Method
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_arr = arr1.filter(num => num%2==0);
console.log(even_arr); //[2, 4, 6, 8, 10]

//reduce Method
const sum = arr1.reduce((curr, next) => curr + next);
console.log(sum); //55

//Synchronous Processing
function hello1(){
    console.log("Hello from inside the function.");
}
hello1();
console.log("Hello from outside the function.");
/* Hello from inside the function.
Hello from outside the function. */

//Asynchronous Processing -- happens due to event loop
console.log("Hello from first line");
setTimeout(() => {
    console.log("Hello from callback function");
}, 3000);
console.log("Hello from last line");
/* Hello from first line
Hello from last line
Hello from callback function */

//Closures
function hello(){
    let name = "Preksha";
    console.log(name);
}
hello();
// console.log(name); //Error

function outerFn(){
    let outerVar = "I am from outer fn";
    function innerFn(){
        console.log(outerVar);
    }
    return innerFn;
}
let fn = outerFn(); //Inner function is still able to hold the local variable of outerFn.
fn(); //I am from outer fn

//Use of Closures
function customerCounter(){
    let count = 0;
    return function(){
        count++;
        console.log("New customer count is ", count);
    }
}
//Encapsulation/Data Hiding done
let counter = customerCounter();
counter(); //New customer count is  1
counter(); //New customer count is  2
counter(); //New customer count is  3

//Callback Function
function greet(name11, callback){
    const greeting = "Hello " + name11;
    callback(greeting);
}
function displayGreeting(message){
    console.log(message);
}
greet("Preksha", displayGreeting); //Hello Preksha

//Callback Hell
/* getUser(function(user){
    getPosts(user.id, function(post){
        displayUserInfoAndPost(user, postMessage, function(){
            console.log("User info and posts successfully displayed.")
        })
    })
}) */