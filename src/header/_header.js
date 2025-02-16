document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.header__burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerMenu.addEventListener('click', function() {

        console.log('click');
    mobileMenu.classList.toggle('active');
});
});
