if (document.querySelector('.s10-sl')) {
    $('.s10-sl').slick({
        infinite: true,
        slidesToShow: 5,
        adaptiveHeight: false,
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 500,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
};