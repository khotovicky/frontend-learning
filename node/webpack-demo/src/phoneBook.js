export function createPhoneBook(initialList = {}) {
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
