import Swiper from "swiper";

const swiper = new Swiper('.swiper');
const buttons = document.querySelectorAll('.slider__button');
buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        swiper.slideTo(index);
    });
});