'use strict';
// サーバから受信した入室メッセージを画面上に表示する
socket.on('enterEventstart',function (are) {
    // ユーザ名取得
    const userName = $("#userName").val();

    const data = userName;

    // 退室メッセージイベントを送信する
    socket.emit('enterEventsecond', data);
});

socket.on('enterEventfinal', function (data) {
    //const userName = $("#userName").val();
    $('#thread').prepend('<p>' + data + 'さんが入室しました。' + '</p>');
});
