let i = 0
let etape = 0  // Validation des étapes de l'énigme



init()


function clicCurseur(curseurValue,cible,controller) {
    let emoji = document.getElementById("emoji")
    let curseur = document.getElementById("curseur")
    let batman = document.getElementById("Batman")

    emoji.style.display = "none"
    curseur.style.display = "none"
    controller.abort()
    

    if ((curseurValue > (cible - 5)) && (curseurValue < (cible + 5))) {
        console.log("Good")
        batman.style.display = "flex"
        batman.src = "images/BatPouce.webp"
        finEnigme(emoji,curseur,batman)
    } else {
        console.log("Bad")
        batman.style.display = "flex"
        batman.src = "images/BatGifle.webp"
        batman.classList.add('wizz')

        // Retire la classe après la durée de l'animation (0.3s = 300ms)
        setTimeout(() => {
            batman.classList.remove('wizz');
        }, 300);

        batman.addEventListener("click", (event) => {
            // console.log("click")
            reset(emoji,curseur,batman)
            
        }, { once: true })
    }



}



function finEnigme(emoji,curseur,batman) {
    // let imageBienvenue = document.getElementById("debut")
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        // console.log("click")
        reset(emoji,curseur,batman)
        recommencer.style.display = "none"
        
    }, { once: true })

}

function init() {
    let curseur = document.getElementById("curseur")

    let cible = Math.round(Math.random()*100)
    console.log("cible : ",cible)

    let alea = Math.round(Math.random()*100)

    // while ((alea > (cible - 5)) && (alea < (cible + 5))) {
    //     let alea = Math.round(Math.random()*100)
    // }

    curseur.value = alea
  

    curseur.addEventListener("click", (event) => {
        console.log("click")
        let curseurClick = curseur.value
        console.log("click : ",curseurClick)
        clicCurseur(curseurClick,cible,controller)
        
    }, { once: true })

    curseur.addEventListener('touchend', (event) => {
        console.log("click")
        let curseurClick = curseur.value
        console.log("click : ",curseurClick)
        clicCurseur(curseurClick,cible,controller)
    }, { once: true });

    // Appel de la fonction permettant le changement de l'emoji
    // en fonction de l'écart entre la valeur du curseur et la valeur Cible
    // changementEmoji(curseur, cible)

    let controller = new AbortController()
    // On écoute quand le curseur bouge, 
    // et on change l'Emoji en fonction
    curseur.addEventListener("input", () => {
        curseur.style.accentColor = "red"
        toCible = changementEmoji(curseur, cible)
        console.log("curseur bouge")
    }, {signal: controller.signal})

}  

function changementEmoji(curseur, cible) {
    let emoji = document.getElementById("emoji")

    // Transformation de la valeur du curseur en chiffre
    let valeurCurseur = Number(curseur.value)
  
    // Changement de l'Emoji 
    // en fonction de l'écart entre le curseur et la cible
    if ((valeurCurseur > (cible - 5)) && (valeurCurseur < (cible + 5))) {
        emoji.textContent = "😃"
    } else {
        emoji.textContent = "😡"
    }

}





function reset(emoji,curseur,batman) {
    emoji.style.display = ""
    emoji.textContent = "😐"
    curseur.style.display = ""
    curseur.style.accentColor = "blue"
    batman.style.display = "none"
    init()
}
