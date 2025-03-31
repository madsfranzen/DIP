let clockInterval;
const clock = document.getElementById("clock");
let elapsedTime = 0; // Track elapsed time in seconds

function padNumber(num) {
    return num.toString().padStart(2, '0');
}

function startClock() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    
    clock.textContent = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

function startClockInterval() {
    if (!clockInterval) { // Only start if not already running
        clockInterval = setInterval(startClock, 1000);
    }
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("clock").style.backgroundColor = "lightgreen";
}

function stopClock() {
    clearInterval(clockInterval);
    clockInterval = null; // Reset the interval reference
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("resetBtn").disabled = false;
    document.getElementById("clock").style.backgroundColor = "lightcoral";
}

function resetClock() {
    clearInterval(clockInterval);
    clockInterval = null;
    elapsedTime = 0;
    clock.textContent = "00:00:00";
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("clock").style.backgroundColor = "white";
}

document.getElementById("startBtn").addEventListener("click", startClockInterval);
document.getElementById("stopBtn").addEventListener("click", stopClock);
document.getElementById("resetBtn").addEventListener("click", resetClock);