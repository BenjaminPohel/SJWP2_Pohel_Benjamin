const modal = document.getElementById("modal1");
const modalImg = document.getElementById("modalSlika");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".prvi");
const slike = document.querySelectorAll(".slika");

slike.forEach(slika => {
  slika.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalText.innerText = opisi[this.dataset.opis];
  }
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

const opisi = {
  "the shawshank redemption": "Priča o prijateljstvu i nadi u zatvoru. Andy Dufresne osuđen je za ubojstvo koje nije počinio. (1994, Frank Darabont)",
  "the godfather": "Epska priča o moći, obitelji i kriminalu. Vito Corleone predaje vlast sinu Michaelu. (1972, Francis Ford Coppola)",
  "the dark knight": "Batman se suočava s Jokerom, kaotičnim zločincem koji želi uništiti Gotham. (2008, Christopher Nolan)",
  "pulp fiction": "Isprepletene priče o gangsterima, ubojici i filozofiji u Los Angelesu. (1994, Quentin Tarantino)",
  "schindlers list": "Oskar Schindler spašava više od tisuću Židova tijekom Holokausta. (1993, Steven Spielberg)",
  "forrest gump": "Priča o jednostavnom čovjeku koji slučajno svjedoči ključnim trenucima američke historije. (1994, Robert Zemeckis)",
  "inception": "Dom Cobb krade tajne iz snova, ali dobiva zadatak da usadi ideju u nečiji um. (2010, Christopher Nolan)",
  "the matrix": "Haker Neo otkriva da je stvarnost samo računalna simulacija. (1999, Wachowski Sisters)",
  "goodfellas": "Uspon i pad Henryja Hilla u svijetu organiziranog kriminala. (1990, Martin Scorsese)",
  "fight club": "Nezadovoljni službenik osniva tajni klub borbe koji prerasta u nešto puno opasnije. (1999, David Fincher)",
  "interstellar": "Astronauti putuju kroz crnu rupu u potrazi za novim domom za čovječanstvo. (2014, Christopher Nolan)",
  "the silence of the lambs": "FBI agentice traži pomoć od kanibala Hannibala Lectera da uhvate serijskog ubojicu. (1991, Jonathan Demme)",
  "gladiator": "Rimski general postaje gladijator i traži osvetu za ubojstvo svoje obitelji. (2000, Ridley Scott)",
  "the lord of the rings": "Frodo Baggins kreće na opasno putovanje da uništi Prsten moći. (2001, Peter Jackson)",
  "titanic": "Ljubavna priča između dvoje mladih na nesretnom brodu Titanic. (1997, James Cameron)",
  "avengers endgame": "Preživjeli Avengeri pokušavaju poništiti Thanosovu destrukciju kroz putovanje u vremenu. (2019, Russo Brothers)",
  "joker": "Propali komičar Arthur Fleck polako pada u ludilo i postaje Joker. (2019, Todd Phillips)",
  "parasite": "Siromašna korejska obitelj infiltrira se u bogatu kuću i nastaje kaos. (2019, Bong Joon-ho)",
  "whiplash": "Mladi bubnjar prolazi kroz brutalni trening pod vodstvom opsesivnog profesora. (2014, Damien Chazelle)",
  "the green mile": "Čuvar zatvora upoznaje tajnovitog osuđenika s natprirodnim sposobnostima. (1999, Frank Darabont)"
};

