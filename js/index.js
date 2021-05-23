const overlay = document.querySelector("#overlay")
const helpButton = document.querySelector("#helpButton")
const helpMenu = document.querySelector("#helpMenu")
const helpExitButton = document.querySelector('#helpMenu span')
let helpMenuIsShown = false

helpButton.addEventListener('click', ()=>{
    helpMenu.style.display = "block"
    overlay.style.display = "block"
    helpMenuIsShown = true
})
helpExitButton.addEventListener("click", ()=>{
    helpMenu.style.display = "none"
    overlay.style.display = "none"
    helpMenuIsShown = false
})
overlay.addEventListener("click", ()=>{
    if (helpMenuIsShown) {
        helpMenu.style.display = "none"
        overlay.style.display = "none"
    }
})
