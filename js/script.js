$( function() {
    $('#header').removeClass('default');
    $(window).scroll(function() {
        if($(this).scrollTop() > 20) {
            $('#header').addClass('default').fadeIn(2000);
        } else {
            $('#header').removeClass('default').fadeIn(1000);
        }
    });
    
    $('#header a[href^="#"]').on('click', function() {
        var idElem = $(this).attr('href'),
            coords = $(idElem).offset().top;
        if($.browser.safari) {
            $('body').animate({scrollTop: coords}, 1000);
        } else {
            $('html').animate({scrollTop: coords}, 1000);
        }
    });

} );