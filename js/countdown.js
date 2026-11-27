/* ========================================
   COUNTDOWN SOFIA
   UNLOCK: 1 DECEMBER 2026 - 00:00 ITALY
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const screen = document.getElementById("countdownScreen");

    if (!screen) return;

    const daysElement = document.getElementById("countdownDays");
    const hoursElement = document.getElementById("countdownHours");
    const minutesElement = document.getElementById("countdownMinutes");
    const secondsElement = document.getElementById("countdownSeconds");

    // Mezzanotte del 1 dicembre 2026, ora italiana
    const targetDate = new Date("2026-12-01T00:00:00+01:00").getTime();

    function updateCountdown() {

        const now = Date.now();
        const difference = targetDate - now;

        if (difference <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

     const intro = document.getElementById("intro");

if (intro) {
    intro.classList.add("countdown-reveal");
}

screen.classList.add("finished");

setTimeout(() => {
    screen.remove();
}, 2000);

            clearInterval(countdownInterval);

            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");

    }

    updateCountdown();

    const countdownInterval = setInterval(updateCountdown, 1000);

});
