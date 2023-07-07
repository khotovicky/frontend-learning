"use strict";

document.write('В чём сила?');
// при клике по кнопке скрипт запустит код
let button = document.querySelector(".button");
function sayHello(name) {
  return 'Привет! ' + name;
}


let greeting = sayHello('Не закрывай это уведомление!');

console.log(greeting);
//alert(greeting);
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
switch (a) {
  case 2:
  case 10:
  // какие-то крутые вещи
  break;
  case 42:
  // другие вещи
  break;
  default:
  // резерв
}
  
let funcResult = calcSumm(1, 2)
console.log(`Sum: ${funcResult}`)

//(function IIFE(){console.log("Hello!")})();
  // "Hello!"

function makeAdder(x) {
  // параметр `x` - внутренняя переменная
  
  // внутренняя функция `add()` использует `x`, поэтому
  // у нее есть "замыкание" на нее
  function add(y) {
  return y + x;
  };
  
  return add;
}

// `plusOne` получает ссылку на внутреннюю функцию `add(..)`
// с замыканием на параметре `x`
// внешней `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` получает ссылку на внутреннюю функцию `add(..)`
// с замыканием на параметре `x`
// внешней `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );// 4 <— 1 + 3
plusOne( 41 );// 42 <— 1 + 41

plusTen( 13 );// 23 <— 10 + 13

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
let reduce = arrTwo.reduce(function(previousValue, item) {
  return previousValue + item
}, 0) // also reduceRight
console.log(reduce)

let users = ["Ваня", "Иштван"]
users.push("Оля")
users[1] = "Петя"
let removedZero = users.splice(0, 1)
users.unshift("Маша", "Паша")
console.log(users, removedZero)

let arrObjects = [
  {name: 'Vasia', age: 36},
  {name: 'Kola', age: 18},
  {name: 'Ola', age: 'Nie powiem'}
]

let result = arrObjects.find(item => item.age === 18)
let resultZero = arrObjects.findIndex(item => item.age === 18)
let resultOne = arrObjects.filter(item => item.age >= 18)

//let confirmResult = confirm("Хочешь научиться верстать?")
//let promptResult = prompt("Кто ты по жизни?")

const htmlElement = document.documentElement
const headElement = document.head
const bodyElement = document.body
const firstChildNode = bodyElement.firstChild
const lastChildNode = bodyElement.lastChild
const childNodes = bodyElement.childNodes
const previousSiblingNode = bodyElement.previousSibling
const nextSiblingNode = bodyElement.nextSibling
const parentNode = bodyElement.parentNode
const bodyChildren = bodyElement.children
const previousSiblingElement = bodyElement.previousElementSibling
const nextSiblingElement = bodyElement.nextElementSibling
const parentElement = bodyElement.parentElement
const firstChildElement= bodyElement.firstElementChild
const lastChildElement = bodyElement.lastElementChild
const elemsOne = document.querySelectorAll('title')
const elemsTwo = document.querySelector('[attribute="example"]')
const headerBody = document.querySelector('.header_body')
const elem = document.getElementById('articles')
const elems = document.getElementsByTagName('div')
const elemsZero = document.getElementsByClassName('text-center')
const elemsThree = document.getElementsByName('viewport')
const ancestorElement = headerBody.closest('.text-center')
for (let elem of elemsOne) { 
  console.log(elem.matches('[class$="button"]'))
}
const headerBodyContent = headerBody.innerHTML
headerBody.innerHTML = 'Живи, а работай в свободное время!'
elemsTwo.outerHTML = 'Живи, а работай в свободное время!'
elem.textContent
const elemZero = document.querySelector('[name="viewport"]')
const getComment = elemZero.previousSibling
getComment.data = `Привет! ${getComment.data}`
const newElement = document.createElement('div')
const newText = document.createTextNode('Привет!')
ancestorElement.before(newElement, "Привет!")
headerBody.after(newElement)
ancestorElement.prepend(newElement)
ancestorElement.insertAdjacentHTML(
  'beforebegin',
  `<p>Живи, а работай в 
  <span class="dec-through">свободное</span> время!</p>`
)
headerBody.insertAdjacentHTML(
  'afterbegin',
  `<p>Живи, а работай в 
  <span class="dec-through">свободное</span> время!</p>`
)
ancestorElement.insertAdjacentHTML(
  'beforeend',
  `<p>Живи, а работай в 
  <span class="dec-through">свободное</span> время!</p>`
)
headerBody.insertAdjacentHTML(
  'afterend',
  `<p>Живи, а работай в 
  <span class="dec-through">свободное</span> время!</p>`
)
const cloneTextElement = ancestorElement.cloneNode()
headerBody.append(cloneTextElement)
const cloneTextElementZero = headerBody.cloneNode(true)
ancestorElement.prepend(cloneTextElementZero)
ancestorElement.remove()
const element = document.querySelector('.header__overlay')
element.className
element.classList.add('active')
element.classList.remove('active')
element.classList.toggle('active')
element.classList.contains('active')
element.style.color = 'blue'
const elemOne = document.querySelector('.nav')
elemOne.style.cssText = `
  margin-bottom: 30px;
  color: red;
`
const elementStyle = getComputedStyle(element)
console.log(elementStyle.fontSize)
const elemTwo = document.querySelector('ol li')
const elementHoverStyle = getComputedStyle(elemTwo, "::before")
console.log(elementHoverStyle.width)
console.dir(element)
elemsTwo.hasAttribute('attribute')
elemsTwo.getAttribute('attribute')
elemsTwo.setAttribute('attribute', 'value')
elemsTwo.removeAttribute('attribute')
//attribute 'value' cannot be changed here
elemsTwo.tagName
const elemThree = document.querySelector('.header__overlay')
element.hidden = true

const htmlElementWidth = htmlElement.clientWidth
const htmlElementHeight = htmlElement.clientHeight
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
let scrollWidth = Math.max(
  bodyElement.scrollWidth, htmlElement.scrollWidth,
  bodyElement.offsetWidth, htmlElement.offsetWidth,
  bodyElement.clientWidth, htmlElement.clientWidth
)
let scrollHeight = Math.max(
  bodyElement.scrollHeight, htmlElement.scrollHeight,
  bodyElement.offsetHeight, htmlElement.offsetHeight,
  bodyElement.clientHeight, htmlElement.clientHeight
)
const windowScrollTop = window.scrollY
const windowScrollLeft = window.screenX
function setScrollBy(x, y) {
  window.scrollBy(x, y)
  console.log(windowScrollTop)
}
function setScrollTo() {
  window.scrollTo(0, 50)
  console.log(windowScrollTop)
}
function setScrollToOptions() {
  window.scrollTo({
    top: 500,
    left: 0,
    behavior: "smooth"
  })
}
function setScrollIntoView(top/*false*/) {
  elemOne.scrollIntoView(top)
}
function setScrollIntoViewOptions(top) {
  elemOne.scrollIntoView({
    block: "center", // start, end, nearest
    inline: "nearest",
    behavior: "smooth"
  })
}
const elementOffsetParent = elemOne.offsetParent
const elementOffsetLeft = elemOne.offsetLeft
const elementOffsetTop = elemOne.offsetTop
const elementOffsetWidth = elemOne.offsetWidth
const elementOffsetHeight = elemOne.offsetHeight
const elementClientLeft = elemOne.clientLeft
const elementClientTop = elemOne.clientTop
const elementClientWidth = elemOne.clientWidth
const elementClientHeight = elemOne.clientHeight
const elementScrollLeft = elemOne.scrollLeft
const elementScrollTop = elemOne.scrollTop
const nogap = document.querySelector('#nogap')
nogap.scrollTop = 150
nogap.scrollLeft = 75
const getElemOneCoords = elemOne.getBoundingClientRect()
const getElemOneTopCoord = elemOne.getBoundingClientRect().top
const getElemOneTopDocumentCoord = getElemOneTopCoord + window.scrollY
const elemFour = document.elementFromPoint(100, 500)

elemOne.onclick = function() {
  nogap.scrollIntoView(top)
}

const options = {
  'capture': false,
  "once": false,
  "passive": false
}
let ae = 0
function changeBackColor() {
  if (elemOne.style.backgroundColor == "rgba(0, 0, 0, 0)") {
    elemOne.style.backgroundColor = "white"
    ae++
  } else {
    elemOne.style.backgroundColor = "rgba(0, 0, 0, 0)"
  }
  if(ae === 5) {
    elemOne.removeEventListener('mouseenter', changeBackColor)
    console.log('Клик!')
  }
}
elemOne.addEventListener('mouseenter', changeBackColor, options)
function showConsole(event) {
  event.type
  event.target
  event.currentTarget
  event.clientX
  event.clientY
}
elemOne.addEventListener('click', showConsole)
const elemFive = document.querySelector('nav p')
elemFive.addEventListener('click', function(event) {
  console.log("Клик на надпись!")
  event.stopPropagation()
})
const elemSix = document.querySelector('.opacity02')
const elemSeven = elemSix.parentElement
elemSeven.addEventListener('click', function(event) {
  console.log("Клик на список!")
}, options[0] = true)
elemSix.addEventListener('click', function(event) {
  console.log("Клик на пункт!")
})
const ol = document.querySelector('ol')
ol.addEventListener('click', function(event) {
  if (event.target.closest('li')) {
    console.log("Ура!")
  }
})
const menuBody = document.querySelector('.menu')

document.addEventListener('click', menu)

function menu(event) {
  if (event.target.closest('.menu_button')) {
    menuBody.classList.toggle('_active')
  }
  if (!event.target.closest('.menu')) {
    menuBody.classList.remove('_active')
  }
}

const link = document.querySelector('.link')
link.onclick = function() {
  return false
}
link.addEventListener('click', function(event) {
  event.preventDefault()
})
const linkZero = document.querySelector('.subcolumn a')
linkZero.addEventListener('click', function(event) {
  event.preventDefault()
}, {"passive": true})
const elemEight = document.querySelector('#picture')
elemEight.addEventListener('mousedown', function(event) {
  console.log(`Нажата кнопка ${event.which}`)
})
elemEight.addEventListener('contextmenu', function() {
  console.log("Вызвано контекстное меню")
})
const elemNine = document.querySelector('.mousemove')
elemNine.addEventListener('mousemove', function(event) {
  elemNine.innerHTML = `${event.clientX} <br>
  ${event.clientY}`
})
bodyElement.addEventListener('mousemove', function(event) {
  elemNine.innerHTML = ''
  if (event.target.closest('.mousemove')) {
    elemNine.innerHTML = `${event.clientX} <br> ${event.clientY}`
  }
})
elemOne.addEventListener('mouseover',  function(event) {
  elemFive.innerHTML = 'Курсор над элементом'
  elemFive.style.padding = "25% 5%"
  elemOne.style.width = "80px"
  elemOne.style.heigh = "80px"
  event.target
  event.relatedTarget

})
elemOne.addEventListener('mouseout',  function(event) {
  elemFive.innerHTML = 'Курсор ушел с элемента'
  elemFive.style.padding = "20% 10%"
  event.target
  event.relatedTarget
})
elemSeven.addEventListener('mouseleave', function(event) {
  elemFive.innerHTML = 'содержимое'
  elemFive.style.padding = "40% 0"
  elemOne.style.width = "75px"
  elemOne.style.heigh = "75px"
})

elemSeven.addEventListener('mouseover', function(event) {
  let target = event.target.closest('li')
  if (!target) return
  target.style.cssText = `
    background-color: #77608d;
    color: white;
`})
elemSeven.addEventListener('mouseout', function(event) {
  let target = event.target.closest('li')
  if (!target) return
  target.style.cssText = ``
})


menuBody.addEventListener("mousedown", function (event) {

  let coordsItemX = event.clientX - menuBody.getBoundingClientRect().left;
  let coordsItemY = event.clientY - menuBody.getBoundingClientRect().top;
  
  let menuBodySizes = {
  width: menuBody.offsetWidth,
  height: menuBody.offsetHeight
  }
  let bodyElementSizes = {
  left: bodyElement.getBoundingClientRect().left + scrollX,
  top: bodyElement.getBoundingClientRect().top + scrollY,
  right: bodyElement.getBoundingClientRect().left + scrollX + bodyElement.offsetWidth,
  bottom: bodyElement.getBoundingClientRect().top + scrollY + bodyElement.offsetHeight
  }
  
  menuBody.style.position = 'absolute';
  menuBody.style.zIndex = 1000;
  document.body.append(menuBody);
  
  moveItem(event.pageX, event.pageY);
  
  function moveItem(pageX, pageY) {
  let currentX = pageX - coordsItemX;
  let currentY = pageY - coordsItemY;
  
  if (
  currentX + menuBodySizes.width <= bodyElementSizes.right &&
  currentX >= bodyElementSizes.left
  ) {
  menuBody.style.left = `${currentX}px`;
  } else {
  if (currentX + menuBodySizes.width > bodyElementSizes.right) {
  menuBody.style.left = `${bodyElementSizes.right - menuBodySizes.width}px`;
  }
  if (currentX < bodyElementSizes.left) {
  menuBody.style.left = `${bodyElementSizes.left}px`;
  }
  }
  if (
  currentY + menuBodySizes.height <= bodyElementSizes.bottom &&
  currentY >= bodyElementSizes.top
  ) {
  menuBody.style.top = `${currentY}px`;
  } else {
  if (currentY + menuBodySizes.height > bodyElementSizes.bottom) {
  menuBody.style.top = `${bodyElementSizes.bottom - menuBodySizes.height}px`;
  }
  if (currentY < bodyElementSizes.top) {
  menuBody.style.top = `${bodyElementSizes.top}px`;
  }
  }
  }
  
  function onDragItem(event) {
  moveItem(event.pageX, event.pageY);
  
  }
  document.addEventListener('mousemove', onDragItem,);
  
  document.addEventListener("mouseup", function (event) {
    document.removeEventListener('mousemove', onDragItem);
  }, { "once": true });
  });
  menuBody.addEventListener("dragstart", function (event) {
  event.preventDefault();
  });
  