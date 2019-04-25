'use strict';

	// チャットルームに入室する



$('#mybutton').click(function enter() {
	    // 入力されたユーザ名を取得する
	    const userName = $('#userName').val();
			//const other_user = $('#userName').val();
			alert(userName);
			//user_all.push(userName);
	    // ユーザ名が未入力でないかチェックする
			if(userName.match(/\S/g)){
				alert('ようこそ6');
				$('form').submit();
			}else{
				alert('文字を入力してください');
		}
	});

$('#userName').keypress(function(code){
			if(code.keyCode == 13){
				//alert('enter');
				$("#mybutton").click();
				//alert('enter')
			}
		});
