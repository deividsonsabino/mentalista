const INPUT = document.getElementById("input-value")
const INPUT_GAME_CLASS = document.querySelector(".input-game").classList
const POINTS = document.getElementById("points")
const CHANGES = document.getElementById("changes")
const TIP = document.getElementById("tip")

const SUCCESS_MSG_CLASS = document.querySelector(".success").classList
const ERROR_MSG_CLASS = document.querySelector(".error").classList
const TIP_MSG_CLASS = document.querySelector(".tip").classList

const INIT_BUTTON_CLASS = document.querySelector(".init").classList
const RESTART_BUTTON_CLASS = document.querySelector(".restart").classList

const CARD = document.querySelector(".card").classList

let COMPUTER_GENERATE_NUMBER = Math.random().toFixed() * 10

POINTS.textContent = 0


function init() {
    CARD.add("animate__animated")
    CARD.add("animate__fadeInLeft")
    COMPUTER_GENERATE_NUMBER = Math.random() * 10
    COMPUTER_GENERATE_NUMBER = COMPUTER_GENERATE_NUMBER.toFixed()
    console.log(COMPUTER_GENERATE_NUMBER)

    INPUT_GAME_CLASS.remove("hidden")
    CHANGES.textContent = 0
    SUCCESS_MSG_CLASS.add("hidden")
    ERROR_MSG_CLASS.add("hidden")
    TIP_MSG_CLASS.add("hidden")
    INIT_BUTTON_CLASS.remove("hidden")
    RESTART_BUTTON_CLASS.add("hidden")
}

function handleSubmit() {
    SUCCESS_MSG_CLASS.remove("animate__fadeInLeft")
    ERROR_MSG_CLASS.remove("animate__fadeInLeft")

    if (INPUT.value === "") {
        return
    }
    handleChange(COMPUTER_GENERATE_NUMBER, INPUT)
    checkChanges()
}

function handleChange(COMPUTER_GENERATE_NUMBER, INPUT) {

    if (INPUT.value != COMPUTER_GENERATE_NUMBER) {
        tips(INPUT.value)
        CHANGES.textContent = parseFloat(CHANGES.textContent) + 1

    } else {
        COMPUTER_GENERATE_NUMBER = Math.random() * 10
        INPUT_GAME_CLASS.add("hidden")
        POINTS.textContent = parseFloat(POINTS.textContent) + 1000
        TIP_MSG_CLASS.add("hidden")
        SUCCESS_MSG_CLASS.remove("hidden")
        INIT_BUTTON_CLASS.add("hidden")
        RESTART_BUTTON_CLASS.remove("hidden")
        SUCCESS_MSG_CLASS.add("animate__animated")
        SUCCESS_MSG_CLASS.add("animate__fadeInLeft")
    }

    INPUT.value = ""

}

function checkChanges() {
    if (CHANGES.textContent >= 3) {
        ERROR_MSG_CLASS.remove("hidden")
        TIP_MSG_CLASS.add("hidden")
        INIT_BUTTON_CLASS.add("hidden")
        INPUT_GAME_CLASS.add("hidden")
        RESTART_BUTTON_CLASS.remove("hidden")
        ERROR_MSG_CLASS.add("animate__animated")
        ERROR_MSG_CLASS.add("animate__fadeInLeft")
        POINTS.textContent = 0
    }
}

function tips(INPUT) {
    console.log(parseFloat(INPUT))
    let text = ""
    if (parseFloat(INPUT) >= 5) {
        text = `O número é maior ou igual a 5`
    } else {
        text = `O número é menor que 5`
    }
    TIP.textContent = text
    TIP_MSG_CLASS.remove("hidden")
}

function restart() {
    init()
}