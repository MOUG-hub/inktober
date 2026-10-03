let i = 0
let etape = 0  // Validation des étapes de l'énigme
let fourmisChoisie
let fourmisChoisiePrec


init()


function clicFourmis(FourmisClick) {
    if (fourmisClick == fourmisChoisie) {
        etape += 1
        if (etape == 3) {
            finEnigme()
        } else {
            init()
        }
    
    } else {
        etape = 0
        init()
    }
}



function finEnigme() {
    // let imageBienvenue = document.getElementById("debut")
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        console.log("click")
        etape = 0
        init()
        recommencer.style.display = "none"
        
    }, { once: true })

    let grille = document.querySelector(".grille")
    console.log(grille)
    grille.innerHTML = ``
    grille.classList.add("fourmisFin")

    for (let j = 0; j < 3; j++) {        
        let imageFourmis = document.createElement("img")
        grille.appendChild(imageFourmis)
        
        imageFourmis.id = `${j}` 
        // imageFourmis.classList.add("fourmisFin")       

        if (j == 0) {
            imageFourmis.src = "images/FourmisNoire.webp"
        } else if (j == 1) {
            imageFourmis.src = "images/FourmisRouge.webp"
        } else if (j == 2) {
            imageFourmis.src = "images/FourmisNoireAntenne.webp"
        }

    }

}

function init() {
    let grille = document.querySelector(".grille")
    console.log(grille)
    grille.innerHTML = ``
    grille.classList.remove("fourmisFin")

    fourmisChoisie = Math.floor(Math.random() * 200)
    // console.log("étape : ",etape)
    // console.log("fourmisChoisie : ",fourmisChoisie)
    // console.log("fourmisChoisie Précédent: ",fourmisChoisiePrec)

    while (fourmisChoisie == fourmisChoisiePrec) {
        fourmisChoisie = Math.floor(Math.random() * 9)
        console.log("while : ",fourmisChoisie)
    }

    fourmisChoisiePrec = fourmisChoisie

    if (etape == 0) {
        etape1(grille)
    } else if (etape == 1) {
        etape2(grille)
        // console.log("FIN")
    } else if (etape == 2) {
        etape3(grille)
        // console.log("FIN")
    } else {
        finEnigme()
    }

}  

function etape1(grille) {
    let nb = 0
    for (let j = 0; j < 200; j++) {        
        let imageFourmis = document.createElement("img")
        grille.appendChild(imageFourmis)
        
        imageFourmis.id = `${nb}`
        imageFourmis.src = "images/FourmisNoire.webp"

        if (nb == fourmisChoisie) {
            imageFourmis.src = "images/FourmisRouge.webp"
        }
        

        imageFourmis.addEventListener("click", (event) => {
            console.log("click fourmi : ",imageFourmis.id)
            // init()
            fourmisClick = imageFourmis.id
            clicFourmis(fourmisClick)
        })

        nb += 1
    }
}

function etape2(grille) {
    let nb = 0
    for (let j = 0; j < 200; j++) {        
        let imageFourmis = document.createElement("img")
        grille.appendChild(imageFourmis)
        
        imageFourmis.id = `${nb}`

        aleaFourmis = Math.floor(Math.random() * 2)
        if (aleaFourmis == 0) {
            imageFourmis.src = "images/FourmisNoire.webp"
        } else {
            imageFourmis.src = "images/FourmisRouge.webp"
        }

        if (nb == fourmisChoisie) {            
            imageFourmis.style.transform = "rotate(180deg)"
        }
        

        imageFourmis.addEventListener("click", (event) => {
            console.log("click fourmi : ",imageFourmis.id)
            // init()
            fourmisClick = imageFourmis.id
            clicFourmis(fourmisClick)
        })

        nb += 1
    }
}

function etape3(grille) {
    let nb = 0
    for (let j = 0; j < 200; j++) {        
        let imageFourmis = document.createElement("img")
        grille.appendChild(imageFourmis)
        
        imageFourmis.id = `${nb}`

        aleaFourmis = Math.floor(Math.random() * 2)
        if (aleaFourmis == 0) {
            imageFourmis.src = "images/FourmisNoire.webp"
        } else {
            imageFourmis.src = "images/FourmisRouge.webp"
        }

        aleaRotate = Math.floor(Math.random() * 2)
        if (aleaRotate == 0) {
            imageFourmis.style.transform = "rotate(180deg)"
        } 

        if (nb == fourmisChoisie) {            
            imageFourmis.src = "images/FourmisNoireAntenne.webp"
        }
        

        imageFourmis.addEventListener("click", (event) => {
            console.log("click fourmi : ",imageFourmis.id)
            // init()
            fourmisClick = imageFourmis.id
            clicFourmis(fourmisClick)
        })

        nb += 1
    }
}