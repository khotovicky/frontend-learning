function findElement(list, element) {
    for (let elem of list) {
        if (elem === element) {
            return true
        }
    }
    return false
}

console.log(findElement([1, 2, 3], 2));
