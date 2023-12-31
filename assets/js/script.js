(function ($) {

    //1. Data Background Set
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });


    //nice select
    $(".nice_select").niceSelect();

    // product slider
    $('.products-sliders').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode:false,
        autoplay: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
    // best product slider
    $('.best-products-sliders').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,

    });
    // brands slider

    $('.hm2-brands').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,

    });
// testimonial slider

$('.hm2-testimonials').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});
// latest post slider

$('.hm2-latest-posts').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots:true,
    arrows:false
});
// hm2 feature sliders

$('.hm2-feature-sliders').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 5,
    dots:false,
    arrows:false,
    autoplay:true,
    centerMode:true
});

})(jQuery)