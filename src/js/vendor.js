import $ from 'jquery';
import Swiper from 'swiper';

$(document).ready(() => {
    const swiper = new Swiper('.swiper-container', {
        init: true,
        direction: 'vertical',
        initialSlide: 0,
        autoHeight: true,
        mousewheel: true,
        sensitivity: 2,
        forceToAxis: true,
        releaseOnEdges: true,
        simulateTouch: false,
        keyboard: true,
        enabled: true,
        breakpoints: {
            1024: {
                autoHeight: true,
                keyboard: false,
                enabled: false
            }
        },
        on: {
            transitionEnd() {
                if (this.realIndex === this.slides.length - 1) {
                    scrollTopBtn.show();
                } else {
                    scrollTopBtn.hide();
                }
            }
        }
    });
    const toggleMenuBtn = $('.toggle-menu-btn');
    const hideMenuBtn = $('.hide-menu-btn');
    const menuElem = $('.site-menu-container');
    const menuElemBaseClass = menuElem.attr('class');
    const scrollTopBtn = $('.floating-action-btn');
    // Поведение меню
    $('.page-navigation').on('click', 'a',
            (event) => {
                if (event.currentTarget === toggleMenuBtn[0]) {
                    menuElem.toggleClass(`${menuElemBaseClass}--shown`);
                }
                if (event.currentTarget === hideMenuBtn[0]) {
                    menuElem.toggleClass(`${menuElemBaseClass}--shown`);
                }
            })
        // Поведение дял кнопки прокрутки в начало
    scrollTopBtn.on('click', (event) => {
        swiper.slideTo(0, 300);
    })
});