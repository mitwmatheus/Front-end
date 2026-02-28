$(document).ready(function(){
    $('#click').click(function(){ $(this).html('Clique Simples')});
    $('#dblclick').dblclick(function(){ $(this).html('Clique duplo')});
    $('#mouseenter').mouseenter(function(){ $(this).html('Entrar no Evento')});
    $('#mouseleave').mouseleave(function(){ $(this).html('Sair do Evento')});

    $('#keypress').keypress(function(){ $('#tecla').html('keypress -->' + $(this).val())});
    $('#keydown').keydown(function(){ $('#tecla').html('keydown -->' + $(this).val())});
    $('#keyup').keyup(function(){ $('#tecla').html('keyup -->' + $(this).val())});

});