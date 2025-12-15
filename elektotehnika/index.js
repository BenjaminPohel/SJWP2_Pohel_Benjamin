
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6= document.getElementById("btn6");

const rez = document.querySelector(".rez");
const rez2 = document.querySelectorAll(".rez")[1];
const rez3 = document.querySelectorAll(".rez")[2];
const rez4 = document.querySelectorAll(".rez")[3];
const rez5= document.querySelectorAll(".rez")[4];
const rez6= document.querySelectorAll(".rez")[5];

function Zbroj(a1,a2){

    return a1/a2;

}

function Razlika(a1,a2,a3){

    return a1/(a1+a2)*a3;
}

function Mnozenje(a1,a2,a3){
    return a1+a2+a3;
}

function Dijeljenje(a1,a2,a3){

    return 1/a1+1/a2+1/a3;

}

 

btn1.onclick = () => {
    let a1 = Number(document.getElementById("napon").value);
    let a2 = Number(document.getElementById("otpor").value);
    rez.textContent = "I="+Zbroj(a1,a2)+"A";
};

btn2.onclick = () => {
    let a1 = Number(document.getElementById("R1").value);
    let a2 = Number(document.getElementById("R2").value);
    let a3 = Number(document.getElementById("Uul").value);
    rez2.textContent = "Uiz="+Razlika(a1,a2,a3)+"V";
};


btn3.onclick = () => {
    let a1 = Number(document.getElementById("R11").value);
    let a2 = Number(document.getElementById("R21").value);
    let a3 = Number(document.getElementById("R31").value);
    rez3.textContent = "Ru="+Mnozenje(a1,a2,a3)+"Ω";
};


btn4.onclick = () => {
    let a1 = Number(document.getElementById("R12").value);
    let a2 = Number(document.getElementById("R22").value);
    let a3 = Number(document.getElementById("R32").value);
    rez4.textContent = "Ru="+Dijeljenje(a1,a2,a3)+"Ω";
};
btn5.onclick=()=>{
    let a1 = Number(document.getElementById("C1").value);
    let a2 = Number(document.getElementById("C2").value);
    let a3 = Number(document.getElementById("C3").value);;
    rez5.textContent="Cu="+Dijeljenje(a1,a2,a3)+"F";
}
btn6.onclick=()=>{
    let a1 = Number(document.getElementById("C11").value);
    let a2 = Number(document.getElementById("C21").value);
    let a3 = Number(document.getElementById("C31").value);;
    rez5.textContent="Cu="+Mnozenje(a1,a2,a3)+"F";
}




