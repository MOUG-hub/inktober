let i = 0
let k
let erreur = 0  // indiquant le nombre d'erreurs

let brasLeve = []
let sommeBrasLeve = 0
let resetAnim


initClicks()
init()
// animationSquelette()


function clicSquelette(squeletteClick,squeletteImage) {
    switch (squeletteClick) {
        case "bras0":
            if (brasLeve[0] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[0] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[0] = 0
            }            

            let squeletteImage6 = document.querySelector(`#bras6`)
            if (brasLeve[6] == 0) {
                squeletteImage6.src = "images/SqueletteBras1.webp"
                brasLeve[6] = 1
            } else {
                squeletteImage6.src = "images/SqueletteBras0.webp"
                brasLeve[6] = 0
            }         
            
            break;
        case "bras1":
            if (brasLeve[1] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[1] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[1] = 0
            }            

            let squeletteImage9 = document.querySelector(`#bras9`)
            if (brasLeve[9] == 0) {
                squeletteImage9.src = "images/SqueletteBras1.webp"
                brasLeve[9] = 1
            } else {
                squeletteImage9.src = "images/SqueletteBras0.webp"
                brasLeve[9] = 0
            }         
            
            break;
        case "bras2":
            if (brasLeve[2] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[2] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[2] = 0
            }            

            let squeletteImage12 = document.querySelector(`#bras12`)
            if (brasLeve[12] == 0) {
                squeletteImage12.src = "images/SqueletteBras1.webp"
                brasLeve[12] = 1
            } else {
                squeletteImage12.src = "images/SqueletteBras0.webp"
                brasLeve[12] = 0
            }         
            
            break;
        case "bras3":
            if (brasLeve[3] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[3] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[3] = 0
            }            

            let squeletteImage4 = document.querySelector(`#bras4`)
            if (brasLeve[4] == 0) {
                squeletteImage4.src = "images/SqueletteBras1.webp"
                brasLeve[4] = 1
            } else {
                squeletteImage4.src = "images/SqueletteBras0.webp"
                brasLeve[4] = 0
            }         
            
            break;
        case "bras4":
            if (brasLeve[4] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[4] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[4] = 0
            }            

            let squeletteImage11 = document.querySelector(`#bras11`)
            if (brasLeve[11] == 0) {
                squeletteImage11.src = "images/SqueletteBras1.webp"
                brasLeve[11] = 1
            } else {
                squeletteImage11.src = "images/SqueletteBras0.webp"
                brasLeve[11] = 0
            }         
            
            break;
        case "bras5":
            if (brasLeve[5] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[5] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[5] = 0
            }            

            let squeletteImage14 = document.querySelector(`#bras14`)
            if (brasLeve[14] == 0) {
                squeletteImage14.src = "images/SqueletteBras1.webp"
                brasLeve[14] = 1
            } else {
                squeletteImage14.src = "images/SqueletteBras0.webp"
                brasLeve[14] = 0
            }         
            
            break;
        case "bras6":
            if (brasLeve[6] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[6] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[6] = 0
            }            

            let squeletteImage1 = document.querySelector(`#bras1`)
            if (brasLeve[1] == 0) {
                squeletteImage1.src = "images/SqueletteBras1.webp"
                brasLeve[1] = 1
            } else {
                squeletteImage1.src = "images/SqueletteBras0.webp"
                brasLeve[1] = 0
            }         
            
            break;
        case "bras7":
            if (brasLeve[7] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[7] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[7] = 0
            }            

            let squeletteImage10 = document.querySelector(`#bras10`)
            if (brasLeve[10] == 0) {
                squeletteImage10.src = "images/SqueletteBras1.webp"
                brasLeve[10] = 1
            } else {
                squeletteImage10.src = "images/SqueletteBras0.webp"
                brasLeve[10] = 0
            }         
            
            break;
        case "bras8":
            if (brasLeve[8] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[8] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[8] = 0
            }            

            let squeletteImage15 = document.querySelector(`#bras15`)
            if (brasLeve[15] == 0) {
                squeletteImage15.src = "images/SqueletteBras1.webp"
                brasLeve[15] = 1
            } else {
                squeletteImage15.src = "images/SqueletteBras0.webp"
                brasLeve[15] = 0
            }         
            
            break;
        case "bras9":
            if (brasLeve[9] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[9] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[9] = 0
            }            

            let squeletteImage8 = document.querySelector(`#bras8`)
            if (brasLeve[8] == 0) {
                squeletteImage8.src = "images/SqueletteBras1.webp"
                brasLeve[8] = 1
            } else {
                squeletteImage8.src = "images/SqueletteBras0.webp"
                brasLeve[8] = 0
            }         
            
            break;
        case "bras10":
            if (brasLeve[10] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[10] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[10] = 0
            }            

            let squeletteImage7 = document.querySelector(`#bras7`)
            if (brasLeve[7] == 0) {
                squeletteImage7.src = "images/SqueletteBras1.webp"
                brasLeve[7] = 1
            } else {
                squeletteImage7.src = "images/SqueletteBras0.webp"
                brasLeve[7] = 0
            }         
            
            break;
        case "bras11":
            if (brasLeve[11] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[11] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[11] = 0
            }            

            let squeletteImage13 = document.querySelector(`#bras13`)
            if (brasLeve[13] == 0) {
                squeletteImage13.src = "images/SqueletteBras1.webp"
                brasLeve[13] = 1
            } else {
                squeletteImage13.src = "images/SqueletteBras0.webp"
                brasLeve[13] = 0
            }         
            
            break;
        case "bras12":
            if (brasLeve[12] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[12] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[12] = 0
            }            

            let squeletteImage5 = document.querySelector(`#bras5`)
            if (brasLeve[5] == 0) {
                squeletteImage5.src = "images/SqueletteBras1.webp"
                brasLeve[5] = 1
            } else {
                squeletteImage5.src = "images/SqueletteBras0.webp"
                brasLeve[5] = 0
            }         
            
            break;
        case "bras13":
            if (brasLeve[13] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[13] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[13] = 0
            }            

            let squeletteImage2 = document.querySelector(`#bras2`)
            if (brasLeve[2] == 0) {
                squeletteImage2.src = "images/SqueletteBras1.webp"
                brasLeve[2] = 1
            } else {
                squeletteImage2.src = "images/SqueletteBras0.webp"
                brasLeve[2] = 0
            }         
            
            break;
        case "bras14":
            if (brasLeve[14] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[14] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[14] = 0
            }            

            let squeletteImage0 = document.querySelector(`#bras0`)
            if (brasLeve[0] == 0) {
                squeletteImage0.src = "images/SqueletteBras1.webp"
                brasLeve[0] = 1
            } else {
                squeletteImage0.src = "images/SqueletteBras0.webp"
                brasLeve[0] = 0
            }         
            
            break;
        case "bras15":
            if (brasLeve[15] == 0) {
                squeletteImage.src = "images/SqueletteBras1.webp"
                brasLeve[15] = 1
            } else {
                squeletteImage.src = "images/SqueletteBras0.webp"
                brasLeve[15] = 0
            }            

            let squeletteImage3 = document.querySelector(`#bras3`)
            if (brasLeve[3] == 0) {
                squeletteImage3.src = "images/SqueletteBras1.webp"
                brasLeve[3] = 1
            } else {
                squeletteImage3.src = "images/SqueletteBras0.webp"
                brasLeve[3] = 0
            }         
            
            break;
        
    }

    sommeBrasLeve = 0
    for (const valeur of brasLeve) {
        sommeBrasLeve += valeur;
    }
    console.log(sommeBrasLeve)

    if (sommeBrasLeve == 16) {
        finEnigme()
    }
}


function finEnigme() {
    resetAnim = 1
    animationSquelette()

    let recommencer = document.querySelector(".recommencer")
    recommencer.style.display = "flex"


    recommencer.addEventListener("click", (event) => {
        
        recommencer.style.display = "none"
        // reset()
        resetAnim = 0
        init()
                
    }, { once: true })
    
}

function reset() {
    for (let j = 0; j < 37; j++) {
        let merImage = document.querySelector(`#mer${j}`)
        merImage.src = "images/Mer0.webp"
    }
}

function init() {
    sommeBrasLeve = 0
    // resetAnim = 1

    for (let j = 0; j < 16; j++) {
        let brasImage = document.querySelector(`#bras${j}`)        

        brasImage.src = "images/SqueletteBras0.webp"
        brasLeve[j] = 0
       
    }    

}  


function initClicks() {
    for (let j = 0; j < 16; j++) {
        let squeletteImage = document.querySelector(`#bras${j}`)        

        squeletteImage.addEventListener("click", (event) => {
            console.log("click squelette : ",squeletteImage.id)


            // console.log("Ordonnée : ",merOrdonne[j]," ; Abscisse : ",merAbscisse[j])

            clicSquelette(squeletteImage.id,squeletteImage)
        })
    }    

}



function animationSquelette(currentTime) {    
    let time = 350

    for (let j = 0; j < 16; j++) {
        let brasImage = document.querySelector(`#bras${j}`)        

        brasImage.src = "images/SqueletteBras0.webp"
       
    }  

      
    setTimeout(() => {        
        i = 0
        k = "null"
        requestAnimationFrame(animationHourra)
    }, time); 
    
    
}

function animationHourra() {
    let time = 350

    if ((resetAnim == 1)) {
    let brasImage0 = document.querySelector(`#bras${i}`)     
    brasImage0.src = "images/SqueletteBras1.webp"

    let brasImage1 = document.querySelector(`#bras${i+8}`)     
    brasImage1.src = "images/SqueletteBras1.webp"

        if (k != "null") {
            
            let brasImage2 = document.querySelector(`#bras${k}`)     
            brasImage2.src = "images/SqueletteBras0.webp"

            let brasImage3 = document.querySelector(`#bras${k+8}`)     
            brasImage3.src = "images/SqueletteBras0.webp"

        }      
    
    }

    k = i
    
    if ((i == 0) || (i == 1) || (i == 2) || (i == 3)) {
        i += 4
    } else if ((i == 4) || (i == 5) || (i == 6)){
        i -= 3
    } else {
        i = 8
    }

    // i++
    // console.log("i: ",i)

    if ((i<8) && ((resetAnim == 1))) {
        setTimeout(() => {
            requestAnimationFrame(animationHourra)     
            // console.log("Re-Animation Hourra")
        }, time);
    } else if (resetAnim == 1) {
        setTimeout(() => {        
        requestAnimationFrame(animationSquelette)
        // console.log("re-full animation")
        }, time);
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