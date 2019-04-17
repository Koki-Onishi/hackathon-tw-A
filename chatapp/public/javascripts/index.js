'use strict';

	// チャットルームに入室する
	// チャットルームに入室する



$('#mybutton').click(function enter() {
	    // 入力されたユーザ名を取得する
	    const userName = $('#userName').val();
			alert(userName);
	    // ユーザ名が未入力でないかチェックする
			if(userName !== ''){
				alert('ようこそ');
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
