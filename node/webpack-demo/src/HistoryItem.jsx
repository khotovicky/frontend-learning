import React from "./react"

function Component(props) {

    const content = `content ${props.kek}`

    if (props.pop === 12) {
        return null
    }

    return <span>{content}</span>
}

export function HistoryItem({ command, result }) {
    // return React.createElement("li", {},
    //     createElement("span", { style: "color: green;" }, `${command}: `),
    //     createElement("span", { style: "color: cyan;" }, result ),
    // )
    return <li>
        <Component lol="kek" kek="lol" pop={12} />
        <span style="color: green;">{`${command}: `}</span>
        <span style="color: cyan;">{result}</span>
    </li>
}
