
const states = {}

let currentRendrenigElementKey = null

const renderedComponentsKeys = new Set()

export function useState(initialState) {

    const key = currentRendrenigElementKey

    if (!key || typeof key !== "string") {
        throw new Error(`Ключ ${key} в имеет неприемлемый тип. Допустим только непустой string`)
    }

    if (renderedComponentsKeys.has(key)) {
        throw new Error(`useState по ключу ${key} вызван дважды`)
    }
    renderedComponentsKeys.add(key)

    const setState = (newValue) => {
        states[key] = newValue
        rerender()
    }
    let state = initialState
    if (key in states) {
        state = states[key]
    }
    return [
        state,
        setState
    ]
}

function createChildrenElements(children, element) {
    for (let child of children) {
        if (child === null) {
            continue
        }
        if (child instanceof Array) {
            createChildrenElements(child, element)
        } else if (typeof child === "object") {
            element.appendChild(child)
        }
        else if (typeof child === "string" || typeof child === "number") {
            document.createTextNode(element)
            element.innerHTML = child
        }
    }
}

export function createElement(type, props, ...children) {
    if (typeof type === "function") {
        currentRendrenigElementKey = props?.key
        const res = type(props)
        currentRendrenigElementKey = null
        return res
    }

    const element = document.createElement(type)

    for (let prop in props) {
        element[prop] = props[prop]
    }
    createChildrenElements(children, element)
    
    return element
}

let appContainer
let rootComponent

export const render = (component, container) => {
    container.innerHTML = ''
    appContainer = container
    rootComponent = component
    const appElement = createElement(component)
    container.appendChild(appElement)
}

const rerender = () => {
    if (!rootComponent || !appContainer)
        throw new Error("Вызван ререндер, хотя не было первого рендера")
    renderedComponentsKeys.clear()
    render(rootComponent, appContainer)
}

export default {
    createElement
}
