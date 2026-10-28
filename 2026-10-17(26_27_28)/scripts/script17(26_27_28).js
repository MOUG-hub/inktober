let i = 0
let n
let erreur = 0  // indiquant le nombre d'erreurs

let listCases = [0,0,0,1,1,1,2,2,2]
let nbClick
let bonneImage
let nbBonneRep


// initClicks()
init()



function clicCase(j,caseImage,controller) {   
    nbClick += 1
    // console.log("nbClick : ",nbClick)

    if (nbClick == 1) {        
        bonneImage = listCases[j]
    } else if (nbClick == 2) {        
        if (listCases[j] != bonneImage) {
            mauvaiseFin(j,caseImage,controller)
            // console.log("Perdu")
        }
    } else if (nbClick == 3) {
        nbClick = 0
        if (listCases[j] != bonneImage) {
            mauvaiseFin(j,caseImage,controller)
            // console.log("Perdu")
        } else {
            let logoImage
            switch (bonneImage) {
            case 0:
                logoImage = document.querySelector(`.ZIP`)                
                break;
            case 1:
                logoImage = document.querySelector(`.dollar`)
                break;
            case 2:
                logoImage = document.querySelector(`.trophe`)
                break;
            }

            logoImage.style.filter = "saturate(100%)"

            nbBonneRep += 1

            if (nbBonneRep == 2) {
                bonneFin(j,caseImage,controller)
                // console.log("Gagné")
            } 
        }
    }
    
    
    
    
}

function voirImage(j,caseImage) {
    switch (listCases[j]) {
            case 0:
                caseImage.src = "images/ZIP.webp"
                caseImage.classList.add('imageZIP')
                break;
            case 1:
                caseImage.src = "images/Dollar.webp"
                caseImage.classList.add('imageDollar')
                break;
            case 2:
                caseImage.src = "images/Trophée.webp"
                caseImage.classList.add('imageTrophe')
                break;
        }
}

function mauvaiseFin(j,caseImage,controller) {
    controller.abort()

    caseImage.classList.add('imageFaux')

    let recommencer = document.getElementById(`recommencer`)
    recommencer.textContent = "Réessayer"

    finEnigme(recommencer)

}

function bonneFin(j,caseImage,controller) {
    controller.abort()

    let logoImage = document.querySelector(`.ZIP`)
    logoImage.style.filter = "saturate(100%)"

    logoImage = document.querySelector(`.dollar`)
    logoImage.style.filter = "saturate(100%)"

    logoImage = document.querySelector(`.trophe`)
    logoImage.style.filter = "saturate(100%)"

    for (let j = 0; j < 9; j++) {
        let caseImage = document.getElementById(`case${j}`)
        caseImage.classList.remove('imageZIP')
        caseImage.classList.remove('imageDollar')
        caseImage.classList.remove('imageTrophe')

        voirImage(j,caseImage)        
    }

    let recommencer = document.getElementById(`recommencer`)
    recommencer.textContent = "Recommencer"

    finEnigme(recommencer)

}


function finEnigme(recommencer) {  
    
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        recommencer.style.display = "none"       
        
        init()

    }, { once: true })
    
}



function init() {
    nbClick = 0
    nbBonneRep = 0

    shuffle(listCases)

    let logoImage = document.querySelector(`.ZIP`)
    logoImage.style.filter = "saturate(10%)"

    logoImage = document.querySelector(`.dollar`)
    logoImage.style.filter = "saturate(10%)"

    logoImage = document.querySelector(`.trophe`)
    logoImage.style.filter = "saturate(10%)"   

    

    for (let j = 0; j < 9; j++) {
        let caseImage = document.getElementById(`case${j}`)
        caseImage.classList.remove('imageZIP')
        caseImage.classList.remove('imageDollar')
        caseImage.classList.remove('imageTrophe')
        caseImage.classList.remove('imageFaux')
        
        voirImage(j,caseImage)
        
    }

    setTimeout(() => {            
        for (let j = 0; j < 9; j++) {
            let caseImage = document.getElementById(`case${j}`)

            caseImage.src = "images/Mémo.webp"
            caseImage.classList.remove('imageZIP')
            caseImage.classList.remove('imageDollar')
            caseImage.classList.remove('imageTrophe')            

        }

        initClicks()

    }, 1500);
    
}  

function initClicks() {
    let controller = new AbortController()

    for (let j = 0; j < 9; j++) {
        let caseImage = document.getElementById(`case${j}`)

        caseImage.addEventListener("click", (event) => {
            let caseClick = caseImage.id
            // console.log("click : ",caseClick)
            voirImage(j,caseImage)
            
            clicCase(j,caseImage,controller)            
            
        }, {signal: controller.signal})
    
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


function wizz(element) {  
    element.classList.add('wizz')

    // Retire la classe après la durée de l'animation (0.3s = 300ms)
    setTimeout(() => {
        element.classList.remove('wizz');
    }, 300);
}

