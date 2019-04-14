'use strict';

module.exports = function (socket) {
  // 入室メッセージをクライアントに送信する
  socket.on('sendEnterEvent', function (data) {
      if (!data) {
          return;
      }

      console.log('入室：' + data);

      // 他クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
      socket.broadcast.emit('receiveMessageEvent', data);
  });
};
