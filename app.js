
//Create Server
var express = require('express');
var app = express();

//Previous configuaration
var port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
//New attempt
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] != 'https') {
        res.redirect('https://' + req.headers.host + req.path);
    }
    else {
        return next();
    }
});
//
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(port);





 

