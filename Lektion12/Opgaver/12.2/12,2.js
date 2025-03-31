let clockInterval;
const clock = document.getElementById("clock");
let elapsedTime = 0; // Track elapsed time in milliseconds

function padNumber(num, digits = 2) {
    return num.toString().padStart(digits, '0');
}

function startClock() {
    elapsedTime += 10; // Increment by 10ms
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;
    
    clock.textContent = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds, 3)}`;
}

function startClockInterval() {
    if (!clockInterval) { // Only start if not already running
        clockInterval = setInterval(startClock, 10); // Update every 10ms
    }
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
    document.getElementById("resetBtn").disabled = true;
    // document.getElementById("clock").style.backgroundColor = "lightgreen";
}

function stopClock() {
    clearInterval(clockInterval);
    clockInterval = null; // Reset the interval reference
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("resetBtn").disabled = false;
    // document.getElementById("clock").style.backgroundColor = "lightcoral";
}

function resetClock() {
    clearInterval(clockInterval);
    clockInterval = null;
    elapsedTime = 0;
    clock.textContent = "00:00:00:000";
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("resetBtn").disabled = true;
    // document.getElementById("clock").style.backgroundColor = "white";
}

document.getElementById("startBtn").addEventListener("click", startClockInterval);
document.getElementById("stopBtn").addEventListener("click", stopClock);
document.getElementById("resetBtn").addEventListener("click", resetClock);