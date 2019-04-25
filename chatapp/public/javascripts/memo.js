'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $("#userName").val();
    // 入力されたメッセージを取得
    const message = $('.room-message_textarea').val();

    if (!message.match(/\S/g) || message == '') {
        alert('何か入力してください。');
        return false;
    }

    // メモの内容を表示
    $('#thread').prepend('<pre>' + userName + 'さんのメモ: ' + message + '</pre>');

    return false;
}
