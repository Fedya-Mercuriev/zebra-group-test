import $ from 'jquery';
import Swiper from 'swiper';

$(document).ready(() => {
    const swiper = new Swiper('.swiper-container', {
        init: true,
        direction: 'vertical',
        initialSlide: 0,
        autoHeight: true,
        mousewheel: true,
        forceToAxis: true,
        releaseOnEdges: true,
        simulateTouch: false,
        keyboard: true,
        enabled: true,
        breakpoints: {
            1024: {
                autoHeight: true,
                keyboard: false,
                enabled: false,
            }
        }
    })
})