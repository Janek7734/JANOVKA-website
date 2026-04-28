const formularzKontaktowy = document.querySelector(".formularz-kontaktowy");

if (formularzKontaktowy) {
    formularzKontaktowy.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Dzięki za wiadomość! Na razie formularz jest pokazowy, więc napisz też na maila: karakula.jan@gmail.com");
    });
}
