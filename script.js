//your JS code here. If required.
const timerElement = document.getElementById("timer");

setInterval(function () {
    // Get the current date and time
    const now = new Date();

    // Update the timer element's content
    timerElement.innerHTML = now.toLocaleString();
}, 1000);
