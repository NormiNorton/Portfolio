const playBtn  = document.querySelector('.play');
const stopBtn  = document.querySelector('.stop');
const playIco  = document.querySelector('.play_ico');
const pauseIco = document.querySelector('.pause_ico');
const hour     = document.querySelector('.hour');
const minutes  = document.querySelector('.minutes');
const seconds  = document.querySelector('.seconds');
const milisec  = document.querySelector('.milisec');

let hr = min = sec = ms = "0" + 0;
let startTimer;
let act;

stopBtn.addEventListener("click", stop);
playBtn.addEventListener("click", tglBtn);
function tglBtn() {
    act = document.querySelector('.active');
    if(act) {
        pause();
    }
    else {
        start();
    }
}

function stop() {
    playBtn.classList.remove("active");
    playIco.classList.remove("off");
    pauseIco.classList.add("off");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
}

function pause() {
    clearInterval(startTimer);
    playBtn.classList.remove("active");
    playIco.classList.remove("off");
    pauseIco.classList.add("off");
}

function start() {
    playBtn.classList.add("active");
    playIco.classList.add("off");
    pauseIco.classList.remove("off");

    startTimer = setInterval(()=>{
        ms++;
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }

        putValue();
    }, 10)
}

function putValue() {
    milisec.innerHTML = ms;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hour.innerHTML = hr;
}