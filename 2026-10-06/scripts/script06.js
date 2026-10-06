let i = 0
let etape = 0  // Validation des étapes de l'énigme
let listePlats = ["images/OgrePlats0.webp","images/OgrePlats1.webp","images/OgrePlats2.webp","images/OgrePlats3.webp","images/OgrePlats4.webp"]
let listeLettres = ["a","b","c","d","f","h","i","j","k","l","m","n","p","q","s","t","u","v","w","x","y","z"," "," "," "," "," "]
let listeLettresOgre = ["o","g","r","e"]
let bonPlat

initClicks()
init()


function remplissageText(aleaBonPlat) {
    for (let j = 0; j < 3; j++) {
        let platText = document.querySelector(`#platText${j}`)
        platText.textContent = ""

        if (j == aleaBonPlat) {
            let nLettreOgre = 0
            for (let k = 0; k < 4; k++) { 
                let aleaPosition = Math.floor(Math.random() * 3)
                for (let l = 0; l < 3; l++) {
                    if (l == aleaPosition) {
                        platText.textContent += listeLettresOgre[nLettreOgre]
                        nLettreOgre += 1
                    } else {
                        let aleaLettre = Math.floor(Math.random() * 26)                    
                        platText.textContent += listeLettres[aleaLettre]
                    }
                }
            }
        } else {
            for (let k = 0; k < 12; k++) { 
                let aleaLettre = Math.floor(Math.random() * 26)
                
                platText.textContent += listeLettres[aleaLettre]
            }
        }
    }

}


function clicPlat(platClick) {
    let ogreFaimImage = document.querySelector(".ogre")
    if (etape < 4) {
        let ogreFaimTexte = document.querySelector(".ogreFaim")
        if (platClick == bonPlat) {
            console.log("Gagné")
            etape += 1
            if (etape == 4) {
                ogreFaimTexte.src = "images/TexteOgre2.webp"                
                ogreFaimImage.src = "images/TeteOgre1.webp"
                finEnigme(ogreFaimTexte,ogreFaimImage)
            } else {
                ogreFaimTexte.src = "images/TexteOgre1.webp"
                init()
            }
        } else {
            console.log("Perdu")
            ogreFaimImage.classList.add('wizz')

            // Retire la classe après la durée de l'animation (0.3s = 300ms)
            setTimeout(() => {
                ogreFaimImage.classList.remove('wizz');
            }, 300);

            etape = 0
            ogreFaimTexte.src = "images/TexteOgre0.webp"
            init()
        }
    }

}



function finEnigme(ogreFaimTexte,ogreFaimImage) {
    // let imageBienvenue = document.getElementById("debut")
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        // console.log("click")
        // reset()
        etape = 0
        ogreFaimTexte.src = "images/TexteOgre0.webp"
        ogreFaimImage.src = "images/TeteOgre0.webp"
        recommencer.style.display = "none"
        init()
                
    }, { once: true })

    for (let j = 0; j < 3; j++) {        
        let platImage = document.querySelector(`#platImage${j}`)    
        platImage.style.display = "none"
        
        let platText = document.querySelector(`#platText${j}`)
        platText.textContent = ""
        
    }

}

function init() {
    shuffle(listePlats)

    for (let j = 0; j < 3; j++) {        
        let platImage = document.querySelector(`#platImage${j}`)    
        platImage.style.display = ""
        platImage.src = listePlats[j]
        
    }

    let aleaBonPlat = Math.floor(Math.random() * 3)
    bonPlat = `platImage${aleaBonPlat}`

    remplissageText(aleaBonPlat)

}  


function initClicks() {
    for (let j = 0; j < 3; j++) {
        let platImage = document.querySelector(`#platImage${j}`)

        platImage.addEventListener("click", (event) => {
            console.log("click plat : ",platImage.id)
            platClick = platImage.id
            clicPlat(platClick)
        })
    }
}


function reset() {
    etape = 0
    for (let j = 0; j < 5; j++) {        
        let cactusFruit = document.querySelector(`#cactusFruit${j}`)

        cactusFruit.style.display = "flex"
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