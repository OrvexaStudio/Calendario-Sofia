
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
   const audio = modal.querySelector("audio");

if (audio) {
    audio.pause();
    audio.currentTime = 0;
}

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

   // PULSANTE DOWNLOAD

const downloadButton = document.createElement("button");

downloadButton.type = "button";
downloadButton.className = "download-card";
downloadButton.textContent = "Scarica ricordo";

downloadButton.addEventListener("click", async () => {

    const card = document.querySelector(".surprise-card");

    if (!card) {
        console.error("Card non trovata.");
        return;
    }

    try {

        const canvas = await html2canvas(card, {
            scale: 2,
            backgroundColor: null,
            useCORS: true
        });

        const link = document.createElement("a");

        link.download = `Ricordo-giorno-${String(index + 1).padStart(2, "0")}.png`;
        link.href = canvas.toDataURL("image/png");

        link.click();

    } catch (error) {

        console.error("Errore durante il download:", error);

    }

});

body.appendChild(downloadButton);

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
    audio.autoplay = true;
    audio.loop = true;

    body.appendChild(audio);

    audio.play().catch(error => {
        console.log("Riproduzione automatica bloccata:", error);
    });

}

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

}
