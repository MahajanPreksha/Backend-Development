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

## Learn MongoDB
- It is a Database Management System that is document-oriented and stores data in the form of collections and documents.
- It gained popularity in mid 2000s.
- 'Mongo' stands for huge/humoungous.
> Limitations of RDBMS like: MySQL, Oracle include: storing data in the form of tables i.e. it has fixed schema and performance issues occur due to huge amount of data.
- In modern world, data can't be stored in a tabular format or with a fixed schema. We need **flexible** schema.
- Also, MongoDB is very efficient in storing huge amount of data. So, it is **natively scalable**.
- It is a NoSQL Database.

> In MySQL/Oracle/RDBMS, Database comprises of Tables which are further made up of Rows and Columns.
> Data is stored in the form of rows. A complete row represents data/entity.

- In MongoDB, Database comprises of collections which are further made up of Documents where data is stored. Instead of columns, we have fields.
- Document in MongoDB is similar to JSON type structure called as BSON (Binary Javascript Object Notation).
- Collection in MongoDB is similar to tables in MySQL. It stores various documents.

- One server of MongoDB can contain many databases. One database can contain multiple collections. One collection can have multiple documents.

- Advantages of MongoDB:
1. It gives you the best of SQL and NoSQL.
2. It is free and open source.
3. It allows flexible schema.
4. It is reliable.
5. It allows data replication.
6. It is horizontally scalable.

> By default, MongoDB creates a unique index on the _id field during the creation of a collection.

- Use cases of MongoDB:
1. Product Data Management
2. CMS
3. Operational Intelligence
4. Online Applications

- Sharding in MongoDB: Horizontally scaling up the database is called Sharding.
In other words, it is distributing data on multiple machines.

- Replica Sets in MongoDB: Storing data in more than one machine is called as Replica Set.
This pattern is called Replication.

> MongoDB is highly scalable because: (a) Sharding (b) Creation of Replica Sets.

- Storing of Data in MongoDB: in BSON i.e. Binary JSON.

---> It takes less space.

---> It leads to faster traversal (improved query speed).

---> It supports large number of datatypes.

> Data Types in MongoDB:
> **Text**: String
> **Numeric**: 32-bit integer, 64-bit integer, Double, Decimal128
> **Date/Time**: Date, Timestamp
> **Other**: Object, Array, Binary Data, ObjectID, Boolean, Null, Regular expression, JavaScript, Min key, Max key

- Data Modelling in MongoDB: It is used to represent entities and relationships between entities.

> Relationship Types:
> 1. One to One
> 2. One to Many
> 3. Many to One
> 4. Many to Many

To represent the relationships, there are two types:
1. Embedded Document/Data: Document nested inside another document --> Denormalised form of data
2. References --> Normalised form of data

- Advantages of Embedded Data:
1. **Fast Query** --> Single query can fetch all the data. --> All data is stored as one document.
2. **Easy to Create**
3. **Easy to maintain transactions** --> Single document makes it transactional.

> Max. size of one document is just 16 MB.

- Disadvantages of Embedded Data:
1. Too much embedding can exceed 16 MB limit.
2. Excess of data gets loaded each time i.e. Eager Loading can occur. This can lead to network or storage overhead.

- Advantages of Reference:
1. Documents are smaller.
2. Lazy Loading occurs i.e. it loads only that much data which is needed.

- Disadvantages of Reference:
1. Query is slower due to the need of multiple queries.
2. Transaction becomes complicated.

> Inside a MongoDB server, we can build multiple databases.
> Example: test database can have multiple collections (c1, c2, c3).
> Each collection can have multiple documents.

- ```mongosh```: open terminal. By default, we get *test* database.
- ```cls``: To clear the terminal screen

#### Commands for Database
- ```show databases```: To see/list already created databases (only those which contain data) in the MongoDB server
> Shortcut: ```show dbs``
- ```use db_name```: Use an existing database
- ```use new_db_name```: Create a new database

#### Commands for Collection
- ```show collections```: List all collections
- ```db.createCollection("collection_name")```: Create a new collection
> Confirmation: {ok: 1} ---> Command has successfully been executed.
- ```db.collection_name.renameCollection("collection_new_name")```: Update the name of a collection
- ```db.collection_name.remove({})```: Delete one or more documents from the collection ---> Old Command
- ```db.collection_name.drop()```: Delete the entire collection
> Confirmation: true

- **CRUD**: Create, Read, Update, Delete

#### Commands for Document
- Create: Insert Queries ---> Insert Documents in the form of BSON

```db.collection_name.insertOne(document_name)```: Insert one document

```db.collection_name.insertMany([document1_name, document2_name])```: Insert more than one documents

```db.collection_name.find()```: Find all documents

```db.collection_name.find({field:value})```: Search out the document based upon field-value pair

```db.collection_name.find({'field.second_field' : 'value'})```: Search out the nested document based upon key-value pair

```db.students.find({name: {$regex:/^P/}})```: Using Regex to search for results

```db.collection_name.find().limit(n)```: Search for 'n' number of documents

```db.collection_name.find().pretty()```: Format the output

```db.collection_name.find().skip(n)```: Skips first 'n' number of documents

```db.collection_name.find().sort({field:'value'})```: Search for documents based upon sorting criteria
> value as 1 --> Ascending order and value as -1 --> Descending order

```db.collection_name.find().count()```: Count number of documents

```db.collection_name.distinct('field')```: Retrieve distinct value

```db.collection_name.distinct('field.second_field')```: Retrieve distinct value for nested field

```db.collection_name.find({field: {$lt: n}})```: Retrieve data less than n

```db.collection_name.find({field: {$lte: n}})```: Retrieve data less than or equal to n

```db.collection_name.find({field: {$gt: n}})```: Retrieve data greater than n

```db.collection_name.find({field: {$gte: n}})```: Retrieve data greater than or equal to n

```db.collection_name.find({field: {$ne: 'string is also accepted in some operators'}})```: Retrieve data not equal to n

```db.collection_name.find({field: {$in: [n1, n2, n3, ...]}})```: Retrieve data that comes in the list (Works like OR)

```db.collection_name.find({field: {$all: [n1, n2, n3, ...]}})```: Retrieve data that comes in the list (Works like AND)

- Update: Updation of documents
```db.collection_name.update({field:'value'}, {$set: {otherField: 'new value'}}, {upsert: true})```: Update document --> Multiple documents can also be updated

```db.collection_name.updateOne({field:'value'}, {$inc: {number: num}})```: Increment the value num

```db.collection_name.updateOne({_id:'value'}, {$inc: {numbers: num}})```: Push the value num to the numbers array where id is value

- Delete: Deletion of documents
```db.collection_name.deleteOne({field:'value'})```: Deletes one document based upon filter or search criterion

```db.collection_name.deleteMany({field:{$in: [value1, value2]}})```: Deletes more than one documents based upon filter or search criterion

- ODM: Object Data Model ---> Mongoose

> Application (JavaScript) ---> ODM (Translator) ---> Database (Mongo Query)
> Note: In case of RDBMS like: MySQL or Oracle, we use ORM (Object Relational Model).

**Mongoose** can help you do CRUD operations using JavaScript without Mongo Queries.

## Learn REST APIs

- **API**: Application Programming Interface
- The communication between the server-side and the client-side UI happens with the help of an interface called API. (Request Response Cycle)
- API specifies the request that can be made and how to make them, including the data format and other conventions.
- A web API is an application programming interface for a web server.
- In simple terms, APIs allow two applications to communicate (sharing data) with each other.

> SOAP: Simple Object Access Protocol ---> Old technique

> SOAP was allowed to make the communication with the help of XML file format. 

> XML is language agnostic as it performs serialisation and deserialisation.

> But XML is a slow and heavy language [10% - actual data and 90% - metadata], leading to slow network transfer. So, SOAP is not flexible.

- REST APIs provide flexibility in case of file formats. By default, JSON is used which is light-weight and fast.
- JSON: JavaScript Object Notation
- It is a file format which is language agnostic.
- It stores data in the form of key-value pairs.
- **REST**: Representational State Transfer
- At the core of REST, there is data. Representation of the state of data gets transferred layer-by-layer.
- REST endpoint: It refers to a specific URL(Unique Resource Locator) or URI (Unique Resource Identifier) in a RESTful API that a client can interact with to perform certain operations, like retrieving or modifying data.
- On the basis of REST endpoints, CRUD applications can take place on the resources.
- URI: ip_address:port_number/application_name/version_number/resource_name (**plural noun**)/resource --> Absolute Path of Resource
> Example - Vehicle Management System

> URI: 111.21.31.42:8181/VMS/v1/vehicles/4351

- REST APIs are built on top of **HTTP**.
- HTTP Verbs denotes the type of action to be taken.
1. Create --> POST
2. Read --> GET
3. Update --> PUT
4. DELETE --> DELETE

- HTTP Verb (Action) + URI (Resource) = Restful URIs
> Example of Restful URI for creating movies in a Movie Booking Application: POST 127.0.0.1:8080/mba/v1/movies (movie body needs to be given along)

> Example of searching/fetching all the movies: GET 127.0.0.1:8080/mba/v1/movies

> Example of updating a movie with id=12345: PUT 127.0.0.1:8080/mba/v1/movies/12345 (request body needs to be given along)

- **Path params** in Restful URIs: Request/Path Parameters dynamic segments of a URI used in RESTful APIs to identify specific resources. They are typically part of the endpoint's path and are used to pass information to the server.
> Example: PUT 127.0.0.1:8080/mba/v1/movies/12345; Here 12345 is the path param.

- **Query params** in Restful URIs: It is used mostly for filtering.
> Example: GET 127.0.0.1:8080/mba/v1/movies?language="Hindi"&actor="SRK"; Anything after '?' is the query param.

> Idempotent: If the result of the restful URI/endpoint has same effect even after calling it many times, it is idempotent.
> Otherwise, it is non-idempotent.

- GET: Idempotent --> SAFE
- PUT: Idempotent --> SAFE
- DELETE: Idempotent --> SAFE
- POST: Non-Idempotent (It will always create a new resource) --> NOT SAFE

- Components of a REST Message:
1. HTTP Method: Helps in defining the action to be taken on the resource (CRUD operations).
2. Resource Path/URI: Specifies the path of the resource and consists of path and query string parameters.
3. Header: Contains information about the message-information related to authentication, instructions to process a message, etc.
4. Body: Specifies the information that is to be acted upon in terms of CRUD Operations.

- Response Codes: HTTP has standard status codes that are returned as part of the HTTP response.
1. 200: Success
2. 201: Created
3. 301: Moved permanently (Redirect status response code)
4. 401: Unauthorised
5. 404: Resource not found
6. 500: Server error

## Learn Express.js

- Express.js is a framework of Node.js that can improve the experience of creating any web application/Restful APIs.

> To avoid writing the boiler plate code and easily collaborate with others, we use frameworks.

- Request-Response Cycle in detail:
1. User enters a URL in their browser.
2. An HTTP request is submitted to the URL's corresponding server.
3. The server hosting the requested URL processes the HTTP request and determines the appropriate response to send back to the user.
4. An HTTP response is sent to the user (client) in the form of HTML, JSON, plain text or other formats.
5. User recevies a response, usually in the form of an HTML page, which renders on their browser window.

- Request-Response Cycle in Node.js application:
1. Client requests something to Node's HTTP server.
2. HTTP server hands request to your function.
3. Your function hands response to HTTP server.
4. HTTP server sends response to Client browser, mobile app, etc.

- Challenges in using only Node.js:
1. As the number of types of client requests increases, handling those gets complex.
2. Many of the commonly used features such as reusable HTML require a lot of code manipulations.
3. There is lots of boilerplate code. ---> BIGGEST CHALLENGE!!

- Advantages of using Express in your application:
1. Faster server-side development
2. Pluggable middlewares
3. Support for templating engines
4. Clean routing supports
5. Debugging support