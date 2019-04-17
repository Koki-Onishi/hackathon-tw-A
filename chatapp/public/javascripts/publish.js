'use strict';

// 投稿メッセージをサーバに送信する
$('#toukou').click(function publish() {
    // ユーザ名を取得
    const userName = $("#userName").val();
    // 入力されたメッセージを取得
    const lastuser = $("#lastuser").val();
    const message = $('.room-message_textarea').val();

    const data = { 'userName': userName, 'message': message ,'lastuser':lastuser}


    // 投稿内容を送信


    socket.emit('sendMessageEvent', data);

     return false;
});

$('#message').keypress(function(code){
  if(!event.shiftKey){
			if(code.keyCode === 13){
				//alert('enter');
				$("#toukou").click();
				//alert('enter')
         return false;
			}
    }
	});

// サーバから受信した投稿メッセージを画面上に表示する 改行も
socket.on('receiveMessageEvent', function (data) {
    const hiduke=new Date();
    const year=hiduke.getFullYear();
    $('#thread').prepend('<pre>' + data.userName + 'さん: ' + data.message + hiduke + '</pre>');
    const lastuser = $("#lastuser").val(data.userName);
});
