
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

        const audio = modal.querySelector("audio");

        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        const video = modal.querySelector("video");

        if (video) {
            video.pause();
            video.currentTime = 0;
        }
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


// ========================================
// APERTURA SORPRESA
// ========================================

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
        audio.autoplay = true;
        audio.loop = true;

        body.appendChild(audio);

        audio.play().catch(error => {
            console.log("Riproduzione automatica bloccata:", error);
        });

    }

    // PULSANTE DOWNLOAD

    const downloadButton = document.createElement("button");

    downloadButton.type = "button";
    downloadButton.className = "download-card";
    downloadButton.textContent = "Scarica ricordo";

    body.appendChild(downloadButton);

    // DOWNLOAD PNG

    downloadButton.addEventListener("click", async () => {

        const card = document.querySelector(".surprise-content");
        const closeButton = document.getElementById("closeSurprise");

        if (typeof html2canvas === "undefined") {
            console.error("html2canvas non è stato caricato.");
            alert("Impossibile generare l'immagine.");
            return;
        }

        downloadButton.disabled = true;
        downloadButton.textContent = "Preparazione...";

        const originalStyles = {
            maxHeight: card.style.maxHeight,
            overflow: card.style.overflow,
            animation: card.style.animation
        };

        try {

            await document.fonts.ready;

            // PREPARAZIONE CARD

            card.style.maxHeight = "none";
            card.style.overflow = "visible";
            card.style.animation = "none";

            closeButton.style.visibility = "hidden";
            downloadButton.style.display = "none";

            // GENERAZIONE IMMAGINE

            const canvas = await html2canvas(card, {
                scale: 2,
                backgroundColor: null,
                useCORS: true,
                logging: false,
                scrollY: 0
            });

            // CREAZIONE FILE PNG

            canvas.toBlob(blob => {

                if (!blob) {
                    throw new Error("Impossibile creare il file PNG.");
                }

                const url = URL.createObjectURL(blob);

                const link = document.createElement("a");

                link.href = url;
                link.download =
                    `Ricordo-giorno-${String(index + 1).padStart(2, "0")}.png`;

                link.click();

                URL.revokeObjectURL(url);

            }, "image/png");

        } catch (error) {

            console.error("Errore durante il download:", error);

            alert("Non è stato possibile scaricare il ricordo.");

        } finally {

            // RIPRISTINO CARD

            card.style.maxHeight = originalStyles.maxHeight;
            card.style.overflow = originalStyles.overflow;
            card.style.animation = originalStyles.animation;

            closeButton.style.visibility = "";
            downloadButton.style.display = "";

            downloadButton.disabled = false;
            downloadButton.textContent = "Scarica ricordo";

        }

    });

    // APERTURA MODAL

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

}
