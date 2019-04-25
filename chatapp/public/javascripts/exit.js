'use strict';

// 退室メッセージをサーバに送信する
function exit(user_all) {
    // ユーザ名取得
    const userName = $("#userName").val();

    const data = userName;

    const user = $("#other_user").val();

    // 退室メッセージイベントを送信する
    //var result = user_all.indexOf(data);
    //user_all.splice(result,1);

    socket.emit('sendExitEvent', data, user);



    // 退室
    location.href = '/';

}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('receiveExitEvent', function (data,user) {
    $('#thread').prepend('<p>' + data + 'さんが退室しました。' + '</p>');

    //ログインユーザーの表示
    const l = user.length;
    $("#other_user").empty();
    for(var i=0 ; i<l ; i++){
      $('#other_user').prepend( user[i] +'さん  ');

    }
    const other_user = $('#other_user').val(user);


});
