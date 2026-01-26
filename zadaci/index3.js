

const buton1 = document.getElementById("dodaj");
const buton2 = document.getElementById("oduzmi");
const naslov1 = document.getElementById("naslov");

let brojac = 0;
naslov1.textContent = brojac;

buton1.addEventListener("click", () => {
    brojac++;
    naslov1.textContent = brojac;
});

buton2.addEventListener("click", () => {
    brojac--;
    naslov1.textContent = brojac;
});
