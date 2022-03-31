$('.slick-carousel').slick ({
dots: true,
accessibility: true,
infinite: true,
speed: 750,
autoplay: true,
autoplaySpeed: 2000,
arrows: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [

    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            speed: 750,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true
        }
    },

    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            speed: 750,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true
        }
    },

    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            speed: 750,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true
        }
    }
]
});