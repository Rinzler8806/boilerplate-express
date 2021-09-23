const { response } = require('express');
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));

// process.env.MESSAGE_STYLE='uppercase';

app.get("/json", function(req, res) {
    response.message=({"message": "Hello json"});

    if(process.env.MESSAGE_STYLE='uppercase'){
        response.message=response.message.toUpperCase();
    }
    return res.json(response);
});































 module.exports = app;
