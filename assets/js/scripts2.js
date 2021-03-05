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
      document.querySelector("#image").src = imageUrl;   
    })
  })

}

obter_dados_do_github()
