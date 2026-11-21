
/* ========================================
   CHRISTMAS DOOR
   OPENING SEQUENCE
======================================== */

function initializeDoor() {

    const intro = document.getElementById("intro");
    const calendar = document.getElementById("calendar");
    const doorScene = document.getElementById("doorScene");

    if (!intro || !calendar || !doorScene) {
        console.error("Elementi della porta non trovati.");
        return;
    }

    let opened = false;

    function openDoor() {

        if (opened) return;

        opened = true;

        // FASE 1: apertura delle ante
        intro.classList.add("opening");

        // FASE 2: avanzamento attraverso la porta
        setTimeout(() => {
            intro.classList.add("entering");
        }, 2500);

        // FASE 3: comparsa del calendario
        setTimeout(() => {

            intro.classList.add("hidden");
            calendar.classList.remove("hidden");

        }, 3400);

    }

    intro.addEventListener("click", openDoor);

    intro.addEventListener("keydown", event => {

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openDoor();
        }

    });

}
