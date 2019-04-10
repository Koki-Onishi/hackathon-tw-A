'use strict';

module.exports = function (socket) {

        socket.emit('enterMyselfEvent', 'あなたが接続しました。');

        // 自クライアント以外に接続イベント（enterOtherEvent）を送信する
        socket.broadcast.emit('enterOtherEvent', '他のクライアントが接続しました。');
};
