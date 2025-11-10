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
    if(value>rnd){

    }
    else if(value<rnd){
        
    }
    else{
        
    }
}
function newgame(){
    pokusaji=0;
    rnd=randomnumber();
}