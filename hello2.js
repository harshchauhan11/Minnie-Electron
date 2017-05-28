var express = require('express');
var path = require('path');
var app = express();
var pub = path.join(__dirname, 'app');

// Define the port to run on
app.set('port', 3000);

app.use(express.static(pub));

app.get('/', function (req, res) {
    //console.log(pub);
    //console.log(path.join(__dirname, 'public'));
    //console.log(__relative);
    //console.log(__basename);
   res.sendFile(pub + "/" + "index.htm" );
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});