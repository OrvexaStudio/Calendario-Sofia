
/* ========================================
   ADVENT CALENDAR
   GRID AND SURPRISE MANAGEMENT
======================================== */

function initializeCalendar() {

    const grid = document.getElementById("calendarGrid");

    if (!grid) {
        console.error("Calendario non trovato.");
        return;
    }

    // GENERAZIONE CASELLE

    surprises.forEach((surprise, index) => {

        const number = index + 1;

        const button = document.createElement("button");

        button.className = "calendar-day";
        button.type = "button";

        button.setAttribute(
            "aria-label",
            "Apri la casella " + number
        );

        button.innerHTML = `
            <span class="day-number">
                ${String(number).padStart(2, "0")}
            </span>

            <span class="day-caption">
                APRI
            </span>
        `;

        button.addEventListener("click", () => {
            openSurprise(number - 1);
        });

        grid.appendChild(button);

    });

    // MODAL

    const modal = document.getElementById("surpriseModal");
    const closeButton = document.getElementById("closeSurprise");

    function closeModal() {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

}


// APERTURA SORPRESA

function openSurprise(index) {

    const surprise = surprises[index];

    if (!surprise) return;

    const modal = document.getElementById("surpriseModal");
    const day = document.getElementById("surpriseDay");
    const title = document.getElementById("surpriseTitle");
    const body = document.getElementById("surpriseBody");

    day.textContent =
        "GIORNO " + String(index + 1).padStart(2, "0");

    title.textContent = surprise.title;

    body.replaceChildren();

    // IMMAGINE

    if (surprise.image) {

        const image = document.createElement("img");

        image.src = surprise.image;
        image.alt = "Ricordo del giorno " + (index + 1);
        image.className = "surprise-image";

        body.appendChild(image);

    }

    // TESTO

    if (surprise.content) {

        const paragraph = document.createElement("p");

        paragraph.textContent = surprise.content;
        paragraph.className = "surprise-text";

        body.appendChild(paragraph);

    }

    // VIDEO

    if (surprise.type === "video" && surprise.media) {

        const video = document.createElement("video");

        video.src = surprise.media;
        video.controls = true;
        video.playsInline = true;

        body.appendChild(video);

    }

    // MUSICA

    if (surprise.type === "music" && surprise.media) {

        const audio = document.createElement("audio");

        audio.src = surprise.media;
        audio.controls = true;

        body.appendChild(audio);

    }

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

}
