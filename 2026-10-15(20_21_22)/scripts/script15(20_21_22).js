let i = 0
let n
let erreur = 0  // indiquant le nombre d'erreurs

let listVerif = [1,1,1]
let curseur = []
let cible = []
let valeurEcartCurseur = []


initClicks()
init()

// animationSquelette()


function clicCurseur(curseurSelect,cibleSelect) {
    switch (curseurSelect.id) {
        case "curseur0":
            n = 0
            curseur[1].value = curseurSelect.value - valeurEcartCurseur[0]
            let text1 = document.querySelector(`#text1`)
            majText(text1,curseur[1],cible[1],1)
            break;
        case "curseur1":
            n = 1
            curseur[2].value = curseurSelect.value - valeurEcartCurseur[1]
            let text2 = document.querySelector(`#text2`)
            majText(text2,curseur[2],cible[2],2)
            break;
        case "curseur2":
            n = 2
            curseur[0].value = curseurSelect.value - valeurEcartCurseur[2]
            let text0 = document.querySelector(`#text0`)
            majText(text0,curseur[0],cible[0],0)
            break;
    }


    let text = document.querySelector(`#text${n}`)

    majText(text,curseurSelect,cibleSelect,n)

    
}

function ecartCurseurs() {  
    // console.log("valeur curseur 0 :",curseur[0].value)
    // console.log("valeur curseur 1 :",curseur[1].value)
    // console.log("valeur curseur 2 :",curseur[2].value)

    valeurEcartCurseur[0] = curseur[0].value - curseur[1].value
    valeurEcartCurseur[1] = curseur[1].value - curseur[2].value
    valeurEcartCurseur[2] = curseur[2].value - curseur[0].value

    // console.log("écart 0>1 : ",valeurEcartCurseur[0])
    // console.log("Math.abs() écart 0>1 : ",Math.abs(valeurEcartCurseur[0]))
    // console.log("écart 1>2 : ",valeurEcartCurseur[1])

    // console.log("listVerif[0] : ",listVerif[0])
    // console.log("listVerif[1] : ",listVerif[1])
    // console.log("listVerif[2] : ",listVerif[2])

}

function majText(text,curseur,cible,n) {
    if (curseur.value < 10) {
        text.textContent = "0"+curseur.value
    } else {
        text.textContent = curseur.value
    }

    if (curseur.value == cible) {
        text.style.color = "white"
        listVerif[n] = 0
    } else {
        text.style.color = "red"
        listVerif[n] = 1
    }
}


function verifCurseurs(controller) {
    let verif = listVerif[0] + listVerif[1] + listVerif[2]

    if (verif == 0) {
        finEnigme(controller)
    }
}



function finEnigme(controller) {
    controller.abort()

    for (let j = 0; j < 3; j++) {
        curseur[j].disabled = true
    }
    
    let TVImage = document.querySelector(`.TV`)  
    
    TVImage.src = "images/TV1.webp"

    TVImage.addEventListener("click", (event) => {
        initClicks()
        init()
        

        // console.log("Ordonnée : ",merOrdonne[j]," ; Abscisse : ",merAbscisse[j])

        // clicSquelette(squeletteImage.id,squeletteImage)
    }, { once: true })
    
}



function init() {
    let TVImage = document.querySelector(`.TV`)  
    
    TVImage.src = "images/TV0.webp"

    listVerif = [1,1,1]

    for (let j = 0; j < 3; j++) {
        curseur[j].disabled = false
    }
    
}  

function initClicks() {
    let controller = new AbortController()

    let powerBtn = document.getElementById("power")

    powerBtn.addEventListener("click", (event) => {
        // console.log("click Power")
        verifCurseurs(controller)
        
    }, {signal: controller.signal})

    for (let j = 0; j < 3; j++) {
        curseur[j] = document.getElementById(`curseur${j}`)

        let alea = Math.round(Math.random()*100)
        // console.log(`Curseur${j}.alea : `,alea)

        // while ((alea > (cible - 5)) && (alea < (cible + 5))) {
        //     let alea = Math.round(Math.random()*100)
        // }

        curseur[j].value = alea
        // console.log(`Curseur${j}.value : `,curseur[j].value)

        cible[j] = Math.round(Math.random()*100)
    

        curseur[j].addEventListener("input", () => {
            let curseurClick = curseur[j].id
            // console.log("click : ",curseurClick)
            
            // console.log("cible : ",cible[j])
            let curseurValue = curseur[j].value
            // console.log("click : ",curseurClick)
            clicCurseur(curseur[j],cible[j])


            
            
        }, {signal: controller.signal})

        // console.log(`Curseur${j}.value : `,curseur[j].value)


        let text = document.querySelector(`#text${j}`)

        majText(text,curseur[j],cible[j],j)


        curseur[j].addEventListener("click", (event) => {
            // console.log("curseur laché")
            
            ecartCurseurs()
            
        }, {signal: controller.signal})

        curseur[j].addEventListener('touchend', (event) => {
            ecartCurseurs()

        }, {signal: controller.signal});

    }

    
    ecartCurseurs()

    
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
