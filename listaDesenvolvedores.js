(function() 
{
  var request = new XMLHttpRequest();
  request.open('GET', 'https://raw.githubusercontent.com/rochabianca/Cadastro-Desenvolvedores/master/dados.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
     var data = JSON.parse(request.responseText);
     var nome = document.getElementsByClassName('nome');
     var empresa = document.getElementsByClassName('empresa');
     var tabela = document.getElementsByClassName('table-hover');
     console.log(tabela[0]);
      for(var i = 0; i < data.length; i++)
      {
        tabela[0].innerHTML = tabela[0].innerHTML + '<tr> <td class="text-left nome">' + data[i].nome + '</td>' + '<td class="text-left empresa">' + data[i].empresa + '</td></tr>';          
      } 
    } else {
      console.log("error")

    }
  };

  request.onerror = function() {
    console.log("error");
  };

  request.send();
})();
