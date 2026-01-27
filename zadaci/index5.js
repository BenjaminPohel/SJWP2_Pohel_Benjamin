const pound1 = document.getElementById("pound");
const ounce1 = document.getElementById("ounce");
const gram1 = document.getElementById("gram");
const gumb1 = document.getElementById("gumb");
const input2 = document.getElementById("input1");

gumb1.addEventListener("click", () => {
    let a = input2.value * 2.20462;
    let b = a * 16;
    let c = input2.value * 1000;

    pound1.textContent = a.toFixed(2);
    ounce1.textContent = b.toFixed(2);
    gram1.textContent = c.toFixed(2);
});