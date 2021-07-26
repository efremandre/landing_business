$('.filter__item').click(function(event) {
        var i=$(this).data('filter');
    if (i==3) {
        $('.newsmedia__block').show();
    }else{
        $('.newsmedia__block').hide();
        $('.newsmedia__block.f_'+i).show();
    }

    $('.filter__item').removeClass('active');
    $(this).addClass('active');

    return false;
});

$('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});

$('.header__list a').click(function(event) {
    $('.header__burger,.header__menu').removeClass('active');
    $('body').removeClass('lock');
});

$(document).on('scroll', function(){
    if
        ($(document).scrollTop() > 50){
        $('header').addClass('header-scroll');
    }
    else
    {
    $('header').removeClass('header-scroll');
    }
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});