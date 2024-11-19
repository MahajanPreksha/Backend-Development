# Getting Started with Backend Development

### Difference between Website and Web App
| Website | Web App |
| ------ | ------ |
| Opens in Browser (Laptop/Phone)| Renders with the help of Internet on Laptop/Phone/Tablet/Smart devices|
| Contains static/read-only content | Contains dynamic/read-write content|
| Example: Wikipedia, Blogging and News Websites | Example: LinkedIn, Twitter, Instagram|

### Three-Tier Architecture
All Web Apps consist of three different layers:
- **Frontend**: Content + Minimal Logic
> This layer is browser/app based and helps end users interact.
- **Backend**: Data logic resides here.
> This layer is called 'Brain' of the system.
> All complex computations occur here. Different languages are used.
> Examples:
> 1. Java/Spring
> 2. Python/Django
> 3. JavaScript/Node.js, Express.js
- **Database**: Stores data

### 3 Different Layers of Backend
1. **Routes**: Whenever frontend requests backend, routes have the logic to accept those requests and check if they are correct or not.
2. **Controllers**: Once the request is accepted, routes provide the control to controllers that deals with computations.
3. **Models**: Data required for computations is available in models. (Database Schema)

Order of building layers: Model --> Controller --> Route

### Node.js
- Any programming language needs an environment to execute.
- Node.js is a run-time environment for JavaScript.
- It is built on top of V8 engine.

### JavaScript
- JavaScript is a programming language used to build websites and web apps.
- Most important feature:
It is a single-threaded programming language.
> As it is single-threaded, so it takes more time to execute code and to reduce time, the concept of Asynchronous JS comes in.
> (Java is a multi-threaded programming language.)

#### Applications of JavaScript
1. Machine Learning
2. Mobile App Development
3. IoT
4. Backend
5. Game Development
6. Frontend
7. Desktop App Development

## Learn JavaScript
1. Variables are containers that store data.

> Rules to name a variable:
> - a-z/A-Z/0-9/_/$ are used.
> - Keywords (if, else, for, ...) can't be used.
> - No space between words of the variable are allowed.
> - Give meaningful names.
> - It is case-sensitive.

Types of Variables:
1. Primitive: Simple and immutable
> There are 8 types of primitive data types like: number, strings, etc.
2. Non-primitive: Complex and mutable
> There are many non-primitive data types like: object, array, etc.

**Note**: Undefined = Variable has been declared but not assigned.
Null = Purposefully don't want any value to be assigned to a variable.

2. Operators are used to perform operations on operands.

3. Conditionals are used to check conditions.

Ways to define conditionals include:
- If-else if-else
- Nested if-else
- Ternary operator
- Switch statement

4. Loops are used for repetitive tasks.
- For Loop has 3 parts: initialisation, condition/boolean expression, increment/decrement.
> If increment/decrement isn't mentioned, it becomes an infinite loop.
> If condition isn't mentioned, it becomes an infinite loop.

- While loop begins with *while* keyword and contains boolean condition next to it.

> For Loop is used when you know the number of times the loop has to run and While Loop is used when execution is based on condition.

5. continue and break statements
- *continue* is used to skip iteration.
- *break* is used to come out of that loop.

6. Function means doing anything to solve a problem using logic. In other words, it is a block of code where you write the logic to solve a problem.
They can be re-used and called from anywhere.
- ```function``` is the keyword that is used to define a function.
- Conventions to name a function:
1. Function names should start with a lower case.
2. No gap/space should be there in the function name.
- () takes the parameters.
- {} includes the logic/function body.

- To avoid NaN, we can use default values in parameters.
- Another way to write functions is by using arrow functions.
> Disadvantage of arrow functions: you can't get arguments.

- Sometimes, you define a function and want it to get executed immediately. This situation is called IIFE (Immediately Invoke Function Expression).

7. Scope defines the context of using variables, functions and objects.
- Global Scope: Things can be used anywhere in the program.
- Function Scope (Local Scope): Things can be accessed inside a function, not outside.
- Block Scope: Things can be accessed inside a block, not outside.
> ```var``` is not block-scoped while ```let``` or ```const``` are block-scoped.

8. var vs let vs const
(1) var:
- It is used to define a variable.
- It has function scope but no block scope.
- It is hoisted.

(2) let:
- It is used to define a variable.
- It has both function and block scope.
- It has no hoisting.
> ```let``` is preferred instead of var.

(3) const:
- It is used to define a variable.
- It has both function and block scope. (Same as let)
- const variables are final, they can't be re-assigned a value.

9. String is a data type with 0-based indexing.
- Index should be valid (as per the length of the string).
- If index is invalid, undefined gets printed.
- It is immutable i.e. its value can't be changed because:
(1) It can be used to store sensitive information which shouldn't be changed.
(2) In a highly concurrent situation, if something is immutable, it will help you work better.
(3) It helps to save space.

10. Array is an ordered collection of data i.e. data is stored on the basis of index.
- In JavaScript, arrays can store data of different data types i.e. heterogenous data.
- An array is enclosed in [] brackets.
- Indexing is 0-based.
- Valid values of index = 0 to length - 1 (No negative indexing)
- Arrays are mutable i.e. their values can be modified.
- arr.push(ele1, ele2) allows to add multiple elements at the end of the array.
- arr.unshift(ele1, ele2) allows to add multiple elements at the beginning of the array.
- arr.pop() removes last element of the array.
- arr.shift() removes first element of the array.
- Slicing doesn't change the array while splicing does.

11. Objects are used to represent real-world problems.
- Objects have state, behaviour and relationships.
- Inside object, everything is in the form of key-value pairs.
- Data type of key can be either string or symbol.
- Data type of value can be any.
- Object is a complex entity.

12. Destructuring is used to fetch the values out of arrays and objects and assign them to the variables.
> While destructuring an object, variable name should match with the name of the key of the object.

13. Higher Order Functions in JavaScript
- **First Order/Normal Function** is a kind of function where primitive/objects are passed in the parameters and it returns primitive/object.

- **Higher Order Function** is a type of function where a parameter has function passed in it or it returns a function.

14. Some Higher Order Array Functions
- forEach method: helps to process each item of the array.
- map method: helps in the creation of new transformed array
- filter method: helps to filter out items of the array.
- reduce method: helps to accummalate the result by returning a single value

15. JavaScript supports both Synchronous/Blocking and Non-Blocking/Asynchronous processing.
> **Callback Function**: Function passing as argument to some higher order function is called as callback function. (Used in the Asynchronous context)

- **Event loop** keeps an eye on the callback function registered to the Web API and the timer.
- **Closure** is a type of function that can provide access to a local variable even outside its scope.

> Closures are used for encapsulation.

- Callback Hell/Pyramid of Doom: Callbacks inside callbacks lead to lots of confusion.
To avoid callback hell, promises and async/await are used.

16. Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
- Outcomes of Promises:
(1) Positive Outcome: Resolve
(2) Negative Outcome: Reject
- After resolution or rejection of promises, they go to settled/completed state.
- States of Promise Object:
Pending --> Resolve or Reject --> Settled
- To achieve the completion of all promises, we use ```all``` function of promise.
- To achieve the completion of any one promise, we use ```any``` function of promise.
> For Promise.all([P1, P2, P3]) --> If any one rejects --> catch and if all selects --> then
> For Promise.any([P1, P2, P3]) --> If any one selects --> then and if all rejects --> catch

- The concept of Promises is quite complicated due to so many callbacks/chaining. To make it synctactically easier, we use Async/Await.
- As soon as the function is prefixed with the keyword ```async```, it starts returning Promise object.
- ```await``` keyword helps to wait for the promise to complete. Once it gets completed, it moves onto the enxt step.

17. Error Handling helps to handle failures gracfully.
- **Error**: It occurs when you can't recover. They can't be controlled/handled.
- **Exception**: It is something that occurs but can be handled.

> As a Programmer, we handle exceptions (not errors).

- try: check if there is any issue
- catch: handle the issue at runtime

> Difference between Compile-time and Run-time Errors:

| Compile-time Error | Run-time Error |
| ------ | ------ |
| Compile-time errors occur when a program's code violates the rules of a programming language's syntax and fails to compile. These errors are detected by the compiler and must be fixed before the code can be compiled. | A run-time error is a problem that occurs when a program is executing, causing it to malfunction. |

## Learn Node.js
- NPM: Node Package Manager
- To install all the:
(1) Dependencies
(2) Project structure
(3) Metadata
we use NPM.
- NPM is available by default is Node.js is already installed.
- Check version of Node.js: ```node -v```
- Check version of NPM: ```npm -v```

- Use Cases of NPM:
(1) Create a Node.js project.
---> Use npm init and fill details.
---> package.json file contains all the information about the project.

(2) Get the dependencies/external modules
---> ```npm install module_name ``` --> Need active internet connectivity
---> package-lock.json file contains all the cyclic dependencies.

> **Module**: It is a single or multiple JavaScript file(s) which contains the logic to solve any problem, provided that it is being reused anywhere in the program.
> Three Types of Modules:

> 1. Custom Modules
> 2. In-built Modules like: fs, os, http
> 3. External Modules like: express

- Executing ```node index.js``` manually is tiresome and not feasible.
- Server: (Never stopping process) It allows applications to be live all the time.
> Every process is tied to a port number. Since server is also a process, it also has a unique port number, example: 8080.
- Client should know about:
(1) IP Address: Address of Machine
(2) Port Number of server
which ultimately becomes the URL.

- Client-Server Model or Request-Response Cycle
--> Client --(request)--> Server --(response)--> Client

- To create servers in node.js, 'http' module is present.