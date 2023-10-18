function afficherMessageErreur(message) {
    let span = document.getElementById("erreur")
    if (!span) {
        let popup = document.querySelector(".formulaire")
        span = document.createElement("span")
        span.id = "erreur"
        popup.appendChild(span)
    }
    span.textContent = message
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}+?subject=Partage du score depuis AZERTYPE&body=Salut, je suis ${nom} et je viens d'obtenir le score ${score} depuis le site AZERTYPE.`
    location.href = mailto
}

function validerNom(nom) {
    if (nom.length < 3) {
        throw new Error("Le nom est trop court !")
    }
}

function validerEmail(email) {
    const regex = new RegExp("^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,6}$")
    if (!regex.test(email)) {
        throw new Error("L'adresse email est invalide !")
    }
}

function afficherResultat(score, total) {
    let zoneDeScore = document.querySelector(".zoneDeScore")
    let message = "Score: " + score + "/" + total
    zoneDeScore.innerText = message
}

function afficherProposition(proposition) {
    let zoneDeProposition = document.querySelector(".zoneDeProposition")
    proposition = proposition === undefined ? "Le jeu est terminé !" : proposition

    zoneDeProposition.innerText = proposition
}

function gererFormulaire(score) {
    const nom = document.getElementById("nom").value
    const email = document.getElementById("email").value
    try {
        validerNom(nom)
        validerEmail(email)
        afficherEmail(nom, email, score)
    } catch (error) {
        afficherMessageErreur(error.message)
    }
}

function lancerJeu() {
    let listeInputRadioChoix = document.querySelectorAll(".zoneDeChoix input[type='radio']")
    let boutonValidation = document.querySelector(".zoneDeSaisie button")
    let inputTextSaisie = document.querySelector(".zoneDeSaisie input[type='text']")
    let i = 0
    let score = 0
    let choix = ""
    let listePropositions = listeMots
    let formulaire = document.querySelector("form")

    formulaire.addEventListener("submit", (event) => {
        event.preventDefault()
        let emailScore = `${score}/${i}`
        gererFormulaire(emailScore)
    })

    for (let j = 0; j < listeInputRadioChoix.length; j++) {
        listeInputRadioChoix[j].addEventListener("change", (event) => {
            choix = event.target.value;
            if (choix === "mots") {
                listePropositions = listeMots
            } else {
                listePropositions = listPhrases
            }
            afficherProposition(listePropositions[i])
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
        }
        afficherProposition(listePropositions[i])


    })





}