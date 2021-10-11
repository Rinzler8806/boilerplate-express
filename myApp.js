// const { response } = require('express');
var express = require('express');
var app = express();
// require('dotenv').config();

// app.use("/public", express.static(__dirname + '/public'));

// // process.env.MESSAGE_STYLE='uppercase';

// app.get("/json", function(req, res) {

//     var response = "Hello json"
//     if(process.env.MESSAGE_STYLE === 'uppercase'){
//         res.json({"message":"HELLO JSON"});
//       }
//       else{
//         res.json({"message":"Hello json"});
//       } 
//     });

//     console.log(process.env.MESSAGE_STYLE)

app.get("/", function(req, res) {
  res.send('Hello Express')
});

























 module.exports = app;
