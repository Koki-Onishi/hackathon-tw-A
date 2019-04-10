'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = '';
// 入室メッセージイベントを送信する
//何も入力されてないときのアラート
if(userName === ''){
  alert('ユーザー名を入力してください')
}

// サーバから受信した入室メッセージを画面上に表示する

socket.on('', function (data) {
    $('#thread').prepend('<p>' + '</p>');
});
