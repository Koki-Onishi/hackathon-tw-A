'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
        if (!data) {
            return ;
        }

        console.log('クライアントの入力値：' + data.userName +'\n'+ data.message );
        console.log('最後に投稿したユーザー' + data.lastuser);
        console.log('今投稿したユーザー' + data.userName);
        console.log('');
        // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
        if(data.userName!=data.lastuser){
            socket.emit('receiveMessageEvent_my', data);

            socket.broadcast.emit('receiveMessageEvent_other', data);

      }else return;
    });

    //取り消し処理
    socket.on('torikesi', function (data1) {
      console.log('取り消しコンソール');
      console.log('実行ユーザーネーム:' + data1.myname);
      //console.log('other' + data1.myname1);
        socket.emit('receiveMessageEvent_torikesi_my',data1);
        socket.broadcast.emit('receiveMessageEvent_torikesi_other', data1);
    });

};
