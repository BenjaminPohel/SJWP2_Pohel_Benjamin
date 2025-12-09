
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const rez = document.querySelector(".rez");


function Zbroj(a1,a2){

    return a1+a2;

}

function Razlika(a1,a2){

    return a1-a2;
}

function Mnozenje(a1,a2){
    return a1*a2;
}

function Dijeljenje(a1,a2){

    return a1/a2;

}

 

btn1.onclick = () => {
    let a1 = Number(document.getElementById("broj1").value);
    let a2 = Number(document.getElementById("broj2").value);
    rez.textContent = Zbroj(a1,a2);
};

btn2.onclick = () => {
    let a1 = Number(document.getElementById("broj1").value);
    let a2 = Number(document.getElementById("broj2").value);
    rez.textContent = Razlika(a1,a2);
};


btn3.onclick = () => {
    let a1 = Number(document.getElementById("broj1").value);
    let a2 = Number(document.getElementById("broj2").value);
    rez.textContent = Mnozenje(a1,a2);
};


btn4.onclick = () => {
    let a1 = Number(document.getElementById("broj1").value);
    let a2 = Number(document.getElementById("broj2").value);
    rez.textContent = Dijeljenje(a1,a2);
};
btn5.onclick=()=>{
    document.getElementById("broj1").value=""
    document.getElementById("broj2").value="";
    rez.textContent="";
}




