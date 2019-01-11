'use strict';

const app = require('express')();
const http = require('http').Server(app);
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});