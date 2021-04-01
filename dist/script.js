var listaAnimes = [ 
"https://i.imgur.com/vMy430h.jpg", 
"https://i.imgur.com/ZScyTcz.jpg", 
"https://i.imgur.com/qk0gHHk.jpg",
"https://i.imgur.com/kgvWp2b.jpg",
"https://i.imgur.com/1eop5Vs.jpg",
"https://i.imgur.com/NbJIIKK.jpg"
]

var nomesAnimes = [
  "Garden of Words", 
  "Lucky Star", 
  "Flying Witch", 
  "Symphogear",
  "Dragon Quest: The Adventure of Dai",
  "Bungou Stray Dogs"
]

var linksAnimes = [
"https://www.youtube.com/embed/xnLaOqqtCKs", "https://www.youtube.com/embed/b8bSIgE8epA", "https://www.youtube.com/embed/tlS3BXTq7wQ", "https://www.youtube.com/embed/CLcpO8S8tvY",
"https://www.youtube.com/embed/c9swwJQtb9s",
"https://www.youtube.com/embed/UlnMIhFGcO4" 
]

//var console = prompt("Seja bem vindo ao AnimeFlix! Digite 1 e escolha seu anime agora ^^")

document.write("<p>" + '<iframe id="yt" width="500" height="315" src=""></iframe>' + "</p>")
for (i = 0; i < listaAnimes.length; i++) {
    document.write("<div class='posteres'>")
    document.write("<a id='ok' href='#' " + "onclick='mudarVideo(" + i + ")'" + "</a>")
    document.write("<img src=" + listaAnimes[i] + ">")
    document.write("<div class='nomesAnimes' >")
    document.write('<figcaption class="legenda">' + nomesAnimes[i] +'</figcaption>')
    document.write("</div>")
    document.write("</div>")
}


//if (console == 1){
 // for (var i = 0; i < listaAnimes.length && nomesAnimes.length; i++) {
//  document.write('<figure class="anime">')
 // document.write("<a href=" + linksAnimes[i] +">")
//  document.write("<img src=" + listaAnimes[i] +">")
//  document.write('<figcaption class="legenda">' + nomesAnimes[i] +'</figcaption>')
//  document.write("</figure>")
//}
//}

function mudarVideo(x) {
    var video = document.getElementById("yt")
    video.src = linksAnimes[x]
}


















//for(var i = 0; i < listaAnimes.length; i++) {
  //document.write("<img src=" + listaAnimes[i] + ">")
//var animes = ["Garden of Words", "Symphogear", "Flying Wicth", "Lucky Star"]
//for (var i = 0; i < animes.length; i++) {
  //console.log(animes[i])