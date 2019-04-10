'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data) {
        if (!data) {
            return;
        }

        console.log('退室：' + data);

        // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
        // io.sockets.emit('receiveExitEvent', data);
    });
};
