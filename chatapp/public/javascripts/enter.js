'use strict';

function enter() {
    // ユーザ名取得
    const userName = $("#userName").val();

    const data = userName;

    // 入室メッセージイベントを送信する
    socket.emit('sendEnterEvent', data);
}

// サーバから受信した入室メッセージを画面上に表示する

socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + 'さんが入室しました。' + '</p>');
});
