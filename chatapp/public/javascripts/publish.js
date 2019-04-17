'use strict';

// 投稿メッセージをサーバに送信する
$('#toukou').click(function publish() {
    // ユーザ名を取得
    const userName = $("#userName").val();
    // 入力されたメッセージを取得
    const message = $('.room-message_textarea').val();

    if (!message.match(/\S/g) || message == '') {
        alert('何か入力してください。');
        return false;
    }

    const data = { 'userName': userName, 'message': message }


    // 投稿内容を送信


    socket.emit('sendMessageEvent', data);

    return false;
});

$('#message').keypress(function(code){
			if(code.keyCode == 13){
				alert('enter');
				$("#toukou").click();
				//alert('enter')
			}
		});

// サーバから受信した投稿メッセージを画面上に表示する 改行も
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data.userName + 'さん: ' + data.message + '</p>');
});
