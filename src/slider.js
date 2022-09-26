const swiper = new Swiper('.swiper', {
    speed: 700,
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    },
});