let i = 0
let etape = 0  // Validation des étapes de l'énigme
let nextFruit = []


init()


function clicFruit(FruitClick) {
    // console.log("étape: ", etape)
    if (etape == 0) {
        switch (FruitClick) {
        case "cactusFruit0":  
            nextFruit = [0,"cactusFruit3","cactusFruit4","cactusFruit1","cactusFruit2"]          
            // console.log("nextFruit = ", nextFruit);
        break;
        case "cactusFruit1":
            nextFruit = [0,"cactusFruit2","cactusFruit0","cactusFruit3","cactusFruit4"]
            // console.log("nextFruit = ", nextFruit);
        break;
        case "cactusFruit2":
            nextFruit = [0,"cactusFruit0","cactusFruit3","cactusFruit4","cactusFruit1"]
            // console.log("nextFruit = ", nextFruit);
        break;
        case "cactusFruit3":
            nextFruit = [0,"cactusFruit4","cactusFruit1","cactusFruit2","cactusFruit0"]
            // console.log("nextFruit = ", nextFruit);
        break;
        case "cactusFruit4":
            nextFruit = [0,"cactusFruit1","cactusFruit2","cactusFruit0","cactusFruit3"]
            // console.log("nextFruit = ", nextFruit);
        break;
        }

        let cactusFruit = document.querySelector(`#${FruitClick}`)
        cactusFruit.style.display = "none"

        etape += 1

    } else if (etape < 5) {
        if (FruitClick == nextFruit[etape]) {
            let cactusFruit = document.querySelector(`#${FruitClick}`)
            cactusFruit.style.display = "none"

            etape += 1
            if (etape == 5) {
                finEnigme()
            } else {
                // console.log(nextFruit[etape])
            }
        } else {
            let cactus = document.querySelector(".cactus")
            // Ajoute la classe pour lancer l'animation
            cactus.classList.add('wizz')

            // Retire la classe après la durée de l'animation (0.3s = 300ms)
            setTimeout(() => {
                cactus.classList.remove('wizz');
            }, 300);

            reset()
        }
    }

}



function finEnigme() {
    // let imageBienvenue = document.getElementById("debut")
    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"

    recommencer.addEventListener("click", (event) => {
        // console.log("click")
        reset()
        recommencer.style.display = "none"
        
    }, { once: true })

}

function init() {
    for (let j = 0; j < 5; j++) {        
        let cactusFruit = document.querySelector(`#cactusFruit${j}`)

        cactusFruit.addEventListener("click", (event) => {
            // console.log("click fourmi : ",cactusFruit.id)
            // init()
            fruitClick = cactusFruit.id
            clicFruit(fruitClick)
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