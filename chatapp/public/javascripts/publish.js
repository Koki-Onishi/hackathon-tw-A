'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $("#userName").val();
    // 入力されたメッセージを取得
    const lastuser = $("#lastuser").val();
    const message = $('.room-message_textarea').val();

    const data = { 'userName': userName, 'message': message ,'lastuser':lastuser}

    // 投稿内容を送信
    socket.emit('sendMessageEvent', data);

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    const hiduke=new Date();
    const year=hiduke.getFullYear();
    $('#thread').prepend('<p>' + data.userName + 'さん: ' + data.message + hiduke + '</p>');
    const lastuser = $("#lastuser").val(data.userName);
});
