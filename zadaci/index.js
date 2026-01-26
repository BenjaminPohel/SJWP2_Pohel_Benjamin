button.addEventListener("click", function () {
    let color= "#" + Math.floor(Math.random)*0xfffff.toString(16);
    document.body.style.backgroundColor=color;
});