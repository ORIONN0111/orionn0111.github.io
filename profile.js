
var objT = document.getElementById("fadeoutT");
var objR = document.getElementById("fadeoutR");
$(function () {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
    $('a:not([href^="#"]):not([target])').on('click', function (e) {
        e.preventDefault(); // ナビゲートをキャンセル
        url = $(this).attr('href'); // 遷移先のURLを取得
        if (url !== '') {
            objT.classList.add('fadeoutT');
            objR.classList.add('fadeoutR');
            setTimeout(function () {
                window.location = url;  // 1.5秒後に取得したURLに遷移
            }, 500);
        }
        return false;
    });
});