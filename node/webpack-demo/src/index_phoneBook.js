import { App } from "./App"
import { deleteHistoryButton } from "./buttonElement"
import { HistoryItem } from "./HistoryItem"
import { perfomCommand } from "./interpretator"
import React from "./react"

// const interpretatorInput = document.getElementById("interpretator_input")
// const interpretatorButton = document.getElementById("interpretator_button")
const history = document.querySelector('#history')
// const divBody = history.parentElement

const appContainer = document.querySelector("#app")

let command = ""
let canDelete = false

const onInputCommand = (cmd) => {
    command = cmd
}

const onEnterCommand = () => {
    const result = perfomCommand(command)
    console.log(`${command}: ${result}`)
    history.appendChild(HistoryItem({ command, result }))
    canDelete = true
    render()
}

const onDelete = () => {
    history.innerHTML = ''
    canDelete = false
    render()
}

const render = () => {
    appContainer.innerHTML = ''
    const appElement = App({ onInputCommand, onEnterCommand, onDelete, canDelete })
    appContainer.appendChild(appElement)
}

render()

// interpretatorButton.addEventListener("click", () => {
//     const command = interpretatorInput.value
//     const result = perfomCommand(command)
//     interpretatorInput.value = ""
//     interpretatorInput.focus()
//     console.log(`${command}: ${result}`)
//     history.appendChild(createHistoryElement(command, result))
//     if (divBody.lastElementChild === interpretatorButton) divBody.appendChild(deleteHistoryButton())
//     const deleteButton = divBody.lastElementChild
//     deleteButton.addEventListener('click', () => {
//         history.innerHTML = ''
//         deleteButton.remove()
//     })
// })



// (function IIFE(){
//     console.log("Hello!")
//   })();


