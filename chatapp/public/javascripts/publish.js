'use strict';

// 投稿メッセージをサーバに送信する
$('#toukou').click(function publish() {
    // ユーザ名を取得
    const userName = $("#userName").val();
    // 入力されたメッセージを取得
    const lastuser = $("#lastuser").val();
    const message = $('.room-message_textarea').val();
    if(message.match(/\S/g)){
      const data = { 'userName': userName, 'message': message ,'lastuser':lastuser}
    // 投稿内容を送信


      socket.emit('sendMessageEvent', data);

      return false;
   }else{
      alert('メッセージを入力してください');
      return false;
   }
});
//DM処理



$('#dm').click(function(user_all){
  const userName = $("#userName").val();
  const message = $('.room-message_textarea').val();
  //const other_name = $("#other_user").val();
  alert(user_all[0]);
});



//エンター処理
$('#message').keypress(function(code){
  if(!event.shiftKey){
			if(code.keyCode === 13){
				$("#toukou").click();
				//alert('enter')
         return false;
			}
    }
	});

//スレッドをからに
$('#thred-empty').click(function(){
  alert('スレッドを空にします');
  $('#thread').empty();//実行すると今後のスレッドが見れなくなる　なぜなんや
});



//一つ前の自分のメッセージの取り消し
//自分のクライアントと他社のクライアントでそれぞれidを付与してそれぞれにempty処理する

$('#torikesi').click(function(){
  //alert('取り消し');
  var torikesi_kakunin = window.confirm('メッセージを取り消しますか？');
  if(torikesi_kakunin == true){
    const myname = $('#userName').val();
    //const myname1 = $("#myname").val();
    const data1 = { 'myname': myname}
    socket.emit('torikesi',data1);
  }else{
    return false;
  }
});

socket.on('receiveMessageEvent_torikesi_my', function(){
  $('#my_message').empty();
  const lastuser = $("#lastuser").val('aabss');//メッセージを取り消すと連続投稿処理をリセット
});
socket.on('receiveMessageEvent_torikesi_other',function(){
  $('#other_message').empty();
});





// サーバから受信した投稿メッセージを画面上に表示する 改行も
//自分のメッセージ
socket.on('receiveMessageEvent_my', function (data) {
    const hiduke=new Date();
    const year=hiduke.getFullYear();
    //alert('確認');
    $('#thread').prepend('<pre id="my_message"　><font color="red">'+ data.userName + 'さん: ' + data.message  + '</br>'+hiduke);

    const lastuser = $("#lastuser").val(data.userName);

    const my_message = $("#my_message").val(data.message);

    const myname1 = $("#myname").val(data.userName);//自分のID名

});


//他の人のメッセージ
socket.on('receiveMessageEvent_other', function (data) {
    const hiduke=new Date();
    const year=hiduke.getFullYear();
    //alert('確認');
    $('#thread').prepend('<pre id="other_message"　 >' + data.userName + 'さん: ' + data.message  + '</br>'+hiduke);
    $('#my_message').val()
    const my_last_message = data.userName;

    const lastuser = $("#lastuser").val(data.userName);


});
