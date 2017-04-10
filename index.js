//Adiciona CSS
(function()
{
  var head = document.getElementsByTagName('head'),
  html = head[0].innerHTML,
  adicionaCSS = '<link rel="stylesheet" type="text/css" href="index.css">',
  novoHTML = html + adicionaCSS;

  head[0].innerHTML = novoHTML;
})();

//Valida os campos nome, empresa e time
(function()
{
  var button = document.getElementsByClassName('add');
  button = button[0];

  button.addEventListener('click', function() 
  {
    var nome = document.getElementsByName('nome');
    var empresa = document.getElementsByName('empresa');
    var time = document.getElementsByName('time');
    var idade = document.getElementsByName('idade');
    
    //Verifica se os campos nome, empresa e time estão preenchidos
    if(nome[0].value == "" && empresa[0].value == "" || empresa[0].value == "" && time[0].value == ""  || time[0].value == "" && nome[0].value == "") {
      console.log("Por favor, preencha os campos obrigatórios");
    }
    else if(nome[0].value == "") {
       console.log("Por favor, preencha o seu nome");
    }
    else if(empresa[0].value == "") {
      console.log("Por favor, preencha o nome da empresa");
    }
    else if(time[0].value == "") {
      console.log("Por favor, preencha o seu time de desenvolvimento");
    }

    //Verifica se a idade é numérica e maior que 0
    idade = parseInt(idade[0].value);
    if(idade === 0 || idade < 0  || isNaN(idade) == true) {
      console.log('idade inválida');
    }

  });
})();
