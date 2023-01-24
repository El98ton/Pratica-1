
const http= require('http');
const rout= require('./routess');

const server= http.createServer(rout.handler)

server.listen(3001);