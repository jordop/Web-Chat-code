import cors from 'cors';
import express from 'express';
import { createServer } from 'https';
import { Server } from 'socket.io';
import process from "process";
import { readFileSync } from 'fs';

const options = {
  key: readFileSync('key.pem'),
  cert: readFileSync('cert.pem')
};

const app = new express()
const server = createServer(options, app)
const io = new Server(server, {
  cors: {
    origin: "*",
  }
})
const port = 4000

if (process.pid)
    console.log("Process id is: ") + process.pid

var SERVERS = [{
  name: 'Global chat',
  participants: 0,
  id: 1,
  sockets: []
}, {
  name: 'Funny',
  participants: 0,
  id: 2,
  sockets: []
}];

app.get('/getChannels', (req, res) => {
  res.json({
    channels: SERVERS
  })
})

io.on('connection', (socket) => { // socket object may be used to send specific messages to the new connected client
  console.log('new client connected');
  socket.emit('connection', null);
  socket.on('channel-join', id => {
      console.log('channel join', id);
      SERVERS.forEach(c => {
          if (c.id === id) {
              if (c.sockets.indexOf(socket.id) == (-1)) {
                  c.sockets.push(socket.id);
                  c.participants++;
                  io.emit('channel', c);
              }
          } else {
              let index = c.sockets.indexOf(socket.id);
              if (index != (-1)) {
                  c.sockets.splice(index, 1);
                  c.participants--;
                  io.emit('channel', c);
              }
          }
      });

      return id;
  });
  socket.on('send-message', message => {
      io.emit('message', message);
  });

  socket.on('disconnect', () => {
      SERVERS.forEach(c => {
          let index = c.sockets.indexOf(socket.id);
          if (index != (-1)) {
              c.sockets.splice(index, 1);
              c.participants--;
              io.emit('channel', c);
          }
      });
  });

});


server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})