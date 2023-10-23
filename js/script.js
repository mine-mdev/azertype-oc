function genererNombreAleatoire() {
    return Math.floor(Math.random() * 10) + 1
}

let i = genererNombreAleatoire()
let k = 0
let score = 0
let compteur = 30
let setIntervalID = null;
let listePropositions = listeMots

let boutonValidation = document.querySelector(".zoneDeSaisie button")
let inputTextSaisie = document.querySelector(".zoneDeSaisie input[type='text']")
let div = document.querySelector(".zoneDeBouton")


function rejouerJeu() {
    score = 0
    i = genererNombreAleatoire()
    k = 0
    compteur = 30
    setIntervalID = null
    inputTextSaisie.disabled = false
    boutonValidation.disabled = false

    boutonValidation.classList.remove("desactive")
    boutonValidation.classList.add("active")

    div.classList.remove("flex")
    div.classList.add("hidden")
    if (!formulaire.classList.contains("hidden")) {
        formulaire.classList.add("hidden")
    }
    inputTextSaisie.value = ""
    inputTextSaisie.focus()
    afficherCompteur()
    afficherProposition(listePropositions[i])
    afficherScore(score, k)
}

function terminerJeu() {
    boutonValidation.disabled = true
    inputTextSaisie.disabled = true
    boutonValidation.classList.remove("active")
    boutonValidation.classList.add("desactive")
    div.classList.remove("hidden")
    div.classList.add("flex")
}

function afficherMessageErreur(message) {
    let p = document.getElementById("erreur")
    if (!p) {
        p = document.createElement("p")
        p.id = "erreur"
        formulaire.appendChild(p)
    }
    p.textContent = message
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

function afficherScore(score, total) {
    let zoneDeScore = document.querySelector(".zoneDeScore")
    let message = "Score: " + score + "/" + total
    zoneDeScore.innerText = message
}

function afficherCompteur() {
    let zoneDeCompteur = document.querySelector(".zoneDeCompteur")
    compteur = compteur < 10 ? "0" + compteur : compteur
    zoneDeCompteur.innerText = `Compteur: ${compteur}`
    compteur = Number(compteur)
    if (compteur > 0) {
        compteur--
    } else if (compteur === 0) {
        clearInterval(setIntervalID)
        terminerJeu()
        afficherProposition("Le jeu est terminé !")
    }

}

function afficherProposition(proposition) {
    let zoneDeProposition = document.querySelector(".zoneDeProposition")
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
    let boutonRejouer = document.querySelector(".zoneDeBouton button:last-child")

    inputTextSaisie.focus()

    afficherScore(score, k)
    afficherCompteur()
    afficherProposition(listePropositions[i])

    for (let j = 0; j < listeInputRadioChoix.length; j++) {
        listeInputRadioChoix[j].addEventListener("change", (event) => {
            let choix = event.target.value;
            if (choix === "mots") {

                listePropositions = listeMots
            } else {
                listePropositions = listPhrases
            }
            if (compteur !== 0) {
                afficherProposition(listePropositions[i])
            }
        })
    }


    boutonValidation.addEventListener("click", () => {
        if (setIntervalID === null) {
            setIntervalID = setInterval(afficherCompteur, 1000)
        }

        if (inputTextSaisie.value.trim() === listePropositions[i]) {
            score += 1
        }

        inputTextSaisie.value = ""
        i = genererNombreAleatoire()
        k++
        afficherScore(score, k)
        inputTextSaisie.focus()
        afficherProposition(listePropositions[i])
    })

    formulaire.addEventListener("submit", (event) => {
        event.preventDefault()
        let emailScore = `${score}/${k}`
        gererFormulaire(emailScore)
    })

    boutonRejouer.addEventListener("click", rejouerJeu)

}