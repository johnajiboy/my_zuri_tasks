const http = require("http");
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type':'text/plain'});
    res.end('Welcome John')
})
''
// create a servr wiyh the HTTP variable
server.listen(4000,'127.0.0.1');
console.log("server running");