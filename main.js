var linksFilmes = ["whatif.html","wanda.html","loki.html","civil.html"]

var fotoFilmes = ["https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BBE8B7E41DB075393FBC029DC564C385F3CFBD3F88A9BDB288DAAC4661374EF9/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2604045F76DEAB54D0499A8CC9FDC17F374BD3CFCBDBCCC14A70B9A44A6512CF/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC2BD3D0355C58B637CB6C5120D77996D7C0979AAB0C12B7A1E360EF18AA738F/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A7FBE146CF90297B8DBE7DB0AE9D0F86D7803ACABA26C61A8D03E0EBCB0D6A37/scale?width=400&aspectRatio=1.78&format=jpeg"]  // lista da primeira parte dos albuns

for (i = 0; i < fotoFilmes.length; i++){
  var elementoFotoFilmes = "<a href=" + linksFilmes[i] + "><img src=" + fotoFilmes[i] + "></a>"
  var listaFilmes = document.querySelector('#listaFilmes')
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFotoFilmes
} // for que para pega todos os itens da lista fotoFilmes (o for é necessaios nesse caso para passar por cada item dentro da lista, sem o for ele so vai pegar o primeiro item da lista

var fotoFilmes2 = ["https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/73E06645FD4DABC54890947D213C99153735BCBD8FBBBFC15705C80015700746/scale?width=400&aspectRatio=1.78&format=jpeg","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BCA54E821B6C407D1CB83E72C977119826A9F3EDF6A7D8ED34051ACFC888C7FB/scale?width=400&aspectRatio=1.78&format=jpeg","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0EC29F0988AFE4448F47A22EDD1A2DE4EE53D1740CB2DBDEF76D743C337F6D83/scale?width=400&aspectRatio=1.78&format=jpeg","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F88EE1CCF0E1CB19331EFACC02EF35A8E887D03C3361C22C44780CE74680A3AC/scale?width=400&aspectRatio=1.78&format=jpeg"] // lista da ultima parte dos albuns

for (i = 0; i < fotoFilmes2.length; i++){
  var elementoFotoFilmes2 = "<img src=" + fotoFilmes2[i] + ">"
  var listaFilmes2 = document.querySelector('#listaFilmes2')
  listaFilmes2.innerHTML = listaFilmes2.innerHTML + elementoFotoFilmes2
} // for que pega todos os itens da lista fotoFilmes2


var fotoFilmes3 = ["https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D5587F8E73441941682D2D86E1EEA449EDFA4D87D054065D2653E3AFA9504D7/scale?width=400&aspectRatio=1.78&format=jpeg","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0775DC61D43C7CC20B650D8E06CED2CB6FF5C56A4A9742B159065D5B938225EB/scale?width=400&aspectRatio=1.78&format=jpeg","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC7E3B35819BD916AEA5F1F64522862D5B0736D79BA512957144FD40594F1C4/scale?width=400&aspectRatio=1.78&format=jpeg","https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F0FE6BA5F451FB1496986F7540A5D3040A9E5404888D0629D4CE4E782DA94D24/scale?width=400&aspectRatio=1.78&format=jpeg"] // lista da ultima parte dos albuns

for (i = 0; i < fotoFilmes3.length; i++){
  var elementoFotoFilmes3 = "<img src=" + fotoFilmes3[i] + ">"
  var listaFilmes3 = document.querySelector('#listaFilmes3')
  listaFilmes3.innerHTML = listaFilmes3.innerHTML + elementoFotoFilmes3
} // for que pega todos os itens da lista fotoFilmes2

var videoFilmes = ["https://www.youtube.com/embed/wPosLpgMtTY","https://www.youtube.com/embed/CyiiEJRZjSU", "https://www.youtube.com/embed/6ZfuNTqbHE8"] // lista dos videos clips

for (i = 0; i < videoFilmes.length; i++){
  var elementoVideoFilmes = "<iframe width= 480 height= 315 "+ "src= "+videoFilmes[i]+ " title= YouTube video player "+ "frameborder= 0 "+"allow= accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "+" allowfullscreen></iframe>"
  var listaFilmes = document.querySelector('#listaVideo')
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoVideoFilmes
} // for para pegar todos os itens da lista videoFilmes







function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme').value
  if (campoFilmeFavorito.endsWith ){
    listarFilmesNaTela(campoFilmeFavorito)
  } else {
    alert("VOCE PRECISA USAR UMA URL VALIDA")
  }
  document.querySelector('#filme').value = ""
} // funçao que acionada pelo botao e captura oque foi inserido na caixa de texto 

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  console.log(listaFilmes)
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
} // funçao que pega o resultado da função adicionarFilme() e manda a imagem pro HTML sem problemas

function adicionarVideo(){
  var campoVideoFavorito = document.querySelector('#video').value
  listarVideoNaTela(campoVideoFavorito)
} //funçao que acionada pelo botao e captura oque foi inserido na caixa de texto 

function listarVideoNaTela(video){
  var listaFilmes = document.querySelector('#listaVideo')
  console.log(video)
  var elementoVideo = "<iframe width= 560 height= 315 "+ "src= "+video+ " title= YouTube video player "+ "frameborder= 0 "+"allow= accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"+" allowfullscreen></iframe>"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoVideo
} // funçao que pega o resultado da função adicionarVideo() e manda a imagem pro HTML sem problemas
 
