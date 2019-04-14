'use strict';

module.exports = function (socket) {
  // 入室メッセージをクライアントに送信する
  socket.emit('enterEventstart','');
  socket.on('enterEventsecond', function (data) {
      if (!data) {
          return;
      }

      console.log('入室：' + data);

      // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
      socket.broadcast.emit('enterEventfinal', data);
  });
};
