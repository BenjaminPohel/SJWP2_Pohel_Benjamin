const gumb1 = document.getElementById("gumb");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const rez = document.getElementById("rez");
gumb1.addEventListener("click",function(){
    let a= input2.value/((input1.value/100)*(input1.value/100));
    rez.textContent=Math.round(a * 100) / 100;
})