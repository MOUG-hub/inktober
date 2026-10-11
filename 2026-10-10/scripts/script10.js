let i = 0
let erreur = 0  // indiquant le nombre d'erreurs

let flamme0 = document.querySelector(".flamme0")
let flamme1 = document.querySelector(".flamme1")
let flamme2 = document.querySelector(".flamme2")
let flamme3 = document.querySelector(".flamme3")
let cycleFlamme = ["images/Flamme0.webp","images/Flamme1.webp","images/Flamme0.webp","images/Flamme2.webp"]

let flamme0IN = 0
let flamme1IN = 0
let flamme2IN = 0
let flamme3IN = 0

let livreIN = 0
let cyclePages = ["images/Page0.webp","images/Page1.webp","images/Page2.webp"]
let nPage = 0

let cycleCercle = ["images/Cercle0.webp","images/Cercle1.webp","images/Cercle2.webp"]
let cercleRituel

let cycleRoseDesVents = ["rotate(0deg)","rotate(90deg)","rotate(180deg)","rotate(270deg)"]
let roseDesVentsRituel

let cycleLune = ["images/Lune0.webp","images/Lune1.webp","images/Lune2.webp","images/Lune3.webp"]
let luneRituel

let bougieVerif0
let bougieVerif1
let bougieVerif2
let bougieVerif3
let cycleBougiesVerif = [bougieVerif0,bougieVerif1,bougieVerif2,bougieVerif3]
let bougieVerifSave0
let bougieVerifSave1
let bougieVerifSave2
let bougieVerifSave3
let cycleBougiesVerifSave = [bougieVerifSave0,bougieVerifSave1,bougieVerifSave2,bougieVerifSave3]



requestAnimationFrame(flameche)
initClicks()
init()


function bougieVerif() {
    switch (cercleRituel) {
        case 0:
            switch (luneRituel) {
                case 0:
                    cycleBougiesVerif[0] = 0
                    cycleBougiesVerif[1] = 0
                    cycleBougiesVerif[2] = 0
                    cycleBougiesVerif[3] = 0

                    break;
                case 1:
                    cycleBougiesVerif[0] = 1
                    cycleBougiesVerif[1] = 1
                    cycleBougiesVerif[2] = 0
                    cycleBougiesVerif[3] = 1

                    break;
                case 2:
                    cycleBougiesVerif[0] = 1
                    cycleBougiesVerif[1] = 1
                    cycleBougiesVerif[2] = 1
                    cycleBougiesVerif[3] = 1

                    break;
                case 3:
                    cycleBougiesVerif[0] = 0
                    cycleBougiesVerif[1] = 1
                    cycleBougiesVerif[2] = 1
                    cycleBougiesVerif[3] = 1

                    break;
            }
            break;
        case 1:
            switch (luneRituel) {
                case 0:
                    cycleBougiesVerif[0] = 0
                    cycleBougiesVerif[1] = 1
                    cycleBougiesVerif[2] = 0
                    cycleBougiesVerif[3] = 1

                    break;
                case 1:
                    cycleBougiesVerif[0] = 1
                    cycleBougiesVerif[1] = 0
                    cycleBougiesVerif[2] = 0
                    cycleBougiesVerif[3] = 0

                    break;
                case 2:
                    cycleBougiesVerif[0] = 1
                    cycleBougiesVerif[1] = 0
                    cycleBougiesVerif[2] = 1
                    cycleBougiesVerif[3] = 0

                    break;
                case 3:
                    cycleBougiesVerif[0] = 0
                    cycleBougiesVerif[1] = 0
                    cycleBougiesVerif[2] = 1
                    cycleBougiesVerif[3] = 0

                    break;
            }
            break;
        case 2:
            switch (luneRituel) {
                case 0:
                    cycleBougiesVerif[0] = 1
                    cycleBougiesVerif[1] = 0
                    cycleBougiesVerif[2] = 0
                    cycleBougiesVerif[3] = 1

                    break;
                case 1:
                    cycleBougiesVerif[0] = 1
                    cycleBougiesVerif[1] = 1
                    cycleBougiesVerif[2] = 0
                    cycleBougiesVerif[3] = 0

                    break;
                case 2:
                    cycleBougiesVerif[0] = 0
                    cycleBougiesVerif[1] = 1
                    cycleBougiesVerif[2] = 1
                    cycleBougiesVerif[3] = 0

                    break;
                case 3:
                    cycleBougiesVerif[0] = 0
                    cycleBougiesVerif[1] = 0
                    cycleBougiesVerif[2] = 1
                    cycleBougiesVerif[3] = 1

                    break;
            }
            break;
        

    }

    // roseDesVentsRituel change les bougieVerif, possiblement par calcul
    // avec un "array" de bougieVerif
    for (let j = 0; j < 4; j++) {
        cycleBougiesVerifSave[j] = cycleBougiesVerif[j]
    }

    for (let j = 0; j < 4; j++) {
        let newBougieVerif = j - roseDesVentsRituel
        if (newBougieVerif < 0) {
            // ?
            newBougieVerif += 4
        }
        
        cycleBougiesVerif[j] = cycleBougiesVerifSave[newBougieVerif]
        console.log(`BougieVerif${j} : `,cycleBougiesVerif[j])
        console.log(`BougieVerifSave${j} : `,cycleBougiesVerifSave[newBougieVerif])

    }

    // Faire des tests fixes, en forçant des configurations Cercle / Lune / Orientation

}


function validerRituel() {
    
    // peut-être boucle "for"

    // for (let j = 0; j < 4; j++) {
    //     console.log(`Valeur Flamme${j} :`,`flamme${j}IN`)
    //     console.log(`Valeur bougieVerif${j} :`,`bougieVerif${j}`)
    //     if (`flamme${j}IN` != `bougieVerif${j}`) {
    //         erreur += 1
    //         console.log("Erreur : ",`bougieVerif${j}`)
    //     }
    // }

    console.log("Valeur Flamme0 :",flamme0IN)
    console.log("Valeur bougieVerif0 :",cycleBougiesVerif[0])
    if (flamme0IN != cycleBougiesVerif[0]) {
        erreur += 1
        console.log("Erreur :  Bougie0")
    }

    console.log("Valeur Flamme1 :",flamme1IN)
    console.log("Valeur bougieVerif1 :",cycleBougiesVerif[1])
    if (flamme1IN != cycleBougiesVerif[1]) {
        erreur += 1
        console.log("Erreur : Bougie1")
    }

    console.log("Valeur Flamme2 :",flamme2IN)
    console.log("Valeur bougieVerif2 :",cycleBougiesVerif[2])
    if (flamme2IN != cycleBougiesVerif[2]) {
        erreur += 1
        console.log("Erreur : Bougie2")
    }

    console.log("Valeur Flamme3 :",flamme3IN)
    console.log("Valeur bougieVerif3 :",cycleBougiesVerif[3])
    if (flamme3IN != cycleBougiesVerif[3]) {
        erreur += 1
        console.log("Erreur : Bougie3")
    }


    
    console.log("nombre d'erreurs : ",erreur)

    // améliorer indication "Orientation" sur Pages, 
    // peut-être juste mettre le soleil en haut


    finEnigme()
}


function clicBougie(bougieClick) {

    switch (bougieClick) {
        case "bougie0":
            if (flamme0IN == 0) {
                flamme0.style.display = "flex"
                flamme0IN = 1
                console.log("flamme0 : click IN")
            } else {
                flamme0.style.display = "none"
                flamme0IN = 0
                console.log("flamme0 : click OUT")
            }            
            break;
        case "bougie1":
            if (flamme1IN == 0) {
                flamme1.style.display = "flex"
                flamme1IN = 1
                console.log("flamme1 : click IN")
            } else {
                flamme1.style.display = "none"
                flamme1IN = 0
                console.log("flamme1 : click OUT")
            }
            break;
        case "bougie2":
            if (flamme2IN == 0) {
                flamme2.style.display = "flex"
                flamme2IN = 1
                console.log("flamme2 : click IN")
            } else {
                flamme2.style.display = "none"
                flamme2IN = 0
                console.log("flamme2 : click OUT")
            }
            break;
        case "bougie3":
            if (flamme3IN == 0) {
                flamme3.style.display = "flex"
                flamme3IN = 1
                console.log("flamme3 : click IN")
            } else {
                flamme3.style.display = "none"
                flamme3IN = 0
                console.log("flamme3 : click OUT")
            }
            break;
    }

}


function finEnigme() {
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    let resultat = document.querySelector(".resultat")
    
    if (erreur > 0) {
        console.log("Le Rituel a merdé")
        resultat.src = "images/Resultat0.webp"
    } else {
        console.log("Le Rituel a fonctionné")
        resultat.src = "images/Resultat1.webp"
    }

    resultat.style.display = "flex"
    
    // Créer Message de Réussite (vert) ?"", ou une image
    // et non-Réussite (rouge) "Le Rituel a merdé", ou une image de caca ?


    recommencer.addEventListener("click", (event) => {
        
        recommencer.style.display = "none"
        // nbErreur.style.display = "none"
        reset()
        init()
                
    }, { once: true })
    
}

function reset() {
    flamme0.style.display = "none"
    flamme0IN = 0
    flamme1.style.display = "none"
    flamme1IN = 0
    flamme2.style.display = "none"
    flamme2IN = 0
    flamme3.style.display = "none"
    flamme3IN = 0

    let livreImage = document.querySelector(".livre")
    let pagesImage = document.querySelector(".pages")

    livreImage.src = "images/Livre0.webp"
    livreIN = 0

    pagesImage.src = cyclePages[nPage]
    pagesImage.style.display = "none"

    let resultat = document.querySelector(".resultat")
    resultat.style.display = ""

}

function init() {

    erreur = 0
    let cercleImage = document.querySelector(".cercle")

    let randomIndex = Math.floor(Math.random() * 3)
    cercleImage.src = cycleCercle[randomIndex]
    cercleRituel = randomIndex
    console.log("cercleRituel : ",randomIndex)
    // cercleImage.src = cycleCercle[0]    
    // cercleRituel = 0


    let luneImage = document.querySelector(".lune")

    randomIndex = Math.floor(Math.random() * 4)
    luneImage.src = cycleLune[randomIndex]
    luneRituel = randomIndex
    console.log("luneRituel : ",randomIndex)


    let roseDesVentsImage = document.querySelector(".roseDesVents")

    randomIndex = Math.floor(Math.random() * 4)
    roseDesVentsImage.style.transform = cycleRoseDesVents[randomIndex]
    roseDesVentsRituel = randomIndex
    console.log("roseDesVentsRituel : ",randomIndex)
    // roseDesVentsImage.style.transform = cycleRoseDesVents[0]
    // roseDesVentsRituel = 0
        

    bougieVerif()

    let valider = document.querySelector(".valider")
    valider.style.display = ""
    

}  


function initClicks() {
    for (let j = 0; j < 4; j++) {
        let bougieImage = document.querySelector(`#bougie${j}`)
        let flammeImage = document.querySelector(`.flamme${j}`)

        flammeImage.addEventListener("click", (event) => {
            console.log("click flamme : ",bougieImage.id)
            bougieClick = bougieImage.id

            clicBougie(bougieClick)
        })
    }    

    for (let j = 0; j < 4; j++) {
        let bougieImage = document.querySelector(`#bougie${j}`)
        // console.log(belierImage)

        bougieImage.addEventListener("click", (event) => {
            console.log("click bougie : ",bougieImage.id)
            bougieClick = bougieImage.id

            clicBougie(bougieClick)
        })
    }

    let livreImage = document.querySelector(".livre")
    let pagesImage = document.querySelector(".pages")
    livreImage.addEventListener("click", (event) => {
        console.log("click livre")
        if (livreIN == 0) {
            livreImage.src = "images/Livre1.webp"
            pagesImage.style.display = "flex"
            livreIN = 1
        } else {
            livreImage.src = "images/Livre0.webp"
            pagesImage.style.display = "none"
            livreIN = 0
        }
    })

    pagesImage.addEventListener("click", (event) => {
        console.log("click page")
        nPage += 1
        if (nPage > 2) {
            nPage = 0
        }
        pagesImage.src = cyclePages[nPage]
    })

    let valider = document.querySelector(".valider")
    valider.addEventListener("click", (event) => {
        
        valider.style.display = "none"
        validerRituel()
                
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