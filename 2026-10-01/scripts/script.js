let i = 0
let croissance = 0  // Validation des étapes de l'énigme
let flecheChoisiePrec
let boutonAllume
let boutonOppose
let changeBoutonAllume

init()
buttonEtape()
// clicFlecheOld()

function clicFlecheOld() {
    buttonEtape()

    changeBoutonAllume.addEventListener("click", (event) => {
        console.log("click")
        croissance += 1
        buttonReset(changeBoutonAllume)
        if (croissance == 4) {
            finEnigme()
        } else {
            clicFlecheOld()
        }
        
    }, { once: true })

}

function clicFleche(boutonClick) {
    if ((croissance == 0) || (croissance == 2)) {
        if (boutonClick == boutonAllume) {
            croissance += 1
            buttonReset()
            if (croissance == 4) {
            finEnigme()
            } else {
            buttonEtape()
            }
            
        } else {
            croissance = 0
            buttonReset()
            buttonEtape()
        }

    } else if ((croissance == 1) || (croissance == 3)) {
        if (boutonClick == boutonOppose) {
            croissance += 1
            buttonReset()
            if (croissance == 4) {
            finEnigme()
            } else {
            buttonEtape()
            }
            
        } else {
            croissance = 0
            buttonReset()
            buttonEtape()
        }
    }

    majImage()

}


function buttonEtape() {
    boutonAllume = aleaFleche()
    changeBoutonAllume = document.querySelector(`.${boutonAllume}`)

    console.log(changeBoutonAllume)

    changeBoutonAllume.style.color = "lightgrey"
    if ((croissance == 0) || (croissance == 2)) {
        changeBoutonAllume.style.backgroundColor = "green"
    } else {
        changeBoutonAllume.style.backgroundColor = "red"
    }

    // boutonAllume.style.background-color= "green"
    // boutonAllume.style.color= "lightgrey"
}


function buttonReset() {
    changeBoutonAllume.style.color = "black"
    changeBoutonAllume.style.backgroundColor = "lightgrey"
}



// Défini quelle flèche sera choisie pour cette étape de l'énigme
function aleaFleche() {
    let flecheChoisie = Math.floor(Math.random() * 4)
    console.log(flecheChoisie)
    console.log("Précédent: ",flecheChoisiePrec)

    while (flecheChoisie == flecheChoisiePrec) {
        flecheChoisie = Math.floor(Math.random() * 4)
        console.log("while : ",flecheChoisie)
    }

    let boutonAllume

    switch (flecheChoisie) {
    case 0:
        boutonAllume = "btnHaut"
        boutonOppose = "btnBas"
        console.log("boutonAllume = ", boutonAllume);
    break;
    case 1:
        boutonAllume = "btnGauche"
        boutonOppose = "btnDroit"
        console.log("boutonAllume = ", boutonAllume);
    break;
    case 2:
        boutonAllume = "btnDroit"
        boutonOppose = "btnGauche"
        console.log("boutonAllume = ", boutonAllume);
    break;
    case 3:
        boutonAllume = "btnBas"
        boutonOppose = "btnHaut"
        console.log("boutonAllume = ", boutonAllume);
    break;
    }

    flecheChoisiePrec = flecheChoisie

    return boutonAllume

}


function finEnigme() {
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        console.log("click")
        croissance = 0
        majImage()
        buttonEtape()
        recommencer.style.display = "none"
        
    }, { once: true })

}

function init() {
    let boutonHaut = document.querySelector(".btnHaut")
    let boutonGauche = document.querySelector(".btnGauche")
    let boutonDroit = document.querySelector(".btnDroit")
    let boutonBas = document.querySelector(".btnBas")

    console.log(boutonHaut)
    console.log(boutonGauche)
    console.log(boutonDroit)
    console.log(boutonBas)

    if (croissance == 4) {
        boutonHaut.disabled = true
        boutonGauche.disabled = true
        boutonDroit.disabled = true
        boutonBas.disabled = true
    } else {
        boutonHaut.disabled = false
        boutonGauche.disabled = false
        boutonDroit.disabled = false
        boutonBas.disabled = false
    }

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

    boutonBas.addEventListener("click", (event) => {
        console.log("click Bas")
        boutonClick = "btnBas"
        clicFleche(boutonClick)
    })
}

function majImage() {
    let image = document.getElementById("image")
    
    switch (croissance) {
    case 0:
        image.src = "images/Pomme0.webp"
        console.log("image: ",image)
    break;
    case 1:
        image.src = "images/Pomme1.webp"
        console.log("image: ",image)
    break;
    case 2:
        image.src = "images/Pomme2.webp"
        console.log("image: ",image)
    break;
    case 3:
        image.src = "images/Pomme3.webp"
        console.log("image: ",image)
    break;
    case 4:
        image.src = "images/Pomme4.webp"
        console.log("image: ",image)
    break;
    }
}


// function nouvellePartie() {
//     nb = 1   // Le nombre de Curseur créé : au départ 1 seul

//     // On efface les curseurs précédents
//     let blocCurseurs = document.querySelector(".blocCurseurs")
//     blocCurseurs.innerHTML = ``

//     // On efface la div contenant le message "Bravo" et le button "Recommencer"
//     let divBravo = document.getElementById("divBravo")
//     console.log(divBravo)
//     divBravo.remove()

//     // On crée le premier curseur
//     cible = nouveauCurseur()

// }

// function changementCouleurRond(curseur, cible, rond) {
//     // Transformation de la valeur du curseur en chiffre
//     let valeurCurseur = Number(curseur.value)

//     // calcul de l'écart entre le placement du Curseur et la valeur Cible
//     // la méthode Math.abs() permet de rendre la valeur positive
//     let toCible = Math.abs(cible - valeurCurseur)
//     console.log("écart: " + toCible)
  
//     // Changement de la couleur du rond, 
//     // en fonction de l'écart entre le curseur et la cible
//     if (toCible > 75) {
//         rond.style.background= "rgb(170, 0, 0)"
//     } else if (toCible > 50) {
//         rond.style.background= "rgb(214, 139, 0)"
//     } else if (toCible > 25) {
//         rond.style.background= "rgb(221, 199, 0)"
//     } else {
//         rond.style.background= "rgb(0, 150, 0)"
//     }

//     // Copie de la valeur de la couleur du rond
//     let contourRond = rond.style.background
    
//     // Changement de la couleur du contour
//     if (toCible === 0) {
//         rond.style.border= `2px solid rgb(255, 0, 0)`
//     } else {
//         rond.style.border= `2px solid ${contourRond}`
//     }

//     return toCible
// }

// function nouveauCurseur() {
//     let blocCurseurs = document.querySelector(".blocCurseurs")
//     let rond = document.createElement("div")
//     let curseur = document.createElement("input")
//     let button = document.createElement("input")

//     rond.id = `cercle${nb}`
//     rond.classList.add("cercle")

//     curseur.id = `curseur${nb}`
//     curseur.classList.add("blue")
//     curseur.type = "range"
//     curseur.min = "0"
//     curseur.max = "100"

//     button.id = `button${nb}`
//     button.type = "button"
//     button.value = "Valider"

//     let divCurseur = document.createElement("div")
//     divCurseur.classList = "divCurseur"
    
//     divCurseur.appendChild(rond)
//     divCurseur.appendChild(curseur)
//     divCurseur.appendChild(button)
//     blocCurseurs.appendChild(divCurseur)

//     let cible = initCurseur(curseur)

//     // Appel de la fonction permettant le changement de couleur du rond
//     // en fonction de l'écart entre la valeur du curseur et la valeur Cible
//     changementCouleurRond(curseur, cible, rond)

//     // On écoute quand le curseur bouge, 
//     // et on change la couleur du rond en fonction
//     curseur.addEventListener("input", () => {
//         toCible = changementCouleurRond(curseur, cible, rond)
//     })

//     button.addEventListener("click", (event) => {
//         console.log("écart au bouton: " + toCible)
//         console.log(event.target.id)
//         i++
//         console.log("nombre de fois: " + i)
//         if (toCible === 0) {
//             button.removeEventListener("click", (event) => {
//             })
//             // Désactivation du prédédent curseur
//             curseur.disabled = true
//             button.disabled = true
//             toCible = changementCouleurRond(curseur, cible, rond)

//             // Désactivation du Listener du Curseur précédent, 
//             // pour laisser la place au Listener du prochain
//             curseur.removeEventListener("input", () => {
//             })
            
//             if (nb === 3) {
//                 // Après avoir réalisé ce nombre de Curseur : Fin de Partie
//                 console.log("Fin")
//                 finDePartie()            
//             } else {
//                 nb++
//                 // Création d'un nouveau Curseur
//                 cible = nouveauCurseur(nb)
//                 rond = document.getElementById(`cercle${nb}`)
//                 console.log(rond)
//                 curseur = document.getElementById(`curseur${nb}`)
//                 console.log(curseur)
//                 button = document.getElementById(`button${nb}`)
//                 console.log(button)
                            
//                 console.log("Nombre de Curseur: " + nb)
//             }

//         }
//     })

//     return cible

// }

// function initCurseur (curseur) {
//     // On positionne le curseur aléatoirement
//     let alea = Math.round(Math.random()*100)
//     curseur.value = alea

//     // On choisit un nombre entre 0 et 100
//     let cible = Math.round(Math.random()*100)    
//     console.log("Cible: " + cible)

//     // Surveillance que le curseur ne soit pas directement positionné sur la cible
//     if (cible === alea) {
//         cible = Math.round(Math.random()*100)    
//         console.log("Cible: " + cible)
//     }    

//     return cible
// }

// function finDePartie() {
//     // On récupère le body et on crée un texte et un button
//     let body = document.querySelector("body")
//     let bravo = document.createElement("h1")
//     let buttonRecommencer = document.createElement("input")

//     // On paramètre le texte "Bravo"
//     bravo.textContent = "BRAVO !"

//     // On paramètre bouton "Recommencer"
//     buttonRecommencer.type = "button"
//     buttonRecommencer.value = "Recommencer"

//     // On crée une div sous celle contenant les curseurs
//     let divBravo = document.createElement("div")
//     divBravo.classList = "divCurseur"
//     divBravo.id = "divBravo"

//     // On place le texte et le button dans la nouvelle div,
//     // et cette div dans le body
//     divBravo.appendChild(bravo)
//     divBravo.appendChild(buttonRecommencer)
//     body.appendChild(divBravo)

//     // Mise en place d'un Listener sur le click du bouton "Recommencer"
//     buttonRecommencer.addEventListener("click", (event) => {
//         // On commence par le supprimer
//         buttonRecommencer.removeEventListener("click", (event) => {
//         })
//         // Puis on initialise une nouvelle partie
//         nouvellePartie()
//     })

// }