const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".nav__list");
const items = document.querySelectorAll(".nav__link");
console.log(items);

menuBtn.addEventListener("click", showMenu);
function showMenu() {
    menu.classList.toggle("show-menu");
    if (menuBtn.classList[0] == "ri-menu-line") {
        menuBtn.classList.remove("ri-menu-line");
        menuBtn.classList.add("ri-close-line");
        console.log('done');

    }
    else {
        menuBtn.classList.remove("ri-close-line");
        menuBtn.classList.add("ri-menu-line");
    }
}

items.forEach(element => element.addEventListener("click", removeMenu));
function removeMenu() {
    menu.classList.remove("show-menu");
    menuBtn.classList.remove("ri-close-line");
    menuBtn.classList.add("ri-menu-line");
}