const burger_closed = document.querySelector(".burger-closed");
const burger_opened = document.querySelector(".burger-open");
const burger_ic_closed = document.querySelector(".header-burger_menu-wt")
const burger_ic_opened = document.querySelector(".header-burger_menu-bl")
const main_part = document.querySelector("main");

burger_ic_closed.addEventListener('click', () => {
    burger_closed.style.display = "none";
    burger_opened.style.display = "block";
    burger_opened.style.position = "fixed";
    main_part.style.marginTop = "53.5px";
});
burger_ic_opened.addEventListener('click', () => {
    burger_closed.style.display = "block";
    burger_opened.style.display = "none";
    main_part.style.marginTop = "0";
});