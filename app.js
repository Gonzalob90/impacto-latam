
//Create Server
var express = require('express');
var app = express();

//Previous configuration
var port = process.env.PORT || 3000;


//app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/public'));

/*app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});
*/

app.listen(port);





 

