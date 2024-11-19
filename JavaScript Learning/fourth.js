//Create Promise
const firstPromise = new Promise((resolve, reject) => { //callback functions --> arrow functions
    let parentDecision = true;
    if(parentDecision){
        resolve("Yayy!!");
    }
    else{
        reject("Oh nooo!!");
    }
});
firstPromise.then((message) => { //Positive Scenario
    console.log("My message: ", message);
    console.log("Yess!!");
}).catch((message) => { //Negative Scenario
    console.log("My message: ", message);
    console.log("Alas!!");
}).finally(() => console.log("Clarity now!!")); //Execution
/* My message:  Yayy!!
Yess!!
Clarity now!! */

//all function of promise
const f1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random()>0.5){
            resolve("Friend 1: Hey, I am in for Goa.");
        }
        else{
            reject("Friend 1: Bit busy.");
        }
    }, 1000)
})
const f2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random()>0.5){
            resolve("Friend 2: Hey, I am in for Goa too.");
        }
        else{
            reject("Friend 2: I have work.");
        }
    }, 1000)
})
const f3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random>0.5){
            resolve("Friend 3: Hey, I am also in for Goa");
        }
        else{
            reject("Friend 3: I have lots of meetings");
        }
    }, 1000)
})
Promise.all([f1Promise, f2Promise, f3Promise]).then((message) => {
    console.log(message);
    console.log("Let's go to Goa!");
}).catch((message) => {
    console.log("Plan cancelled!!");
})

//any function of promise
const gf1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random>0.5){
            resolve("GF1: YES!!");
        }
        else{
            reject("GF1: SORRY!!");
        }
    }, 1000)
})
const gf2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random>0.5){
            resolve("GF2: YES!!");
        }
        else{
            reject("GF2: SORRY!!");
        }
    }, 1000)
})
const gf3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random>0.5){
            resolve("GF3: YES!!");
        }
        else{
            reject("GF3: SORRY!!");
        }
    }, 1000)
})
Promise.any([gf1Promise, gf2Promise, gf3Promise]).then((result) => {
    console.log(result);
    console.log("Going");
}).catch(result => {
    console.log(result);
    console.log("NGO TIME");
})

//Async
async function getMessage(){
    return 'Hello Students!';
}
console.log(getMessage()); //Promise {'Hello Students!'}

getMessage().then(res => {
    console.log(res); //Hello Students!
})

//Print "Hello" after a wait
function printHelloAfterWait(){
    console.log("First Line");
    setTimeout(() => {
        console.log("Hello");
    }, 3000);
    console.log("Last Line");
}
printHelloAfterWait();
/* First Line
   Last Line
   Hello */
   
//Async-Await
async function printHelloAfterWait1(){
    console.log("First Line");
    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello");
        }, 3000);
    })
    let resu = await data; //Start waiting for the data promise to be completed
    console.log(resu);
    console.log("Last Line");
}
printHelloAfterWait1();
/* First Line
   Hello
   Last Line */

//Exception Handling

//Syntax related issues (fall in the category of Errors(Can't be recovered from them).)
// console.log("Hey!"; //SyntxError --> It won't allow program to run.

//Runtime Exception
let x = 5;
// console.log(x.toUpperCase()); //TypeError as this method works for Strings.

//Logical Issue
let num = 5;
// for(let i=-3; i<5; i++){
//     console.log(num/i); //Logical Error --> Dividing by zero
// }

let obj = undefined;
// console.log(obj.name); //TypeError --> obj is undefined
//Handle this gracefully

try{
    let obj1 = undefined;
    console.log(obj1.name);
}catch(err){ //err --> object that holds info about the error which has occurred
    console.log("Exception handled"); //Exception handled
    console.log(err); //TypeError
}finally{
    console.log("I will always execute"); //I will always execute
} 