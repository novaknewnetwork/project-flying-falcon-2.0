
// slider
new Swiper ('.image-slider', {

    loop: true,

    speed: 2000,

    autoplay: {
        delay: 4000,
    },

    effect: 'fade',

    fadeEffect: {
        crossFade: true
    },
});

// burger
const burgerMenu = document.querySelector('.menu__burger')
const menuBody = document.querySelector('.header__bottom-menu')


if (burgerMenu) {
    burgerMenu.addEventListener('click', function() {
        document.body.classList.toggle('lock')
        burgerMenu.classList.toggle('active')
        menuBody.classList.toggle('active')
        
    })
}
