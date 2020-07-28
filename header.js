
let header = document.getElementById("nav-content");
let menu = document.getElementById("nav-close");

$(function () {
	// ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
	$('a:not([href^="#"]):not([target])').on('click', function (e) {
		e.preventDefault(); // ナビゲートをキャンセル
		url = $(this).attr('href'); // 遷移先のURLを取得
		if (url !== '') {
			header.classList.add('endEf');
			menu.classList.add('endScEf');
		}
		return false;
	});
});