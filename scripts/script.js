const dateCible = new Date("2026-10-31T12:00:00").getTime()
const maintenant = new Date().getTime()

appartitionDernierBouton()

function appartitionDernierBouton() {
    let dernierBouton = document.getElementById("dernierBouton")


    if (maintenant >= dateCible) {
        dernierBouton.style.display = "block"; // Affiche l'élément
    }

}
