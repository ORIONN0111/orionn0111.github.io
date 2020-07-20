
let obj = document.getElementById("fade");
window.onload = function () {
	setTimeout(function () {
		obj.classList.remove('fadein');
	}, 600);
}
$(function () {
	// ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
	$('a:not([href^="#"]):not([target])').on('click', function (e) {
		e.preventDefault(); // ナビゲートをキャンセル
		url = $(this).attr('href'); // 遷移先のURLを取得
		if (url !== '') {
			obj.classList.add('fadeout');
			setTimeout(function () {
				window.location = url;  // 1.5秒後に取得したURLに遷移
			}, 500);
		}
		return false;
	});
});
let webE = document.getElementById("wedE");
let desingE = document.getElementById("desingE");
let moderingE = document.getElementById("moderingE");
let web = document.getElementById("wed");
let desing = document.getElementById("desing");
let modering = document.getElementById("modering");

webE.addEventListener('click', event => {
	web.classList.add('change');
	setTimeout(function () {
		if (web.style.zIndex == 1) {
			web.style.zIndex = 3;
			if (desing.style.zIndex = 2) {
				desing.style.zIndex = 1;
				modering.style.zIndex = 2;
			} else if (modering.style.zIndex = 2) {
				modering.style.zIndex = 1;
				desing.style.zIndex = 2;
			} else {
				console.log(err2)
			}
		} else if (web.style.zIndex == 2) {
			web.style.zIndex = 3;
			if (desing.style.zIndex = 3) {
				desing.style.zIndex = 2;
			} else if (modering.style.zIndex = 3) {
				modering.style.zIndex = 2;
			} else {
				console.log(err2)
			}
		} else if (web.style.zIndex = 3) {
			return
		} else {
			console.log(err3);
		}
	}, 150);
	setTimeout(function () {
		web.classList.remove('change');
	}, 1200);
	console.log("mo" + modering.style.zIndex);
	console.log("de" + desing.style.zIndex);
	console.log("we" + web.style.zIndex);
});
desingE.addEventListener('click', event => {
	desing.classList.add('change');
	setTimeout(function () {
		if (desing.style.zIndex == 1) {
			desing.style.zIndex = 3;
			if (web.style.zIndex = 2) {
				web.style.zIndex = 1;
				modering.style.zIndex = 2;
			} else if (modering.style.zIndex = 2) {
				modering.style.zIndex = 1;
				web.style.zIndex = 2;
			} else {
				console.log(err2)
			}
		} else if (desing.style.zIndex == 2) {
			desing.style.zIndex = 3;
			if (web.style.zIndex = 3) {
				web.style.zIndex = 2;
			} else if (modering.style.zIndex = 3) {
				modering.style.zIndex = 2;
			} else {
				console.log(err2)
			}
		} else if (desing.style.zIndex = 3) {
			return
		} else {
			console.log(err3);
		}
	}, 150);
	setTimeout(function () {
		desing.classList.remove('change');
	}, 1200);
	console.log("mo" + modering.style.zIndex);
	console.log("de" + desing.style.zIndex);
	console.log("we" + web.style.zIndex);
});
moderingE.addEventListener('click', event => {
	modering.classList.add('change');
	setTimeout(function () {
		if (modering.style.zIndex == 1) {
			modering.style.zIndex = 3;
			if (web.style.zIndex = 2) {
				web.style.zIndex = 1;
				desing.style.zIndex = 2;
			} else if (desing.style.zIndex = 2) {
				desing.style.zIndex = 1;
				web.style.zIndex = 2;
			} else {
				console.log(err2)
			}
		} else if (modering.style.zIndex == 2) {
			modering.style.zIndex = 3;
			if (desing.style.zIndex = 3) {
				desing.style.zIndex = 2;
			} else if (web.style.zIndex = 3) {
				web.style.zIndex = 2;
			} else {
				console.log(err2)
			}
		} else if (modering.style.zIndex = 3) {
			return
		} else {
			console.log(err3);
		}
	}, 150);
	setTimeout(function () {
		modering.classList.remove('change');
	}, 1200);
	console.log("mo" + modering.style.zIndex);
	console.log("de" + desing.style.zIndex);
	console.log("we" + web.style.zIndex);
});