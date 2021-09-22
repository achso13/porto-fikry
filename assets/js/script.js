$(document).ready(function () {
    // Responsive navbar
    const burgerMenu = document.querySelector("#burger-menu");
    const navbarHiddenMenu = document.querySelector("#navbar-hidden-menu");
    const closeButton = document.querySelector("#close-button");

    burgerMenu.addEventListener("click", () => {
        navbarHiddenMenu.classList.toggle("hidden");
    });

    closeButton.addEventListener("click", () => {
        navbarHiddenMenu.classList.toggle("hidden");
    });

    // Navbar on-scroll
    const header = document.querySelector("#nav");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            header.classList.remove("bg-color-4");
            header.classList.add("shadow-sm");
            header.classList.add("bg-white");
        } else {
            header.classList.remove("shadow-sm");
            header.classList.add("bg-white");
            header.classList.add("bg-color-4");
        }
    }

    // Animate CTA
    $(".cta-1").hide(0).delay(500).slideToggle(1000);
    $(".cta-2").hide(0).delay(500).slideToggle(1400);


    let options = {
        strings: ['a Web Developer.', 'an IT Student.'],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    };

    let typed = new Typed('#typed', options);
});

