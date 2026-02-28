$(document).ready(function(){

    $('#title').html('IF - Campus Avançado Três Corações');
    $('#desc').html('Educação Gratuita e de qualidade');
    $('#header').addClass('header btn btn-info');
    $('#header').removeClass('btn btn-info');
    $('#header').css('height','80px');
    $('#header').css('padding','10px');
    $('#title').css('margin-top','0');
    $('#title').css('margin-bottom','0');
    $('#desc').css('margin-top','0');
    $('main').css('padding','20px');
    $('#btnEnviar').addClass('btn btn-info');
    
    $('form').submit(function (){
        var name= $(':input[name = name]').val();
        var email= $(':input[name = email]').val();
        var tel= $(':input[name = tel]').val();
        var term= $(':input[name = term]').is(":checked");
    
        var error = "";
        $('#erros').html("");
    
        if(name ===""){
            error += "<p class='alert alert-danger'>Digite o nome</p>";
        }
        if(emai ===""){
            error += "<p class='alert alert-danger'>Digite o email</p>";
        }
        if(tel ===""){
            error += "<p class='alert alert-danger'>Digite o telefone</p>";
        }
        if(!term){
            error += "<p class='alert alert-danger'>Aceite os termos de uso!</p>";
        }
        if(error){
            $('#errors').html(error);
            return false;
        }
    
        return true;
    });
    });