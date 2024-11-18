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

