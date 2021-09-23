const { response } = require('express');
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));

// process.env.MESSAGE_STYLE='uppercase';

app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
      res.json({
        "message": "HELLO JSON"
      });
    }
      res.json({
        "message": "Hello json"
      });  
  });





























 module.exports = app;
