const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url=='/hello'){
        res.end("Hello World");
    }
    else{
        res.end("You are trying to hit a wrong URL");
    }
})

server.listen(8000, () => {
    console.log("Server has started."); //Server has started
})

//localhost:8000 --> You are trying to hit a wrong URL

//localhost:8000/hello --> Hello World