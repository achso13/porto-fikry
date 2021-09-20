const burgerMenu = document.querySelector("#burger-menu");
const navbarHiddenMenu = document.querySelector("#navbar-hidden-menu");
const closeButton = document.querySelector("#close-button");

burgerMenu.addEventListener("click", () => {
    navbarHiddenMenu.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
    navbarHiddenMenu.classList.toggle("hidden");
});

var options = {
    strings: ['a Web Developer.', 'an IT Student.'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
};

var typed = new Typed('#typed', options);
