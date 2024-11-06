//Creating variables
var name = "Preksha"; //String: Sequence of characters
let age = 21; //Number
const year = 3;

//Printing variables
console.log(name);
console.log(age);
console.log(year);

// Check data type
console.log(typeof name); //String

/* Multi-line
comments */
// Single line comment

//BigInt
var big_num = 123n;
console.log(typeof big_num); //bigint

//NaN: Not a Number
console.log(typeof NaN); //number

//Null
console.log(typeof null); //object

//Undefined
var hi;
console.log(hi); //undefined

//Boolean
console.log(typeof true);

//Symbol
var s1 = Symbol();

//Objects: Contain keys (string/symbol) and values(any data type)
var person = {
    name: "Preksha",
    age: 21,
    hobby: "Writing"
}
console.log(person);
console.log(typeof person); //object

//Operators

//Arithmetic Operators: +, -, *, /, **, %, ++x, x++, --x, x--
console.log(4+5); 

//Relational Operators: ==, ===, !=, !==, <, >, <=, >=, 
console.log(1==1);
console.log(1=='1'); //JS internally tries to convert string into number
console.log(1==='1'); //String equality check
console.log(1!=='1'); //String inequality check

//Logical Operators: ||, &&, ^
console.log(3<4 && true); //true
console.log(3>4 || true); //true
console.log(true ^ false); //1

//Bitwise Operators: &, |, ^, <<, >>, ~
console.log(10 & 6); //2
console.log(10 | 6); //14

//Conditionals
var num = 20;
if(num%2==0){
    console.log("Even Number");
}
else if(num%2!=0){
    console.log("Odd Number");
}
else{
    console.log("Not a Number");
}

//Ternary Operator
num%2==0? console.log("Even"):console.log("Odd");

//Switch Statement
var fruit = "Apple";
switch(fruit){
    case "Apple":
        console.log("It's an Apple.");
        break;
    case "Mango":
        console.log("It's a Mango");
        break;
    default:
        console.log("Not a valid fruit.");
}

//Loops

//For Loop
for(var i=0; i<10; i++){
    console.log("Hello Student!"); //Loop Body
}

//While Loop
let i = 0;
while(i<5){
    console.log("Hello Student!");
    i++;
}

//continue statement
for(var j=1; j<=50; j++){
    if(j%2!=0){
        continue;
    }
    console.log(j);
}

//break statement
for(var j=1; j<=10; j++){
    if(j==5){
        break;
    }
    else{
        console.log("Hi " + j);
    }
}