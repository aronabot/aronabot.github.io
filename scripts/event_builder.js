$('.slick-slider').slick({
    dots: true,
    dotsClass: "slick-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,

    //auto play property
    autoplay: true,
    autoplaySpeed: 5000,
    infinity: true,
    pauseOnHover: true
});

$('.slick-prev').remove();
$('.slick-next').remove();
