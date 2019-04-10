'use strict';

	// チャットルームに入室する
	function enter() {
	    // 入力されたユーザ名を取得する
	    const userName = $('#userName').text();
	    // ユーザ名が未入力でないかチェックする
			if (userName === ''){
				alert('文字を入力してくだい');
			}
			$('form').submit();
	}
