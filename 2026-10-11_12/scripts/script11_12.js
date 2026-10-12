let i = 0
let erreur = 0  // indiquant le nombre d'erreurs

let ordonne
let abscisse
let merOrdonne = []
let merAbscisse = []

let cycleMer = ["images/Mer0.webp","images/Mer1.webp","images/Mer2.webp","images/Mer3.webp"]
let cycleSauvetageOrdonne = [0,0,0,1,1,1,1,0,0,-1]
let cycleSauvetageAbscisse = [1,1,1,0,0,0,0,-1,-1,0]
let cycleSauvetage
let sauvetageOrdonne = 0
let sauvetageAbscisse = 0
let oldSauvetageOrdonne
let oldSauvetageAbscisse
let carreMer
let oldSauvetageImage
let sauvetageImage

let time = 1000

let bouee = 0


// requestAnimationFrame(flameche)
initClicks()
init()


function deplacementSauvetage(clickOrdonne,clickAbscisse) {

    oldSauvetageOrdonne = sauvetageOrdonne
    oldSauvetageAbscisse = sauvetageAbscisse
    
    sauvetageOrdonne += cycleSauvetageOrdonne[cycleSauvetage]
    if ((sauvetageAbscisse == 0) || (sauvetageAbscisse == 6)) {
        if (sauvetageOrdonne < 2) {
            sauvetageOrdonne = 4
        } else if (sauvetageOrdonne > 4) {
            sauvetageOrdonne = 2
        }
    } else if ((sauvetageAbscisse == 1) || (sauvetageAbscisse == 5)) {
        if (sauvetageOrdonne < 1) {
            sauvetageOrdonne = 5
        } else if (sauvetageOrdonne > 5) {
            sauvetageOrdonne = 1
        }
    } else {
        if (sauvetageOrdonne < 0) {
            sauvetageOrdonne = 6
        } else if (sauvetageOrdonne > 6) {
            sauvetageOrdonne = 0
        }
    }


    sauvetageAbscisse += cycleSauvetageAbscisse[cycleSauvetage]
    if ((sauvetageOrdonne == 0) || (sauvetageOrdonne == 6)) {
        if (sauvetageAbscisse < 2) {
            sauvetageAbscisse = 4
        } else if (sauvetageAbscisse > 4) {
            sauvetageAbscisse = 2
        }
    } else if ((sauvetageOrdonne == 1) || (sauvetageOrdonne == 5)) {
        if (sauvetageAbscisse < 1) {
            sauvetageAbscisse = 5
        } else if (sauvetageAbscisse > 5) {
            sauvetageAbscisse = 1
        }
    } else {
        if (sauvetageAbscisse < 0) {
            sauvetageAbscisse = 6
        } else if (sauvetageAbscisse > 6) {
            sauvetageAbscisse = 0
        }
    }


    switch (sauvetageOrdonne) {
        case 0:
            carreMer = sauvetageAbscisse - 2
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 1:
            carreMer = sauvetageAbscisse + 2
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 2:
            carreMer = sauvetageAbscisse + 8
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 3:
            carreMer = sauvetageAbscisse + 15
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 4:
            carreMer = sauvetageAbscisse + 22
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 5:
            carreMer = sauvetageAbscisse + 28
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 6:
            carreMer = sauvetageAbscisse + 32
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;

    }

    if (bouee == 0) {

        sauvetageImage.src = "images/Mer1.webp"

        if (oldSauvetageImage != null) {
            oldSauvetageImage.src = "images/Mer0.webp"
        }

        oldSauvetageImage = sauvetageImage

        cycleSauvetage += 1
        if (cycleSauvetage > 9) {
            cycleSauvetage = 0
        }

    
        // Attente avant la maj de l'animation (0.3s = 300ms)
        setTimeout(() => {
            time -= 20
            if (time < 500) {
                time = 500
            }
            if (bouee == 0) {
                deplacementSauvetage()
            }
        }, time);
    } else {
        console.log("clickOrdonne : ",clickOrdonne)
        console.log("oldSauvetageOrdonne : ",oldSauvetageOrdonne)
        console.log("clickAbscisse : ",clickAbscisse)
        console.log("oldSauvetageAbscisse : ",oldSauvetageAbscisse)


        if ((clickOrdonne == sauvetageOrdonne) && (clickAbscisse == sauvetageAbscisse)) {
            sauvetageImage.src = "images/Mer3.webp"
            oldSauvetageImage.src = "images/Mer0.webp"
            
        } else {
            sauvetageImage.src = "images/Mer2.webp"
            if ((clickOrdonne != oldSauvetageOrdonne) || (clickAbscisse != oldSauvetageAbscisse)) {
                oldSauvetageImage.src = "images/Mer0.webp"
            } 
        }

        finEnigme()
    }
    

}



function clicSauvetage(clickOrdonne,clickAbscisse) {
    switch (clickOrdonne) {
        case 0:
            carreMer = clickAbscisse - 2
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 1:
            carreMer = clickAbscisse + 2
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 2:
            carreMer = clickAbscisse + 8
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 3:
            carreMer = clickAbscisse + 15
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 4:
            carreMer = clickAbscisse + 22
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 5:
            carreMer = clickAbscisse + 28
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;
        case 6:
            carreMer = clickAbscisse + 32
            sauvetageImage = document.querySelector(`#mer${carreMer}`)
            
            break;

    }

    sauvetageImage.src = "images/Mer4.webp"
    console.log("sauvetageImage.src : ",sauvetageImage.src)
    bouee = 1
    deplacementSauvetage(clickOrdonne,clickAbscisse)

}


function finEnigme() {
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"


    recommencer.addEventListener("click", (event) => {
        
        recommencer.style.display = "none"
        reset()
        init()
                
    }, { once: true })
    
}

function reset() {
    for (let j = 0; j < 37; j++) {
        let merImage = document.querySelector(`#mer${j}`)
        merImage.src = "images/Mer0.webp"
    }
}

function init() {
    time = 1000
    bouee = 0

    let aleaOrdonne = Math.floor(Math.random() * 6)
    sauvetageOrdonne = aleaOrdonne

    let aleaAbscisse = Math.floor(Math.random() * 6)
    sauvetageOrdonne = aleaAbscisse

    let aleaCycle = Math.floor(Math.random() * 9)
    cycleSauvetage = aleaCycle

    deplacementSauvetage()

}  


function initClicks() {
    for (let j = 0; j < 37; j++) {
        let merImage = document.querySelector(`#mer${j}`)        

        merImage.addEventListener("click", (event) => {
            console.log("click mer : ",merImage.id)

            if (j < 3) {
                ordonne = 0
                abscisse = j + 2
            } else if (j < 8) {
                ordonne = 1
                abscisse = j - 2
            } else if (j < 15) {
                ordonne = 2
                abscisse = j - 8
            } else if (j < 22) {
                ordonne = 3
                abscisse = j - 15
            } else if (j < 29) {
                ordonne = 4
                abscisse = j - 22
            } else if (j < 34) {
                ordonne = 5
                abscisse = j - 28
            } else {
                ordonne = 6
                abscisse = j - 32
            }
            merOrdonne[j] = ordonne
            merAbscisse[j] = abscisse

            console.log("Ordonnée : ",merOrdonne[j]," ; Abscisse : ",merAbscisse[j])

            clicSauvetage(merOrdonne[j],merAbscisse[j])
        })
    }    

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

function flameche(currentTime) {
    
    let time = 150
    let timePassed = currentTime

    // console.log(timePassed)

    // for (let j = 0; j < 2; j++) {
    //     let flamme = document.querySelector(`.flamme${j}`)
    //         i += 1
    //     if (i > 3) {
    //         i = 0
    //     }

    //     flamme.src = cycleFlamme[i]
    // }

    i += 1
    if (i > 3) {
        i = 0
    }
    
    flamme0.src = cycleFlamme[i]
    flamme1.src = cycleFlamme[i]
    flamme2.src = cycleFlamme[i]
    flamme3.src = cycleFlamme[i]
       

    // Attente avant la maj de l'animation (0.3s = 300ms)
    setTimeout(() => {
        requestAnimationFrame(flameche)
    }, time);
    


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