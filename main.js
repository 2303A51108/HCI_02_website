// Swiper Initialization
const swiper = new Swiper('.swiper', {
    loop: true, // Enable continuous loop
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // Number of slides visible at a time
    spaceBetween: 20, // Space between slides
});
