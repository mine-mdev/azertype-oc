function afficherResultat(score, total) {
    let zoneDeScore = document.querySelector(".zoneDeScore")
    let message = "Score: " + score + "/" + total
    zoneDeScore.innerText = message
}
function afficherProposition(proposition) {
    let zoneDeProposition = document.querySelector(".zoneDeProposition")
    zoneDeProposition.innerText = proposition
}

function lancerJeu() {
    let listeInputRadioChoix = document.querySelectorAll(".zoneDeChoix input[type='radio']")
    let boutonValidation = document.querySelector(".zoneDeSaisie button")
    let inputTextSaisie = document.querySelector(".zoneDeSaisie input[type='text']")
    let i = 0
    let score = 0
    let choix = ""
    let listePropositions = listeMots

    for (let j = 0; j < listeInputRadioChoix.length; j++) {
        listeInputRadioChoix[j].addEventListener("change", (event) => {
            choix = event.target.value;
            if (choix === "mots") {
                listePropositions = listeMots
                afficherProposition(listePropositions[i])
            } else {
                listePropositions = listPhrases
                afficherProposition(listePropositions[i])
            }
        })
    }


    afficherResultat(score, i)
    afficherProposition(listePropositions[i])

    boutonValidation.addEventListener("click", () => {
        if (inputTextSaisie.value.trim() === listePropositions[i]) {
            score += 1
        }

        inputTextSaisie.value = ""
        i++
        afficherResultat(score, i)

        if (listePropositions[i] === undefined) {
            boutonValidation.disabled = true
            boutonValidation.classList.remove("active")
            boutonValidation.classList.add("desactive")
            afficherProposition("Le jeu est terminé !")
        } else {
            afficherProposition(listePropositions[i])

        }


    })





}