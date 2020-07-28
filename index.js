
let obj = document.getElementById("room");
let dF = document.getElementById("dleft");
let dR = document.getElementById("dright");
let moon = document.getElementById("moon");
let orionn = document.getElementById("orionn");
let kusaA = document.getElementById("kusaA");
let kusaB = document.getElementById("kusaB");
let book = document.getElementById("book");

$(function () {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
    $('a:not([href^="#"]):not([target])').on('click', function (e) {
        e.preventDefault(); // ナビゲートをキャンセル
        url = $(this).attr('href'); // 遷移先のURLを取得
        if (url !== '') {
            obj.classList.add('roomout');
            dF.classList.add('doorLeftOut');
            dR.classList.add('doorRightOut');
            moon.classList.add('moonout');
            orionn.classList.add('orionnout');
            kusaA.classList.add('kusaOut1');
            kusaB.classList.add('kusaOut1');
            book.classList.add('bookOut')
            setTimeout(function () {
                window.location = url;  // 1.5秒後に取得したURLに遷移
            }, 1000);
        }
        return false;
    });
});