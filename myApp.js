const { response } = require('express');
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));

// process.env.MESSAGE_STYLE='uppercase';

app.get("/json", function(req, res) {

    var response = "Hello json"
    if (process.env.MESSAGE_STYLE == "uppercase") {
      response = response.toUpperCase();
    } 
    res.json({
      message: response
    });
  });





























 module.exports = app;
