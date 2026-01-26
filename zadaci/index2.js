
const input1 = document.getElementById("input2");
const paragraf = document.getElementById("paragraf2");

  input1.addEventListener("input", function()  {
    paragraf.textContent = "Letters: " + input1.value.length;
  });