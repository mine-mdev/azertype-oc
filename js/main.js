gsap.from("img", { opacity: 0, duration: 1 })
gsap.from("footer", { opacity: 0, duration: 4 })

let tl = gsap.timeline()
tl.from("h1", { y: 20, opacity: 0, duration: 0.25, delay: 0.2 })
tl.from(".intro", { y: 20, opacity: 0, duration: 0.25 })
tl.from(".zoneDeChoix", { y: 20, opacity: 0, duration: 0.25 })
tl.from(".zoneDeProposition", { y: 20, opacity: 0, duration: 0.25 })
tl.from(".zoneDeSaisie", { y: 20, opacity: 0, duration: 0.25 })
tl.from(".zoneDeScore", { y: 20, opacity: 0, duration: 0.25 })
tl.from(".zoneDeCompteur", { y: 20, opacity: 0, duration: 0.25 })

lancerJeu()

