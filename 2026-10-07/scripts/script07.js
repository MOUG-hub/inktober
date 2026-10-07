let etape = 0  // Validation des étapes de l'énigme
let temps = 0
let time = document.getElementById("timer")
let LEDclignote0 = document.getElementById("LEDclignote0")
let LEDclignote1 = document.getElementById("LEDclignote1")
let clignote = 0
let afficherTimer = setInterval(timer, 1000)

let intervalclignoteLEDrouges
let controller = new AbortController()

// let listeEnigme = [Enigme01(),Enigme02(),Enigme03()]

let valides = 0

let listeSymbole = ["images/symbole0.webp","images/symbole1.webp","images/symbole2.webp","images/symbole3.webp","images/symbole4.webp"]
let listeValeurSymbole = []

let liste5 = [0,1,2,3,4]
let listeOrdreSymbole = []
let listeSymboleOrdre = []
let liste3 = [0,1,2]
let listeOrdreFil = []
let listeFilOrdre = []
let positionRelative = []
let bonFil

let listLEDenigme = []
let clignoteLEDrouge = 0


init()


function validerEnigme() {
    // console.log("C'est Gagné")
    let LEDvalide = document.getElementById(`LEDvalide${etape}`)
    LEDvalide.src = "images/LEDvalideON.webp"

    etape += 1
    if (etape == 3) {
        clearInterval(afficherTimer)
        afficherTimer = null

        finEnigme()
    } else {
        choixEnigme()

    }
}

function Enigme01() {
    let enigme = document.querySelector(".enigme01")
    enigme.style.display = "flex"

    temps += 5

    for (let i = 0; i < 5; i++) {
        valeurSymbole = document.getElementById(`symboleValeur${i}`)
        let cible = Math.round(Math.random()*5)

        valeurSymbole.textContent = cible
        listeValeurSymbole[i] = cible

    }

    let aleaSymbole = Math.round(Math.random()*4)
    let symboleCurseurIN1 = document.getElementById("symboleCurseurIN1")
    symboleCurseurIN1.src = listeSymbole[aleaSymbole]

    let valeurEnigme = listeValeurSymbole[aleaSymbole]

    aleaSymbole = Math.round(Math.random()*4)
    let symboleCurseurIN2 = document.getElementById("symboleCurseurIN2")
    symboleCurseurIN2.src = listeSymbole[aleaSymbole]

    valeurEnigme += listeValeurSymbole[aleaSymbole]
    // console.log("Somme : ",valeurEnigme)


    let valider = document.querySelector(".valider")

    valider.addEventListener("click", (event) => {
        if (curseur.value == valeurEnigme) {
            enigme.style.display = "none"
            validerEnigme()
            
        } else {
            // console.log("C'est Boom !")
            finBoom()
        }
        
        
    }, { once: true })

    changementValeurCurseur(curseur)

    let controller = new AbortController()
    // On écoute quand le curseur bouge, 
    // et on change l'Emoji en fonction
    curseur.addEventListener("input", () => {
        curseur.style.accentColor = "red"
        toCible = changementValeurCurseur(curseur)
        // console.log("curseur bouge")
    }, {signal: controller.signal})

}  

function changementValeurCurseur(curseur) {
    let TextValeurCurseur = document.getElementById("curseurValeur")

    // Transformation de la valeur du curseur en chiffre
    let valeurCurseur = Number(curseur.value)

    TextValeurCurseur.textContent = valeurCurseur
  
}


function Enigme02() {
    let enigme = document.querySelector(".enigme02")
    enigme.style.display = "flex"

    temps += 5

    shuffle(liste5)

    for (let i = 0; i < 5; i++) {
        symboleOrdre = document.getElementById(`symboleLigne${i}`)
        let ordre = liste5[i]

        listeOrdreSymbole[ordre] = symboleOrdre
        listeSymboleOrdre[i] = ordre

        symboleOrdre.src = `images/symbole${ordre}.webp`

    }

    // console.log(listeOrdreSymbole)
    // console.log(listeSymboleOrdre)

    shuffle(liste5)

    for (let i = 0; i < 3; i++) {
        fil = document.getElementById(`filBoitier${i}`)
        filSymbole = document.getElementById(`symboleBoitier${i}`)
        let ordre = liste5[i]

        listeOrdreFil[ordre] = fil
        listeFilOrdre[i] = ordre

        fil.src = `images/Fil${ordre}.webp`
        filSymbole.src = `images/symbole${ordre}.webp`

    }

    // console.log(liste5)
    // console.log(listeOrdreFil)
    // console.log(listeFilOrdre)


    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            if (listeFilOrdre[i] == listeSymboleOrdre[j]) {
                positionRelative[i] = j
            }
        }
    }

    // console.log(positionRelative)

    let positionMax = positionRelative[0]
    bonFil = `filBoitier0`
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (positionRelative[i] > positionMax) {
                positionMax = positionRelative[i]
                bonFil = `filBoitier${i}`
            }
        }
    }

    // console.log(bonFil)

    initButtonFilsBoitier()

}

function clickEnigme02(filClick,controller) {
    controller.abort()
    if (filClick == bonFil) {
            let enigme = document.querySelector(".enigme02")
            enigme.style.display = "none"
            validerEnigme()

        } else {
            // console.log("C'est Boom !")
            finBoom()
        }
}

function initButtonFilsBoitier() {
    controller = new AbortController()

    for (let i = 0; i < 3; i++) {
        let fil = document.querySelector(`#filBoitier${i}`)

        fil.addEventListener("click", (event) => {
            filClick = fil.id
            clickEnigme02(filClick,controller)
        
        }, {signal: controller.signal})
        
    }
}


function Enigme03() {
    enigmeEnCours = "Enigme03"
    let enigme = document.querySelector(".enigme03")
    enigme.style.display = "flex"

    temps += 5

    listLEDenigme = []

    for (let i = 0; i < 4; i++) {
        let LEDenigme = document.querySelector(`#LEDrouge${i}`)
        listLEDenigme[i] = LEDenigme
        listLEDenigme[i].src = "images/LEDclignoteOFF.webp"
        // console.log(listLEDenigme[i])
    }

    shuffle(listLEDenigme)

    if (!intervalclignoteLEDrouges) {
        intervalclignoteLEDrouges = setInterval(clignoteLEDrouges, 750)
    }

    initButtonLEDrouges()

}


function clickEnigme03(LEDenigme,controller) {
    controller.abort()
    if (LEDenigme == listLEDenigme[3]) {
            let enigme = document.querySelector(".enigme03")
            enigme.style.display = "none"
            validerEnigme()
        } else {
            // console.log("C'est Boom !")
            finBoom()
        }
}


function clignoteLEDrouges() {
    
    if (clignoteLEDrouge == 0) {
        clignoteLEDrouge = 1
        listLEDenigme[0].src = "images/LEDclignoteON.webp"
        listLEDenigme[2].src = "images/LEDclignoteOFF.webp"

    } else if (clignoteLEDrouge == 1) {
        clignoteLEDrouge = 2
        listLEDenigme[1].src = "images/LEDclignoteON.webp"
        listLEDenigme[0].src = "images/LEDclignoteOFF.webp"

    } else if (clignoteLEDrouge == 2) {
        clignoteLEDrouge = 0
        listLEDenigme[2].src = "images/LEDclignoteON.webp"
        listLEDenigme[1].src = "images/LEDclignoteOFF.webp"

    }

}


function initButtonLEDrouges() {
    controller = new AbortController()

    for (let i = 0; i < 4; i++) {
        let LEDenigme = document.querySelector(`#LEDrouge${i}`)

        LEDenigme.addEventListener("click", (event) => {
            clickEnigme03(LEDenigme,controller)
        
        }, {signal: controller.signal})
        
    }
}



function finEnigme() {
    // let imageBienvenue = document.getElementById("debut")
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    valides = 1

    recommencer.addEventListener("click", (event) => {
        // console.log("click")
        recommencer.style.display = "none"
        init()
        
    }, { once: true })

}


function finBoom() {
    for (let i = 0; i < 3; i++) {
        let enigme = document.querySelector(`.enigme0${i+1}`)
        enigme.style.display = "none"

    }

    clearInterval(afficherTimer)
    afficherTimer = null

    clearInterval(intervalclignoteLEDrouges)
    intervalclignoteLEDrouges = null


    time.textContent = "---"
    LEDclignote0.src = "images/LEDclignoteON.webp"
    LEDclignote1.src = "images/LEDclignoteON.webp"

    if (valides == 0) {
        let reessayer = document.querySelector(".reessayer")
        reessayer.style.display = "flex"

        reessayer.addEventListener("click", (event) => {
            reessayer.style.display = "none"
            init()
            
        }, { once: true })
    }
    
}

function init() {
    if (!afficherTimer) {
        afficherTimer = setInterval(timer, 1000)
    }
    
    temps = 0
    etape = 0
    valides = 0

    for (let i = 0; i < 3; i++) {
        let LEDvalide = document.getElementById(`LEDvalide${i}`)
        LEDvalide.src = "images/LEDvalideOFF.webp"
    }

    shuffle(liste3)
    choixEnigme()

    time.textContent = temps

}


function choixEnigme() {    
    // console.log(liste3)
    let quelleEnigme = liste3[etape]
    // let quelleEnigme = 2

    switch (quelleEnigme) {
        case 0:
            Enigme01()
            break;
        case 1:
            Enigme02()
            break;
        case 2:
            Enigme03()
            break;
    }
}



function timer() {
    temps -= 1
    if (temps < 1) {
        time.textContent = "BOOM !"
        LEDclignote0.src = "images/LEDclignoteON.webp"
        LEDclignote1.src = "images/LEDclignoteON.webp"
        controller.abort()
        finBoom()
    } else {
        time.textContent = temps

        if (clignote == 1) {
            LEDclignote0.src = "images/LEDclignoteOFF.webp"
            LEDclignote1.src = "images/LEDclignoteON.webp"
            clignote = 0
        } else {
            LEDclignote0.src = "images/LEDclignoteON.webp"
            LEDclignote1.src = "images/LEDclignoteOFF.webp"
            clignote = 1
        }
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