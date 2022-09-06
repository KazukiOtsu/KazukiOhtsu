const stopWatch = document.getElementById("stopWatch")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

let minsec = 0;
let sec = 0;
let min = 0;
let hour = 0;

let countUp = function() {
    minsec ++
    if(minsec >= 100) {
        sec++;
        minsec = 0;
    }
    if(sec >= 60) {
        min++;
        sec = 0;
    }
    if(min >= 60) {
        hour++;
        min = 0;
    }
    stopWatch.innerHTML = ("00" + hour).slice(-2) + ":" + ("00" + min).slice(-2) + ":" + ("00" + sec).slice(-2) + ":" + ("00" + minsec).slice(-2);
};

let interval;

function startTimer() {
    interval = setInterval(countUp, 10);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
}

function stopTimer() {
    clearInterval(interval);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
}

function resetTimer() {
    hour = 0;
    min = 0;
    sec = 0;
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
    stopWatch.innerHTML = ("00:00:00:00")
}



