$(document).ready(function(){
    $('#titulo').html('Minha primeira página jQuery');
    $('#paragrafo').html('Meu parágrafo acessado por jQuery')
    $('#titulo2').hide();
    $('#titulo2').show();
    $('#titulo3').css('color','green');//manipulando css
    $('#botao').click(function(){//manipulando eventos
        $(this).css('color','red');
    });
    //capturando o texto de um id e atribuindo a uma variavel
    var empresa = $('#empresa').html();
    $('#empresa').html(empresa + "Prof. Rogério Paiva")
    //capturando classes
    $('.portifolio:first').css('color','red');
    //pegando a tag de forma direta
    $('div').html('Selecionando as divs');
});