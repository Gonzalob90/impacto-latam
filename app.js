'use strict'

var express = require('express');

//Create our app
var app = express();

app.use(express.static('public'));


app.set('port', (process.env.PORT || 5000));

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
