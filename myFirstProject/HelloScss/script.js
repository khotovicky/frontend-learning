"use strict";

document.write('В чём сила?');
// при клике по кнопке скрипт запустит код
let button = document.querySelector(".button");
function sayHello(name) {
  return 'Привет! ' + name;
}


let greeting = sayHello('Не закрывай это уведомление!');

console.log(greeting);
alert(greeting);
button.addEventListener('click', function () {
    // если фон кнопки чёрный
    if (button["style"].backgroundColor == 'black') {
      // изменим его на белый, а текст сделаем чёрным
      button.style.backgroundColor = 'white';
      button.style.color = 'black';
    } else {
      // иначе сделаем фон чёрным, а текст белым
    button.style.backgroundColor = 'black';
        button.style.color = 'white';
    }
  });
console.log('Я учу JS');
let userEyesColor;
let userName = 'Вася';
let user = userName;
console.log(user);
let a = "35" * '22';
console.log(!false && 11 || 18 && !'');

let message = 'Hi'
let messageEnd = 5 > 1 ? ', Vasia' : ', Ola'
message += messageEnd
console.log(message)

let num = 0
do {
  console.log(num)
  num++
} while(num < 0)

for (;num < 5;) {
  console.log(num)
  num++
}

firstFor: for (num = 0; num < 2; num++) {
  for (let size = 0; size < 3; size++) {
    if (size === 2) break firstFor
    console.log(size)
  }
  
}

for(let b = 0; b < 6; b++) console.log(b)

function calcSumm(numOne, numTwo) {
  let numSumm = numOne + numTwo
  return numSumm
}
let funcResult = calcSumm(1, 2)
console.log(`Sum: ${funcResult}`)

let getMessage = (text, Name) => text + Name
function showMessage (text, Name) { 
  console.log(getMessage(text, Name))
  text++
  if(text < 7) {
    let timeId = setTimeout(showMessage, 1000, text, Name)
    if (text === 6) {
      clearTimeout(timeId)
    }
  }
 
}
setTimeout(showMessage, 3000, 0, 67)

let firstPart = 'Jura'
let id = Symbol('id')
let phoneBook = {
  [firstPart]: "+79010000000", 
  Kostja: "+7902",
  Miron: "+7903",
  Oksana: "+7904",
  "likes javascript": true,
  [id]: 'znaczenie',
  showInfo() {
    console.log(`${this[firstPart]}`)
    let show = () => console.log(`${this.Kostja}`)
  }
}

let user1 = Object.assign({}, phoneBook)
user1[firstPart] = 18

Object.assign(phoneBook, {Vitia: "+7905"})
console.log(phoneBook["likes javascript"])
console.log(phoneBook[firstPart])
console.log(phoneBook?.Kostja)
// kogda znaczenie undefined:
if ('Kostja' in phoneBook) {
  console.log(phoneBook.Kostja)
}
for (let key in phoneBook) {
  console.log(key)
  console.log(phoneBook[key])
}

phoneBook.showInfo()

function UserInfo(name, symbols) {
  this.name = name
  this.age = 30
  this.age1 = 1e6
  this.age2 = 1e-6
  this.age3 = 0xff
  this.age4 = 0b11111111
  this.age5 = 0o377
  this.age6 = this.age.toString(16)
  this.age7 = Math.floor(-3.2)
  this.age8 = Math.ceil(2.2)
  this.age9 = [Math.round(3.2), Math.round(3.6)]
  this.age91 = 1.2345
  this.age92 = +this.age91.toFixed(2)
  this.age93 = 1.005 + Number.EPSILON
  this.age94 = +this.age93.toFixed(2)
  this.age95 = '150.58px'
  this.age96 = parseInt(this.age95)
  this.age97 = parseFloat(this.age95)
  this.age98 = parseInt(this.age3, 16)
  this.age99 = Math.random()
  this.age990 = Math.max(this.age, this.age1, this.age2)
  this.age991 = Math.min(this.age3, this.age4, this.age5)
  this.age992 = Math.abs(this.age7)
  this.age993 = Math.pow(this.age8, this.age91)
  this.string = `Привет!
  Так можно записывать многострочно
  `
  this.string1 = "Привет!\n\tЭто\n\t\tтабуляция"
  this.string2 = 'Привет!\\Это обратный слэш'
  this.string3 = "Привет! \"Это кавычки\" \u00A9 \u{1F60D}"
  this.stringage = this.string.length
  this.string4 = this.string[0]
  this.string5 = this.string[this.string.length - 1]
  this.string6 = this.string.toUpperCase()
  this.string7 = this.string6.toLowerCase()
  this.stringage0 = this.string.indexOf('рив')
  this.stringage1 = this.string.indexOf('в', 10)
  this.string92 = this.string.lastIndexOf('рив')
  this.string8 = this.string.includes('рив', 3)
  
  this.string9 = this.string.startsWith('рив')
  this.string90 = this.string.endsWith(" ")
  this.string91 = this.string.slice(1, 2)
  this.symbols = symbols
}
function symbolsToObject(key) {
  let a
    for (const char of key) {
      a = [char]
    }
    console.log(a)
}
let age6 = '123'
let symbols = symbolsToObject(age6)
let ourObject = new UserInfo('Basia', symbols)

console.log(isNaN(25 + "Hi"))
console.log(isFinite('25'))
console.log(ourObject)


let arr = ['Wania', 'Isztwan', 'Ola']
arr.push('Dima', 'Katia')
console.log(arr)
arr.shift()
arr.pop()
arr.unshift('Vasia')
let removed = arr.splice(1, 1)
arr.splice(0, 1, 'Kola')
arr.splice(1, 0, 'Masza', 'Jurek')
let arrZero = arr.slice(1, 2)
let arrOne = arr.concat('Pietia')
arr.sort()
let arrTwo = [8, 22, 1]
arrTwo.sort((a, b) => a - b) // kiedy liczby
arr.reverse()
let arrThree = arr.map(item => item[0])
let string = 'Привет! Так нельзя записывать многострочно'
let arrFour = string.split(' ', 2)
let stringZero = arr.join(', ')
Array.isArray(arr)
arr.forEach((item, index, array) => {
  console.log(`${item} znajduję się na ${index} pozycji w ${array}`)
})

let arrObjects = [
  {name: 'Vasia', age: 36},
  {name: 'Kola', age: 18},
  {name: 'Ola', age: 'Nie powiem'}
]

let result = arrObjects.find(item => item.age === 18)
let resultZero = arrObjects.findIndex(item => item.age === 18)
let resultOne = arrObjects.filter(item => item.age >= 18)
