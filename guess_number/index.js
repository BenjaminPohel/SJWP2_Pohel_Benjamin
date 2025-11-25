function randomnumber(){
    return Math.floor(Math.random()*100)+1
}

let input=document.getElementById("guess");
let msg=document.getElementById("msg");
let attempts=document.getElementById("attempts");

let rnd=randomnumber();
let pokusaji=0;
function update(){
 attempts.innerHTML="Pokušaji:" + pokusaji
}
update();
function checknumber(event){
    event.preventDefault();
    let value=parseInt(input.value);
    if (isNaN(value) || value < 1 || value > 100) {
    msg.innerHTML = "Unesi broj između 1 i 100";
    msg.style.color = "crimson";
    return;
    }

  
    if(value===rnd){
        msg.innerHTML = "Pogodak! Broj je " + rnd;
        msg.style.color = "green";
    }
    else if(value>rnd){
        msg.innerHTML = "Previše!";
    msg.style.color = "orange";
    }
    else if(value<rnd){
        msg.innerHTML = "Premalo!";
    msg.style.color = "orange";
    }
    pokusaji++;
  update();
}
function newgame(){
    pokusaji=0;
    rnd=randomnumber();
  input.value = "";
  msg.innerHTML = "Nova igra";
  msg.style.color = "black";
  update();
  input.focus();
}