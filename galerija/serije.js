const modal = document.getElementById("modal1");
const modalImg = document.getElementById("modalSlika");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".prvi");

const opisi = {
  "breaking bad": "Profesor kemije obolio od raka počinje proizvoditi metamfetamin. (2008–2013, Vince Gilligan)",
  "game of thrones": "Plemićke obitelji bore se za kontrolu nad željeznim prijestoljem Westorosa. (2011–2019, D.B. Weiss & David Benioff)",
  "chernobyl": "Dramatična rekonstrukcija nuklearne katastrofe u Černobilu 1986. godine. (2019, Johan Renck)",
  "the wire": "Dubinska priča o kriminalu, policiji i društvu u Baltimoru. (2002–2008, David Simon)",
  "stranger things": "Grupa djece istražuje natprirodne misterije u malom gradu Hawkins. (2016–, Duffer Brothers)",
  "the sopranos": "Mafijašu Tonyju Sopraniju teško je pomiriti obiteljski i kriminalni život. (1999–2007, David Chase)",
  "band of brothers": "Priča o vojnicima Easy čete tijekom Drugog svjetskog rata. (2001, Steven Spielberg & Tom Hanks)",
  "true detective": "Detektivi istražuju misteriozne zločine na američki jugu. (2014–, Nic Pizzolatto)",
  "the last of us": "Joel i Ellie pokušavaju preživjeti u post-apokaliptičnom svijetu zaraženom gljivičnom pandemijom. (2023–, Craig Mazin)",
  "better call saul": "Priča o odvjetniku Jimmyju McGillu i njegovoj transformaciji u Saula Goodmana. (2015–2022, Vince Gilligan)",
  "the office": "Mockumentary o svakodnevnom životu zaposlenika u uredu papirne tvrtke. (2005–2013, Greg Daniels)",
  "peaky blinders": "Kriminalna obitelj Shelby gradi imperij u Birminghamu nakon Prvog svjetskog rata. (2013–2022, Steven Knight)",
  "squid game": "Zaduženi natjecatelji igraju smrtonosne dječje igre za veliku novčanu nagradu. (2021–, Hwang Dong-hyuk)",
  "dark": "Nestanak djece u njemačkom gradu razotkriva zamršenu vremensku petlju koja zahvaća četiri obitelji. (2017–2020, Baran bo Odar)",
  "house of the dragon": "Prequel Game of Thrones — građanski rat unutar kuće Targaryen. (2022–, Ryan Condal)",
  "wednesday": "Wednesday Addams istražuje natprirodne misterije kao učenica u Nevermore Academyju. (2022–, Tim Burton)",
  "ozark": "Financijski savjetnik pere novac za meksički kartel u zabačenoj Ozarku. (2017–2022, Bill Dubuque)",
  "the mandalorian": "Usamljeni lovac na glave putuje galaksijom s tajnovitim djetetom Groguom. (2019–, Jon Favreau)",
  "black mirror": "Antologijska serija o mračnoj strani tehnologije i modernog društva. (2011–, Charlie Brooker)",
  "narcos": "Priča o usponu i padu kolumbijskog narkobosa Pabla Escobara. (2015–2017, Chris Brancato)"
};

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