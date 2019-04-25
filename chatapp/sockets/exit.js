'use strict';

module.exports = function (socket) {

    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data,user) {
        if (!data) {
            return;
        }

        console.log('退室：' + data);
        console.log(user);
        //const user = data;
        var result = user.indexOf(data);
        user.splice(result,1);
        console.log('確認');
        console.log(user);

        // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
        socket.broadcast.emit('receiveExitEvent', data,user);
    });
};
