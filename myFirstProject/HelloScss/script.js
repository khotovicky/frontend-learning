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

function UserInfo(name) {
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
  this.age93 = 1.005
  this.age94 = Math.round(this.age93 + Number.EPSILON)

}

console.log(new UserInfo('Basia'))

