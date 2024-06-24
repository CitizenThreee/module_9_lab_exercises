const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

let online = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    online++;
    io.emit('chat message', {name: 'Server', content: 'a user connected'});
    io.emit('connection', 'a user connected');
    io.emit('online changed', online);

    socket.on('disconnect', () => {
        online--;
        io.emit('chat message', {name: 'Server', content:'a user disconnected'});
        io.emit('online changed', online);
    })

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg.content);
        socket.broadcast.emit('chat message', {name: msg.name, content: msg.content});
    });

    socket.on('user typing', (user) => {
        socket.broadcast.emit('user typing', user);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});