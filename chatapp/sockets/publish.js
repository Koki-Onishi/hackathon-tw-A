'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
        if (!data) {
            return ;
        }

        console.log('クライアントの入力値：' + data.userName + data.message);

        // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
        if(data.userName!=data.lastuser){
        io.sockets.emit('receiveMessageEvent', data);
      }else return;
    });
};
