var express = require('express');
var router = express.Router();
var randomName = require('random-game-name');

var names = [];

/* GET home page. */

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/name', function(req, res) {
  var name = randomName.random();
  console.log(name);
  names.push(name);
  res.send(names);
});


module.exports = router;
