let i = 0
let n
let erreur = 0  // indiquant le nombre d'erreurs

let collumn = 2
let row = 7
let rowOld = 7

let listCollumnBillet = []

let rotation = 0
let size = 100
let stopAnim = 0


initClicks()
init()



function clicCase(caseClick,controller) {   

    if ((caseClick == "case0") || (caseClick == "case3") || (caseClick == "case6") || 
    (caseClick == "case9") || (caseClick == "case12")) {
        collumn = 1
    } else if ((caseClick == "case1") || (caseClick == "case4") || (caseClick == "case7") || 
    (caseClick == "case10") || (caseClick == "case13")) {
        collumn = 2
    } else {
        collumn = 3
    }

    if ((caseClick == "case0") || (caseClick == "case1") || (caseClick == "case2")) {
        row = 2
    } else if ((caseClick == "case3") || (caseClick == "case4") || (caseClick == "case5")) {
        row = 3
    } else if ((caseClick == "case6") || (caseClick == "case7") || (caseClick == "case8")) {
        row = 4
    } else if ((caseClick == "case9") || (caseClick == "case10") || (caseClick == "case11")) {
        row = 5
    } else {
        row = 6
    }

    let moustacheImage = document.getElementById(`moustache`)

    if (row == rowOld - 1) {

        moustacheImage.style.gridColumn = collumn
        moustacheImage.style.gridRow = row

        rowOld = row

        verifBonneCase(controller)
    }
    
}

function choixBonneCase() {
    if (collumn == 1) {
        listCollumnBillet = [2,3]           
    } else if (collumn == 2) {
        listCollumnBillet = [1,3]
    } else if (collumn == 3) {
        listCollumnBillet = [1,2]
    }

    shuffle(listCollumnBillet)

    let billetImage = document.getElementById(`billet`)
    billetImage.style.gridColumn = listCollumnBillet[0]

    bonneCase = listCollumnBillet[1]
}

function verifBonneCase(controller) {
    if (collumn == bonneCase) {
        if (row == 2) {
            bonneFin(controller)
        } else {
            choixBonneCase()
        }
    } else {
        mauvaiseFin(controller)
    }
}

function mauvaiseFin(controller) {
    let caseNumero = (row * 3) - 7 + collumn
    // console.log("caseNumero : ",caseNumero)

    let caseImage = document.getElementById(`case${caseNumero}`)

    caseImage.src = "images/Vitre1.webp"
    // caseImage.classList.add('wizz')

    // // Retire la classe après la durée de l'animation (0.3s = 300ms)
    // setTimeout(() => {
    //     caseImage.classList.remove('wizz');
    // }, 300);

    controller.abort()

    setTimeout(() => {      

        requestAnimationFrame(animationMoustache)
    }, 400);

    setTimeout(() => {  
        // console.log("stopAnim")
        // stopAnim = 1
        // console.log("FIN")
        finEnigme()
    }, 2500);

}

function bonneFin(controller) {
    controller.abort()

    setTimeout(() => {      

        requestAnimationFrame(animationBillet)
    }, 200);

    setTimeout(() => {        
        // console.log("FIN")
        finEnigme()
    }, 1500);

}


function finEnigme() {
    
    let recommencer = document.querySelector(`.recommencer`)  
    
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        recommencer.style.display = "none"
        stopAnim = 1
        initClicks()
        init()

    }, { once: true })
    
}



function init() {
    for (let j = 0; j < 15; j++) {
        let caseImage = document.getElementById(`case${j}`)

        caseImage.src = "images/Vitre0.webp"
    }

    let moustacheImage = document.getElementById(`moustache`)

    moustacheImage.style.gridColumn = "2"
    moustacheImage.style.gridRow = "7"

    rowOld = 7
    collumn = 2

    setTimeout(() => {        
        stopAnim = 0
    }, 500);    

    setTimeout(() => {  
        rotation = 0
        size = 100   
        let billetImage = document.getElementById(`billet`)
        billetImage.style.transform = `rotate(${rotation}deg)`
        moustacheImage.style.transform = `rotate(${rotation}deg)`
        moustacheImage.style.width = `${size}%` 
    }, 100);  


    choixBonneCase()
    
}  

function initClicks() {
    let controller = new AbortController()

    for (let j = 0; j < 15; j++) {
        let caseImage = document.getElementById(`case${j}`)

        caseImage.addEventListener("click", (event) => {
            let caseClick = caseImage.id
            // console.log("click : ",caseClick)
            
            clicCase(caseClick,controller)            
            
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

function animationMoustache() {
    let time = 100

    let moustacheImage = document.getElementById(`moustache`)

    rotation += 30
    moustacheImage.style.transform = `rotate(${rotation}deg)`

    size -= 5
    moustacheImage.style.width = `${size}%`

    if (stopAnim == 0) {
    setTimeout(() => {  
        requestAnimationFrame(animationMoustache)
    }, time);
    }

}

function animationBillet() {
    let time = 100

    let billetImage = document.getElementById(`billet`)

    rotation += 30
    billetImage.style.transform = `rotate(${rotation}deg)`

    if (stopAnim == 0) {
    setTimeout(() => {  
        requestAnimationFrame(animationBillet)
    }, time);
    }
}
