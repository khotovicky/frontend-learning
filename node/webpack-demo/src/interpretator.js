import { createPhoneBook } from "./phoneBook"
 
const phoneBook = createPhoneBook()

export function perfomCommand(command) {
    if (command === null) {
        return "Invalid"
    }
    const tokens = command.split(" ")
    const op = tokens[0]
    if (op === 'get') {
        return phoneBook.getNumber(tokens[1]) 
    } else if (op === 'set') {
        return phoneBook.setNumber(tokens[1], tokens[2])
    } else if (op === 'delete'){
        return phoneBook.deleteNumber(tokens[1])
    } else {
        return "Invalid"
    }
}



// while (true) {
//     const a = prompt("Введите команду") // get Jura // set Vitya 8327489327498 // delete Kostja // exit 
//     if (a === 'exit') {
//         break
//     }
//     alert(perfomCommand(a))
// }
