var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));

// process.env.MESSAGE_STYLE='uppercase';

app.get("/JSON", function(req, res) {
    var response=({"message": "HELLO JSON"});
});































 module.exports = app;
