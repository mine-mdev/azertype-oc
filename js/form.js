let formulaire = document.querySelector(".formulaire")
let boutonPartager = document.querySelector(".zoneDeBouton button:first-child")
function basculerFormulaire() {
    formulaire.classList.toggle("hidden")
}

boutonPartager.addEventListener("click", basculerFormulaire)



