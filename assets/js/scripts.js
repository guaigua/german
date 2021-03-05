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
    
  
    const lista = document.createElement('li')
   

    for (dado of dados){
 

        const lang = document.createElement('li')
        lang.textContent = dado.language
        if (lang.textContent ){           
                lista.appendChild(lang)
        }
        const repo = document.createElement('a')
        repo.textContent = dado.html_url
        if (repo.textContent ){           
                lista.appendChild(repo)
        }

    }
    container.appendChild(lista)
}       
    

