
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

let webE = document.getElementById("webE");
let designE = document.getElementById("designE");
let moderingE = document.getElementById("moderingE");
let web = document.getElementById("web");
let design = document.getElementById("design");
let modering = document.getElementById("modering");
web.style.zIndex = "3";
design.style.zIndex = "2";
modering.style.zIndex = "1";

webE.addEventListener('click', event => {
	web.classList.add('change');
	setTimeout(function () {
		if (web.style.zIndex == "1") {
			if (design.style.zIndex == "3") {
				web.style.zIndex = "3";
				design.style.zIndex = "2";
				modering.style.zIndex = "1";
				console.log("S");
			} else if (modering.style.zIndex == "3") {
				web.style.zIndex = "3";
				modering.style.zIndex = "2";
				design.style.zIndex = "1";
			} else {
				console.log(err2)
			}
		} else if (web.style.zIndex == "2") {
			if (design.style.zIndex == "3") {
				web.style.zIndex = "3";
				design.style.zIndex = "2";
				modering.style.zIndex = "1";
			} else if (modering.style.zIndex == "3") {
				web.style.zIndex = "3";
				modering.style.zIndex = "2";
				design.style.zIndex = "1";
			} else {
				console.log(err2);
			}
		} else if (web.style.zIndex == "3") {
			return
		} else {
			console.log(err3);
		}
	}, 200);
	setTimeout(function () {
		web.classList.remove('change');
	}, 1200);
	// console.log("mo" + modering.style.zIndex);
	// console.log("de" + design.style.zIndex);
	// console.log("we" + web.style.zIndex);
});
designE.addEventListener('click', event => {
	design.classList.add('change');
	setTimeout(function () {
		if (design.style.zIndex == "1") {
			if (web.style.zIndex == "3") {
				design.style.zIndex = "3";
				web.style.zIndex = "2";
				modering.style.zIndex = "1";
			} else if (modering.style.zIndex == "3") {
				design.style.zIndex = "3";
				modering.style.zIndex = "2";
				web.style.zIndex = "1";
			} else {
				console.log(err2);
			}
		} else if (design.style.zIndex == "2") {
			if (web.style.zIndex == "3") {
				design.style.zIndex = "3";
				web.style.zIndex = "2";
				modering.style.zIndex="1"
			} else if (modering.style.zIndex == "3") {
				design.style.zIndex = "3";
				modering.style.zIndex = "2";
				web.style.zIndex ="1"
			} else {
				console.log(err2)
			}
		} else if (design.style.zIndex == "3") {
			return
		} else {
			console.log(err3);
		}
	}, 200);
	setTimeout(function () {
		design.classList.remove('change');
	}, 1200);
	// console.log("mo" + modering.style.zIndex);
	// console.log("de" + design.style.zIndex);
	// console.log("we" + web.style.zIndex);
});
moderingE.addEventListener('click', event => {
	modering.classList.add('change');
	setTimeout(function () {
		if (modering.style.zIndex == "1") {
			if (web.style.zIndex == "3") {
				modering.style.zIndex = "3";
				web.style.zIndex = "2";
				design.style.zIndex = "1";
			} else if (design.style.zIndex == "3") {
				modering.style.zIndex = "3";
				design.style.zIndex = "2";
				web.style.zIndex = "1";
			} else {
				console.log(err2)
			}
		} else if (modering.style.zIndex == "2") {
			if (design.style.zIndex == "3") {
				modering.style.zIndex = "3";
				design.style.zIndex = "2";
				web.style.zIndex ="1"
			} else if (web.style.zIndex == "3") {
				modering.style.zIndex = "3";
				web.style.zIndex = "2";
				design.style.zIndex ="1"
			} else {
				console.log(err2)
			}
		} else if (modering.style.zIndex == "3") {
			return
		} else {
			console.log(err3);
		}
	}, 200);
	setTimeout(function () {
		modering.classList.remove('change');
	}, 1200);
	// console.log("mo" + modering.style.zIndex);
	// console.log("de" + design.style.zIndex);
	// console.log("we" + web.style.zIndex);
});