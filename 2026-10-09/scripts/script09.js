let i = 0
let erreur = 0  // indiquant le nombre d'erreurs

let cycleBelierD = ["boucheD","oeilGaucheD","oeilDroitD","corneGaucheD","corneDroiteD"]
let cycleBouche = ["images/Bouche0.webp","images/Bouche1.webp"]
let cycleOeilGauche = ["images/Oeil0.webp","images/Oeil1.webp","images/Oeil2.webp",
    "images/Oeil3.webp","images/Oeil4.webp"]
let cycleOeilDroit = ["images/Oeil0.webp","images/Oeil1.webp","images/Oeil2.webp",
    "images/Oeil3.webp","images/Oeil4.webp"]
let cycleCorneGauche = ["images/CorneGauche0.webp","images/CorneGauche1.webp",
    "images/CorneGauche2.webp"]
let cycleCorneDroite = ["images/CorneDroite0.webp","images/CorneDroite1.webp",
    "images/CorneDroite2.webp"]

let boucheBelierG
let boucheBelierD
let oeilGaucheBelierG
let oeilGaucheBelierD
let oeilDroitBelierG
let oeilDroitBelierD
let corneGaucheBelierG
let corneGaucheBelierD
let corneDroiteBelierG
let corneDroiteBelierD

let posCycleBouche = 0
let posCycleOeilGauche = 0
let posCycleOeilDroit = 0
let posCycleCorneGauche = 0
let posCycleCorneDroite = 0


initClicks()
init()


function validerBelier() {
    apparitionDisparitionBelier("G",1)

    if (boucheBelierG != boucheBelierD) {
        // console.log("bouche: faux !")
        erreur += 1
        let boucheGImage = document.querySelector("#boucheG")
        let boucheDImage = document.querySelector("#boucheD")

        wizz(boucheGImage)
        wizz(boucheDImage)
    }

    if (oeilGaucheBelierG != oeilGaucheBelierD) {
        // console.log("oeilGauche: faux !")
        erreur += 1
        let oeilGaucheGImage = document.querySelector("#oeilGaucheG")
        let oeilGaucheDImage = document.querySelector("#oeilGaucheD")

        wizz(oeilGaucheGImage)
        wizz(oeilGaucheDImage)
    }

    if (oeilDroitBelierG != oeilDroitBelierD) {
        // console.log("oeilDroit: faux !")
        erreur += 1
        let oeilDroitGImage = document.querySelector("#oeilDroitG")
        let oeilDroitDImage = document.querySelector("#oeilDroitD")

        wizz(oeilDroitGImage)
        wizz(oeilDroitDImage)
    }

    if (corneGaucheBelierG != corneGaucheBelierD) {
        // console.log("corneGauche: faux !")
        erreur += 1
        let corneGaucheGImage = document.querySelector("#corneGaucheG")
        let corneGaucheDImage = document.querySelector("#corneGaucheD")

        wizz(corneGaucheGImage)
        wizz(corneGaucheDImage)
    }

    if (corneDroiteBelierG != corneDroiteBelierD) {
        // console.log("corneDroite: faux !")
        erreur += 1
        let corneDroiteGImage = document.querySelector("#corneDroiteG")
        let corneDroiteDImage = document.querySelector("#corneDroiteD")

        wizz(corneDroiteGImage)
        wizz(corneDroiteDImage)
    }



    finEnigme()
}


function clicBelier(belierClick) {

    switch (belierClick) {
        case "boucheD":
            posCycleBouche +=1
            if (posCycleBouche > 1) {
                posCycleBouche = 0
            }
            let boucheImage = document.querySelector("#boucheD")
            boucheImage.src = cycleBouche[posCycleBouche]
            boucheBelierD = posCycleBouche
            break;
        case "oeilGaucheD":
            posCycleOeilGauche +=1
            if (posCycleOeilGauche > 4) {
                posCycleOeilGauche = 0
            }
            let oeilGaucheImage = document.querySelector("#oeilGaucheD")
            oeilGaucheImage.src = cycleOeilGauche[posCycleOeilGauche]
            oeilGaucheBelierD = posCycleOeilGauche
            break;
        case "oeilDroitD":
            posCycleOeilDroit +=1
            if (posCycleOeilDroit > 4) {
                posCycleOeilDroit = 0
            }
            let oeilDroitImage = document.querySelector("#oeilDroitD")
            oeilDroitImage.src = cycleOeilDroit[posCycleOeilDroit]
            oeilDroitBelierD = posCycleOeilDroit
            break;
        case "corneGaucheD":
            posCycleCorneGauche +=1
            if (posCycleCorneGauche > 2) {
                posCycleCorneGauche = 0
            }
            let corneGaucheImage = document.querySelector("#corneGaucheD")
            corneGaucheImage.src = cycleCorneGauche[posCycleCorneGauche]
            corneGaucheBelierD = posCycleCorneGauche
            break;
        case "corneDroiteD":
            posCycleCorneDroite +=1
            if (posCycleCorneDroite > 2) {
                posCycleCorneDroite = 0
            }
            let corneDroiteImage = document.querySelector("#corneDroiteD")
            corneDroiteImage.src = cycleCorneDroite[posCycleCorneDroite]
            corneDroiteBelierD = posCycleCorneDroite
            break;
    }


}


function finEnigme() {
    // let imageBienvenue = document.getElementById("debut")
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    let nbErreur = document.querySelector(".nbErreur")

    if (erreur == 0) {
        nbErreur.textContent = "C'est tout bon !"
    } else if (erreur == 1) {
        nbErreur.textContent = erreur + " erreur"
    } else {
        nbErreur.textContent = erreur + " erreurs"
    }
    
    nbErreur.style.display = "flex"


    recommencer.addEventListener("click", (event) => {
        
        recommencer.style.display = "none"
        nbErreur.style.display = "none"
        init()
                
    }, { once: true })
    
}

function init() {
    // apparitionDisparitionBelier("G",1)
    // apparitionDisparitionBelier("D",1)

    apparitionDisparitionBelier("G",1)
    apparitionDisparitionBelier("D",0)

    erreur = 0

    // Fait disparaître le bélier de Gauche
    // et apparaître le bélier de droite après la durée de l'animation (1s = 1000ms)
        setTimeout(() => {
            apparitionDisparitionBelier("D",1)
            apparitionDisparitionBelier("G",0)
            let valider = document.querySelector(".valider")
            valider.style.display = "flex"

        }, 3333);
    
    belierGauche()
    belierDroit()
    

}  


function initClicks() {
    for (let j = 0; j < 5; j++) {
        let image = cycleBelierD[j]
        let belierImage = document.querySelector(`#${image}`)
        // console.log(belierImage)

        belierImage.addEventListener("click", (event) => {
            // console.log("click poub : ",belierImage.id)
            belierClick = belierImage.id
            clicBelier(belierClick)
        })
    }    

    let valider = document.querySelector(".valider")
    valider.addEventListener("click", (event) => {
        
        valider.style.display = "none"
        validerBelier()
                
    })

}

function apparitionDisparitionBelier(position,apparition) {
    let belierImage = document.querySelector(`.belier${position}`)
    let boucheImage = document.querySelector(`#bouche${position}`)
    let oeilGaucheImage = document.querySelector(`#oeilGauche${position}`)
    let oeilDroitImage = document.querySelector(`#oeilDroit${position}`)
    let corneGaucheImage = document.querySelector(`#corneGauche${position}`)
    let corneDroiteImage = document.querySelector(`#corneDroite${position}`)

    // console.log(belierImage)
    // console.log(boucheImage)
    // console.log(oeilGaucheImage)
    // console.log(oeilDroitImage)
    // console.log(corneGaucheImage)
    // console.log(corneDroiteImage)

    if (apparition == 0) {
        belierImage.style.display = "none"
        boucheImage.style.display = "none"
        oeilGaucheImage.style.display = "none"
        oeilDroitImage.style.display = "none"
        corneGaucheImage.style.display = "none"
        corneDroiteImage.style.display = "none"
    } else {
        belierImage.style.display = ""
        boucheImage.style.display = ""
        oeilGaucheImage.style.display = ""
        oeilDroitImage.style.display = ""
        corneGaucheImage.style.display = ""
        corneDroiteImage.style.display = ""
    }
}

function belierGauche() {
    let boucheImage = document.querySelector("#boucheG")
    let oeilGaucheImage = document.querySelector("#oeilGaucheG")
    let oeilDroitImage = document.querySelector("#oeilDroitG")
    let corneGaucheImage = document.querySelector("#corneGaucheG")
    let corneDroiteImage = document.querySelector("#corneDroiteG")

    let randomIndex = Math.floor(Math.random() * 2)
    boucheImage.src = cycleBouche[randomIndex]
    boucheBelierG = randomIndex

    randomIndex = Math.floor(Math.random() * 5)
    oeilGaucheImage.src = cycleOeilGauche[randomIndex]
    oeilGaucheBelierG = randomIndex

    randomIndex = Math.floor(Math.random() * 5)
    oeilDroitImage.src = cycleOeilDroit[randomIndex]
    oeilDroitBelierG = randomIndex

    randomIndex = Math.floor(Math.random() * 3)
    corneGaucheImage.src = cycleCorneGauche[randomIndex]
    corneGaucheBelierG = randomIndex

    randomIndex = Math.floor(Math.random() * 3)
    corneDroiteImage.src = cycleCorneDroite[randomIndex]
    corneDroiteBelierG = randomIndex

    // console.log(boucheBelierG)
    // console.log(oeilGaucheBelierG)
    // console.log(oeilDroitBelierG)
    // console.log(corneGaucheBelierG)
    // console.log(corneDroiteBelierD)

}

function belierDroit() {
    let boucheImage = document.querySelector("#boucheD")
    let oeilGaucheImage = document.querySelector("#oeilGaucheD")
    let oeilDroitImage = document.querySelector("#oeilDroitD")
    let corneGaucheImage = document.querySelector("#corneGaucheD")
    let corneDroiteImage = document.querySelector("#corneDroiteD")

    posCycleBouche = Math.floor(Math.random() * 2)
    boucheImage.src = cycleBouche[posCycleBouche]
    boucheBelierD = posCycleBouche

    posCycleOeilGauche = Math.floor(Math.random() * 5)
    oeilGaucheImage.src = cycleOeilGauche[posCycleOeilGauche]
    oeilGaucheBelierD = posCycleOeilGauche

    posCycleOeilDroit = Math.floor(Math.random() * 5)
    oeilDroitImage.src = cycleOeilDroit[posCycleOeilDroit]
    oeilDroitBelierD = posCycleOeilDroit

    posCycleCorneGauche = Math.floor(Math.random() * 3)
    corneGaucheImage.src = cycleCorneGauche[posCycleCorneGauche]
    corneGaucheBelierD = posCycleCorneGauche

    posCycleCorneDroite = Math.floor(Math.random() * 3)
    corneDroiteImage.src = cycleCorneDroite[posCycleCorneDroite]
    corneDroiteBelierD = posCycleCorneDroite

    // console.log(boucheBelierD)
    // console.log(oeilGaucheBelierD)
    // console.log(oeilDroitBelierD)
    // console.log(corneGaucheBelierD)
    // console.log(corneDroiteBelierD)

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


function wizz(element) {  
    element.classList.add('wizz')

    // Retire la classe après la durée de l'animation (0.3s = 300ms)
    setTimeout(() => {
        element.classList.remove('wizz');
    }, 300);
}