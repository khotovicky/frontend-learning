import { createPhoneBook } from "./phoneBook.js"

test("setting number", () => {
    const phoneBook = createPhoneBook()
    phoneBook.setNumber("a", "456")
    expect(phoneBook.getNumber("a")).toBe("456")
})

test("set without number", () => {
    const phoneBook = createPhoneBook()
    const res = phoneBook.setNumber("b")
    expect(res).toBe("invalid")
})
