window.onload = function a() {
    let prl = document.querySelector('.preloader');
    prl.classList.add('load-prl');
}

function insert(num) {
    document.querySelector('.output-value').innerHTML += num;
}

function clean() {
    document.querySelector('.output-value').innerHTML = "";
    document.querySelector('.history-value').innerHTML = "";
}

function backspace() {
    let e = document.querySelector('.output-value').innerHTML;
    document.querySelector('.output-value').innerHTML = e.substring(0, e.length-1);
}

function solution() {
    let e = document.querySelector('.output-value').innerHTML;
    document.querySelector('.history-value').innerHTML = e + '=';
    document.querySelector('.output-value').innerHTML = eval(e);
}