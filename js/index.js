scrollTela('a[href*=painel-sobre]');
scrollTela('a[href*=painel-palestrantes]');
scrollTela('a[href*=painel-inscricao]');

function scrollTela (elemento) {
    $(elemento).click(function(evento){
        evento.preventDefault();

        var destino = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(destino).offset().top
        }, 1000);  
    });
}
