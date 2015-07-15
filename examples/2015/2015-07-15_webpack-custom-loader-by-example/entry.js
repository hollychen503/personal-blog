var path = require('path');
var http = require('http');
var express = require('express');
var require1 = require('./require1');
var require2 = require('./require2');

var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 3000);
//app.use(express.static(publicPath));

// router.use('/', function(req, res, next) {
//   require1.do("someStuffddd");
//   res.status(200).send({test: 'test'});
// });

app.use(function (req, res, next) {
  console.log('Timddde: %d', Date.now());
  require1.do("someStuffddd");
  next();
})

require1.do("dddd");

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

console.log('main module');