if (document.querySelector('.s10-sl')) {
    $('.s10-sl').slick({
        infinite: true,
        slidesToShow: 5,
        adaptiveHeight: false,
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1140,
                settings: {
                    centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
};