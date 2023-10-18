function basculerFormulaire() {
    let boutonPartager = document.querySelector(".zoneDeScore + button")
    let formulaire = document.querySelector(".formulaire")
    boutonPartager.addEventListener("click", () => {
        formulaire.classList.remove("hidden")
    })
}

basculerFormulaire()

