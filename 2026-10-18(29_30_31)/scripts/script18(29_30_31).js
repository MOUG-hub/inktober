let i = 0
let n
let erreur = 0  // indiquant le nombre d'erreurs

let etape = 0
let choixParagraphe = 0
let nbParagraphe = 0


initClicks()
init()



function clicCase(caseImage,controller) {   
    
    switch (caseImage) {
        case "image0":
            choixParagraphe = 0         
            break;
        case "image1":
            choixParagraphe = 1
            break;
        case "image2":
            choixParagraphe = 2
            break;
        }
    
    ajoutParagraphe(choixParagraphe,controller)
    
    
    
}

function ajoutParagraphe(choixParagraphe,controller) {
    if (nbParagraphe == 0) {
        tableauParagraphe1 = choixParagraphe
        tableauParagraphe2 = choixParagraphe
    } if (nbParagraphe == 1) {
        tableauParagraphe2 = choixParagraphe
    }


    let array = paragraphe[tableauParagraphe1][tableauParagraphe2]
    let currentIndex = array.length;

    console.log(currentIndex)

    let divText = document.querySelector(`.text`)

    let trait = document.createElement("hr")
    trait.classList.add('traitHorizontal')
    divText.appendChild(trait)

    for (let j = 0; j < currentIndex; j++) {

        let divParagraphe = document.createElement("p")
        divText.appendChild(divParagraphe)

        divParagraphe.textContent = paragraphe[tableauParagraphe1][tableauParagraphe2][j]

        console.log("paragraphe créé : ",j)
    }

    if (nbParagraphe == 1) {
        let divFin = document.createElement("p")
        divText.appendChild(divFin)

        divFin.classList.add('fin')

        divFin.textContent = "FIN"

        finEnigme(controller)
    }


    nbParagraphe += 1

}


function finEnigme(controller) {  
    controller.abort()

    let recommencer = document.getElementById(`recommencer`)
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        recommencer.style.display = "none"       
        
        init()
        initClicks()

    }, { once: true })
    
}



function init() {
    etape = 0
    nbParagraphe = 0

    let divText = document.querySelector(`.text`)
    divText.innerHTML = ``

    let divParagraphe = document.createElement("p")
    divText.appendChild(divParagraphe)

    divParagraphe.textContent = `Vous êtes sorti vous promener par un bel après-midi d'automne, et vos pas vous ont mené dans un bois que vous n'aviez jamais remarqué auparavant.`


    divParagraphe = document.createElement("p")
    divText.appendChild(divParagraphe)

    divParagraphe.textContent = `Alors que vous déambuliez au milieu des arbres, votre regard fut attiré par de légers mouvements au pied d'un chêne massif. Vous vous êtes approché pour arriver derrière une sorte de petit être occupé à ramasser des champignons.`

    divParagraphe = document.createElement("p")
    divText.appendChild(divParagraphe)

    divParagraphe.textContent = `Il s'est retourné et a commencé à vous étudier. Vous avez fait de même avec ce petit homme d'une quarantaine de centimètres, arborant une longue barbe blanche et un chapeau pointu.`
    
}  

function initClicks() {
    let controller = new AbortController()

    for (let j = 0; j < 3; j++) {
        let caseImage = document.getElementById(`image${j}`)

        caseImage.style.filter = "saturate(100%)"

        caseImage.addEventListener("click", (event) => {
            let caseClick = caseImage.id
            // console.log("click : ",caseClick)
            caseImage.style.filter = "saturate(10%)"
            
            clicCase(caseClick,controller)            
            
        }, { once: true, signal: controller.signal})
    
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

