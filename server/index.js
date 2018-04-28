const io = require('socket.io')(process.env.PORT || 3000);

io.on('connection', socket => {
    socket.on('CLIENT_SEND_MESSAGE', message => {
        io.emit('SERVER_SEND_MESSAGE', message);
    });
});

console.log('Server started.');
