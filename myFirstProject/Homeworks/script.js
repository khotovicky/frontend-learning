//NUMBER 1
// var websites = []
// let a = 0
// while (a < 1000) {
//     websites[a] = "codewars"
//     a++
// }
// console.log(websites)

//NUMBER 2
// function shorter_reverse_longer(a,b){
//     let result = ""
//     if (a.length >= b.length) {
//         result = b + reverseString(a) + b
//     } else {
//         result = a + reverseString(b) + a
//     }
//     return result
// }
// function reverseString(str) {
//     const stringSplit = str.split("")
//     const reverseArray = stringSplit.reverse()
//     const joinArray = reverseArray.join('')
//     return joinArray
// }

//NUMBER 3
// function recycle(array) {
//     let paperBin = []
//     let glassBin = []
//     let organicBin = []
//     let plasticBin = []
//     let resultArray = [paperBin, glassBin, organicBin, plasticBin]
  
//     for (let i in array) {
//       if (array[i].material === 'paper' || array[i].secondMaterial === 'paper') paperBin.push(array[i].type)
//       if (array[i].material === 'glass' || array[i].secondMaterial === 'glass') glassBin.push(array[i].type)
//       if (array[i].material === 'organic' || array[i].secondMaterial === 'organic') organicBin.push(array[i].type)
//       if (array[i].material === 'plastic' || array[i].secondMaterial === 'plastic') plasticBin.push(array[i].type)

//     }
//     return resultArray
//   }

//   let array = [
//     {"type": "glass", "material": "organic"},
//     {"type": "rotten apples", "material": "organic"},
//     {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//     {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//     {"type": "amazon box", "material": "paper"},
//     {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
//   ]

//  console.log(recycle(array))

//NUMBER 4
s = 'CodeWars'
a = s.split('')
console.log(a)
let aEven = ''
let aOdd = ''
a.forEach((item, index) => {
  if (index % 2 === 0) {
  aEven += item
} else {aOdd += item}})
result = aEven + ' ' + aOdd
console.log(result)
