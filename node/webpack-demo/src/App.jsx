import React from "./react"

export const App = ({ onInputCommand, onEnterCommand, onDelete, canDelete }) => {

    const inputHandler = (e) => {
        onInputCommand(e.target.value)
    }

    return <div>
        {/* <ul id="history"></ul> */}
        <input type="text" oninput={inputHandler} /> {/*special word?*/}
        <button onclick={onEnterCommand}>Enter</button>
        { canDelete ? <button onclick={onDelete}>Delete</button> : null }
    </div>
}
