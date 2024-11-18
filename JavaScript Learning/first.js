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
console.log(person); //{name: 'Preksha', age: 21, hobby: 'Writing'}
console.log(typeof person); //object

//Operators

//Arithmetic Operators: +, -, *, /, **, %, ++x, x++, --x, x--
console.log(4+5); //9

//Relational Operators: ==, ===, !=, !==, <, >, <=, >=, 
console.log(1==1); //true
console.log(1=='1'); //JS internally tries to convert string into number    //true
console.log(1==='1'); //String equality check     //false
console.log(1!=='1'); //String inequality check //true

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
} //Even Number

//Ternary Operator
num%2==0? console.log("Even"):console.log("Odd"); //Even

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
} //It's an Apple.

//Loops

//For Loop
for(var i=0; i<10; i++){
    console.log("Hello Student!"); //Loop Body
}
/* Hello Student!
Hello Student!
Hello Student!
Hello Student!
Hello Student!
Hello Student!
Hello Student!
Hello Student!
Hello Student!
Hello Student! */

//While Loop
let t = 0;
while(t<5){
    console.log("Hello Student!");
    t++;
}
/* Hello Student!
Hello Student!
Hello Student!
Hello Student!
Hello Student! */

//continue statement
for(var j=1; j<=50; j++){
    if(j%2!=0){
        continue;
    }
    console.log(j);
} // 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50

//break statement
for(var j=1; j<=10; j++){
    if(j==5){
        break;
    }
    else{
        console.log("Hi " + j);
    }
}
/* Hi 1
Hi 2
Hi 3
Hi 4 */