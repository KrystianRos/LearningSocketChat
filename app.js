const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);

(function () {
  'use strict';
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

  io.on('connect', (socket)=>{
    console.log('A user has been conencted');
    socket.on('chat message', (data) => {
      console.log(`message ${data} received`);
      io.emit('chat message', data);
    });
  });

  http.listen(3000, function(){
    console.log('listening on *:3000');
  });
}());