//Adiciona CSS
(function()
{
  var head = document.getElementsByTagName('head'),
  html = head[0].innerHTML,
  adiciona_css = '<link rel="stylesheet" type="text/css" href="index.css">',
  novo_html = html + adiciona_css;

  head[0].innerHTML = novo_html;
})();

//Valida os campos nome, empresa e time
(function()
{
  function valida_campos() 
  {
    var nome = document.getElementsByName('nome');
    var empresa = document.getElementsByName('empresa');
    var time = document.getElementsByName('time');
    var idade = document.getElementsByName('idade');
    var tecnologias = document.getElementsByName('tec');
    var estagio = document.getElementsByName('smoker');
    var valido = true;
    
    //Verifica se os campos nome, empresa e time estão preenchidos
    if(nome[0].value == '' && empresa[0].value == '' || empresa[0].value == '' && time[0].value == ''  || time[0].value == '' && nome[0].value == '') {
      console.log('Por favor, preencha os campos obrigatórios');
      valido = false;
    }

    else if(nome[0].value == '') {
       console.log('Por favor, preencha o seu nome');
       valido = false;
    }

    else if(empresa[0].value == '') {
      console.log('Por favor, preencha o nome da empresa');
      valido = false;
    }

    else if(time[0].value == '') {
      console.log('Por favor, preencha o seu time de desenvolvimento');
      valido = false;
    }

    //Verifica se a idade é numérica e maior que 0
    idade = parseInt(idade[0].value);
    if(idade === 0 || idade < 0  || isNaN(idade) == true) {
      console.log('idade inválida');
      valido = false;
    }

    //Se as condições anteriores forem atendidas, mostra o json
    if(valido === true)
    {
      //Transforma em JSON
      var json = JSON.stringify({empresa: empresa[0].value, nome: nome[0].value, idade: idade, time: time[0].value, tecnologias: tecnologias[0].value, estagio: estagio[0].checked }, null, '\t');
      console.log(json);
      
      //Mostra o JSON serializado no elemento debug
      var debug = document.getElementsByClassName('debug');
      debug[0].innerHTML = json;
    }
  };

  //Dispara o evento ao clique
  var button = document.getElementsByTagName('button');
  for(var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', valida_campos);
  }
})();





