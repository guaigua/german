//menu de hambúrguer

const hamburgerButton = document.getElementById('hamburger-button');
const headerLinks = document.querySelectorAll('header .container .menu a');

headerLinks.forEach((link) => {
    link.addEventListener('click', (e) => hamburgerButton.checked = false);
})

var arr = [ 'a', 'b', 'c', 'd'];

arr.forEach(function(element,index,arreglo){
    console.log(element);
    console.log(index);
    console.log(arreglo);
});

const API_BASE = 'https://api.github.com/users/guaigua';

//receber dados do github

function obter_dados_do_github() {
  
  const url =  API_BASE

  let r = fetch(url)
  r.then(function(response) {   
    
    // imagem do portfólio
    var data = response.json()
    .then(images => {            
      var imageUrl = images.avatar_url;
      console.log(imageUrl);
      document.querySelector("#hero-img").src = imageUrl;   
    })
  })

}

obter_dados_do_github()