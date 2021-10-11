// const { response } = require('express');
var express = require('express');
var app = express();
// require('dotenv').config();

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next()
});

// Build a simple logger. For every request, it should log to the console a string taking the following format: method path - ip. 
// An example would look like this: GET /json - ::ffff:127.0.0.1. 
// Note that there is a space between method and path and that the dash separating path and ip is surrounded by a space on both sides. 
// You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using req.method, req.path and req.ip. 
// Remember to call next() when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.

// Note: Express evaluates functions in the order they appear in the code. 
// This is true for middleware too. If you want it to work for all the routes, it should be mounted before them.

app.use("/public", express.static(__dirname + '/public'));

// // process.env.MESSAGE_STYLE='uppercase';

app.get("/json", function(req, res) {

    var response = "Hello json"
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message":"HELLO JSON"});
      }
      else{
        res.json({"message":"Hello json"});
      } 
    });

//     console.log(process.env.MESSAGE_STYLE)

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
























 module.exports = app;
