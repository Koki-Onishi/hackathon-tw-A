'use strict';
// サーバから受信した入室メッセージを画面上に表示する
socket.on('enterEventstart',function (are) {
    // ユーザ名取得

    const userName = $("#userName").val();

    const data = userName;



    // 退室メッセージイベントを送信する
    socket.emit('enterEventsecond', data);
});

//ログインユーザーの表示
socket.on('enterEventfinal_my', function (data, user_all) {
  const l = user_all.length;
  $("#other_user").empty();
  for(var i=0 ; i<l ; i++){
    $('#other_user').prepend( user_all[i] +'さん  ');

  }
  const other_user = $('#other_user').val(user_all);
});

socket.on('enterEventfinal_other', function (data, user_all) {
    $('#thread').prepend('<p>' + data + 'さんが入室しました。' + '</p>');

    //ログインユーザーの表示
    const l = user_all.length;
    $("#other_user").empty();
    for(var i=0 ; i<l ; i++){
      $('#other_user').prepend( user_all[i] +'さん  ');

    }
    const other_user = $('#other_user').val(user_all);
});
