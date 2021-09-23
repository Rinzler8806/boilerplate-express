var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));

app.get("/JSON", function(req, res) {
    res.process.env=JSON({"message": "HELLO JSON"});
});































 module.exports = app;
