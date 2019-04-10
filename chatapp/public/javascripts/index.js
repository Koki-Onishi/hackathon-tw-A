'use strict';

	// チャットルームに入室する
	function enter() {
	    // 入力されたユーザ名を取得する

	    const userName = $('#userName').val();
			//alert(userName);
	    // ユーザ名が未入力でないかチェックする
			if(userName !== ''){
				alert('ユーザー名: '+ userName + ' でログインします');
				$('form').submit();
			}elseif(userName === '' || userName === '/'){
				alert('文字を入力してください');
		}
	}
