const przycisk = document.querySelector(".przycisk-glowny");
const box = document.querySelector(".box");

przycisk.addEventListener("click", function() {
    box.classList.toggle("zolty-box");

    if (box.classList.contains("zolty-box")) {
        przycisk.textContent = "Cofnij kolor";
    } else {
        przycisk.textContent = "Kliknij";
    }
});

const naglowek = document.querySelector("#glowny-naglowek");
const przycisk2 = document.querySelector(".przycisk-drugi");

przycisk2.addEventListener("click", function() {
    naglowek.classList.toggle("czerwony-naglowek");

    if (naglowek.classList.contains("czerwony-naglowek")) {
        przycisk2.textContent = "Przywróć kolor";
    } else {
        przycisk2.textContent = "Zmień kolor";
    }
});