

let dameAppui
let erreur = 0  // indiquant le nombre d'erreurs

let dameColl = [0,1,2,3,4]
let listDame = []


initClicks()
init()



function clicDame(controller,numero) {
    let vaseImage = document.querySelector(".vaseFull")
    if (listDame[numero] == "vrai"){
        dameAppui -= 1
    } else {
        erreur += 1
        vaseImage.src = `images/Vase${erreur}.webp`
    }

    let HaloImage = document.querySelector(".vaseHalo")

    if (dameAppui == 0) {        
        HaloImage.style.display = "flex"
        controller.abort()
        finEnigme(vaseImage,HaloImage)
    }

    if (erreur == 3) {
        controller.abort()
        finEnigme(vaseImage,HaloImage)
    }

}


function finEnigme(vaseImage,HaloImage) {
    vaseImage.style.cursor = "pointer"

    vaseImage.addEventListener("click", (event) => {
        HaloImage.style.display = "none"
        vaseImage.style.cursor = ""
        vaseImage.src = `images/Vase0.webp`
        initClicks()
        init()
                
    }, { once: true })

    for (let k = 0; k < 10; k++) {
        let dameImage = document.querySelector(`#dame${k}`)
        dameImage.style.cursor = "default"
    }
    
}


function init() {
    dameAppui = 0
    erreur = 0

    let lign = 0
    for (let j = 0; j < 9; j += 2) {
        shuffle(dameColl)

        let dameImage0 = document.querySelector(`#dame${j}`)
        dameImage0.classList.add(`ligne${lign}`)
        dameImage0.classList.add(`coll${dameColl[0]}`)

        if ((lign == 0) || (lign == 2) || (lign == 4)) {
            if ((dameColl[0] == 1) || (dameColl[0] == 3)) {
                dameAppui +=1
                listDame[j] = "vrai"
            } else {
                listDame[j] = "faux"
            }
        } else if ((lign == 1) || (lign == 3)) {
            if ((dameColl[0] == 0) || (dameColl[0] == 2) || (dameColl[0] == 4)) {
                dameAppui +=1
                listDame[j] = "vrai"
            } else {
                listDame[j] = "faux"
            }
        }

        let dameImage1 = document.querySelector(`#dame${j+1}`)
        dameImage1.classList.add(`ligne${lign}`)
        dameImage1.classList.add(`coll${dameColl[1]}`)

        if ((lign == 0) || (lign == 2) || (lign == 4)) {
            if ((dameColl[1] == 1) || (dameColl[1] == 3)) {
                listDame[j+1] = "faux"                
            } else {
                dameAppui +=1
                listDame[j+1] = "vrai"
            }
        } else if ((lign == 1) || (lign == 3)) {
            if ((dameColl[1] == 0) || (dameColl[1] == 2) || (dameColl[1] == 4)) {
                listDame[j+1] = "faux"
            } else {
                dameAppui +=1
                listDame[j+1] = "vrai"
            }
        }

        lign += 1
    }

    // console.log("listDame : ",listDame)
    // console.log("dameAppui : ",dameAppui)

}  


function initClicks() {
    // On efface tout le bloc
    let ligneDamier = document.querySelector(".ligneDamier")
    ligneDamier.innerHTML = ``

    // On ajoute le damier
    let damier = document.createElement("img")
    damier.id = "damier"
    damier.src = "images/Damier.webp"

    ligneDamier.appendChild(damier)

    // On ajoute les Dames
    for (let k = 0; k < 10; k++) {
        let dame = document.createElement("img")
        dame.id = `dame${k}`
        dame.classList.add("dames")

        ligneDamier.appendChild(dame)
    }

    let controller = new AbortController()
    for (let j = 0; j < 9; j += 2) {
        let dameImage0 = document.querySelector(`#dame${j}`)  
        dameImage0.src = "images/DameBlanche0.webp"

        dameImage0.addEventListener("click", (event) => {
            // console.log("click mer : ",merImage.id)

            dameImage0.src = "images/DameBlanche1.webp"
            clicDame(controller,j)
        }, { once: true, signal: controller.signal})


        let dameImage1 = document.querySelector(`#dame${j+1}`)
        dameImage1.src = "images/DameNoire0.webp"

        dameImage1.addEventListener("click", (event) => {
            // console.log("click mer : ",merImage.id)

            dameImage1.src = "images/DameNoire1.webp"
            clicDame(controller,j+1)
        }, { once: true, signal: controller.signal})

    }    

}



function flameche(currentTime) {
    
    let time = 150
    let timePassed = currentTime

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