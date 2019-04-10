'use strict';

<<<<<<< Updated upstream
	// 入室メッセージをサーバに送信する
	// 入力されたユーザ名を取得する
	const userName = '';
	// 入室メッセージイベントを送信する


	// サーバから受信した入室メッセージを画面上に表示する
	socket.on('', function (data) {
	    $('#thread').prepend('<p>' + '</p>');
	});
=======
const socket =io.connect();
// 入室メッセージをサーバに送信する
socket.on('enterMyselfEvent',function(data){
  $('#thread').prepend('<p>' + data + '</p>');
});

socket.on('sendOtherEvent',function(data){
  $('#thread').prepend('<p>' + data + '</p>');
});
// 入力されたユーザ名を取得する
const userName = 'hhhh';
// 入室メッセージイベントを送信する
socket.emit('sendMessageEvent',userName);


// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
>>>>>>> Stashed changes
