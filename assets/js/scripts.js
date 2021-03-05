//menu de hambúrguer

const hamburgerButton = document.getElementById('hamburger-button');
const headerLinks = document.querySelectorAll('header .container .menu a');

headerLinks.forEach((link) => {
    link.addEventListener('click', (e) => hamburgerButton.checked = false);
})

const API_BASE = 'https://api.github.com/users/guaigua';

//receber dados do github

function obter_dados_do_github() {
  
  const url =  API_BASE

  let r = fetch(url)
  r.then(function(response) {   
    
    
    var data = response.json()

    // nome do portfólio
    .then(preencher_os_dados_do_portfólio)
    
    //nome =>{
     //   var nomeTitle = nome.name;
      //  console.log(nomeTitle);
     // })

    // imagem do portfólio
    //.then(images => {            
    //    var imageUrl = images.avatar_url;
    //     document.querySelector("#hero-img").src = imageUrl;   
    //})
    })
  }

  function preencher_os_dados_do_portfólio(dados){

    // nome do portfólio
    var nomeTitle = dados.name;  
    let text = document.createTextNode(`${nomeTitle}`);
    nome.appendChild(text);
    fullnome.appendChild(text);
     // imagem do portfólio
    var imageUrl =  dados.avatar_url;
    document.querySelector("#hero-img").src = imageUrl;
    console.log(imageUrl);

  }


obter_dados_do_github()