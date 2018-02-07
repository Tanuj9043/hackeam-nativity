function scrollto(id) {
    $('html, body').stop().animate({
        scrollTop: $('#'+id).offset().top-70
    }, 500);
}

$(document).ready(function(){
    $(document).on('scroll', function () {
        $('.navbar').css('background-color', `rgba(0, 0, 0, ${$(document).scrollTop() / 800})`);
        let a = $(document).scrollTop() + $(window).height();
        let b = $('#contact')[0].scrollHeight;
        let c = $('.mainpage')[0].scrollHeight;
        let x = (b - c + a) / b;
        $('#contact').css('background-color', `rgba(0, 0, 0, ${x})`);
        $('.bg').css('top', $(document).scrollTop());
    });
});
