'use strict';

const socket = io.connect();

// 自クライアントの接続イベント（enterMyselfEvent）を受信する
socket.on('enterMyselfEvent', function (data) {
    // 画面上にメッセージを表示
    $('#thread').prepend('<p>' + data + '</p>');
});

// 自クライアント以外の接続イベント（enterOtherEvent）を受信する
socket.on('enterOtherEvent', function (data) {
    // 画面上にメッセージを表示
    $('#thread').prepend('<p>' + data + '</p>');
});
