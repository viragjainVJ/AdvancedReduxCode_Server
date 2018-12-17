var http = require("http");
var express = require("express");

const app = express();

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("server listening", port);
//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello Worldsda!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
