//element fadeOut/fadeIn ovisno o scrollu
//zamijeniti REPLACE sa imenom elementa
$(window).scroll(function(){
    $('REPLACE').css("opacity", (1 - $(window).scrollTop() / 300))
});
