//validando Nome
document.getElementById('nome').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('nomeOK');
        
    nomeRegex = /^[A-Z]+$/i;
    //Um texto é exibido em div só quando está errado
    if (nomeRegex.test(campo.value)) {
      valido.innerText = "Nome Válido";
      document.getElementById("nomeOK").classList.add('d-none');
    } else {
      valido.innerText = "Nome incorreta";
      document.getElementById("nomeOK").classList.remove('d-none');
    }
});

//validando Mail
document.getElementById('mail').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('mailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Um Mail é exibido em div só quando está errado
    if (emailRegex.test(campo.value)) {
      valido.innerText = "Mail Válido";
      document.getElementById("mailOK").classList.add('d-none');
    } else {
      valido.innerText = "Mail incorreta";
      document.getElementById("mailOK").classList.remove('d-none');
    }
});

//validando Tel
document.getElementById('tel').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('telOK');
        
    telRegex = /^[0-9,$]*$/;
    //Um tel é exibido em div só quando está errado
    if (telRegex.test(campo.value)) {
      valido.innerText = "Número de telefone Ok";
      document.getElementById("telOK").classList.add('d-none');
    } else {
      valido.innerText = "Número de telefone errado";
      document.getElementById("telOK").classList.remove('d-none');
    }
});
//menu de hambúrguer

const hamburgerButton = document.getElementById('hamburger-button');
const headerLinks = document.querySelectorAll('header .container .menu a');

headerLinks.forEach((link) => {
    link.addEventListener('click', (e) => hamburgerButton.checked = false);
})

//


//receber dados do github

const API_BASE = 'https://api.github.com/users/guaigua';
const API_REPO = 'https://api.github.com/users/guaigua/repos';


function obter_dados_do_github() {
  
  const url =  API_BASE

  let r = fetch(url)
  r.then(function(response) {   
        
    var data = response.json()

    .then(preencher_os_dados_do_portfólio)
    
    })
}

function preencher_os_dados_do_portfólio(dados){

    // nome do portfólio
    var nomeTitle = dados.name;  
    let text = document.createTextNode(`${nomeTitle}`);
    headernome.appendChild(text);
    fullnome.appendChild(text);
     // imagem do portfólio
    var imageUrl =  dados.avatar_url;
    document.querySelector("#hero-img").src = imageUrl;
}

obter_dados_do_github();

//obter dado do repo

function obter_dados_do_repo() {
  
    const url2 =  API_REPO
  
    let r = fetch(url2)
    r.then(function(response) {   
          
      var data = response.json()

      .then(complete_os_dados_do_repositório)
    })
}



   
function complete_os_dados_do_repositório(dados){
   
    const container = document.querySelector('#repos')
    const lista = document.createElement('tr')

    for (dado of dados){
        
        const linguagen = document.createElement('td')
        linguagen.textContent = dado.language      
        if (linguagen.textContent){
            lista.appendChild(linguagen)
            const repo = document.createElement('td')
            repo.textContent = dado.html_url 
            lista.appendChild(repo)
        }
       
      
    
    }
    container.append(lista)
}       
    
obter_dados_do_repo()



function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('nome').value=("");
    document.getElementById('mail').value=("");
    document.getElementById('tel').value=("");
    document.getElementById('idade').value=("");
    document.getElementById('conteudo').value=(""); 

}
