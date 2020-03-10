import $ from 'jquery';
import 'slick-carousel';

$(document).ready(() => {
    $('.quote-carousel').slick({
        // dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});