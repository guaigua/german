const API_BASE = 'https://api.github.com/users/guaigua';

function obter_artigos() {
  const endpoint = 'articles'
  const url =  API_BASE

  let r = fetch(url)
  r.then(function(response) {
    console.log('Eu tem resposta')
    console.log(response)

    var data = response.json()
    .then(function (dadoArtigos){      
      dadoArtigos.login
      console.log( dadoArtigos.login);
    })

    console.log(data);
  })

}

obter_artigos()
