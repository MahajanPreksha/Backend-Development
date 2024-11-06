//Function Definition
function helloStudents(){
    console.log("Hello Students!");
}
helloStudents(); //Arguments, if any are passed inside brackets.

//Function: Sum of two numbers
function sum(a, b=7){ //a and b are parameters --> dummy values used for definition; b has a default value of 7
    return a + b;
}
console.log(sum(1, 2));

console.log(sum(5)) //Since b is undefined, NaN will be the output.

//Forcing arguments
function f(){
    console.log(arguments); //global object for function
}
f(1, 2, 3, 4, 5, 6, 7);

//Arrow Funtions: Write less, get more
var hello = () => console.log("Hello"); //Function with no argument and no return statement
hello();

var sum_arrow = (a, b) => a + b; //Function with parameters and return
console.log(sum_arrow(5, 7));

var process = (a, b) => {
    console.log("Need to process");
    return a*b;
}
console.log(process(1, 2));

//IIFE
(function(){ //Function with no name --> Anonymous Function
    console.log("Hello Students");
})()

//Global Scope
var name = "Preksha";
function func1(){
    console.log(name);
}
func1();

//Local/Function Scope
function func2(){
    var num = 55;
    console.log(num);
}
func2();
// console.log(num); //Reference Error

//Block Scope
{
    //This is called a block of code.
    var x = 20;
    let y = 21;
    console.log(x);
}
console.log(x);
// console.log(y); //Error

//var vs let vs const

//var
function f1(){
    var i = 5;
    console.log(i);
}
f1();
// console.log(i); //Error due to function scope

{
    var j = 5;
}
console.log(j); //No block scope

//Hoisting in var
console.log(z);
var z = 23; //undefined --> z gets defined and hoisted on the top

//let
//No hoisting in let
// console.log(v); //Error
let v = 28;

{
    let name1 = "PM";
}
// console.log(name1); //Error due to no hoisting

//const
const country = "India";
// country = "USA";
// console.log(country); //TypeError: Assignment to constant variable.

//String
let city = "Bangalore";
console.log(city); //Bangalore
console.log(typeof city); //string
console.log(city[3]); //g

//Methods of string
//Length of string
console.log(city.length); //9

//Join two Words
let first_name = "preksha";
let last_name = "M";
let full_name = first_name.concat(last_name);
console.log(full_name); //prekshaM

//Alternate Method to concatenate two words
full_name = first_name + last_name;

//Change letters to Upper Case and Lower Case
console.log(first_name.toUpperCase()); //PREKSHA
console.log(last_name.toLowerCase()); //m

//Character at any index
console.log(city.charAt(2)); //n

//Slicing: start to end-1 (If end is not specified, it returns sub-section till the end)
console.log(full_name); //prekshaM
console.log(full_name.slice(2)); //ekshaM
console.log(full_name.slice(2, 5)); //eks
console.log(full_name.slice(-5)); //kshaM
console.log(full_name.slice(-5, -1)); //ksha

//indexOf
console.log(full_name.indexOf('h')); //5
console.log(full_name.indexOf('z')); //-1 because index is not present

//trim
let word = " HELLO ";
console.log(word);
console.log(word.trim());

//Spliting a string
full_name = "Preksha Mahajan";
console.log(full_name.split(" ")); //['Preksha', 'Mahajan'] (returns array of strings)
console.log(first_name.split("")); //Returns array of characters

//Arrays
arr = [1, 2, 3, 4, 9, 8, 7, 19, 20, 21, 29];
console.log(typeof arr); //object

arr1 = new Array(); //Empty Array
console.log(arr1); //[]

//Indexing
console.log(arr[0]); //1
console.log(arr[21]); //undefined
console.log(arr[-1]); //undefined

//Mutable
arr[1] = 200;
console.log(arr); //[1, 200,  3,  4,  9, 8, 7, 19, 20, 21, 29]

//Insert items in array
a = [5, 7, 1, 9, 8, 16];
console.log(a); //[5, 7, 1, 9, 8, 16]
a.push(11); //inserts elements at the end
console.log(a); //[5,  7,  1, 9, 8, 16, 11]

a.unshift(999); //inserts elements at the beginning
console.log(a); //[999, 5,  7,  1, 9, 8, 16, 11]

//Remove items in array
a.pop(); //removes last element
console.log(a); //[999, 5,  7, 1, 9, 8, 16]

a.shift(); //removes first element
console.log(a); //[ 5, 7, 1, 9, 8, 16 ]

//Concatenation
let a1 = [1, 2, 3];
let a2 = [5, 6];
let r = a1.concat(a2);
console.log(r); //[1, 2, 3, 5, 6]

//Size of the array
console.log(a1.length); //3

//Convert Array into string -- using join method
charArray = ['H', 'E', 'L', 'L', 'O', ' ', 'H', 'I'];
console.log(charArray.join()); //H,E,L,L,O, ,H,I

//Removing commas
console.log(charArray.join("")); //HELLO HI
console.log(charArray.join("$")); //H$E$L$L$O$ $H$I

//Convert Array into string -- using toString() method
console.log(typeof charArray.toString()); //string

//Slicing of the array
let num = [3, 4, 5, 5, 6, 7, 9, 11, 13, 12, 10];
console.log(num.slice(2)); //[5, 5, 6, 7, 9, 11, 13, 12, 10]
console.log(num.slice(2, 7)); //[5, 5, 6, 7, 9]
console.log(num.slice(5, -1)); //[7, 9, 11, 13, 12]
console.log(num.slice(-9, -2)); //[5, 5, 6, 7, 9, 11, 13]
console.log(num.slice(2, -1)); //[5, 5, 6, 7, 9, 11, 13, 12]

//Splicing of the array
let n = [1, 2, 3, 4, 5];
let removed = n.splice(2, 2);
console.log(removed); //[3, 4]
console.log(n); //[1, 2, 5]

let N = [1, 2, 3, 4, 5];
let R = N.splice(2, 5); //goes out of index but doesn't affect
console.log(R); //[3, 4, 5]
console.log(N); //[1, 2]

//Removing and inserting elements using splicing
N = [1, 2, 3, 4, 5];
R = N.splice(2, 2, 11, 12, 13); //begin from 2nd index, remove 2 elements and insert elements
console.log(R); //[3, 4]
console.log(N); //[1, 2, 11, 12, 13, 5]

//Reverse an Array
let y = [4, 1, 5, 7, 19, 2];
y.reverse();
console.log(y); //[2, 19, 7, 5, 1, 4]

//Check if an element exists in an array -- using arr.indexOf(ele) method
y = [4, 1, 5, 7, 19, 2];
console.log(y.indexOf(19)); //4
console.log(y.indexOf(8)); //-1

//Sorting an Array
y.sort(); //It is unable to compare elements, so you need to pass a sorting logic.
console.log(y); //[1, 19, 2, 4, 5, 7]

y = [4, 1, 5, 7, 19, 2];
y.sort((a, b) => a-b); //sorts in ascending order
console.log(y); //[1, 2, 4, 5, 7, 19]

//Sort in descending order
y = [4, 1, 5, 7, 19, 2];
y.sort((a, b) => b-a);
console.log(y); //[19, 7, 5, 4, 2, 1]

//Objects

//Creating Object
const user = {
    name: "Preksha",
    age: 21,
    city: "Amritsar"
}

//Accessing the data of an object -- using . operator
console.log(user.name); //Preksha

//Accessing the data of an object -- using [] brackets
console.log(user["name"]); //Preksha

//Adding data to object
user.country = "India";
user["continent"] = "Asia";
console.log(user); //{name: 'Preksha', age: 21, city: 'Amritsar', country: 'India', continent: 'Asia'}

//Deleting object keys
delete user.country;
console.log(user); //{name: 'Preksha', age: 21, city: 'Amritsar', continent: 'Asia'}

delete user["continent"];
console.log(user); //{name: 'Preksha', age: 21, city: 'Amritsar'}

//Iterating over an object
let person = {
    name: "Preksha",
    age: 21,
    address: {
        city: "Amritsar",
        state: "Punjab",
        country: "India"
    }
}
for(let key in person){
    console.log(key); //name age address
}
for(let key in person){
    console.log(key, "=>", person[key]); //name => Preksha \n age => 21 \n address => {city: 'Amritsar', state: 'Punjab', country: 'India'}
}

//Getting all keys of an object
console.log(Object.keys(person)); //['name', 'age', 'address']

//Getting all values of an object
console.log(Object.values(person)); //['Preksha', 21, {city: 'Amritsar', state: 'Punjab', country: 'India'}]

//Getting all keys and values of an object or Getting the entire object
console.log(Object.entries(person)); /* [
    [ 'name', 'Preksha' ],
    [ 'age', 21 ],
    [
      'address',
      {city: 'Amritsar', state: 'Punjab', country: 'India'}
    ]
  ] */

//Cloning an object -- using assign
const new_person = Object.assign({}, person);
console.log(new_person); /*{
    name: 'Preksha',
    age: 21,
    address: {city: 'Amritsar', state: 'Punjab', country: 'India'}
  }
*/

//Adding new features while cloning
const new_person1 = Object.assign({}, person, {role: "Dev"});
console.log(new_person1); /*{
    name: 'Preksha',
    age: 21,
    address: {city: 'Amritsar', state: 'Punjab', country: 'India'},
    role: 'Dev'
  }
*/

//Destructuring in Arrays
const qwe = [1, 2, 3];
const [q, w] = [1, 2, 3];
console.log(q); //1
console.log(w); //2
// console.log(e); //ReferenceError

//Destructuring in Nested Arrays
const [g, c, k] = [1, 2, [4, 5, 6]];
console.log(g); //1
console.log(c); //2
console.log(k); //[4, 5, 6]

//Destructuring in Objects
const per = {
    age: 99,
    Name: "Lovely",
    city: "Chd"
}
const {Name, age, hobby} = per;
console.log(Name); //Lovely
console.log(age); //99
console.log(hobby); //undefined

//Destructuring in Nested Objects
const per1 = {
    age1: 99,
    Name1: "Lovely",
    city1: "Chd",
    address1: {
        city2: "Chd",
        state: "Punjab"
    }
};
const {Name1, age1, address1} = per1;
console.log(Name1); //Lovely
console.log(age1); //99
console.log(address1); //{city: 'Chd', state: 'Punjab'}

const {address1:{city2, state}} = per1;
console.log(city2); //Chd