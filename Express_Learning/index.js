const express = require('express');
console.log(typeof express); //function

const app = express();

//Simple Request-Response Cycle
//GET request
app.get("/", (req, res) => {
    res.send("Hello from the Express Server");
})

//Starting the Express Server
app.listen(8000, () => {
    console.log("Server has started.");
});