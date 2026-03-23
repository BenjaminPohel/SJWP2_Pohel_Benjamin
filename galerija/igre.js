const modal = document.getElementById("modal1");
const modalImg = document.getElementById("modalSlika");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".prvi");

const opisi = {
  "the last of us": "Preživljavanje u post-apokaliptičnom svijetu. Joel štiti Ellie kroz opasnu Ameriku. (2013, Naughty Dog)",
  "red dead redemption 2": "Epska priča o kauboju Arthuru Morganu i propadanju divljeg zapada. (2018, Rockstar Games)",
  "god of war": "Kratos i sin Atreus putuju nordijskim mitološkim svijetom. (2018, Santa Monica Studio)",
  "the witcher 3": "Čarobnjak Geralt traži svoju posinku Ciri u otvorenom fantastičnom svijetu. (2015, CD Projekt Red)",
  "elden ring": "Tamni akcijski RPG smješten u ogroman otvoreni svijet Između zemalja. (2022, FromSoftware)",
  "gta v": "Tri kriminalca surađuju na spektakularnim pljačkama u Los Santosu. (2013, Rockstar Games)",
  "cyberpunk 2077": "V, plaćeni ubojica, traži put do besmrtnosti u megagradskom Night Cityju. (2020, CD Projekt Red)",
  "minecraft": "Beskonačna sandbox igra izgradnje i preživljavanja u blokastom svijetu. (2011, Mojang)",
  "dark souls 3": "Zahtjevni akcijski RPG u mračnom fantastičnom svijetu punom izazovnih neprijatelja. (2016, FromSoftware)",
  "horizon zero dawn": "Aloy istražuje postapokaliptični svijet kojim vladaju robotizirane životinje. (2017, Guerrilla Games)",
  "ghost of tsushima": "Samuraj Jin Sakai brani japanski otok Tsushima od mongolske invazije. (2020, Sucker Punch)",
  "death stranding": "Sam Porter Bridges pokušava ponovno povezati fragmentiranu Ameriku u distopičnoj budućnosti. (2019, Kojima Productions)",
  "hades": "Zagreus, sin boga podzemlja, pokušava pobjeći iz pakla kroz roguelite gameplay. (2020, Supergiant Games)",
  "sekiro": "Ninja ratnik Vuk traži osvetu i spašava svog gospodara u feudalnom Japanu. (2019, FromSoftware)",
  "resident evil 4": "Leon S. Kennedy spašava predsjedničku kćer od kultnih otmičara u Španjolskoj. (2023, Capcom)",
  "baldurs gate 3": "Epski RPG temeljen na D&D pravilima — tvori svoju priču u Forgotten Realmsima. (2023, Larian Studios)",
  "spider man 2": "Peter Parker i Miles Morales zajedno se bore protiv Venoma i novih prijetnji. (2023, Insomniac Games)",
  "zelda totk": "Link istražuje nebo, površinu i podzemlje Hyrula tražeći nestalu Zeldu. (2023, Nintendo)",
  "alan wake 2": "Pisac Alan Wake pokušava pobjeći iz mračne dimenzije kroz pisanje horor priče. (2023, Remedy Entertainment)",
  "starfield": "Istraži stotine planeta i otkrij tajnu misterioznih artefakata u svemiru. (2023, Bethesda Game Studios)"
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