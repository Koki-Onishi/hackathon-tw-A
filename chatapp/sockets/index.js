'use strict';

module.exports = function (server) {

    const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
    const io = socketIo.listen(server);
    var user_all = [];
    io.sockets.on('connection', function (socket) {
        // 投稿モジュールの呼出
        require('./publish')(socket, io );

        // 入室モジュールの呼出
        require('./enter')(socket, user_all);

        // 退室モジュールの呼出
        require('./exit')(socket);
    });
};
