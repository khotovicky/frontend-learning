
function createPhoneBook(initialList = {}) {
    const phoneBook = initialList

    function getNumber(name) {
        if (!name) {
            return 'invalid'
        }
        if (!phoneBook[name]) {
            return 'niema imienia'
        }
        return phoneBook[name]
    }
    
    function setNumber(name, number) {
        if (!name || !number) {
            return 'invalid'
        }
        phoneBook[name] = number
        return 'imię dodano'
    }
    
    function deleteNumber(name) {
        if (!name) {
            return 'invalid'
        }
        if (!phoneBook[name]) {
            return 'niema imienia'
        }
        delete phoneBook[name]
        return "imię usunięto"
    }
    return {
        getNumber,
        setNumber,
        deleteNumber
    }
}

const phoneBook = createPhoneBook()

phoneBook.setNumber("a", "456")
console.assert(phoneBook.getNumber("a") === "456")

const res = phoneBook.setNumber("b")
console.assert(res === "invalid")

while (true) {
    const a = prompt("Введите команду") // get Jura // set Vitya 8327489327498 // delete Kostja // exit 
    if (a === null) {
        alert("Invalid")
        continue
    }
    const tokens = a.split(" ")
    const op = tokens[0]
    if (op === 'get') {
        alert (phoneBook.getNumber(tokens[1])) 
    } else if (op === 'set') {
        alert(phoneBook.setNumber(tokens[1], tokens[2]))
    } else if (op === 'delete'){
        alert(phoneBook.deleteNumber(tokens[1]))

    } else if (op === 'exit') {
        break
    } else {
        alert("Invalid")
    }
}









