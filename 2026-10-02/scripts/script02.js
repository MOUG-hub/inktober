let i = 0
let chemin = 0  // Validation des étapes de l'énigme
let couloirChoisie
let couloirChoisiePrec


init()
aleaCouloir()


function clicFleche(boutonClick) {
    let imageBienvenue = document.getElementById("debut")

    if (chemin < 4) {
        if ((couloirChoisie == 0) || (couloirChoisie == 4) || (couloirChoisie == 8)) {
            if (boutonClick == "btnHaut") {
            chemin += 1
            console.log("cheminClickHaut : ",chemin)
            imageBienvenue.src = "images/CouloirDébutVide.png"
            // imageBienvenue.style.display = "none"
            if (chemin == 4) {
                finEnigme()
            } else {
                aleaCouloir()
            }
            
            } else {
                chemin = 0
                console.log("cheminClickElseHaut : ",chemin)
                imageBienvenue.src = "images/CouloirDébut.webp"
                // imageBienvenue.style.display = "flex"
                aleaCouloir()
            }
        }

        else if ((couloirChoisie == 1) || (couloirChoisie == 2) || (couloirChoisie == 5)) {
            if (boutonClick == "btnDroit") {
            chemin += 1
            console.log("cheminClickDroit : ",chemin)
            imageBienvenue.src = "images/CouloirDébutVide.png"
            // imageBienvenue.style.display = "none"
            if (chemin == 4) {
                finEnigme()
            } else {
                aleaCouloir()
            }
            
            } else {
                chemin = 0
                console.log("cheminClickElseDroit : ",chemin)
                imageBienvenue.src = "images/CouloirDébut.webp"
                // imageBienvenue.style.display = "flex"
                aleaCouloir()
            }
        }

        else if ((couloirChoisie == 3) || (couloirChoisie == 6) || (couloirChoisie == 7)) {
            if (boutonClick == "btnGauche") {
            chemin += 1
            console.log("cheminClickGauche : ",chemin)
            imageBienvenue.src = "images/CouloirDébutVide.png"
            // imageBienvenue.style.display = "none"
            if (chemin == 4) {
                finEnigme()
            } else {
                aleaCouloir()
            }
            
            } else {
                chemin = 0
                console.log("cheminClickElseGauche : ",chemin)
                imageBienvenue.src = "images/CouloirDébut.webp"
                // imageBienvenue.style.display = "flex"
                aleaCouloir()
            }
        }
    
    }
}


// Défini quelle flèche sera choisie pour cette étape de l'énigme
function aleaCouloir() {
    let imageCouloir = document.getElementById("couloir")

    couloirChoisie = Math.floor(Math.random() * 9)
    console.log("chemin : ",chemin)
    console.log("couloirChoisie : ",couloirChoisie)
    console.log("couloirChoisie Précédent: ",couloirChoisiePrec)

    while (couloirChoisie == couloirChoisiePrec) {
        couloirChoisie = Math.floor(Math.random() * 9)
        // console.log("while : ",couloirChoisie)
    }
    
    imageCouloir.src = `images/Couloir${couloirChoisie}.webp`

    couloirChoisiePrec = couloirChoisie

}


function finEnigme() {
    let imageBienvenue = document.getElementById("debut")
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        console.log("click")
        chemin = 0
        imageBienvenue.src = "images/CouloirDébut.webp"
        // imageBienvenue.style.display = "flex"
        aleaCouloir()
        recommencer.style.display = "none"
        
    }, { once: true })

    let imageCouloir = document.getElementById("couloir")
    
    imageCouloir.src = "images/CouloirFin.webp"

}

function init() {
    let boutonHaut = document.querySelector(".btnHaut")
    let boutonGauche = document.querySelector(".btnGauche")
    let boutonDroit = document.querySelector(".btnDroit")

    console.log(boutonHaut)
    console.log(boutonGauche)
    console.log(boutonDroit)

    boutonHaut.addEventListener("click", (event) => {
        console.log("click Haut")
        boutonClick = "btnHaut"
        clicFleche(boutonClick)
    })

    boutonGauche.addEventListener("click", (event) => {
        console.log("click Gauche")
        boutonClick = "btnGauche"
        clicFleche(boutonClick)
    })

    boutonDroit.addEventListener("click", (event) => {
        console.log("click Droit")
        boutonClick = "btnDroit"
        clicFleche(boutonClick)
    })

}

