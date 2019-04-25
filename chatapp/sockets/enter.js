'use strict';

module.exports = function (socket, user_all) {
  // 入室メッセージをクライアントに送信する
  socket.emit('enterEventstart','');
  socket.on('enterEventsecond', function (data) {
      if (!data) {
          return;
      }

      console.log('入室：' + data);
      var result = user_all.some(function(value){
        return value === data;
      });
      console.log(result);

      if(result != true){
        user_all.push(data);
        console.log(user_all);
      }
//また定期的にログインユーザーIDがdataに送られてきているため同じID名だと配列に追加されないようにした
//この流れで同じID名だとログインできない処理をやれたらいいな
//退出処理やってねぇや




      // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
      socket.emit('enterEventfinal_my', data , user_all);



      socket.broadcast.emit('enterEventfinal_other', data , user_all);




  });
};
