const http = require('http');
const server = http.createServer((req,res)=>res.end("server is Running"));
const port = 3008;
server.listen(port);
