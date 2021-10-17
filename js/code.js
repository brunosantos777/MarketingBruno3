// customização do lightbox
    lightbox.option({   
     albumLabel:"Foto %1 de %2" ,
     fadeDuration:3000
    });

    // Inicialiação do plugin AOS animation
    AOS.init();

//Comportamento da seta sobe
//Quando ocorre rolagem na tela do navegador
$(window).scroll(function(){
    //SE A ROLAGEM FOR MAIOR OU IGUAL A 550
    //MOSTRA A SETA COM FADE
    //CASO CONTRÁRIO, OCULTA A SETA COM FADE
    if($(window).scrollTop() >= 550)
    {
        $('.seta-sobe').fadeIn();
    }else{
        $('.seta-sobe').fadeOut();
    }
});

$('.seta-sobe').click(function(){
    //aplica animação de rolagem no body,html até o topo
    $('body, html').animate({
       //fontSize: 30,
       //margin: 100,
       scrollTop: 0
    },1200);
});

//Rolagem com animação nos links superiores
$('.rolagem').click(function(){
    // posição verical do item clicado
    var id = $(this).attr('href');
    var destino =$(id).offset().top;
    
    $('html, body').animate({
        scrollTop: destino,
    });
});


// O texto de txt-idade é o valor do campo idade
$('#txt-idade').text($('#idade').val());

//Evento atualização do campo idade
$('#idade').change(function(){
    $('#txt-idade').text($('#idade').val());
});




// validaçãoo do formulario de cadastro
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
      var forms = document.getElementsByClassName('needs-validation');
      // Faz um loop neles e evita o envio
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


// // preenche a lista de dados com API do IBGE quando a pagina é carregada

// $.ajax({
//   url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
//   success: function(dados){
//        var tag = '';
//            // laço de repetição até o final
//     for (let i = 0; i < dados.length; i++) {
//       tag += '<option value="'+dados[i].id+'">' + dados[i].nome + '</option>';
//      }
//     //  preenche a lista estados com a variável tag
//     $('#estados').html(tag);

//   },
//   error: function(msg){

//   }
// });

// preenche a lista de dados com API do IBGE quando a pagina é carregada



  // ATUALIZA CIDADES QUANDO UM ESTADO É SELECIONADO
$('#estados').change(function(){
  var uf =$(this)
  var link = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf+'/municipios'+uf+'/municipios';
    // alert(link);
});

// $.ajax({
//   url:link,
//   sucess: function(dados){
//     var tag='';
//     // laço de repetição executa repetidamente até o final
//     for (let i = 0; i <dados.length; i++){
//     tag += '<option value="'+dados
//     }
//   }
// }
// });




