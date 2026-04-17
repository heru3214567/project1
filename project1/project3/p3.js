const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const stopBtn = document.getElementById("stopBtn");
const countLabel = document.getElementById("countlabel");

let count = 0;
let intervalId = null;

// Update display
function updateDisplay() {
    countLabel.textContent = count;
}

// Decrease (manual)
decreaseBtn.onclick = function () {
    count--;
    updateDisplay();
};

// Reset
resetBtn.onclick = function () {
    count = 0;
    updateDisplay();

    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

// Stop automatic increase
stopBtn.onclick = function () {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

// Start automatic increase
increaseBtn.onclick = function () {
    if (intervalId === null) {
        intervalId = setInterval(function () {
            count++;
            updateDisplay();
        }, 1000);
    }
};