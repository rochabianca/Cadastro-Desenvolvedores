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
    

    //Transforma em JSON
    var json = JSON.stringify({empresa: empresa[0].value, nome: nome[0].value, idade: idade, time: time[0].value }, null, '\t');
    console.log(json);
  });
})();

/// Load JSON
/// Alert: Não é cross browser
/// Example: loadJSON("assets/json/config.json", function(a){console.log('success',a)}, function(b){console.log('error', b)});
function loadJSON(url, success, error) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                var JSONObject = JSON.parse(xmlhttp.responseText);
                success(JSONObject);
            } catch (e) {
                error(e);
            }
        } else {
            var e = { "readyState": xmlhttp.readyState, "status": xmlhttp.status };
            if ([200, 0].indexOf(xmlhttp.status) == -1 && xmlhttp.readyState == 4) {
                error(e);
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

loadJSON('http://C:/Users/bianc/Documents/Cadastro-Desenvolvedores/dados.json', function() {console.log('sucess');}, function() {console.log('error');});

