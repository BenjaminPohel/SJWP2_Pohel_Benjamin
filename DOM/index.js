
document.getElementById("title").style.color = "red";

document.getElementsByTagName("li")[0].textContent = "Promijenjeno";

let items = document.getElementsByClassName("list");

items[items.length - 1].classList.add("highlight");

document.querySelector("ul a").setAttribute("href", "https://www.bing.com");

document.querySelectorAll("li").forEach(li => li.textContent = "Stavka");

document.querySelector(".btn").element.classList.add("active");

document.getElementsByTagName("li")[1].classList.remove("list");

document.querySelector("h1").innerHTML = "Welcome";

let tekst = document.querySelector("li").textContent;

let link = document.querySelector("a").getAttribute("href");

document.querySelector("a").setAttribute("title", "Google link");

document.querySelector("#list").innerHTML += "<li>Nova stavka</li>";

document.getElementById("list").style.backgroundColor = "lightblue";

document.querySelectorAll("li").forEach(li => li.classList.add("blue-text"));

let checked = document.querySelector("input[type='checkbox']").checked;

document.querySelector(".btn").textContent = "Pressed!";

let third = document.getElementsByClassName("list")[2];

document.querySelector("button.btn").style.fontSize = "20px";

document.getElementsByTagName("input")[0].setAttribute("checked", "true");


document.querySelectorAll("a").forEach(a => a.style.color = "green");
