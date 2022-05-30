function exo1(){
    let xDiv = document.getElementsByTagName("div");
    console.log(xDiv);
    let xHun = document.querySelector("h1")
    xHun.innerHTML = "Je suis un titre"
    let xDeux = document.querySelector("h2")
    xDeux.innerHTML = "Je suis un sous-titre"
    let xBtn = document.querySelector("button")
    xBtn.innerHTML = "Acceptez"
    xHun.innerHTML = "Je suis un grand titre"        
}
function exo2(){
    let xHun = document.querySelector("h1")
    xHun.innerHTML = "A chien"

    let xUn = document.querySelectorAll(".menu")[0]
    xUn.innerHTML = "Berger Allemand a 60 +/-"
    let xDeux = document.querySelectorAll(".menu")[1]
    xDeux.innerHTML = "Chiuhahahhahah a 5 +/-"
    let xTrois = document.querySelectorAll(".menu")[2]
    xTrois.innerHTML = "Beagle 90 +/-"
    let xQuatre = document.querySelectorAll(".menu")[3]
    xQuatre.innerHTML = "Boxer 60 +/-"
}
exo2()