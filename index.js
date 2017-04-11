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
  var button = document.getElementsByClassName('add');
  button = button[0];

  button.addEventListener('click', function() 
  {
    var nome = document.getElementsByName('nome');
    var empresa = document.getElementsByName('empresa');
    var time = document.getElementsByName('time');
    var idade = document.getElementsByName('idade');
    var tecnologias = document.getElementsByName('tec');
    var estagio = document.getElementsByName('smoker');
    
    //Verifica se os campos nome, empresa e time estão preenchidos
    if(nome[0].value == '' && empresa[0].value == '' || empresa[0].value == '' && time[0].value == ''  || time[0].value == '' && nome[0].value == '') {
      console.log('Por favor, preencha os campos obrigatórios');
    }

    else if(nome[0].value == '') {
       console.log('Por favor, preencha o seu nome');
    }

    else if(empresa[0].value == '') {
      console.log('Por favor, preencha o nome da empresa');
    }

    else if(time[0].value == '') {
      console.log('Por favor, preencha o seu time de desenvolvimento');
    }

    //Verifica se a idade é numérica e maior que 0
    idade = parseInt(idade[0].value);
    if(idade === 0 || idade < 0  || isNaN(idade) == true) {
      console.log('idade inválida');
    }

    var tecnologias = document.getElementsByName('tec');
    for(var i = 0; i < tecnologias.length; i++) {
      console.log(tecnologias[i].value);
    }
    
    console.log(estagio.value);
    //Transforma em JSON
    var json = JSON.stringify({empresa: empresa[0].value, nome: nome[0].value, idade: idade, time: time[0].value, tecnologias: tecnologias[0].value, estagio: estagio[0].value }, null, '\t');
    console.log(json);
  });
})();

var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

var data_json;
getJSON('https://raw.githubusercontent.com/rochabianca/Cadastro-Desenvolvedores/master/dados.json').then(function(data) {
    console.log('Your Json result is:  ' + data); //you can comment this, i used it to debug
    data.innerText = data; //display the result in an HTML element
    data_json = data;
}, function(status) { //error detection....
  alert('Something went wrong.');
});




