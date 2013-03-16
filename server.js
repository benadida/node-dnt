
var express = require('express');
var app = express();
var dnt = require('./dnt').dnt;

app.use(dnt({'foo':'bar'}));

app.get("/", function(req, res) {
  console.log("foobar");
  res.send("Yo DNT!");
});

app.listen(3000);
console.log('listening on port 3000');