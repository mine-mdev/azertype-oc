function afficherPopup() {
    let bgPopup = document.querySelector(".bgPopup")
    bgPopup.classList.remove("hidden")
}

function fermerPopup() {
    let bgPopup = document.querySelector(".bgPopup")
    bgPopup.classList.add("hidden")
}


function basculerPopup() {
    let boutonPartager = document.querySelector(".zoneDeScore + button")
    boutonPartager.addEventListener("click", () => {
        afficherPopup()
    })

    let bgPopup = document.querySelector(".bgPopup")
    bgPopup.addEventListener("click", (event) => {
        if (event.target === bgPopup) {
            fermerPopup()
        }

    })

}

basculerPopup()

