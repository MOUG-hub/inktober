let i = 0
let etape = 0  // Validation des étapes de l'énigme
let listePosMouffette = ["mouffette0","mouffette1","mouffette2","mouffette3","mouffette4","mouffette5"]
let bonnePoub
let petPoub
let perdu = 0

initClicks()
init()


function choixMouffette() {
    let mouffImage = document.querySelector(`.${listePosMouffette[etape]}`)
    console.log(mouffImage)
    mouffImage.style.display = "flex"

    // Fait disparaître la mouffette après la durée de l'animation (1s = 1000ms)
        setTimeout(() => {
            mouffImage.style.display = ""
        }, 1500);


    switch (listePosMouffette[etape]) {
        case "mouffette0":
            bonnePoub = "poubelle4"
            petPoub = "pet4"
            break;
        case "mouffette1":
            bonnePoub = "poubelle2"
            petPoub = "pet2"
            break;
        case "mouffette2":
            bonnePoub = "poubelle0"
            petPoub = "pet0"
            break;
        case "mouffette3":
            bonnePoub = "poubelle5"
            petPoub = "pet5"
            break;
        case "mouffette4":
            bonnePoub = "poubelle3"
            petPoub = "pet3"
            break;
        case "mouffette5":
            bonnePoub = "poubelle1"
            petPoub = "pet1"
            break;
    }

    console.log(bonnePoub)
    console.log(petPoub)
}


function clicPoub(poubClick) {

    if (perdu == 1) {
        perdu = 0
        init()

    } else if (etape < 6) {        
        if (poubClick == bonnePoub) {
            console.log("Gagné")
            etape += 1
            if (etape == 6) {
                
                finEnigme()
            } else {
                
                choixMouffette()
            }
        } else {
            console.log("Perdu")
            console.log(petPoub)
            let petImage = document.querySelector(`.${petPoub}`)

            console.log(petImage)
            petImage.style.display = "flex"

            perdu = 1

        }
    }

}


function finEnigme() {
    // let imageBienvenue = document.getElementById("debut")
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        
        recommencer.style.display = "none"
        init()
                
    }, { once: true })
    // Fait apparaître les mouffettes après la durée de l'animation (1s = 1000ms)
        setTimeout(() => {
            for (let j = 0; j < 6; j++) {
                let mouffImageFin = document.querySelector(`.mouffette${j}`)
                console.log(mouffImageFin)
                mouffImageFin.style.display = "flex"
            }
        }, 1200);
    
}

function init() {
    shuffle(listePosMouffette)
    etape = 0
    console.log(listePosMouffette[etape])

    for (let j = 0; j < 6; j++) {
        let petImage = document.querySelector(`.pet${j}`)
        console.log(petImage)
        petImage.style.display = ""
    }

    for (let j = 0; j < 6; j++) {
        let mouffImageDeb = document.querySelector(`.mouffette${j}`)
        console.log(mouffImageDeb)
        mouffImageDeb.style.display = ""
    }

    choixMouffette()
    
    

}  


function initClicks() {
    for (let j = 0; j < 6; j++) {
        let poubImage = document.querySelector(`#poubelle${j}`)

        poubImage.addEventListener("click", (event) => {
            console.log("click poub : ",poubImage.id)
            poubClick = poubImage.id
            clicPoub(poubClick)
        })
    }
}



function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}