
function randomNumber(){
    return Math.floor(Math.random()*6)+1;
}
let randomNumber1 = randomNumber()
let randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

let randomNumber2=randomNumber();
let randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

let randomNumber3=randomNumber();
let randomImageSource3 = "./images/dice" + randomNumber3 + ".png";
document.querySelectorAll("img")[2].setAttribute("src",randomImageSource3);

let randomNumber4=randomNumber();
let randomImageSource4 = "./images/dice" + randomNumber4 + ".png";
document.querySelectorAll("img")[3].setAttribute("src",randomImageSource4);

if(randomNumber1+randomNumber2>randomNumber3+randomNumber4){
    document.querySelector("h1").innerHTML="Player 1 wins🗿";
}

else if(randomNumber1+randomNumber2<randomNumber3+randomNumber4){
    document.querySelector("h1").innerHTML="Player 2 wins💩"

}

else{
    document.querySelector("h1").innerHTML="Draw😒";

}

document.querySelector(".prvi").innerHTML=randomNumber1+randomNumber2
document.querySelector(".drugi").innerHTML=randomNumber3+randomNumber4
const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

btn.addEventListener("click", handleClick);
