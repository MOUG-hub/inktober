let i = 0
let k
let erreur = 0  // indiquant le nombre d'erreurs
let arret = 0

let listObstacles = ["images/Obstacle0.webp","images/Obstacle1.webp"]
let listBidules = [["images/BiduleA0.webp","images/BiduleA1.webp"],["images/BiduleB0.webp","images/BiduleB1.webp"],["images/BiduleC0.webp","images/BiduleC1.webp"]]
let listRestesBidules = []
let listAleaRestesBidules = [0,2,4]
// let listLigneVide = ["images/CaseVide.png","images/CaseVide.png","images/CaseVide.png"]
let listElementsLignes = [["images/CaseVide.png","images/CaseVide.png","images/CaseVide.png"],["images/CaseVide.png","images/CaseVide.png","images/CaseVide.png"],["images/CaseVide.png","images/CaseVide.png","images/CaseVide.png"],[],["images/CaseVide.png","images/CaseVide.png","images/CaseVide.png"],[],["images/CaseVide.png","images/CaseVide.png","images/CaseVide.png"],[],["images/CaseVide.png","images/CaseVide.png","images/CaseVide.png"]]

let listElementsLignesVerif = [[],[],[],[0,1,"casse"],[],[0,1,"casse"],[],[0,1,"casse"],[]]

let balaiColl = 1
let oldBalaiColl = 1
let balaiCase = 10

let pos = 5

let rotationG = 0
let rotationD = 0
let resetAnim


initClicks()
init()
// animationSquelette()


function moveBalai() {
    // console.log("pos : ",pos)

    if ((pos != 3) && (pos != 1) && (pos != -1)) {
        // console.log(balaiColl)
        if (balaiColl < 0) {
            balaiColl = 2
        } else if (balaiColl > 2) {
            balaiColl = 0
        }
        // console.log(balaiColl)
        balaiCase = 9 + balaiColl

        let balaiImage = document.querySelector(`#case${9+balaiColl}`)
        
        balaiImage.src = "images/Balai0.webp"

        let oldBalaiImage = document.querySelector(`#case${9+oldBalaiColl}`)
        oldBalaiImage.src = "images/CaseVide.png"

        oldBalaiColl = balaiColl
    } else {
        balaiColl = oldBalaiColl
    }
    
}

function affichageLigne(listElementsLignes) {
    for (j = 0; j<4; j++) {
        for (l = 0; l<3; l++) {
            let caseImage = document.querySelector(`#case${(j*3)+l}`)
            caseImage.src = listElementsLignes[j+pos][l]
        }
        // console.log(`ligne ${j}`,listElementsLignes[j+pos])
    }

    if (listElementsLignesVerif[3+pos][balaiColl] != "casse") {
        let balaiImage = document.querySelector(`#case${9+balaiColl}`)   
        balaiImage.src = "images/Balai0.webp"
    } else {
        let balaiImage = document.querySelector(`#case${9+balaiColl}`)   
        balaiImage.src = "images/Balai1.webp"
        arret = 1
        confus()
        finEnigme()
    }

    if (listElementsLignesVerif[3+pos][balaiColl] == 1) {
        erreur +=1
        // console.log("NB Erreur : ",erreur)
    } 

    pos -= 1

    if ((pos >= 0) && (arret == 0)) {
        setTimeout(() => {      

            affichageLigne(listElementsLignes)
        }, 1000);
    } 

    if ((pos < 0)) {
        finEnigme()
    }

}


function finEnigme() {
    
    let chapeauImage = document.querySelector(`.chapeau`)   

    chapeauImage.addEventListener("click", (event) => {
        // console.log("click sorciere")
        // confus()
        reset()
        init()

        // console.log("Ordonnée : ",merOrdonne[j]," ; Abscisse : ",merAbscisse[j])

        // clicSquelette(squeletteImage.id,squeletteImage)
    }, { once: true })

    if ((arret == 0) && (erreur > 0)) {
        // console.log("perdu")
        let sorciereImage = document.querySelector(`.sorciere`) 
        sorciereImage.src = "images/Sorciere3.webp"
    } else if (arret == 0) {
        // console.log("gagné")
        sorciereImage = document.querySelector(`.sorciere`) 
        sorciereImage.src = "images/Sorciere2.webp"
    }
    

    // let recommencer = document.querySelector(".recommencer")
    // recommencer.style.display = "flex"

    // recommencer.addEventListener("click", (event) => {
        
    //     recommencer.style.display = "none"
    //     // reset()
    //     resetAnim = 0
    //     init()
                
    // }, { once: true })
    
}

function reset() {
    for (let j = 0; j < 12; j++) {
        let caseImage = document.querySelector(`#case${j}`)
        caseImage.src = "images/CaseVide.png"

        if (j == 10) {
            caseImage.src = "images/Balai0.webp"
        }
    }

    let sorciereImage = document.querySelector(`.sorciere`) 
    sorciereImage.src = "images/Sorciere0.webp"

    let oeilGaucheImage = document.querySelector(`.oeilGauche`) 
    oeilGaucheImage.style.display = ""

    let oeilDroitImage = document.querySelector(`.oeilDroit`) 
    oeilDroitImage.style.display = ""
}

function init() {
    erreur = 0
    arret = 0
    pos = 5
    balaiColl = 1
    oldBalaiColl = 1
    balaiCase = 10


    let k = 1
    for (j = 0; j < 3; j++) {
        shuffle(listBidules[j])
        // console.log(listBidules[j])

        let caseImage = document.querySelector(`#case${k}`)
        caseImage.src = listBidules[j][0]

        listRestesBidules[j] = listBidules[j][1]

        if (k == 1) {
            k = 4
        } else {
            k = 7
        }

        // console.log("Restes Bidules : ",listRestesBidules)
    }

    

    for (j = 0; j < 9; j++) {
        shuffle(listElementsLignesVerif[j])
        // console.log(listElementsLignesVerif[j])
    }

    k = 0
    let m = 0
    shuffle(listAleaRestesBidules)
    for (j = 0; j < 9; j++) {
        for (let l = 0; l < 3; l++) {
            if ((j == 3) || (j == 5) || (j == 7)) {                
                if (listElementsLignesVerif[j][l] == 1) {
                    listElementsLignes[j][l] = listBidules[m][0]
                    m += 1
                } else if (listElementsLignesVerif[j][l] == 0) {
                    listElementsLignes[j][l] = listRestesBidules[k]
                    k += 1
                } else if (listElementsLignesVerif[j][l] == "casse") {
                    shuffle(listObstacles)
                    listElementsLignes[j][l] = listObstacles[0]
                }
            } else {
                listElementsLignes[j][l] = "images/CaseVide.png"
            }
        }

        // console.log("element Ligne : ",listElementsLignes[j])
    }

    setTimeout(() => {      

        affichageLigne(listElementsLignes)
    }, 2500);
    
}  


function initClicks() {
    

    let boutonGauche = document.querySelector(`.btnGauche`)   

    boutonGauche.addEventListener("click", (event) => {
        // console.log("Gauche")
        balaiColl -= 1
        moveBalai()
    })

    let boutonDroit = document.querySelector(`.btnDroit`)   

    boutonDroit.addEventListener("click", (event) => {
        // console.log("Droit")
        balaiColl += 1
        moveBalai()
    })


    window.addEventListener("keydown", (event)  => {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        switch (event.key) {
            case "ArrowLeft":
                // console.log("left")
                balaiColl -= 1
                moveBalai()
            // Do something for "left arrow" key press.
            break;
            case "ArrowRight":
                // console.log("Right")
                balaiColl += 1
                moveBalai()
            // Do something for "right arrow" key press.
            break;
        }

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    })

}

function confus() {
    rotationG = 0  
    rotationD = 180

    let sorciereImage = document.querySelector(`.sorciere`) 
    sorciereImage.src = "images/Sorciere1.webp"

    let oeilGaucheImage = document.querySelector(`.oeilGauche`) 
    oeilGaucheImage.style.display = "flex"

    let oeilDroitImage = document.querySelector(`.oeilDroit`) 
    oeilDroitImage.style.display = "flex"

    requestAnimationFrame(animationOeilGauche)
    requestAnimationFrame(animationOeilDroit)

}  


function animationOeilGauche(currentTime) {    
    let time = 100
    
        let oeilGaucheImage = document.querySelector(`.oeilGauche`)        

        rotationG += 60
        oeilGaucheImage.style.transform = `rotate(${rotationG}deg)`
      
    setTimeout(() => {      

        requestAnimationFrame(animationOeilGauche)
    }, time); 
        
}

function animationOeilDroit(currentTime) {    
    let time = 100
    
        let oeilDroitImage = document.querySelector(`.oeilDroit`)        

        rotationD += 60
        oeilDroitImage.style.transform = `rotate(${rotationD}deg)`
      
    setTimeout(() => {      

        requestAnimationFrame(animationOeilDroit)
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