(function($){

    //1. Data Background Set
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });


    //nice select
    $(".nice_select").niceSelect();




})(jQuery)